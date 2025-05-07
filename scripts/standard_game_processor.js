/**
 * Standard Game Processor
 * 
 * This script processes the Ink story content format into a compatible format for the standard game.
 * It should be loaded after story_content.js and before the main game script.
 */

(function() {
    // Original storyContent is in the Ink format
    const originalStoryContent = window.storyContent;
    
    // Make sure we have story content to process
    if (!originalStoryContent) {
        console.error("No story content found in window.storyContent");
        return;
    }
    
    console.log("Processing story content...");
    
    // Process story content into a more usable format
    function processStoryContent() {
        const processedContent = {};
        
        // Process each story node
        for (const key in originalStoryContent) {
            if (key === 'inkVersion' || key === 'root') continue;
            
            const node = originalStoryContent[key];
            const processedNode = processNode(node, key);
            
            if (processedNode) {
                processedContent[key] = processedNode;
            }
        }
        
        // Add root/start node
        if (originalStoryContent.root) {
            processedContent['first_choice'] = processNode(originalStoryContent.root, 'root');
        }
        
        // Create a fallback entry if first_choice is missing
        if (!processedContent['first_choice']) {
            processedContent['first_choice'] = {
                text: ["You stand at the entrance to the ruins, ready to begin your exploration."],
                choices: [{
                    text: "Begin your journey",
                    id: "keep_exploring"
                }],
                location: "CITY RUINS",
                isEcho: false,
                echoId: null,
                echoName: ""
            };
        }
        
        return processedContent;
    }
    
    function processNode(node, nodeKey) {
        if (!node || !Array.isArray(node) || node.length === 0) {
            console.warn(`Invalid node for key: ${nodeKey}`);
            return null;
        }
        
        const result = {
            text: [],
            choices: [],
            location: getLocationFromTags(node),
            isEcho: hasEchoTag(node),
            echoId: getEchoId(node),
            echoName: ""
        };
        
        // Set the echo name after getting the ID
        result.echoName = getEchoName(result.echoId);
        
        // Process text content
        let textContent = extractTextContent(node);
        textContent.forEach(text => {
            if (text && text.trim() !== '') {
                // Strip the leading ^ character that Ink uses
                result.text.push(text.startsWith('^') ? text.substring(1) : text);
            }
        });
        
        // If there's no text found, add some placeholder text
        if (result.text.length === 0) {
            result.text.push("Continue your exploration...");
        }
        
        // Process choices
        const choices = extractChoices(node, nodeKey);
        if (choices && choices.length > 0) {
            result.choices = choices;
        } else {
            // If no choices found but we can determine a next node
            const nextNode = findNextNode(node);
            if (nextNode) {
                result.choices = [{
                    text: "Continue",
                    id: nextNode
                }];
            } else {
                // If no next node could be determined, default to first_choice as fallback
                result.choices = [{
                    text: "Continue",
                    id: 'first_choice'
                }];
            }
        }
        
        return result;
    }
    
    function extractTextContent(node) {
        const textContent = [];
        
        try {
            // Handle different node structures
            if (Array.isArray(node[0])) {
                // For nodes like "first_choice": [["^Text goes here", ...]]
                processNodeArray(node[0], textContent);
            } else if (typeof node[0] === 'string') {
                // For simple string nodes
                processNodeArray(node, textContent);
            }
        } catch (error) {
            console.error("Error extracting text content:", error);
        }
        
        return textContent;
    }
    
    function processNodeArray(arr, textContent) {
        if (!Array.isArray(arr)) return;
        
        arr.forEach(item => {
            if (typeof item === 'string') {
                if (item.startsWith('^')) {
                    textContent.push(item);
                }
            } else if (Array.isArray(item)) {
                processNodeArray(item, textContent);
            }
        });
    }
    
    function extractChoices(node, nodeKey) {
        const choices = [];
        
        try {
            // Handle different node structures
            if (Array.isArray(node[0])) {
                // Process nested arrays
                for (let i = 0; i < node[0].length; i++) {
                    if (node[0][i] === 'ev' && i + 2 < node[0].length && node[0][i+1] === 'str' && typeof node[0][i+2] === 'string') {
                        // Found a choice
                        const choiceText = node[0][i+2].replace(/_/g, ' ');
                        
                        // Try to find the destination
                        let destination = findChoiceDestination(node[0], i);
                        
                        if (!destination && nodeKey) {
                            // Fallback: try to find it in the g-0, g-1, etc. section
                            const gIndex = findChoiceGIndex(node[0], i);
                            if (gIndex !== null && node[1] && node[1][`g-${gIndex}`]) {
                                destination = findDestinationInG(node[1][`g-${gIndex}`]);
                            }
                        }
                        
                        choices.push({
                            text: choiceText,
                            id: destination || 'keep_exploring' // Fallback to keep_exploring if no destination found
                        });
                    }
                }
            }
        } catch (error) {
            console.error("Error extracting choices:", error);
        }
        
        return choices;
    }
    
    function findNextNode(node) {
        try {
            // Check if there's a direct destination
            for (let i = 0; i < node.length; i++) {
                if (typeof node[i] === 'object' && node[i]['->']) {
                    return node[i]['->'];
                }
            }
            
            // Check nested arrays
            if (Array.isArray(node[0])) {
                for (let i = 0; i < node[0].length; i++) {
                    if (typeof node[0][i] === 'object' && node[0][i]['->']) {
                        return node[0][i]['->'];
                    }
                }
                
                // Check c-0 section which often contains the next node
                const lastItem = node[0][node[0].length - 1];
                if (lastItem && typeof lastItem === 'object') {
                    if (lastItem['c-0'] && Array.isArray(lastItem['c-0']) && lastItem['c-0'][1] && lastItem['c-0'][1]['->']) {
                        return lastItem['c-0'][1]['->'];
                    }
                }
            }
        } catch (error) {
            console.error("Error finding next node:", error);
        }
        
        return null;
    }
    
    function findChoiceDestination(nodeArray, startIndex) {
        // Look for a destination structure after the choice
        for (let i = startIndex + 3; i < nodeArray.length; i++) {
            if (typeof nodeArray[i] === 'object' && nodeArray[i]['->']) {
                return nodeArray[i]['->'];
            }
        }
        return null;
    }
    
    function findChoiceGIndex(nodeArray, startIndex) {
        // Find the g-index (g-0, g-1, etc.) associated with this choice
        for (let i = startIndex + 3; i < nodeArray.length; i++) {
            if (typeof nodeArray[i] === 'object' && nodeArray[i]['*'] && nodeArray[i]['*'].startsWith('.^.c-')) {
                return nodeArray[i]['*'].substring(4);
            }
        }
        return null;
    }
    
    function findDestinationInG(gSection) {
        if (!gSection || !Array.isArray(gSection)) return null;
        
        // Look for a destination in the g-section
        for (let i = 0; i < gSection.length; i++) {
            if (typeof gSection[i] === 'object' && gSection[i]['->']) {
                return gSection[i]['->'];
            }
        }
        return null;
    }
    
    function getLocationFromTags(node) {
        // Extract all tags from the node
        const tags = extractTags(node);
        
        // Map Ink tags to location names
        if (tags.includes('city_ruins')) return 'CITY RUINS';
        if (tags.includes('whisper_caverns')) return 'WHISPER CAVERNS';
        if (tags.includes('memory_gate')) return 'MEMORY GATE';
        if (tags.includes('ghost_garden')) return 'GHOST GARDEN';
        if (tags.includes('spiral_staircase')) return 'SPIRAL STAIRCASE';
        if (tags.includes('memory_core')) return 'MEMORY CORE';
        if (tags.includes('underwater_chamber')) return 'WHISPER CAVERNS - UNDERWATER CHAMBER';
        
        return 'RUINS ENTRANCE';  // Default location if none is specified
    }
    
    function hasEchoTag(node) {
        const tags = extractTags(node);
        return tags.some(tag => tag.startsWith('echo-'));
    }
    
    function getEchoId(node) {
        const tags = extractTags(node);
        const echoTag = tags.find(tag => tag.startsWith('echo-') && tag !== 'echo-lore');
        
        if (echoTag) {
            return echoTag.substring(5);
        }
        
        return null;
    }
    
    function getEchoName(echoId) {
        if (!echoId) return '';
        
        const echoNames = {
            'lore': 'Ancient Knowledge',
            '12': 'Shrine Shard',
            '16': 'Arch Vision',
            '09': 'Merchant Echo',
            '24': 'Scholar\'s Whisper',
            '41': 'Child\'s Memory'
        };
        
        return echoNames[echoId] || `Echo Fragment #${echoId}`;
    }
    
    function extractTags(node) {
        const tags = [];
        
        try {
            // Process the node to find tags
            if (Array.isArray(node)) {
                node.forEach(item => {
                    if (item && typeof item === 'object') {
                        // Look for the tag property (#)
                        if (item['#']) {
                            const itemTags = item['#'].split(' ');
                            tags.push(...itemTags);
                        }
                        
                        // Look for tags in nested objects
                        Object.values(item).forEach(value => {
                            if (Array.isArray(value)) {
                                const nestedTags = extractTags(value);
                                tags.push(...nestedTags);
                            }
                        });
                    }
                });
            }
        } catch (error) {
            console.error("Error extracting tags:", error);
        }
        
        return tags;
    }
    
    // Process and replace the story content
    try {
        const processedContent = processStoryContent();
        
        // Special handling to make sure the keep_exploring node exists to prevent repeating the intro
        if (!processedContent['keep_exploring']) {
            processedContent['keep_exploring'] = {
                text: ["You continue your exploration of the ruins, searching for echoes of the past."],
                choices: [
                    {
                        text: "Examine the arch",
                        id: "arch_echo"
                    },
                    {
                        text: "Descend into the caverns",
                        id: "cavern_intro"
                    },
                    {
                        text: "Approach the gate",
                        id: "memory_locked_gate"
                    }
                ],
                location: "CITY RUINS",
                isEcho: false,
                echoId: null,
                echoName: ""
            };
        }
        
        console.log("Story content processed successfully, sample keys:", Object.keys(processedContent).slice(0, 5));
        window.storyContent = processedContent;
    } catch (error) {
        console.error("Error processing story content:", error);
        // Provide a minimal fallback story to prevent the game from breaking completely
        window.storyContent = {
            'first_choice': {
                text: ["Error loading the story. Something went wrong with the story processing."],
                choices: [{
                    text: "Restart Game",
                    id: "restart"
                }],
                location: "ERROR",
                isEcho: false,
                echoId: null,
                echoName: ""
            }
        };
    }
})(); 