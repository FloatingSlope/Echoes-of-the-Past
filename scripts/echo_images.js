/**
 * Echoes of the Past - Image Integration System
 * 
 * This file handles the dynamic display of images, backgrounds, and visual effects
 * based on the player's progress through the story and interactions with echoes.
 */

// Configuration
const config = {
    fadeSpeed: 1000,          // Default fade speed for transitions (ms)
    imagePath: './assets/',   // Path to image assets (fixed path to be relative to root)
    timerDurations: {
        standard: 20000,      // Standard decision timer (20 seconds)
        urgent: 10000,        // Urgent decision timer (10 seconds)
        critical: 5000        // Critical decision timer (5 seconds)
    }
};

// Track story state and player progress
let storyState = {
    currentLocation: '',
    discoveredEchoes: [],
    activeTimers: {},
    backgroundElement: null,
    echoJournalElement: null,
    characterElement: null,
    timerElement: null,
    initialized: false
};

/**
 * Initialize the visual interface elements
 * Should be called once when the story first loads
 */ 
function initializeInterface() {
    if (storyState.initialized) return;
    
    // Create background layer
    storyState.backgroundElement = document.createElement('div');
    storyState.backgroundElement.id = 'environment-layer';
    storyState.backgroundElement.className = 'environment-layer';
    document.body.appendChild(storyState.backgroundElement);
    
    // Create character element
    storyState.characterElement = document.createElement('div');
    storyState.characterElement.id = 'character-layer';
    storyState.characterElement.className = 'character-layer';
    document.body.appendChild(storyState.characterElement);
    
    // Create echo journal visual element
    storyState.echoJournalElement = document.createElement('div');
    storyState.echoJournalElement.id = 'echo-journal';
    storyState.echoJournalElement.className = 'echo-journal';
    document.body.appendChild(storyState.echoJournalElement);
    
    // Create timer element
    storyState.timerElement = document.createElement('div');
    storyState.timerElement.id = 'decision-timer';
    storyState.timerElement.className = 'decision-timer hidden';
    document.body.appendChild(storyState.timerElement);
    
    // Create clock element for visual timer
    storyState.clockElement = document.createElement('div');
    storyState.clockElement.id = 'clock-timer';
    storyState.clockElement.className = 'clock-timer hidden';
    document.body.appendChild(storyState.clockElement);
    
    // Add styles
    addStyles();
    
    storyState.initialized = true;
}

/**
 * Update the visual state based on tags from the current passage
 * This should be called whenever the story progresses to a new passage
 * @param {Array} tags - The tags from the current story passage
 */
function updateVisualState(tags) {
    if (!storyState.initialized) initializeInterface();
    
    // Process location tags
    if (tags.includes('cover')) {
        changeBackground('cover');
        storyState.currentLocation = 'cover';
    } else if (tags.includes('city_ruins')) {
        changeBackground('city_ruins');
        storyState.currentLocation = 'city_ruins';
    } else if (tags.includes('whisper_caverns')) {
        changeBackground('whisper_caverns');
        storyState.currentLocation = 'whisper_caverns';
    } else if (tags.includes('memory_gate')) {
        changeBackground('memory_gate');
        storyState.currentLocation = 'memory_gate';
    } else if (tags.includes('ghost_garden')) {
        changeBackground('ghost_garden');
        storyState.currentLocation = 'ghost_garden';
    } else if (tags.includes('pavilion')) {
        changeBackground('pavilion');
        storyState.currentLocation = 'pavilion';
    } else if (tags.includes('memory_core')) {
        changeBackground('memory_core');
        storyState.currentLocation = 'memory_core';
    }
    
    // Process character appearance tags
    if (tags.includes('show_wanderer')) {
        showCharacter('wanderer');
    } else if (tags.includes('show_watcher')) {
        showCharacter('watcher');
    } else if (tags.includes('hide_characters')) {
        hideCharacters();
    }
    
    // Process echo discovery tags
    if (tags.includes('echo-lore')) {
        // Extract echo ID from tags if format is echo-XX where XX is the ID
        const echoTag = tags.find(tag => tag.match(/echo-\d+/));
        if (echoTag) {
            const echoId = echoTag.split('-')[1];
            unlockEchoVisual(echoId);
        }
    }
    
    // Process timer tags
    if (tags.includes('timer-standard')) {
        startDecisionTimer('standard');
    } else if (tags.includes('timer-urgent')) {
        startDecisionTimer('urgent');
    } else if (tags.includes('timer-critical')) {
        startDecisionTimer('critical');
    }
    
    // Process ambient effect tags
    if (tags.includes('effect-echo_pulse')) {
        playAmbientEffect('echo_pulse');
    } else if (tags.includes('effect-memory_flow')) {
        playAmbientEffect('memory_flow');
    }
}

/**
 * Change the background image based on location
 * @param {string} location - The location identifier
 */
function changeBackground(location) {
    if (!storyState.backgroundElement) return;
    
    // First, remove any active classes
    storyState.backgroundElement.className = 'environment-layer';
    
    // Set new background image - use the Echoes_of_the_Past_alternative_cover.png as a stand-in for backgrounds
    if (location === 'cover') {
        storyState.backgroundElement.style.backgroundImage = `url(${config.imagePath}Echoes_of_the_Past_alternative_cover.png)`;
    } else {
        // Use the cover image as a stand-in for all backgrounds
        storyState.backgroundElement.style.backgroundImage = `url(${config.imagePath}Echoes_of_the_Past_alternative_cover.png)`;
    }
    
    // Add fade-in effect
    setTimeout(() => {
        storyState.backgroundElement.classList.add('environment-fade-in');
    }, 50);
    
    // Remove fade class after transition completes
    setTimeout(() => {
        storyState.backgroundElement.classList.remove('environment-fade-in');
    }, config.fadeSpeed + 50);
}

/**
 * Show a character on screen
 * @param {string} character - The character identifier
 */
function showCharacter(character) {
    if (!storyState.characterElement) return;
    
    // Use Character.png as the stand-in image for all characters as requested
    storyState.characterElement.style.backgroundImage = `url(${config.imagePath}Character.png)`;
    storyState.characterElement.classList.remove('hidden');
    storyState.characterElement.classList.add('character-fade-in');
    
    setTimeout(() => {
        storyState.characterElement.classList.remove('character-fade-in');
    }, config.fadeSpeed);
}

/**
 * Hide all characters
 */
function hideCharacters() {
    if (!storyState.characterElement) return;
    
    storyState.characterElement.classList.add('character-fade-out');
    
    setTimeout(() => {
        storyState.characterElement.classList.add('hidden');
        storyState.characterElement.classList.remove('character-fade-out');
    }, config.fadeSpeed);
}

/**
 * Add a visual representation of an echo to the journal
 * @param {string} echoId - The ID of the discovered echo
 */
function unlockEchoVisual(echoId) {
    if (!storyState.echoJournalElement) return;
    
    // Avoid duplicates
    if (storyState.discoveredEchoes.includes(echoId)) return;
    storyState.discoveredEchoes.push(echoId);
    
    // Create echo icon
    const echoIcon = document.createElement('div');
    echoIcon.className = 'echo-icon';
    echoIcon.setAttribute('data-echo-id', echoId);
    // Use a simple colored div as echo icon instead of requiring an image
    echoIcon.style.backgroundColor = `hsl(${(parseInt(echoId) * 35) % 360}, 70%, 50%)`;
    echoIcon.style.backgroundImage = 'none';
    
    // Add hover effect with echo title
    echoIcon.setAttribute('title', `Echo #${echoId}`);
    
    // Add to journal with animation
    storyState.echoJournalElement.appendChild(echoIcon);
    
    // Play discovery animation
    echoIcon.classList.add('echo-discovered');
    setTimeout(() => {
        echoIcon.classList.remove('echo-discovered');
    }, 2000);
}

/**
 * Start a timed decision
 * @param {string} timerType - The type of timer to start (standard, urgent, critical)
 */
function startDecisionTimer(timerType) {
    if (!storyState.timerElement || !storyState.clockElement) return;
    
    // Clear any existing timers
    Object.keys(storyState.activeTimers).forEach(timerId => {
        clearTimeout(storyState.activeTimers[timerId]);
        clearInterval(storyState.activeTimers[timerId]);
        delete storyState.activeTimers[timerId];
    });
    
    // Get duration based on timer type
    const duration = config.timerDurations[timerType] || config.timerDurations.standard;
    const seconds = Math.floor(duration / 1000);
    
    // Create timer bar elements
    storyState.timerElement.innerHTML = '';
    storyState.timerElement.classList.remove('hidden');
    
    const timerBar = document.createElement('div');
    timerBar.className = 'timer-bar';
    storyState.timerElement.appendChild(timerBar);
    
    const timerProgress = document.createElement('div');
    timerProgress.className = 'timer-progress';
    timerBar.appendChild(timerProgress);
    
    // Add urgency class based on timer type
    storyState.timerElement.classList.add(`timer-${timerType}`);
    
    // Setup clock visual element
    storyState.clockElement.innerHTML = '';
    storyState.clockElement.classList.remove('hidden');
    
    // Create clock display
    const clockDisplay = document.createElement('div');
    clockDisplay.className = 'clock-display';
    clockDisplay.textContent = `${seconds}s`;
    storyState.clockElement.appendChild(clockDisplay);
    
    storyState.clockElement.classList.add(`timer-${timerType}`);
    
    // Animate the timer
    timerProgress.style.transition = `width ${duration}ms linear`;
    timerProgress.style.width = '100%';
    
    // Force reflow before starting animation
    timerProgress.offsetHeight;
    
    // Start the countdown
    timerProgress.style.width = '0%';
    
    // Update clock countdown every second
    let remainingSeconds = seconds;
    
    storyState.activeTimers.clockInterval = setInterval(() => {
        remainingSeconds--;
        if (remainingSeconds >= 0) {
            clockDisplay.textContent = `${remainingSeconds}s`;
            
            // Add urgency animation as time gets lower
            if (remainingSeconds <= 5) {
                clockDisplay.classList.add('critical-time');
            }
        }
    }, 1000);
    
    // Set a timeout to handle expiration
    storyState.activeTimers.expiration = setTimeout(() => {
        storyState.timerElement.classList.add('hidden');
        storyState.timerElement.classList.remove(`timer-${timerType}`);
        storyState.clockElement.classList.add('hidden');
        storyState.clockElement.classList.remove(`timer-${timerType}`);
        
        // Clear the interval
        clearInterval(storyState.activeTimers.clockInterval);
        
        // Notify the story that time expired (this function would be defined in the Ink/JS integration)
        if (typeof window.timeExpired === 'function') {
            window.timeExpired();
        }
    }, duration);
}

/**
 * Cancel the active decision timer
 */
function cancelDecisionTimer() {
    if (!storyState.timerElement) return;
    
    // Clear any existing timers
    Object.keys(storyState.activeTimers).forEach(timerId => {
        clearTimeout(storyState.activeTimers[timerId]);
        clearInterval(storyState.activeTimers[timerId]);
        delete storyState.activeTimers[timerId];
    });
    
    // Hide timer element
    storyState.timerElement.classList.add('hidden');
    
    // Hide clock element
    if (storyState.clockElement) {
        storyState.clockElement.classList.add('hidden');
        storyState.clockElement.classList.remove('timer-standard', 'timer-urgent', 'timer-critical');
    }
    
    // Remove specific timer classes
    storyState.timerElement.classList.remove('timer-standard', 'timer-urgent', 'timer-critical');
}

/**
 * Play an ambient visual effect
 * @param {string} effectType - The type of effect to play
 */
function playAmbientEffect(effectType) {
    if (!storyState.backgroundElement) return;
    
    storyState.backgroundElement.classList.remove('effect-echo_pulse', 'effect-memory_flow');
    storyState.backgroundElement.classList.add(`effect-${effectType}`);
}

/**
 * Add CSS styles for all visual elements
 */
function addStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Environment Layer */
        .environment-layer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            z-index: -10;
            opacity: 0.8;
            transition: opacity ${config.fadeSpeed}ms ease;
        }
        
        .environment-fade-in {
            opacity: 1;
        }
        
        /* Character Layer */
        .character-layer {
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 300px;
            height: 400px;
            background-size: contain;
            background-position: bottom center;
            background-repeat: no-repeat;
            z-index: -5;
            opacity: 1;
            transition: opacity ${config.fadeSpeed}ms ease;
        }
        
        .character-fade-in {
            opacity: 1;
        }
        
        .character-fade-out {
            opacity: 0;
        }
        
        /* Echo Journal */
        .echo-journal {
            position: fixed;
            top: 20px;
            right: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            max-width: 200px;
            z-index: 10;
        }
        
        .echo-icon {
            width: 40px;
            height: 40px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .echo-icon:hover {
            transform: scale(1.2);
            border-color: rgba(255, 255, 255, 0.8);
        }
        
        .echo-discovered {
            animation: pulse 2s ease-in-out;
        }
        
        /* Timer Styles */
        .decision-timer {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            max-width: 500px;
            z-index: 100;
        }
        
        .timer-bar {
            height: 10px;
            background-color: rgba(50, 50, 50, 0.5);
            border-radius: 5px;
            overflow: hidden;
        }
        
        .timer-progress {
            height: 100%;
            width: 100%;
            background-color: rgba(200, 200, 200, 0.8);
        }
        
        /* Clock Timer Styles */
        .clock-timer {
            position: fixed;
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
            margin-top: 15px;
            text-align: center;
        }
        
        .clock-display {
            font-size: 24px;
            font-weight: bold;
            color: white;
            background-color: rgba(0, 0, 0, 0.6);
            padding: 5px 15px;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
        }
        
        .critical-time {
            color: #ff5252;
            animation: pulse-time 0.7s infinite alternate;
        }
        
        @keyframes pulse-time {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
        }
        
        .timer-standard .timer-progress {
            background-color: #4caf50; /* Green */
        }
        
        .timer-urgent .timer-progress {
            background-color: #ff9800; /* Orange */
        }
        
        .timer-critical .timer-progress {
            background-color: #f44336; /* Red */
        }
        
        /* Ambient Effects */
        .effect-echo_pulse {
            animation: echo-pulse 5s infinite alternate;
        }
        
        .effect-memory_flow {
            animation: memory-flow 20s infinite linear;
        }
        
        /* Utility Classes */
        .hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        /* Animations */
        @keyframes pulse {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.5); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes echo-pulse {
            0% { filter: brightness(1); }
            50% { filter: brightness(1.2); }
            100% { filter: brightness(1); }
        }
        
        @keyframes memory-flow {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
        }
    `;
    
    document.head.appendChild(styleElement);
}

// Export functions for Ink integration
window.EchoVisuals = {
    updateVisualState,
    changeBackground,
    showCharacter,
    hideCharacters,
    unlockEchoVisual,
    startDecisionTimer,
    cancelDecisionTimer,
    playAmbientEffect
};
