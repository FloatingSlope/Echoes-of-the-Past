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
    clockElement: null,
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
    storyState.characterElement.className = 'character-layer hidden';
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
    
    // Add timer bar inside timer element
    const timerBar = document.createElement('div');
    timerBar.className = 'timer-bar';
    storyState.timerElement.appendChild(timerBar);
    
    // Create clock element for visual timer
    storyState.clockElement = document.createElement('div');
    storyState.clockElement.id = 'clock-timer';
    storyState.clockElement.className = 'clock-timer hidden';
    document.body.appendChild(storyState.clockElement);
    
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
    } else if (tags.includes('memory_core')) {
        changeBackground('memory_core');
        storyState.currentLocation = 'memory_core';
    } 
    
    // Process ending tags
    for (const tag of tags) {
        if (tag.startsWith('ending:')) {
            const endingType = tag.split(':')[1];
            changeBackground(`ending_${endingType}`);
            storyState.currentLocation = `ending_${endingType}`;
        }
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
        // Extract echo ID from tags
        for (const tag of tags) {
            if (tag.startsWith('echo-')) {
                const echoId = tag.split('-')[1];
                if (!isNaN(parseInt(echoId))) {
                    unlockEchoVisual(echoId);
                }
            }
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
    
    // Create a temporary background for the transition
    const tempBg = document.createElement('div');
    tempBg.className = 'environment-layer';
    tempBg.style.opacity = '0';
    document.body.insertBefore(tempBg, storyState.backgroundElement);
    
    // Set background image based on location
    let imagePath = '';
    
    switch(location) {
        case 'cover':
            imagePath = 'Cover Art/EOTP_Cover.webp';
            break;
        case 'city_ruins':
            imagePath = 'EOTP_Prototype_Image_1.webp';
            break;
        case 'whisper_caverns':
            imagePath = 'EOTP_Prototype_Image_2.webp';
            break;
        case 'memory_gate':
            imagePath = 'EOTP_Prototype_Image_1.webp'; // Placeholder
            break;
        case 'ghost_garden':
            imagePath = 'EOTP_Prototype_Image_2.webp'; // Placeholder
            break;
        case 'memory_core':
            imagePath = 'EOTP_Prototype_Image_1.webp'; // Placeholder
            break;
        default:
            // For endings and other locations, use a generic background
            imagePath = 'Cover Art/EOTP_Cover.webp';
    }
    
    // Set the image on the temp background
    tempBg.style.backgroundImage = `url(${config.imagePath}${imagePath})`;
    
    // Fade out old background, fade in new one
    storyState.backgroundElement.style.opacity = '0';
    
    // After old background fades out, remove it and make the new one fully visible
    setTimeout(() => {
        document.body.removeChild(storyState.backgroundElement);
        storyState.backgroundElement = tempBg;
        tempBg.style.opacity = '1';
    }, config.fadeSpeed);
}

/**
 * Show a character on screen
 * @param {string} character - The character identifier
 */
function showCharacter(character) {
    if (!storyState.characterElement) return;
    
    // Set character image based on character type
    let imagePath = '';
    
    switch(character) {
        case 'wanderer':
            imagePath = 'Veiled Wanderer.png';
            break;
        case 'watcher':
            imagePath = 'Character.png';
            break;
        default:
            imagePath = 'Character.png';
    }
    
    storyState.characterElement.style.backgroundImage = `url(${config.imagePath}${imagePath})`;
    storyState.characterElement.classList.remove('hidden');
    
    // Apply fade-in animation
    storyState.characterElement.style.opacity = '0';
    setTimeout(() => {
        storyState.characterElement.style.opacity = '1';
    }, 50);
}

/**
 * Hide all characters
 */
function hideCharacters() {
    if (!storyState.characterElement) return;
    
    // Apply fade-out animation
    storyState.characterElement.style.opacity = '0';
    
    // After animation, add hidden class
    setTimeout(() => {
        storyState.characterElement.classList.add('hidden');
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
    
    // Use a colored div as echo icon with HSL color based on echo ID for uniqueness
    echoIcon.style.backgroundColor = `hsl(${(parseInt(echoId) * 35) % 360}, 70%, 50%)`;
    
    // Add hover effect with echo title
    echoIcon.setAttribute('title', `Echo Fragment #${echoId}`);
    
    // Add click handler to show echo details
    echoIcon.addEventListener('click', () => {
        // In a full implementation, this would show the echo content
        alert(`Echo Fragment #${echoId} - View the lore entry in your journal.`);
    });
    
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
    cancelDecisionTimer();
    
    // Get duration based on timer type
    const duration = config.timerDurations[timerType] || config.timerDurations.standard;
    const seconds = Math.floor(duration / 1000);
    
    // Show timer elements
    storyState.timerElement.classList.remove('hidden');
    storyState.clockElement.classList.remove('hidden');
    
    // Set initial clock value
    storyState.clockElement.textContent = `${seconds}`;
    
    // Get timer bar element
    const timerBar = storyState.timerElement.querySelector('.timer-bar');
    if (!timerBar) return;
    
    // Set initial width and transition
    timerBar.style.width = '100%';
    timerBar.style.transition = `width ${duration}ms linear`;
    
    // Begin animation after a short delay
    setTimeout(() => {
        timerBar.style.width = '0%';
    }, 50);
    
    // Set up countdown interval
    let remainingSeconds = seconds;
    storyState.activeTimers.clockInterval = setInterval(() => {
        remainingSeconds--;
        if (remainingSeconds <= 0) {
            clearInterval(storyState.activeTimers.clockInterval);
        } else {
            storyState.clockElement.textContent = `${remainingSeconds}`;
        }
        
        // Change color when time is running out
        if (remainingSeconds <= 3) {
            storyState.clockElement.style.color = '#ff5555';
        }
    }, 1000);
    
    // Set timeout for timer expiration
    storyState.activeTimers.expirationTimeout = setTimeout(() => {
        // Hide timer elements
        storyState.timerElement.classList.add('hidden');
        storyState.clockElement.classList.add('hidden');
        
        // Call time expired handler if it exists in the window object
        if (typeof window.timeExpired === 'function') {
            window.timeExpired();
        }
        
        // Clear active timers
        cancelDecisionTimer();
    }, duration);
}

/**
 * Cancel any active decision timers
 */
function cancelDecisionTimer() {
    // Clear any existing timers
    if (storyState.activeTimers.clockInterval) {
        clearInterval(storyState.activeTimers.clockInterval);
    }
    
    if (storyState.activeTimers.expirationTimeout) {
        clearTimeout(storyState.activeTimers.expirationTimeout);
    }
    
    // Reset active timers
    storyState.activeTimers = {};
    
    // Hide timer elements
    if (storyState.timerElement) {
        storyState.timerElement.classList.add('hidden');
    }
    
    if (storyState.clockElement) {
        storyState.clockElement.classList.add('hidden');
        storyState.clockElement.style.color = 'white'; // Reset color
    }
}

/**
 * Play ambient visual effects based on the current scene
 * @param {string} effectType - The type of effect to play
 */
function playAmbientEffect(effectType) {
    // In a full implementation, this would add ambient visual effects
    // like particle systems, lighting changes, etc.
    console.log(`Playing ambient effect: ${effectType}`);
}

// Export functions for use in other modules
window.updateVisualState = updateVisualState;
window.changeBackground = changeBackground;
window.showCharacter = showCharacter;
window.hideCharacters = hideCharacters;
window.unlockEchoVisual = unlockEchoVisual;
window.startDecisionTimer = startDecisionTimer;
window.cancelDecisionTimer = cancelDecisionTimer;
window.playAmbientEffect = playAmbientEffect;
