
INCLUDE lore_entries.ink

=== intro ===
You open your eyes, though you're not sure if they were ever closed.  
The ground beneath you is cracked stone. Cold. Damp.  
Above, a bloated moon clings to a colorless sky. Somewhere in the distance, something breathes—not with lungs, but with **time**.

You exhale. Or at least, you think you do.

+ (Look_around)
    The city is crumbling, but there is a strange stillness.  
    Blackened structures claw toward the sky, half-swallowed by fog.  
    The only light comes from your chest — a soft, pulsing glow.  
    It flickers, in rhythm with something beneath the world.  
    You remember... nothing.
    
    -> DONE

+ (Walk_forward)
    The stones shift beneath your feet.  
    Each step echoes longer than it should.  
    In the distance, you hear a hum — not mechanical, but alive.  
    Something waits to be seen.

-> first_choice

=== first_choice ===
You pass the remnants of what may have been a shrine.  
Shattered beams. Crushed stone.  
Something catches your eye — a glimmer beneath the rubble.  
It pulses like your own chest does. But slower. Older.

+ (Investigate_the_glimmer)
    You brush aside the debris and reveal a glowing shard.  
    It pulses gently in your hand.  
    It is warm. Familiar.  
    You don’t remember what it is—but it remembers you.

    -> LORE_ENTRY_12

+ (Leave_it_alone)
    You step away.  
    Some things are better left buried.  
    The light dims behind you.

    -> keep_exploring

=== keep_exploring ===
The road narrows. The air tightens.

You walk toward a broken arch, half-submerged in soil and time.  
To your left, a path descends into shadow.  
To your right, something flickers behind a rusted gate.

+ (Take_the_left_path)
    You descend slowly, your light barely touching the walls.  
    The echo follows.

    -> cavern_intro

+ (Approach_the_gate)
    The gate resists you at first.  
    But the moment you place your hand on it, the hum returns—louder.

    -> memory_locked_gate

+ (End_the_demo)
    This is as far as the current version goes.  
    You feel the echo fade.

-> END

=== cavern_intro ===
You find yourself in a cavern not carved by hands, but by forgetting.  
The walls breathe. Somewhere, water drips.  
It sounds almost like a voice.

-> END

=== memory_locked_gate ===
This gate remembers.  
There is no key, only **recognition**.

A glyph glows on its frame—the same one on your chest.  
The echo deepens.

-> END

=== DONE ===
-> END
