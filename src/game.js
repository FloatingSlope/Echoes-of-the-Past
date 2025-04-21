document.addEventListener('DOMContentLoaded', function() {
  // DOM elements
  const startScreen = document.getElementById('start-screen');
  const storyContainer = document.getElementById('story-container');
  const storyContent = document.getElementById('story-content');
  const choicesContainer = document.getElementById('choices-container');
  const beginButton = document.getElementById('begin-button');
  
  // Game state
  let story = null;
  let currentStoryContent = [];
  let echoJournal = [];
  
  // Create echo journal element
  const echoJournalElement = document.createElement('div');
  echoJournalElement.id = 'echo-journal';
  echoJournalElement.innerHTML = '<h3>Echo Journal</h3><p class="echo-count">Echoes: 0</p>';
  echoJournalElement.style.display = 'none';
  document.querySelector('.game-container').appendChild(echoJournalElement);
  
  // Start button handler
  beginButton.addEventListener('click', startGame);
  
  function startGame() {
    // Initialize the Ink story
    story = new inkjs.Story(storyContent);
    
    // Hide start screen, show story container
    startScreen.style.display = 'none';
    storyContainer.style.display = 'block';
    echoJournalElement.style.display = 'block';
    
    // Reset state
    currentStoryContent = [];
    echoJournal = [];
    storyContent.innerHTML = '';
    
    // Start the story
    continueStory();
  }
  
  function continueStory() {
    // Cancel any active timers
    if (window.decisionTimer) {
      clearTimeout(window.decisionTimer);
      window.decisionTimer = null;
    }
    
    const newContent = [];
    
    // Keep getting content until we hit a choice or the end
    while(story.canContinue) {
      // Get the next line of story content
      const text = story.Continue();
      const tags = story.currentTags || [];
      
      // Process empty text (sometimes used for tags only)
      if (text.trim() === '') {
        processTags(tags);
        continue;
      }
      
      // Create a paragraph of content
      newContent.push({
        text: processText(text),
        tags: tags
      });
      
      // Process tags
      processTags(tags);
    }
    
    // Add new content to display
    for (const content of newContent) {
      const element = document.createElement('div');
      element.className = 'story-fragment';
      element.innerHTML = content.text;
      storyContent.appendChild(element);
    }
    
    // Add to current content
    currentStoryContent = [...currentStoryContent, ...newContent];
    
    // Display choices
    displayChoices();
    
    // Scroll to bottom
    storyContainer.scrollTop = storyContainer.scrollHeight;
  }
  
  function displayChoices() {
    // Clear choices
    choicesContainer.innerHTML = '';
    
    if (story.currentChoices.length > 0) {
      // Create list for choices
      const list = document.createElement('ul');
      list.className = 'choices-list';
      
      // Create choice elements
      story.currentChoices.forEach((choice, index) => {
        const item = document.createElement('li');
        item.className = 'choice';
        item.innerHTML = `<span class="choice-number">${index + 1}</span> ${processText(choice.text)}`;
        item.addEventListener('click', () => makeChoice(index));
        list.appendChild(item);
      });
      
      choicesContainer.appendChild(list);
      
      // Handle timed choices
      const timerTag = currentStoryContent[currentStoryContent.length - 1]?.tags?.find(tag => 
        tag === 'timer-standard' || tag === 'timer-urgent' || tag === 'timer-critical'
      );
      
      if (timerTag) {
        let defaultChoice = 0;
        const defaultChoiceTag = currentStoryContent[currentStoryContent.length - 1]?.tags?.find(tag => 
          tag.startsWith('default-choice:')
        );
        
        if (defaultChoiceTag) {
          defaultChoice = parseInt(defaultChoiceTag.split(':')[1].trim(), 10);
        }
        
        // Set timer based on urgency
        let timeLimit = 10000; // Default 10 seconds
        if (timerTag === 'timer-urgent') timeLimit = 7000;
        if (timerTag === 'timer-critical') timeLimit = 5000;
        
        // Start timer for decision
        window.decisionTimer = setTimeout(() => {
          makeChoice(defaultChoice);
        }, timeLimit);
      }
      
      // Add key number handlers
      document.addEventListener('keydown', handleKeyChoice);
    } 
    else if (!story.canContinue) {
      // End of story
      const endElement = document.createElement('p');
      endElement.className = 'story-end';
      endElement.textContent = 'The End';
      
      const restartButton = document.createElement('button');
      restartButton.className = 'begin-button';
      restartButton.textContent = 'Start Again';
      restartButton.addEventListener('click', startGame);
      
      choicesContainer.appendChild(endElement);
      choicesContainer.appendChild(restartButton);
      
      // Remove key handlers
      document.removeEventListener('keydown', handleKeyChoice);
    }
  }
  
  function makeChoice(choiceIndex) {
    if (choiceIndex < 0 || choiceIndex >= story.currentChoices.length) return;
    
    // Cancel any active timers
    if (window.decisionTimer) {
      clearTimeout(window.decisionTimer);
      window.decisionTimer = null;
    }
    
    // Remove key handlers until next choices
    document.removeEventListener('keydown', handleKeyChoice);
    
    // Add the choice text to the story content as a player choice
    const choiceText = story.currentChoices[choiceIndex].text;
    const element = document.createElement('div');
    element.className = 'story-fragment player-choice';
    element.innerHTML = processText(choiceText);
    storyContent.appendChild(element);
    
    // Tell the story which choice was made
    story.ChooseChoiceIndex(choiceIndex);
    
    // Continue the story
    continueStory();
  }
  
  function handleKeyChoice(e) {
    const key = e.key;
    if (/^[1-9]$/.test(key)) {
      const choiceIndex = parseInt(key) - 1;
      if (choiceIndex < story.currentChoices.length) {
        makeChoice(choiceIndex);
      }
    }
  }
  
  function processTags(tags) {
    if (!tags || tags.length === 0) return;
    
    // Check for echo-lore tags and add to journal if found
    const echoLoreTag = tags.find(tag => tag.startsWith('echo-') && tag !== 'echo-lore');
    if (tags.includes('echo-lore') && echoLoreTag) {
      const echoId = echoLoreTag.split('-')[1].trim();
      if (!isNaN(parseInt(echoId)) && !echoJournal.includes(echoId)) {
        echoJournal.push(echoId);
        updateEchoJournal();
      }
    }
    
    // Handle visual effects (backgrounds, etc)
    // In a real implementation, this would change background images, etc.
    const visualTags = tags.filter(tag => 
      tag === 'cover' || 
      tag === 'city_ruins' || 
      tag === 'whisper_caverns' || 
      tag === 'ghost_garden' || 
      tag === 'memory_gate'
    );
    
    if (visualTags.length > 0) {
      console.log('Visual state:', visualTags);
      // Here you would update visuals based on tags
    }
  }
  
  function updateEchoJournal() {
    const echoCount = document.querySelector('#echo-journal .echo-count');
    echoCount.textContent = `Echoes: ${echoJournal.length}`;
  }
  
  function processText(text) {
    // Replace ** for bold text
    let processedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Replace * for italic text
    processedText = processedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Replace newlines with <br>
    processedText = processedText.replace(/\n/g, '<br>');
    
    return processedText;
  }
}); 