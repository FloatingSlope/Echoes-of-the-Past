Devlog Entry 01 — "The First Echo"
Date: March 21, 2025

This week marks the official start of development for Echoes of the Past, a small 2D puzzle platformer about memory, loss, and impermanence.

I finalized the core concept: players control the Veiled Wanderer, a cloaked figure who can briefly restore fragments of a ruined world by activating "echoes" of the past. 
These temporary reconstructions allow access to new paths and secrets, but never last long—forcing players to move forward even as the world slips away behind them.

I've sketched out a rough game map, added boss and mini-boss encounters, placed chests in hidden spots, and designed both main and secret routes. The map was cleaned up for in-game use and now includes a proper legend to keep it immersive but understandable. I also finalized the character design, sticking to a minimal pixel art style that aligns with the mood and is realistic for solo development.

The aesthetic is inspired by Stardew Valley's simplicity, Hyper Light Drifter's mood, and the emotional sparseness of Inside. The scope is intentionally small—something playable and polished within a short timeframe, but expressive and thoughtful in theme.

The cover art is now up, featuring the Veiled Wanderer in a ruined cityscape, and I've added the title using the Pixelated Elegance font by GGBotNet, which perfectly captures the indie, retro-futurist tone I'm aiming for. 

This week was about laying the foundation—defining the mood, world, and core mechanic. Next up: blocking out the first level in Godot, prototyping the echo interaction, and maybe animating the Wanderer's idle pose if time permits.

"The footsteps are getting louder." - ENGL 3500 HW9
Let's keep moving.

---

## Devlog Entry 02 — "Echoes Shifted"  
Date: March 29, 2025

This week, the project took an unexpected—but honest—turn. While the foundation for a 2D puzzle platformer still holds strong, I realized that the **heart of Echoes of the Past lies in its narrative and tone**, not its jump mechanics.

So I've officially pivoted the game to an **interactive fiction project built in Inky**. It's still the same Veiled Wanderer, still the same decaying city and mysterious echoes—but now the player navigates through **branching choices, lore entries, and shifting memories**, rather than jumping across collapsing platforms.

I've written a modular system for **hidden lore fragments**, each one revealing eerie, partial insights into the world. The player can choose whether to investigate these echoes or let them fade, tying directly into the game's central question: what do we choose to remember?

All prior assets remain in use. Pixel art visuals now support the story instead of driving it. UI sketches, echo meters, and map zones still matter—they now inform tone and setting rather than level layout.

This shift has made development feel less mechanical and more creative. It's not about "building levels" right now. It's about finding the *story architecture beneath the ruins*.

### Game Loop Sketch
![Echo Loop](assets/echoes_game_loop_detailed.png)

### The Game Loop: 
Explore → Sense Echoes → Choose to Remember → Reflect → Move On

A slow, atmospheric loop where presence replaces action. The player uncovers, engages, and releases, like pulling memories out of fog. Not every echo reveals something—but every echo matters.

Next steps: expanding the core script, embedding lore entries throughout, and testing early narrative pacing.

> "The game isn't what I thought it was.  
> It's quieter.  
> But somehow… louder too."

---

## Devlog Entry 03 — "Memory Systems"
Date: April 5, 2025

The project has reached approximately 35% completion this week. I've focused on expanding the narrative structure and implementing core systems that track the player's journey through the decaying city.

### New Areas Completed:
- **The Whisper Caverns**: A network of underground passages where the walls themselves seem to remember. Players can discover ancient markings and an impossible lake of memory.
- **The Memory Gate**: A barrier that only opens for those who have found the right echoes, leading to the Ghost Garden.
- **The Ghost Garden**: An unstable space where flora flickers in and out of existence. Here, the Veiled Wanderer can encounter the Silent Watcher and find the hidden pavilion.
- **The Memory Core**: The mysterious center that pulses with all collected memories, showing fragments of what was lost (currently a placeholder for future development).

### Technical Implementation:
I've built a comprehensive **Echo Journal system** that tracks:
- Which echoes the player has discovered (currently 12 possible lore fragments)
- Locations they've visited
- Key encounters they've experienced
- Special objects found (like the Faceless Mask)

This system not only provides players with a record of their journey but also enables **memory-locked progression** where certain paths only open after specific discoveries.

The narrative now responds dynamically to player choices. I've added branching paths that change based on what the player has chosen to remember or ignore. This creates a subtle but meaningful sense of agency—you're not changing the world, but you are changing how you experience it.

### Next Steps:
- Complete the Memory Core section with multiple potential endings
- Implement more complex narrative branches based on collected echoes
- Design a visual interface for the Echo Journal
- Refine atmospheric descriptions to better reflect the player's choices

I'm particularly pleased with how the mask puzzle turned out—finding it in the underwater chamber and then using it to unlock the Memory Gate creates a satisfying loop of discovery and application without relying on traditional "inventory" mechanics.

> "The echoes don't just trigger memories of the past.  
> They shape how we move through what remains."
