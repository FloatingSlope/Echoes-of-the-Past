// ======================================================
// ECHOES OF THE PAST - MAIN NARRATIVE SCRIPT
// ======================================================
// This file contains the main story and narrative branches
// for the Echoes of the Past interactive fiction experience.
// The player assumes the role of the Veiled Wanderer, exploring
// a decaying city and uncovering fragments of memory.
// ======================================================
// EXPANSION POTENTIAL: 
// - Add new areas to explore beyond current scope
// - Implement multiple endings based on echo collection
// - Create deeper interactions with the Watcher character
// - Add ambient sound integration via JavaScript
// ======================================================

// Include supporting script files
INCLUDE lore_entries.ink    // Contains all collectible echo fragments
INCLUDE echo_journal.ink    // Handles echo tracking and journal system
INCLUDE memory_core.ink     // Contains the Memory Core endings system

// ======================================================
// GLOBAL STATE VARIABLES
// ======================================================
// Note: Some of these are now redundant with echo_journal.ink
// but are kept for backward compatibility
VAR remembered_echoes = 0   // Total count of echoes remembered
VAR found_key_echo = false  // Whether the key echo (mask) has been found
VAR visited_shrine = false  // Tracks if player has visited the shrine
VAR visited_cavern = false  // Tracks if player has visited the caverns
VAR visited_gate = false    // Tracks if player has approached the gate

// ======================================================
// INTRODUCTION SEQUENCE
// ======================================================
=== intro ===
// The player's first moments in the ruined city
You open your eyes, though you're not sure if they were ever closed.  
The ground beneath you is cracked stone. Cold. Damp.  
Above, a bloated moon clings to a colorless sky. Somewhere in the distance, something breathes—not with lungs, but with **time**.

You exhale. Or at least, you think you do.

+ (Look_around)
    // Initial environmental description that establishes tone
    The city is crumbling, but there is a strange stillness.  
    Blackened structures claw toward the sky, half-swallowed by fog.  
    The only light comes from your chest — a soft, pulsing glow.  
    It flickers, in rhythm with something beneath the world.  
    You remember... nothing.
    
    -> DONE

+ (Walk_forward)
    // Advance to first meaningful choice
    The stones shift beneath your feet.  
    Each step echoes longer than it should.  
    In the distance, you hear a hum — not mechanical, but alive.  
    Something waits to be seen.

-> first_choice

// ======================================================
// FIRST AREA: FORGOTTEN SHRINE
// ======================================================
=== first_choice ===
// First encounter with an echo - player can choose to engage or ignore
You pass the remnants of what may have been a shrine.  
Shattered beams. Crushed stone.  
Something catches your eye — a glimmer beneath the rubble.  
It pulses like your own chest does. But slower. Older.

+ (Investigate_the_glimmer)
    // Player chooses to engage with the echo
    ~ visited_shrine = true
    You brush aside the debris and reveal a glowing shard.  
    It pulses gently in your hand.  
    It is warm. Familiar.  
    You don't remember what it is—but it remembers you.
    ~ remembered_echoes = remembered_echoes + 1
    ~ add_echo(12)    // Record in journal system

    -> LORE_ENTRY_12 -> first_choice_after_shrine

+ (Leave_it_alone)
    // Player chooses to ignore the echo - narrative consequence
    You step away.  
    Some things are better left buried.  
    The light dims behind you.

    -> keep_exploring

// EXPANSION POTENTIAL: Add another echo to find in the shrine ruins

=== first_choice_after_shrine ===
// After-effect of interacting with the echo
The glowing shard fades after a moment, but something has changed in you.
The emblem on your chest pulses slightly stronger now.

+ [Continue]
    -> keep_exploring

// ======================================================
// CENTRAL HUB: CROSSROADS
// ======================================================
=== keep_exploring ===
// This acts as a central hub that branches to different areas
The road narrows. The air tightens.

You walk toward a broken arch, half-submerged in soil and time.  
To your left, a path descends into shadow.  
To your right, something flickers behind a rusted gate.

// EXPANSION POTENTIAL: Add a third major path (perhaps to city heights/towers)

+ (Take_the_left_path)
    // Branch to the cavern sequence
    ~ visited_cavern = true
    You descend slowly, your light barely touching the walls.  
    The echo follows.

    -> cavern_intro

+ (Approach_the_gate)
    // Branch to the memory gate - may be locked based on progress
    ~ visited_gate = true
    The gate resists you at first.  
    But the moment you place your hand on it, the hum returns—louder.

    -> memory_locked_gate

+ (Check_journal)
    // Access the journal system to review progress
    // After viewing, returns player to this hub
    -> view_journal -> keep_exploring

// ======================================================
// AREA: WHISPER CAVERNS
// ======================================================
=== cavern_intro ===
// Introduction to the underground area
You find yourself in a cavern not carved by hands, but by forgetting.  
The walls breathe. Somewhere, water drips.  
It sounds almost like a voice.

As you move deeper, the glow from your chest illuminates strange markings on the walls. Symbols that seem to shift when you aren't looking directly at them.

+ (Study_the_markings)
    // Encounter with wall markings echo
    You lean closer. The symbols aren't carved—they're *growing*.
    Like veins of light pulsing beneath stone.
    
    As you watch, they form a pattern you recognize, though you can't explain how.
    
    ~ remembered_echoes = remembered_echoes + 1
    ~ add_echo(16)
    -> LORE_ENTRY_16 -> cavern_after_markings

+ (Continue_deeper)
    // Progress deeper into caverns 
    The darkness ahead feels almost solid. Your light struggles against it.
    Each step becomes heavier, as if the cavern itself resists your presence.
    
    -> underwater_chamber

+ (Return_to_the_surface)
    // Allow player to return to hub
    Something about this place makes you uneasy. The weight of time presses down too heavily here.
    You turn back, climbing toward the sliver of moonlight above.
    
    -> keep_exploring

=== cavern_after_markings ===
// After-effect of interacting with the cavern markings
The symbols fade as quickly as they formed, but their pattern lingers in your mind.
Your understanding of the echoes deepens.

+ [Continue]
    -> cavern_intro

// ======================================================
// AREA: UNDERWATER CHAMBER 
// ======================================================
=== underwater_chamber ===
// A deeper section of the caverns with a memory lake
The path opens into a vast chamber. The ceiling vanishes into darkness above, but below...

Below is an impossible lake. Water that reflects nothing—not even your light.
At its center, a column of stone rises, bearing a single glowing object.

// EXPANSION POTENTIAL: Add creatures/entities within the memory lake
// that appear based on remembered echoes

+ (Wade_into_the_water) 
    // Player chooses to enter the memory lake
    The moment your foot touches the surface, you know it isn't water.
    
    It's *memory*.
    
    Cold and viscous, it parts reluctantly around your legs. As you wade deeper, whispers rise from the surface—fragments of conversations, laughter, screams.
    
    Each step is slower than the last. The whispers grow more insistent.
    
    -> underwater_column

+ (Circle_around_the_edge)
    // Alternative path around the lake's edge
    You follow the perimeter of the chamber, keeping the not-water to your left.
    
    In the walls, you find small alcoves. Most are empty, but one contains a strange device—a brass cylinder with gears that turn on their own.
    
    ~ remembered_echoes = remembered_echoes + 1
    ~ add_echo(3)
    -> LORE_ENTRY_03 -> underwater_chamber_after_device

+ (Leave_this_place)
    // Return to previous area
    The chamber feels wrong. Like a wound in time.
    
    You back away, returning the way you came.
    
    -> cavern_intro

+ (Check_journal)
    // Access journal from this location
    -> view_journal -> underwater_chamber

=== underwater_chamber_after_device ===
// After-effect of examining the brass device
You place the strange device back in its alcove. The gears continue to turn, marking a time that no longer exists.

+ [Continue exploring the chamber]
    -> underwater_chamber

// ======================================================
// KEY ITEM: THE MASK
// ======================================================
=== underwater_column ===
// Central feature of the underwater chamber - contains key item
You reach the column at the center of the not-water. The whispers have become a chorus, neither hostile nor welcoming.

Atop the column sits a mask. Featureless but for two eyeholes. It seems to watch you.

+ (Take_the_mask) 
    // Acquire the key item needed for the memory gate
    Your hand trembles as you reach for it.
    
    The moment your fingers touch its surface, silence falls. The whispers vanish.
    
    The mask feels impossibly light. As if it might float away if you released it.
    
    ~ found_key_echo = true
    ~ remembered_echoes = remembered_echoes + 1
    ~ add_echo(41)
    -> LORE_ENTRY_41 -> underwater_column_after_mask

+ (Leave_it_be)
    // Choose not to take the key item
    Some things aren't meant to be disturbed. This mask has waited here for longer than you can comprehend.
    
    You turn away, wading back through the memory-water.
    
    -> underwater_chamber

+ (Check_journal)
    // Access journal from this location
    -> view_journal -> underwater_column

=== underwater_column_after_mask ===
// After-effect of taking the mask
The mask dissolves as soon as you read the lore entry, becoming part of you in some inexplicable way.
You feel a connection form to something distant in the city.

+ [Wade back to shore]
    You turn and move through the not-water, each step easier than the last.
    The whispers remain silent.
    
    -> underwater_chamber

// ======================================================
// GATED AREA: MEMORY GATE 
// ======================================================
=== memory_locked_gate ===
// A barrier that requires the mask to open
This gate remembers.  
There is no key, only **recognition**.

A glyph glows on its frame—the same one on your chest.  
The echo deepens.

{found_key_echo:
    // Branch when player has found the mask
    The mask you found in the underwater chamber pulses in response to the gate. Your chest glows brighter in kind.
    
    Slowly, the gate begins to dissolve—not opening, but *unremembering* itself.
    
    A path appears where solid metal once stood.
    ~ visited_garden = true
    
    -> forgotten_garden
}

{not found_key_echo:
    // Branch when player hasn't found the mask
    You press your hand against the glyph, but nothing happens.
    
    Something is missing. A key of sorts, though not one made of metal.
    
    The gate remains closed, waiting for the right memory.
    
    + (Return_to_exploring)
        You step back from the gate, its hum fading as you move away.
        
        -> keep_exploring
    
    + (Check_journal)
        // Access journal from this location
        -> view_journal -> memory_locked_gate
}

// ======================================================
// AREA: FORGOTTEN GARDEN
// ======================================================
=== forgotten_garden ===
// A garden area where reality is unstable
Beyond the gate lies what might once have been a garden.

Stone paths wind between ghost-images of trees and flowers. They flicker in and out of existence—here for a breath, gone for two, back for half.

The air is different here. Warmer. Almost alive.

+ (Follow_the_main_path)
    // Take the main path to the pavilion
    The stone path leads toward a central pavilion.
    
    As you walk, flowers materialize at your feet, blooming and withering in seconds.
    ~ visited_pavilion = true
    
    -> garden_pavilion

+ (Wander_off_the_path)
    // Veer off the path to encounter the Watcher
    You step onto the spectral grass. It crunches beneath your feet, solid one moment, insubstantial the next.
    
    Between the ghost-trees, you glimpse something moving. Not threatening, but watchful.
    ~ encountered_watcher = true
    
    -> garden_watcher

+ (Check_journal)
    // Access journal from this location
    -> view_journal -> forgotten_garden

// EXPANSION POTENTIAL: Add a hidden area in the garden accessible only
// if the player has discovered specific echo combinations

=== garden_pavilion ===
// Central structure in the garden
The pavilion is a circular structure of white stone, untouched by the decay that claims everything else.

At its center stands a pedestal with a small book. The pages flutter in a wind you cannot feel.

+ (Read_the_book)
    // Interact with the book echo
    The moment you touch the book, the pages stop moving.
    
    Words form on them—not written, but *remembered* into existence:
    
    "The Veiled One returns. The cycle continues."
    
    ~ remembered_echoes = remembered_echoes + 1
    ~ add_echo(24)
    -> LORE_ENTRY_24 -> garden_pavilion_after_book

+ (Close_the_book)
    // Choose not to read the book
    You decide against reading it. Some memories are better left undisturbed.
    
    As you step back, you notice a door in the pavilion's far side that wasn't there before.
    
    -> pavilion_door

+ (Check_journal)
    // Access journal from this location
    -> view_journal -> garden_pavilion

=== garden_pavilion_after_book ===
// After-effect of reading the book
The book closes itself as the words fade from its pages.
A door appears in the pavilion's far side that wasn't there before.

+ [Approach the door]
    -> pavilion_door

// ======================================================
// ENCOUNTER: THE WATCHER
// ======================================================
=== garden_watcher ===
// A mysterious entity in the garden
Through the trees, you see a figure. Tall and still, watching you.

Unlike the flickering garden, it remains solid. Permanent.

As you approach, it doesn't move—not even to breathe.

+ (Call_out_to_it)
    // Attempt to communicate with the Watcher
    Your voice doesn't work. Or perhaps it does, but makes no sound.
    
    The figure tilts its head slightly, as if listening to something you cannot hear.
    
    Then it points—toward the center of the garden.
    
    -> garden_pavilion

+ (Turn_away)
    // Avoid the Watcher
    You decide not to engage with the watcher.
    
    As you turn, you glimpse it from the corner of your eye—advancing when you aren't looking directly at it.
    
    You quicken your pace, heading toward the garden's center.
    
    -> garden_pavilion

+ (Check_journal)
    // Access journal from this location
    -> view_journal -> garden_watcher

// EXPANSION POTENTIAL: Develop the Watcher into a recurring character
// that appears differently based on player choices and remembered echoes

// ======================================================
// TRANSITION: SPIRAL STAIRCASE
// ======================================================
=== pavilion_door ===
// Transition area leading to the Memory Core
The door leads to a narrow staircase, spiraling downward.

The stone steps are worn in their centers, as if countless feet have traveled this path before you.

The glow from your chest grows stronger as you descend.

+ (Continue_downward)
    // Descend to the Memory Core
    The staircase seems endless, turning back on itself again and again.
    
    After what feels like hours, you reach a landing.
    ~ entered_memory_core = true
    
    -> memory_core

+ (Return_to_the_garden)
    // Return to previous area
    Something about the staircase unsettles you. The perfect spiral feels too deliberate.
    
    You climb back up to the pavilion.
    
    -> garden_pavilion

+ (Check_journal)
    // Access journal from this location
    -> view_journal -> pavilion_door

// ======================================================
// FINAL AREA: MEMORY CORE (ENTRY POINT)
// ======================================================
=== memory_core ===
// The central nexus of all memories
You emerge into a vast chamber, circular and dominated by a column of light at its center.

The column pulses with the same rhythm as the emblem on your chest. With each pulse, images flicker in the air around you—faces, buildings, landscapes.

{remembered_echoes >= 3: Fragments you've collected throughout your journey appear stronger, more defined in the flickering images.}

// Conditional text based on how many echoes were discovered
{
- remembered_echoes == 0: You have remembered nothing from your journey. The echoes fade without recognition.
- remembered_echoes == 1: You have remembered one echo from your journey. A faint connection forms within you.
- remembered_echoes >= 2 && remembered_echoes < 4: You have remembered several echoes. They begin to form a pattern in your mind.
- remembered_echoes >= 4: You have remembered many echoes. Their collective weight begins to shape something new within you.
}

+ (Explore_further)
    // Continue to expanded Memory Core content
    -> memory_core_continued

+ (Check_final_journal)
    // Final journal check before continuing
    -> view_journal -> memory_core

// ======================================================
// UTILITY FUNCTIONS
// ======================================================
=== DONE ===
// Utility function for returning to the flow
-> END
