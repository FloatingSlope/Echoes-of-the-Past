// ======================================================
// ECHOES OF THE PAST - MEMORY CORE
// ======================================================
// This file contains the Memory Core section of the game, 
// including multiple endings based on echo collection and player choices.
// ======================================================

// ======================================================
// MEMORY CORE MAIN SECTION
// ======================================================
=== memory_core_continued ===
// The central nexus of all memories - expanded from main.ink
The column's light intensifies as you approach. It recognizes you—or perhaps what you carry.

You feel a pull. Not physical, but temporal. The echoes you've collected throughout your journey resonate with the column, drawn to it like moths to flame.

+ (Approach_column)
    // Player chooses to engage with the memory core
    You step forward, the light washing over you.
    
    The emblem on your chest burns brighter than ever, almost painful. It's calling to something in the column—or perhaps the column is calling to it.
    
    -> core_recognition

+ (Circle_the_perimeter)
    // Player chooses to observe before committing
    You walk the edge of the chamber, studying the column from different angles.
    
    The walls are etched with circuitry that pulses in rhythm with the light. Equations and symbols flow across the surface, mathematical poetry describing the architecture of memory itself.
    
    On the far side, you find a small terminal with a single interface: a mask-shaped depression.
    
    {found_key_echo:
        // Branch if player found the mask
        The mask you found in the underwater chamber seems to be the right shape.
        
        -> mask_terminal
    }
    
    {not found_key_echo:
        // Branch if player never found the mask
        You have nothing that would fit this shape. Perhaps there was something you missed in your journey.
        
        -> return_to_center
    }

+ (Check_journal)
    // Access journal from this location
    -> view_journal -> memory_core_continued

// ======================================================
// MASK TERMINAL ENCOUNTER
// ======================================================
=== mask_terminal ===
// Terminal that accepts the mask key item
You hold the mask over the depression. It hovers for a moment, suspended by an unseen force, then settles into place.

The walls flicker. Suddenly, ghostly scenes play across them—moments from the city's past. People walking streets that are now ruins. Buildings standing tall where there are now only fragments.

A voice echoes through the chamber: "Configuration accepted. Access granted to Pattern Archive. Please specify memory reconstruction parameters."

+ (Full_restoration)
    // Choose to restore all memories - leads to Restoration Ending
    You don't speak, but you think: *everything*.
    
    The voice responds: "Caution: Full restoration exceeds safety parameters. Pattern coherence unstable. Proceed?"
    
    ++ (Confirm_restoration)
        You mentally confirm.
        
        The mask blazes with light, nearly blinding. The terminal begins to pulse erratically.
        
        "Initiating full pattern restoration. Warning: Temporal displacement imminent. Prepare for—"
        
        The voice cuts off. The world around you begins to shift. Walls rebuilding themselves. The dead air filling with sound and color.
        
        -> restoration_ending
    
    ++ (Reconsider)
        Something about this feels wrong. Too dangerous. Too much power for one person to wield.
        
        You step back from the terminal.
        
        -> return_to_center

+ (Selective_restoration)
    // Choose to restore only what matters - leads to Curator Ending
    You think about the echoes you've collected. Not everything deserves to be brought back. Some things are meant to fade.
    
    You focus on the echoes that moved you, the memories that felt important.
    
    The voice responds: "Selective pattern restoration initiated. Creating memory constellation from provided fragments."
    
    The chamber hums. Light flows from the column into the walls, following the circuitry patterns. The mask glows softly.
    
    -> curator_ending

+ (Reject_restoration)
    // Choose to let the past remain past - leads to Transcendence Ending
    No. The past should remain past. These echoes were never meant to be permanent.
    
    You reach for the mask and lift it from the terminal.
    
    The voice speaks one last time: "Alternative paradigm detected. Initiating transcendence protocol."
    
    -> transcendence_ending

// ======================================================
// CORE RECOGNITION SEQUENCE
// ======================================================
=== core_recognition ===
// What happens when the player directly approaches the core
The light engulfs you completely. For a moment, you feel weightless.

Then the voices begin—fragments of conversations, laughter, screams, whispers—all the sounds of a city that once lived, compressed into a cacophony that threatens to overwhelm you.

{remembered_echoes >= 8:
    // Branch for players who collected many echoes
    But the echoes you've gathered form a pattern within you. They give structure to the chaos, shielding you from being lost in the flood of memories.
    
    The column responds to this pattern. It recognizes you as a kindred system—a collector of what was lost.
    
    -> watcher_revelation
}

{remembered_echoes >= 4 && remembered_echoes < 8:
    // Branch for players who collected a moderate number of echoes
    The echoes you've gathered provide some resistance against the flood, but it's almost too much to bear.
    
    You struggle to maintain your sense of self amid the torrent of foreign memories.
    
    -> partial_revelation
}

{remembered_echoes < 4:
    // Branch for players who collected few echoes
    You have too little to anchor yourself. The memories wash through you, threatening to dissolve your identity entirely.
    
    In desperation, you reach for the column, trying to push away from it.
    
    -> lost_in_echoes
}

// ======================================================
// CORE BRANCH VARIATIONS
// ======================================================
=== watcher_revelation ===
// Revelation when many echoes are collected
The light recedes slightly, and you see a figure standing on the other side of the column. Tall, still, watching—the same entity you encountered in the garden.

But now you understand. This is no mere observer. This is the Guardian of Memory, the one who came before you.

It speaks directly into your mind: "You have walked the path well. You have remembered what needed remembering, and perhaps more importantly, chosen what to let fade."

"Now you must choose what becomes of these echoes."

-> final_choice

=== partial_revelation ===
// Revelation when moderate echoes are collected
The light flickers, struggling to form a pattern around you. You sense something trying to communicate, but the connection is weak, fragmented.

A partial image forms—a tall figure, similar to the one you saw in the garden. It seems to be reaching toward you, but cannot fully manifest.

In your mind, you hear scattered words: "Not enough... pattern incomplete... but still... a choice remains..."

-> final_choice

=== lost_in_echoes ===
// What happens when too few echoes are collected
The column flares in response to your touch. The cacophony intensifies until you can no longer distinguish yourself from the echoes.

You are everywhere at once. You are the city as it was built. You are the city as it fell. You are the countless footsteps that wore grooves in its stones.

You try to reassert your identity, to remember who you were, but there's too little to hold onto.

As your consciousness dissolves into the sea of echoes, you become just another memory for the next Wanderer to find.

-> fading_ending

// ======================================================
// RETURN TO CENTER
// ======================================================
=== return_to_center ===
// Returns player to the main choice in the core
You return to the center of the chamber, facing the column of light once more.

-> memory_core_continued

// ======================================================
// FINAL CHOICE
// ======================================================
=== final_choice ===
// The player's ultimate choice about the fate of the echoes
The column pulses, awaiting your decision. The echoes you've gathered hover around you like stars in a private constellation. What will you do with what you've remembered?

+ (Become_the_new_watcher)
    // Choose to take the Watcher's place - leads to Watcher Ending
    You understand now. The Watcher was once like you—a collector of echoes who chose to remain and preserve what memories survived.
    
    You step forward, embracing the column's light. You will become the new Guardian, the new Watcher.
    
    -> watcher_ending

+ (Release_the_echoes)
    // Choose to free all collected memories - leads to Release Ending
    These echoes deserve freedom, not preservation. Memory should not be trapped, even with the best intentions.
    
    You reach out to the constellation of fragments around you and will them to disperse—to return to the world, however briefly, before fading naturally.
    
    -> release_ending

+ (Create_something_new)
    // Choose to transform the echoes - leads to Rebirth Ending
    These fragments are neither the past to preserve nor the past to forget—they are raw material for something new.
    
    You focus on the echoes, willing them to recombine. Not as they were, but as they could be.
    
    -> rebirth_ending

// ======================================================
// ENDINGS
// ======================================================
=== restoration_ending ===
// Ending where the city is restored
#ending: restoration

The Memory Core erupts with light that floods through the entire underground chamber and beyond. You feel reality shuddering around you as time folds back upon itself.

When your vision clears, you stand in the middle of a street. Not a ruin, but a living thoroughfare. People pass by, speaking in languages you somehow understand. The buildings stand tall, their architecture both familiar and alien.

The city breathes again. Restored to the moment before its fall.

But as you turn to take it all in, you notice something unsettling: every few seconds, the world flickers. Like a projection that can't quite hold steady. The restoration is incomplete, unstable.

The mask is gone from your hands, and the emblem on your chest has faded. Your role is finished. You have given the city a second chance—however fragile, however temporary.

As you walk down the renewed street, a tall figure watches you from the shadows of a doorway. It nods once before vanishing.

The cycle continues, but differently this time.

// EXPANSION POTENTIAL: Add specific endings based on which echoes were collected
// For example, if the player collected all technical echoes, the restoration
// might be more stable but less human; if they collected all personal echoes,
// it might be emotionally vivid but structurally flawed

-> END

=== curator_ending ===
// Ending where player preserves only select memories
#ending: curator

The Memory Core accepts your selection. The echoes you've chosen flow into the circuitry of the walls, illuminating patterns that spread throughout the chamber like constellations.

Not a full restoration—a curation. A memory garden of only what deserved to survive.

The mask rises from the terminal and hovers before you. It has changed, now marked with symbols that match the patterns on the walls. As you take it, you understand its purpose: not to hide your face, but to help you see what others cannot.

With the mask, you can walk between moments, visiting the echoes you've preserved. You've become the Curator of Echoes, keeper of a selective history.

As you leave the chamber, mask in hand, you sense the presence of the Watcher behind you. Not following, but acknowledging. Your paths diverge here—they to watch, you to curate.

The city remains in ruins, but within those ruins, perfect fragments of what once was continue to echo for those who know how to listen.

// EXPANSION POTENTIAL: Describe specific memories preserved based on
// which echoes the player collected most of during their journey

-> END

=== transcendence_ending ===
// Ending where player rejects restoration and moves beyond
#ending: transcendence

The Memory Core shimmers as you reject its purpose. The light changes quality, becoming not restoration but transformation.

You don't want to recreate the past. You don't want to preserve it. You want to transcend it.

The mask trembles in your hand, then dissolves into particles of light that swirl around you. The emblem on your chest responds in kind, expanding outward until it envelops your entire form.

You feel yourself changing. Not becoming something else, but becoming *more* of what you already were.

When the light subsides, you remain in the chamber, but you know you're different now. You can see the echoes without activating them. You can walk through time without disturbing it.

You have become something beyond memory or forgetting—a conscious bridge between what was and what is. 

As you ascend the spiral staircase one last time, you meet the Watcher. For the first time, you see beyond their stillness to what they truly are: not an entity, but a possibility. A path you chose not to take.

The city awaits you—not to be rebuilt, but to be understood in a way no one else can comprehend.

// EXPANSION POTENTIAL: Vary the nature of transcendence based on
// the types of echoes collected and choices made during the journey

-> END

=== watcher_ending ===
// Ending where player becomes the new Watcher
#ending: watcher

The column's light wraps around you like a cloak. You feel yourself changing—not physically, but fundamentally. Your perspective shifts. Your awareness expands.

Time becomes visible to you—not as a line, but as a tapestry. The city exists in all its states simultaneously: being built, standing proud, crumbling, forgotten, rediscovered.

And you see the others. The Veiled Wanderers who came before you. The ones who will come after. Some became Watchers like you are becoming. Others chose different paths.

The cycle is endless, but not unchanging. Each Wanderer who reaches this point alters the pattern slightly.

As the transformation completes, you take your place. Not merely observing, but maintaining. The echoes will continue. The city will remain in its state of remembering and forgetting.

And when the next Wanderer arrives, drawn by the emblem that once adorned your chest, you will watch. You will guide. You will wait.

// EXPANSION POTENTIAL: Add specific details about what the player
// observes based on which areas they explored most thoroughly

-> END

=== release_ending ===
// Ending where player releases the echoes
#ending: release

The echoes hesitate, as if uncertain. Then, one by one, they drift away from you, passing through the walls of the chamber, returning to the places where you found them.

But they don't simply return—they *expand*. Each memory fragment grows, spreading through the ruins, momentarily restoring not just its immediate area but creating a chain reaction.

Through the walls of the chamber, you see the city light up as the echoes reach their destinations. For one breathtaking moment, everything is illuminated—the complete pattern visible for the first time.

Then it fades, not into darkness, but into peace. The compulsion to remember, to preserve, to echo—it dissipates.

The column of light dims, but doesn't go out entirely. Something new begins to form at its center: not memory, but possibility.

You leave the Memory Core changed. The emblem on your chest no longer glows, but feels warm against your skin. Your journey through echoes has ended, but something else has begun.

As you emerge from the underground, the ruins look different—not restored, but unburdened. Ready for what comes next.

// EXPANSION POTENTIAL: Describe how specific areas transform based on
// which echoes the player collected and released in those locations

-> END

=== rebirth_ending ===
// Ending where player transforms the echoes into something new
#ending: rebirth

The echoes around you begin to move. Not drifting away, not returning to the column, but dancing. Merging. Transforming.

The patterns they form are unlike anything you saw in the ruins. These aren't memories anymore—they're possibilities. Not echoes of what was, but whispers of what could be.

The column pulses in response, its light changing from the stark white of memory to a spectrum of colors that have no names. The walls of the chamber transform, circuitry flowering into organic patterns.

You understand: this place was never meant to simply preserve the past. It was waiting for someone to see beyond restoration to reinvention.

As the transformation spreads beyond the chamber, you feel the entire underground complex awakening to a new purpose. Not a city reborn, but something else. Something that has never existed before.

The emblem on your chest shifts and changes, matching the new patterns all around you. The old cycle is broken. The new one has just begun.

And when you finally emerge into the world above, where the ruins once stood, you find neither restoration nor continued decay, but growth of an entirely different kind.

// EXPANSION POTENTIAL: Describe specific new forms and functions that
// emerge based on which combination of echoes the player collected

-> END

=== fading_ending ===
// Ending where player is lost in the echoes
#ending: fading

Your consciousness fragments, melding with the echoes. You remember being a child drawing pictures of trees that disappeared. You remember being an architect planning towers that would outlast civilizations. You remember being a technician trying to save a system already too far gone.

You are everywhere and everywhen in the city's history. You are everyone who ever lived here.

And then, slowly, you begin to fade. Not vanishing, but settling. Becoming part of the background radiation of memory that haunts this place.

In time, another will come. Another Veiled Wanderer will follow the path, collect the echoes, and perhaps make a different choice.

But a piece of you will remain in one of those echoes. A fragment that the next Wanderer might find, might remember, might carry forward.

The cycle continues, unbroken.

// EXPANSION POTENTIAL: Vary the specific memories the player experiences
// based on which echoes they collected during their journey

-> END
