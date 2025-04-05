# Echos-of-the-Past
ENGL 3500 - Final Project

**CHANGED!**
Echoes of the Past is a 2D pixel art puzzle platformer set in the ruins of a forgotten city. You play as the Veiled Wanderer, a cloaked figure with glowing eyes and no past—only the power to briefly restore fragments of what once was. By activating fading "echoes," you reshape the environment to unlock hidden paths, overcome decayed obstacles, and uncover secrets left behind. It's a short, atmospheric game about memory, impermanence, and moving forward when nothing stays solid for long.

## 🛠 Update: Narrative Pivot

As development progressed, the project began to shift away from its Godot-based platforming roots and evolve into something more introspective: a **text-driven interactive fiction experience**, built using **Inky**.

This change reflects a 📖 alignment with the game's core themes—fragmented memory, emotional ambiguity, and slow, haunting discovery. The visuals, UI sketches, and pixel art designs remain central, now serving as **supporting atmosphere** rather than mechanical elements.

## 🎮 Current Format
- Interactive fiction written in **.ink**
- Player choices tied to memory fragments and "echo triggers"
- Echo Journal system tracking discovered lore and locations
- Variable-based story progression with memory-based locks
- Supporting pixel art assets (maps, character, UI)

## 📁 Structure
- `/assets` — Concept art, cover art, map sketches, UI elements
- `/scripts` — Ink files for story logic and narrative paths
  - `main.ink` — Main story flow and player choices
  - `lore_entries.ink` — Collectible echo fragments
  - `echo_journal.ink` — Progress tracking system
- `README.md` — Game overview and dev updates
- `devlog.md` — Development journal

## 📊 Current Progress (35% Complete)
- ✅ Core narrative framework established
- ✅ Four major explorable areas: City Ruins, Caverns, Memory Gate, and Ghost Garden
- ✅ Echo Journal system implemented with progress tracking
- ✅ 12 discoverable lore fragments
- ✅ Key narrative paths and branching decisions
- ✅ Memory-locked paths requiring specific discoveries
- ✅ Variable tracking for player choices and exploration
- ✅ Basic state management for remembered echoes

## 📖 Gameplay Loop & Sensorium

Echoes of the Past builds its atmosphere through a focused loop:

1. **Explore** – Wander through a forgotten city, uncovering ruins and fragments.
2. **Sense Echoes** – Notice distortions in time: glimmers, static, familiar sounds.
3. **Choose to Remember** – Activate fading echoes to restore what once was—briefly.
4. **Reflect** – Read fragments, absorb them, or walk away.
5. **Move On** – Echoes fade. You press forward.

This loop is slow, deliberate, and emotionally quiet. Inspired by Jagoda's idea of the *video game sensorium*, Echoes isn't about mastery—it's about presence. You don't dominate the world. You witness it.

![Game Loop Diagram](assets/EOTP%20Game%20Loop.png)

> *"You don't always build by coding. Sometimes, you build by remembering."*

## 🚀 Next Steps (Planned)
- Complete the Memory Core section
- Implement multiple endings based on echo count
- Add more complex branching narrative paths
- Create a visual Echo Journal interface
- Enhance atmospheric descriptions based on player actions

## 🖼️ Planned Visual Integration

As development progresses toward completion, we'll implement JavaScript integration to bring our pixel art assets into the Inky experience. This will add visual depth while maintaining the atmospheric, text-driven core.

### Image Integration Plans
- Dynamic background images that shift based on location
- Character silhouettes that appear during key moments
- Visual echo journal with collectible icon unlocks
- Environmental details that respond to player choices
- Subtle animations for echo activation sequences

### Upcoming JavaScript Implementation

```javascript
// Sample JS structure for image integration with Inky
// To be implemented in final development phase

// Track story state from Inky
function updateStoryState() {
  const story = window.story;
  const currentTags = story.state.currentTags;
  
  // Check for location tags to update visuals
  if(currentTags.includes("whisper_caverns")) {
    changeBackground("cave_environment");
    setAmbientEffect("echo_pulse");
  } else if(currentTags.includes("memory_core")) {
    changeBackground("core_environment");
    setAmbientEffect("memory_flow");
  }
  
  // Update echo journal visuals when new echo discovered
  if(currentTags.includes("echo-lore")) {
    const echoId = getEchoIdFromStory(story);
    unlockEchoVisual(echoId);
    playEchoDiscoveryAnimation();
  }
  
  // Show character silhouettes during encounters
  if(currentTags.includes("watcher_encounter")) {
    fadeInElement("watcher_silhouette");
  }
}

// Change the visual background based on location
function changeBackground(environmentName) {
  const backgroundElement = document.getElementById("environment-layer");
  backgroundElement.style.backgroundImage = `url(assets/environments/${environmentName}.png)`;
  
  // Add subtle transition
  backgroundElement.classList.add("environment-fade-in");
  setTimeout(() => {
    backgroundElement.classList.remove("environment-fade-in");
  }, 1000);
}

// Add visual feedback when echoes are discovered
function unlockEchoVisual(echoId) {
  const journalElement = document.getElementById("echo-journal");
  const echoIcon = document.createElement("div");
  
  echoIcon.classList.add("echo-icon");
  echoIcon.style.backgroundImage = `url(assets/icons/echo_${echoId}.png)`;
  echoIcon.setAttribute("data-echo-id", echoId);
  
  journalElement.appendChild(echoIcon);
}
```

This JavaScript integration will be implemented in the final development phase to maintain a balance between rich visuals and the atmospheric, text-driven narrative experience that defines Echoes of the Past.
