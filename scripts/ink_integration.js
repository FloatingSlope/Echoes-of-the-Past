/**
 * Echoes of the Past - Ink Integration System
 * 
 * This file connects the Ink story engine with visual elements and timed decisions.
 * It serves as the bridge between the narrative (Ink) and the presentation layer.
 */

// Main integration object
const EchoesGame = {
    story: null,         // Will hold the Ink story instance
    container: null,     // DOM element that contains the story
    choicesElement: null, // DOM element that contains the choices
    currentTags: [],     // Current passage tags
    timedChoiceActive: false, // Whether a timed choice is currently active
    defaultChoiceIndex: 0, // Default choice index for when time expires
    echoJournal: [],     // Collected echoes
    
    /**
     * Initialize the game
     * @param {Object} inkStory - The Ink story instance
     * @param {String} contentElement - ID of the element to render the story in
     * @param {String} choicesElement - ID of the element to render choices in
     */
    init: function(inkStory, contentElement, choicesElement) {
        this.story = inkStory;
        this.container = document.getElementById(contentElement);
        this.choicesElement = document.getElementById(choicesElement);
        
        // Set up event listeners
        this.setupListeners();
        
        // Start the game
        this.continueStory();
        
        // Make timeExpired function available globally for the timer system
        window.timeExpired = this.handleTimeExpired.bind(this);
    },
    
    /**
     * Set up event listeners
     */
    setupListeners: function() {
        // Listen for choice selections
        document.addEventListener('click', (event) => {
            const choiceElement = event.target.closest('.choice');
            if (!choiceElement) return;
            
            const choiceIndex = parseInt(choiceElement.dataset.index, 10);
            this.makeChoice(choiceIndex);
        });
        
        // Listen for key presses
        document.addEventListener('keydown', (event) => {
            // Number keys 1-9 for choices
            if (event.key >= '1' && event.key <= '9') {
                const choiceIndex = parseInt(event.key, 10) - 1;
                if (choiceIndex < this.story.currentChoices.length) {
                    this.makeChoice(choiceIndex);
                }
            }
            
            // Space or Enter to continue if there's only one choice
            if ((event.key === ' ' || event.key === 'Enter') && this.story.currentChoices.length === 1) {
                this.makeChoice(0);
            }
        });
    },
    
    /**
     * Continue the story flow
     */
    continueStory: function() {
        // Cancel any active timers when continuing to a new passage
        if (window.cancelDecisionTimer) {
            window.cancelDecisionTimer();
        }
        this.timedChoiceActive = false;
        
        // Create story fragment container
        const storyFragment = document.createElement('div');
        storyFragment.className = 'story-fragment';
        
        // Keep getting content until we hit a choice or the end
        while(this.story.canContinue) {
            // Get the next line of story content
            const text = this.story.Continue();
            this.currentTags = this.story.currentTags;
            
            // Process empty text (sometimes used for tags only)
            if (text.trim() === '') {
                this.processTags(this.currentTags);
                continue;
            }
            
            // Create a paragraph element
            const paragraphElement = document.createElement('p');
            paragraphElement.innerHTML = this.processText(text);
            storyFragment.appendChild(paragraphElement);
            
            // Process tags
            this.processTags(this.currentTags);
        }
        
        // Append the story fragment to the container
        this.container.appendChild(storyFragment);
        
        // Scroll to the bottom
        this.container.scrollTop = this.container.scrollHeight;
        
        // Display choices or end the story
        this.displayChoices();
    },
    
    /**
     * Process text for markdown-like formatting
     * @param {String} text - The raw text from the story
     * @returns {String} - Formatted HTML
     */
    processText: function(text) {
        // Replace ** for bold text
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Replace * for italic text
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Replace newlines with <br>
        text = text.replace(/\n/g, '<br>');
        
        return text;
    },
    
    /**
     * Process tags from the current passage
     * @param {Array} tags - The tags from the current passage
     */
    processTags: function(tags) {
        if (!tags || tags.length === 0) return;
        
        // Update visuals based on tags
        if (window.updateVisualState) {
            window.updateVisualState(tags);
        }
        
        // Check for ending tag (for special ending handling)
        const endingTag = tags.find(tag => tag.startsWith('ending:'));
        if (endingTag) {
            const endingType = endingTag.split(':')[1].trim();
            this.handleEnding(endingType);
        }
        
        // Check for echo-lore tags and add to journal if found
        const echoLoreTag = tags.find(tag => tag.startsWith('echo-') && tag !== 'echo-lore');
        if (tags.includes('echo-lore') && echoLoreTag) {
            const echoId = echoLoreTag.split('-')[1].trim();
            if (!isNaN(parseInt(echoId)) && !this.echoJournal.includes(echoId)) {
                this.echoJournal.push(echoId);
                console.log(`Added echo ${echoId} to journal. Total echoes: ${this.echoJournal.length}`);
            }
        }
        
        // Check for timer tags
        if (tags.includes('timer-standard') || 
            tags.includes('timer-urgent') || 
            tags.includes('timer-critical')) {
            
            this.timedChoiceActive = true;
            
            // Find the default choice index (format: default-choice:X)
            const defaultChoiceTag = tags.find(tag => tag.startsWith('default-choice:'));
            if (defaultChoiceTag) {
                this.defaultChoiceIndex = parseInt(defaultChoiceTag.split(':')[1].trim(), 10);
            } else {
                this.defaultChoiceIndex = 0; // Default to first choice
            }
        }
    },
    
    /**
     * Display the available choices
     */
    displayChoices: function() {
        // Clear existing choices
        this.choicesElement.innerHTML = '';
        
        // Check if we have any choices
        if (this.story.currentChoices.length > 0) {
            const choicesList = document.createElement('ul');
            choicesList.className = 'choices-list';
            
            // Create choice elements
            this.story.currentChoices.forEach((choice, index) => {
                const choiceElement = document.createElement('li');
                choiceElement.className = 'choice';
                choiceElement.dataset.index = index;
                choiceElement.innerHTML = `<span class="choice-number">${index + 1}</span> ${this.processText(choice.text)}`;
                choicesList.appendChild(choiceElement);
            });
            
            this.choicesElement.appendChild(choicesList);
        }
        // End of story
        else if (!this.story.canContinue) {
            const endElement = document.createElement('p');
            endElement.className = 'story-end';
            endElement.textContent = 'The End';
            this.choicesElement.appendChild(endElement);
            
            // Add restart button
            const restartButton = document.createElement('button');
            restartButton.className = 'begin-button';
            restartButton.textContent = 'Start Again';
            restartButton.addEventListener('click', () => {
                window.location.reload();
            });
            this.choicesElement.appendChild(restartButton);
        }
    },
    
    /**
     * Make a choice and continue the story
     * @param {Number} choiceIndex - The index of the choice to make
     */
    makeChoice: function(choiceIndex) {
        if (choiceIndex < 0 || choiceIndex >= this.story.currentChoices.length) return;
        
        // Create a record of the choice in the story
        const choiceText = this.story.currentChoices[choiceIndex].text;
        const choiceElement = document.createElement('div');
        choiceElement.className = 'player-choice';
        choiceElement.innerHTML = this.processText(choiceText);
        this.container.appendChild(choiceElement);
        
        // Tell the story which choice was made
        this.story.ChooseChoiceIndex(choiceIndex);
        
        // Cancel any active timers
        if (window.cancelDecisionTimer) {
            window.cancelDecisionTimer();
        }
        
        // Continue the story
        this.continueStory();
    },
    
    /**
     * Handle a timed choice expiration
     */
    handleTimeExpired: function() {
        if (!this.timedChoiceActive) return;
        
        console.log('Time expired, making default choice:', this.defaultChoiceIndex);
        
        // Make the default choice
        this.makeChoice(this.defaultChoiceIndex);
        
        // Reset timed choice state
        this.timedChoiceActive = false;
    },
    
    /**
     * Handle special ending processing
     * @param {String} endingType - The type of ending reached
     */
    handleEnding: function(endingType) {
        console.log('Reached ending:', endingType);
        
        // Create ending element
        const endingElement = document.createElement('div');
        endingElement.className = 'ending-banner';
        
        let endingTitle = '';
        let endingDescription = '';
        
        // Set ending content based on type
        switch(endingType) {
            case 'restoration':
                endingTitle = 'Restoration Ending';
                endingDescription = 'You chose to restore the city as it was, though the restoration remains unstable.';
                break;
            case 'curator':
                endingTitle = 'Curator Ending';
                endingDescription = 'You preserved only select memories, becoming a keeper of a curated history.';
                break;
            case 'transcendence':
                endingTitle = 'Transcendence Ending';
                endingDescription = 'You rejected restoration and moved beyond being bound by memory.';
                break;
            case 'watcher':
                endingTitle = 'Watcher Ending';
                endingDescription = 'You took the place of the Silent Watcher, becoming a guardian of memory.';
                break;
            case 'release':
                endingTitle = 'Release Ending';
                endingDescription = 'You freed all collected echoes, allowing them to dissipate naturally.';
                break;
            case 'rebirth':
                endingTitle = 'Rebirth Ending';
                endingDescription = 'You transformed the echoes into something entirely new.';
                break;
            case 'fading':
                endingTitle = 'Fading Ending';
                endingDescription = 'With too few echoes collected, you lost your sense of self and became just another echo.';
                break;
            case 'demo':
                endingTitle = 'Demo Complete';
                endingDescription = 'You\'ve reached the end of the demo. The full game will continue the journey.';
                break;
            default:
                endingTitle = 'The End';
                endingDescription = 'Your journey has concluded.';
        }
        
        endingElement.innerHTML = `
            <h2>${endingTitle}</h2>
            <p>${endingDescription}</p>
            <p class="echo-count">Echoes collected: ${this.echoJournal.length}</p>
        `;
        
        // Add to the container after a delay
        setTimeout(() => {
            this.container.appendChild(endingElement);
            this.container.scrollTop = this.container.scrollHeight;
        }, 1000);
    }
};

/**
 * Start the game with the Ink story
 * @param {String} storyContainerId - ID of the element to render the story in
 * @param {String} choicesContainerId - ID of the element to render choices in
 */
function startEchoesGame(storyContainerId, choicesContainerId) {
    // Check if inkjs is available
    if (typeof inkjs === 'undefined') {
        console.error('inkjs library not found! Please check your script imports.');
        // Try to show an error message in the story container
        const storyContainer = document.getElementById(storyContainerId);
        if (storyContainer) {
            storyContainer.innerHTML = '<p class="error">Error loading the story engine. Check the console for details.</p>';
        }
        return;
    }
    
    // Check if story content is available
    if (!window.storyContent) {
        console.error('Story content not found! Make sure story_content.js is loaded correctly.');
        // Try to show an error message in the story container
        const storyContainer = document.getElementById(storyContainerId);
        if (storyContainer) {
            storyContainer.innerHTML = '<p class="error">Error loading the story content. Check the console for details.</p>';
        }
        return;
    }
    
    try {
        // Create a new ink story
        const inkStory = new inkjs.Story(window.storyContent);
        
        // Initialize the game
        EchoesGame.init(inkStory, storyContainerId, choicesContainerId);
    } catch (error) {
        console.error('Error starting the game:', error);
        // Try to show an error message in the story container
        const storyContainer = document.getElementById(storyContainerId);
        if (storyContainer) {
            storyContainer.innerHTML = '<p class="error">Error starting the game. Check the console for details.</p>';
        }
    }
}

// Make the start function available globally
window.startEchoesGame = startEchoesGame;

/**
 * Add basic CSS styles for story presentation
 */
function addStoryStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Story Container */
        #story-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.7);
            color: #f0f0f0;
            font-family: 'Georgia', serif;
            line-height: 1.6;
            border-radius: 5px;
            overflow-y: auto;
            max-height: 70vh;
        }
        
        /* Story Fragment */
        .story-fragment {
            margin-bottom: 20px;
        }
        
        /* Paragraphs */
        .story-fragment p {
            margin-bottom: 16px;
        }
        
        /* Player Choices */
        .player-choice {
            background-color: rgba(80, 80, 100, 0.6);
            border-left: 4px solid #4caf50;
            padding: 10px 15px;
            margin: 20px 0;
            font-style: italic;
        }
        
        /* Choices Container */
        #choices-container {
            max-width: 800px;
            margin: 20px auto;
        }
        
        /* Choice List */
        .choices-list {
            list-style: none;
            padding: 0;
        }
        
        /* Individual Choice */
        .choice {
            background-color: rgba(50, 50, 70, 0.8);
            margin: 10px 0;
            padding: 12px 15px;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .choice:hover {
            background-color: rgba(70, 70, 100, 0.9);
            transform: translateY(-2px);
        }
        
        /* Choice Number */
        .choice-number {
            display: inline-block;
            width: 25px;
            height: 25px;
            text-align: center;
            line-height: 25px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            margin-right: 10px;
        }
        
        /* Story End */
        .story-end {
            text-align: center;
            font-size: 24px;
            margin: 40px 0;
            font-weight: bold;
            color: #ccc;
        }
        
        /* Ending-specific styles */
        .ending #story-container {
            background-color: rgba(0, 0, 0, 0.85);
            transition: background-color 3s ease;
        }
        
        .ending-restoration #story-container {
            border: 2px solid #4caf50;
        }
        
        .ending-curator #story-container {
            border: 2px solid #9c27b0;
        }
        
        .ending-transcendence #story-container {
            border: 2px solid #2196f3;
        }
        
        .ending-watcher #story-container {
            border: 2px solid #ff9800;
        }
        
        .ending-release #story-container {
            border: 2px solid #f44336;
        }
        
        .ending-rebirth #story-container {
            border: 2px solid #e91e63;
        }
        
        .ending-fading #story-container {
            border: 2px solid #607d8b;
        }
    `;
    
    document.head.appendChild(styleElement);
}

// Start the game when the document is loaded and Begin button is clicked
document.addEventListener('DOMContentLoaded', () => {
    // Add the story styles
    addStoryStyles();
    
    // We don't need to add another event listener here since it's handled in index.html
    // The event handlers in index.html will call startEchoesGame with the proper parameters
});
