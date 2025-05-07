// Complete story content for Echoes of the Past
// Integrated from the Inky script and simplified version
window.storyContent = {
    // Initial choices from the intro
    "look_around": {
        location: "CITY RUINS",
        text: [
            "The city is crumbling, but there is a strange stillness.",
            "Blackened structures claw toward the sky, half-swallowed by fog.",
            "The only light comes from your chest — a soft, pulsing glow.",
            "It flickers, in rhythm with something beneath the world.",
            "You remember... nothing."
        ],
        choices: [
            { id: "keep_exploring", text: "Continue exploring" }
        ]
    },
    
    "walk_forward": {
        location: "CITY RUINS",
        text: [
            "The stones shift beneath your feet.",
            "Each step echoes longer than it should.",
            "In the distance, you hear a hum — not mechanical, but alive.",
            "Something waits to be seen."
        ],
        choices: [
            { id: "first_choice", text: "Move toward the sound" }
        ]
    },
    
    // First major choice point
    "first_choice": {
        location: "CITY RUINS - SHRINE",
        text: [
            "You pass the remnants of what may have been a shrine.",
            "Shattered beams. Crushed stone.",
            "Something catches your eye — a glimmer beneath the rubble.",
            "It pulses like your own chest does. But slower. Older."
        ],
        choices: [
            { id: "investigate_glimmer", text: "Investigate the glimmer" },
            { id: "leave_alone", text: "Leave it alone" }
        ]
    },
    
    "investigate_glimmer": {
        location: "CITY RUINS - SHRINE",
        text: [
            "You brush aside the debris and reveal a glowing shard.",
            "It pulses gently in your hand.",
            "It is warm. Familiar.",
            "You don't remember what it is—but it remembers you.",
            "The glowing shard fades after a moment, but something has changed in you.",
            "The emblem on your chest pulses slightly stronger now."
        ],
        isEcho: true,
        echoId: "shrine_shard",
        echoName: "Shrine Shard",
        echoDescription: "A fragment of crystallized memory, pulsing with the heartbeat of a forgotten ritual.",
        choices: [
            { id: "keep_exploring", text: "Continue" }
        ]
    },
    
    "leave_alone": {
        location: "CITY RUINS - SHRINE",
        text: [
            "You step away.",
            "Some things are better left buried.",
            "The light dims behind you."
        ],
        choices: [
            { id: "keep_exploring", text: "Continue" }
        ]
    },
    
    // Exploration path
    "keep_exploring": {
        location: "CITY RUINS - CROSSROADS",
        text: [
            "The road narrows. The air tightens.",
            "You walk toward a broken arch, half-submerged in soil and time.",
            "To your left, a path descends into shadow.",
            "To your right, something flickers behind a rusted gate."
        ],
        choices: [
            { id: "whisper_caverns", text: "Take the left path" },
            { id: "memory_gate", text: "Approach the gate" },
            { id: "arch_echo", text: "Examine the arch" }
        ]
    },
    
    // Arch path
    "arch_echo": {
        location: "CITY RUINS - ARCH",
        text: [
            "You approach the broken arch. Ancient symbols are carved into its weathered surface.",
            "As you trace them with your finger, you feel a resonance with the emblem on your chest.",
            "The arch begins to glow faintly, responding to your touch."
        ],
        choices: [
            { id: "press_emblem_arch", text: "Press the emblem on your chest against the arch" },
            { id: "step_back", text: "Step back" }
        ]
    },
    
    "press_emblem_arch": {
        location: "CITY RUINS - ARCH",
        text: [
            "A sudden flash of light. Images pour into your mind:",
            "A bustling city square. Towering spires. People with glowing symbols on their chests.",
            "Then darkness falls. Screams. A great machine beneath the city pulses erratically.",
            "You stumble back, overwhelmed by the vision.",
            "The arch stands silent again, its secret shared."
        ],
        isEcho: true,
        echoId: "arch_vision",
        echoName: "Arch Vision",
        echoDescription: "A fragment revealing the city's final moments, preserved in the ancient stone of the arch.",
        choices: [
            { id: "keep_exploring", text: "Continue exploring" }
        ]
    },
    
    "step_back": {
        location: "CITY RUINS - ARCH",
        text: [
            "You withdraw your hand. The glow fades.",
            "Some memories might be too painful to restore."
        ],
        choices: [
            { id: "keep_exploring", text: "Return to the crossroads" }
        ]
    },
    
    // Whisper Caverns path
    "whisper_caverns": {
        location: "WHISPER CAVERNS - ENTRANCE",
        text: [
            "You descend slowly, your light barely touching the walls.",
            "The echo follows.",
            "You find yourself in a cavern not carved by hands, but by forgetting.",
            "The walls breathe. Somewhere, water drips.",
            "It sounds almost like a voice."
        ],
        choices: [
            { id: "follow_sound", text: "Follow the sound" },
            { id: "touch_walls", text: "Touch the walls" }
        ]
    },
    
    "follow_sound": {
        location: "WHISPER CAVERNS - DEEPER PASSAGE",
        text: [
            "The drips lead you deeper into the cavern.",
            "You come to an underground pool, its surface perfectly still and reflective."
        ],
        choices: [
            { id: "underwater_chamber", text: "Approach the pool" }
        ]
    },
    
    "touch_walls": {
        location: "WHISPER CAVERNS - ENTRANCE",
        text: [
            "As your fingers brush against the damp stone, voices whisper in your mind.",
            "Fragments of conversations. Echoes of lives once lived here.",
            "The whispers fade, but you now understand: these caverns remember.",
            "They hold the echoes of the city above, preserved in stone and moisture."
        ],
        isEcho: true,
        echoId: "merchant_echo",
        echoName: "Merchant Echo",
        echoDescription: "Glimpses of trade and commerce in the ancient city, preserved in the cavern walls.",
        choices: [
            { id: "underwater_chamber", text: "Continue to the pool" }
        ]
    },
    
    "underwater_chamber": {
        location: "WHISPER CAVERNS - UNDERWATER CHAMBER",
        text: [
            "The pool's surface reflects your face—or what would be your face if your hood wasn't obscuring it.",
            "Something glints beneath the water. A mask, perhaps, with no features."
        ],
        choices: [
            { id: "reach_mask", text: "Reach for the mask" },
            { id: "leave_mask", text: "Leave it be" }
        ]
    },
    
    "reach_mask": {
        location: "WHISPER CAVERNS - UNDERWATER CHAMBER",
        text: [
            "You reach into the cold water and retrieve the mask.",
            "It's featureless, smooth as glass, but you sense it's important.",
            "The mask seems to hum in your hands, resonating with the emblem on your chest.",
            "You feel it belongs with you, though you can't explain why."
        ],
        isEcho: true,
        echoId: "faceless_mask",
        echoName: "Faceless Mask",
        echoDescription: "A smooth, featureless mask. It seems to wait for an identity to imprint upon it.",
        choices: [
            { id: "return_to_surface", text: "Return to the surface" }
        ]
    },
    
    "leave_mask": {
        location: "WHISPER CAVERNS - UNDERWATER CHAMBER",
        text: [
            "You draw back. Some artifacts are not meant to be disturbed.",
            "The reflection ripples and settles again."
        ],
        choices: [
            { id: "return_to_surface", text: "Return to the surface" }
        ]
    },
    
    "return_to_surface": {
        location: "CITY RUINS",
        text: [
            "You make your way back through the cavern and up to the surface."
        ],
        choices: [
            { id: "keep_exploring", text: "Continue exploring" }
        ]
    },
    
    // Memory Gate path
    "memory_gate": {
        location: "MEMORY GATE",
        text: [
            "The gate resists you at first.",
            "But the moment you place your hand on it, the hum returns—louder.",
            "This gate remembers.",
            "There is no key, only recognition.",
            "A glyph glows on its frame—the same one on your chest."
        ],
        choices: [
            { id: "press_emblem_gate", text: "Press your emblem against the gate" },
            { id: "try_another_path", text: "Try another path" }
        ]
    },
    
    "press_emblem_gate": {
        location: "MEMORY GATE",
        text: [
            "The gate shudders and begins to open, revealing a garden beyond.",
            "But something isn't right. The plants flicker in and out of existence, unstable memories of what once grew here."
        ],
        choices: [
            { id: "ghost_garden_entry", text: "Enter the garden" }
        ]
    },
    
    "try_another_path": {
        location: "CITY RUINS",
        text: [
            "You decide to explore elsewhere first."
        ],
        choices: [
            { id: "keep_exploring", text: "Return to the crossroads" }
        ]
    },
    
    // Ghost Garden path
    "ghost_garden_entry": {
        location: "GHOST GARDEN",
        text: [
            "You step into the garden. Plants phase in and out of existence around you.",
            "In the center stands a tall, still figure. It doesn't move, but you sense it's watching you."
        ],
        choices: [
            { id: "approach_figure", text: "Approach the figure" },
            { id: "explore_garden", text: "Explore the garden" }
        ]
    },
    
    "approach_figure": {
        location: "GHOST GARDEN - CENTRAL AREA",
        text: [
            "As you approach, the figure remains motionless.",
            "It wears a cloak similar to yours, but its face is obscured by a featureless mask.",
            "This must be the Silent Watcher mentioned in the echoes."
        ],
        choices: [
            { id: "silent_watcher_meeting", text: "Continue" }
        ]
    },
    
    "explore_garden": {
        location: "GHOST GARDEN - PERIPHERY",
        text: [
            "You decide to explore the unstable garden first.",
            "Plants bloom and wither as you pass, their lifecycle compressed into moments.",
            "You find an echo trapped in the heart of a flower that exists only in memory.",
            "The echo pulses in rhythm with your emblem.",
            "You've collected another fragment of this world's past."
        ],
        isEcho: true,
        echoId: "garden_flower",
        echoName: "Memory Flower",
        echoDescription: "A temporal anomaly in the form of a flower, blooming and withering in moments, preserving a fragment of the garden's beauty.",
        choices: [
            { id: "approach_figure", text: "Approach the Silent Watcher now" }
        ]
    },
    
    "silent_watcher_meeting": {
        location: "GHOST GARDEN - THE WATCHER",
        text: [
            "The Silent Watcher remains motionless as you approach.",
            "Though its face is hidden behind a featureless mask, you feel its gaze upon you.",
            "The emblem on your chest pulses more strongly, resonating with something in the Watcher's presence."
        ],
        choices: [
            { id: "watcher_purpose", text: "Ask about your purpose" },
            { id: "watcher_echoes", text: "Show the echoes you've collected" },
            { id: "watcher_silence", text: "Remain silent" }
        ]
    },
    
    "watcher_purpose": {
        location: "GHOST GARDEN - THE WATCHER",
        text: [
            "You try to speak, but find no words. Instead, your question forms as a thought, projected toward the Watcher.",
            "*Why am I here?*",
            "Though the Watcher doesn't move, you feel a response forming in your mind.",
            "*To remember. To choose.*"
        ],
        choices: [
            { id: "watcher_guidance", text: "Listen for more" }
        ]
    },
    
    "watcher_echoes": {
        location: "GHOST GARDEN - THE WATCHER",
        text: [
            "You focus on the echoes you've gathered, willing them to manifest.",
            "Small orbs of light materialize around you, each containing a fragment of memory you've recovered.",
            "The Watcher regards them, then raises a hand. The echoes orbit faster, forming patterns."
        ],
        choices: [
            { id: "watcher_guidance", text: "Listen for guidance" }
        ]
    },
    
    "watcher_silence": {
        location: "GHOST GARDEN - THE WATCHER",
        text: [
            "You stand in silence, watching the Watcher watch you.",
            "After what feels like an eternity, the Watcher inclines its head slightly.",
            "You sense approval in the gesture. Sometimes, silence is the correct response."
        ],
        choices: [
            { id: "watcher_guidance", text: "Wait for guidance" }
        ]
    },
    
    "watcher_guidance": {
        location: "GHOST GARDEN - THE WATCHER",
        text: [
            "The Watcher's voice continues in your mind:",
            "*Beneath the city lies the Memory Core. The heart of what was. The seed of what could be.*",
            "*The echoes you've gathered are fragments of a greater whole. Take them to the Core.*",
            "*There, you will understand. There, you will choose.*"
        ],
        choices: [
            { id: "watcher_find_core", text: "Ask how to find the Memory Core" },
            { id: "watcher_choice", text: "Ask what choice awaits" },
            { id: "watcher_nod", text: "Nod and depart" }
        ]
    },
    
    "watcher_find_core": {
        location: "GHOST GARDEN - THE WATCHER",
        text: [
            "*The path opens to those who carry enough echoes. Return to the gate.*",
            "*The mask you found will guide you deeper.*"
        ],
        choices: [
            { id: "watcher_departure", text: "Acknowledge" }
        ]
    },
    
    "watcher_choice": {
        location: "GHOST GARDEN - THE WATCHER",
        text: [
            "*Your choice will determine the fate of what you've remembered.*",
            "*Restore. Preserve. Release. Transform. Become.*",
            "*Each path has consequences. Each reshapes what remains.*"
        ],
        choices: [
            { id: "watcher_departure", text: "Consider this" }
        ]
    },
    
    "watcher_nod": {
        location: "GHOST GARDEN - THE WATCHER",
        text: [
            "You acknowledge the Watcher's guidance with a simple nod.",
            "The Watcher mirrors your gesture, a silent understanding passing between you."
        ],
        choices: [
            { id: "watcher_departure", text: "Prepare to leave" }
        ]
    },
    
    "watcher_departure": {
        location: "GHOST GARDEN - THE WATCHER",
        text: [
            "As you turn to leave, the Watcher speaks one final thought into your mind:",
            "*We have stood at this threshold before, you and I. In different forms. Making different choices.*",
            "*The cycle continues, but it need not repeat exactly.*",
            "With those cryptic words echoing in your thoughts, you make your way back toward the Memory Gate."
        ],
        choices: [
            { id: "memory_gate_return", text: "Return to the Memory Gate" }
        ]
    },
    
    "memory_gate_return": {
        location: "MEMORY GATE",
        text: [
            "The Memory Gate stands before you, its ancient mechanisms humming with recognition.",
            "The mask in your possession seems to resonate with the gate, pulling you toward it."
        ],
        choices: [
            { id: "enter_spiral_staircase", text: "Follow the pull of the mask" },
            { id: "explore_more", text: "Explore more of the ruins first" }
        ]
    },
    
    "enter_spiral_staircase": {
        location: "SPIRAL STAIRCASE",
        text: [
            "As you approach the gate with the mask, a section of ground before you shimmers and parts.",
            "A spiral staircase is revealed, descending deep into the earth.",
            "Your emblem pulses in rhythm with the stairs, beckoning you downward."
        ],
        choices: [
            { id: "descend_staircase", text: "Descend the staircase" }
        ]
    },
    
    "explore_more": {
        location: "CITY RUINS",
        text: [
            "You decide to explore more of the ruins before proceeding deeper.",
            "The pull of the mask fades as you step away from the gate."
        ],
        choices: [
            { id: "keep_exploring", text: "Return to exploration" }
        ]
    },
    
    "descend_staircase": {
        location: "SPIRAL STAIRCASE",
        text: [
            "You descend the spiral staircase, each step illuminating as your foot touches it.",
            "The stairs seem to go on forever, spiraling down into darkness.",
            "As you descend, echoes of the past whisper around you—fragments of conversation, laughter, screams.",
            "Finally, you reach the bottom, where a massive door glows with the same symbol as your emblem."
        ],
        choices: [
            { id: "enter_memory_core", text: "Open the door" }
        ]
    },
    
    "enter_memory_core": {
        location: "MEMORY CORE",
        text: [
            "The door opens at your touch, revealing a vast, spherical chamber.",
            "In the center floats a pulsing orb of light, threads of energy connecting it to the walls.",
            "This is the Memory Core—the heart of all echoes.",
            "The collected echoes in your possession begin to glow, drawn toward the central orb."
        ],
        choices: [
            { id: "approach_core", text: "Approach the core" }
        ]
    },
    
    "approach_core": {
        location: "MEMORY CORE - CENTER",
        text: [
            "As you approach the central orb, your collected echoes orbit around you faster.",
            "The mask in your possession vibrates, eager to be united with the core.",
            "You sense that a significant choice awaits you—one that will determine the fate of these memories and perhaps this place."
        ],
        choices: [
            { id: "restore_memories", text: "Restore the memories" },
            { id: "preserve_memories", text: "Preserve the memories" },
            { id: "release_memories", text: "Release the memories" }
        ]
    },
    
    "restore_memories": {
        location: "MEMORY CORE - CENTER",
        text: [
            "You decide to restore the memories to their rightful place.",
            "Raising your hands, you will the echoes to return to the core, to become whole again.",
            "The echoes swirl around you, then flow into the core in streams of light.",
            "The core pulses brighter, expanding outward in waves of energy.",
            "You feel the ground above you shifting, rebuilding.",
            "You've chosen to restore the city to what it once was."
        ],
        choices: [
            { id: "ending_restore", text: "Experience the restoration" }
        ]
    },
    
    "preserve_memories": {
        location: "MEMORY CORE - CENTER",
        text: [
            "You decide to preserve the memories as they are—neither restored nor released.",
            "You place the mask on the surface of the core, creating a barrier that stabilizes the memories.",
            "The echoes slow their orbit, settling into a stable pattern around the core.",
            "The ruins above will remain as they are—a monument to what once was, neither decaying further nor being fully restored.",
            "You've chosen to preserve this moment in time."
        ],
        choices: [
            { id: "ending_preserve", text: "Accept your role as guardian" }
        ]
    },
    
    "release_memories": {
        location: "MEMORY CORE - CENTER",
        text: [
            "You decide to release the memories, allowing them to finally fade away.",
            "These echoes have lingered too long, trapped in a half-existence.",
            "With gentle determination, you will the echoes to disperse, to find peace.",
            "The core dims as the echoes scatter, breaking into countless motes of light that rise upward.",
            "You feel a profound sense of release, as if a great burden has been lifted.",
            "You've chosen to let go of the past."
        ],
        choices: [
            { id: "ending_release", text: "Watch the memories fade" }
        ]
    },
    
    "ending_restore": {
        location: "RESTORED CITY",
        text: [
            "You emerge from the staircase to find the city transformed.",
            "Buildings stand tall and whole, streets hum with activity, and people with glowing emblems pass by.",
            "At first, they don't notice you, but then—one by one—they turn.",
            "Recognition dawns in their eyes. They remember.",
            "You've restored not just the city, but its people and their memories.",
            "As the Watcher predicted, the cycle continues—but differently this time.",
            "You are welcomed home, though you still don't remember who you were.",
            "Perhaps, in time, that too will return."
        ],
        choices: [
            { id: "game_end", text: "THE END" }
        ]
    },
    
    "ending_preserve": {
        location: "THE ETERNAL WATCH",
        text: [
            "You take up the mantle of Guardian, becoming the new Watcher.",
            "The mask bonds to your face, featureless no longer—it takes on aspects of who you were and who you now choose to be.",
            "The ruins stabilize, neither crumbling further nor restoring themselves.",
            "Time passes differently for you now. You watch over the echoes, preserving them for... something. Someone.",
            "Occasionally, others like your former self will come seeking answers.",
            "To them, you will provide guidance, as the Watcher did for you.",
            "The cycle continues, but your choice has altered its nature."
        ],
        choices: [
            { id: "game_end", text: "THE END" }
        ]
    },
    
    "ending_release": {
        location: "FADING RUINS",
        text: [
            "As you emerge from the staircase, you find the ruins fading around you.",
            "Not violently or suddenly, but gently—like exhaling after holding a breath too long.",
            "The buildings, the gate, the garden—all dissolve into motes of light that drift skyward.",
            "The mask crumbles from your hands, its purpose fulfilled.",
            "You feel lighter, unburdened by the weight of what was.",
            "As the last of the city fades, you find yourself standing in an empty field under the stars.",
            "Your emblem glows once more, then dims permanently.",
            "You are free to move forward now, no longer bound to the echoes of the past."
        ],
        choices: [
            { id: "game_end", text: "THE END" }
        ]
    },
    
    "game_end": {
        location: "GAME COMPLETE",
        text: [
            "Thank you for playing Echoes of the Past.",
            "Your journey through memory and choice has come to an end.",
            "You collected [echoesFound.length] out of 7 possible memory echoes during your exploration."
        ],
        choices: [
            { id: "restart_game", text: "Play Again" }
        ]
    },
    
    "restart_game": {
        location: "",
        text: [],
        choices: [],
        restart: true
    }
};

// Add lore echoes
window.echoLoreEntries = {
    "echo_03": {
        name: "Architect's Note",
        description: "We didn't build it to last forever. We built it to be remembered. But even memory has a decay rate."
    },
    "echo_09": {
        name: "Personal Letter (Unsent)",
        description: "I walk past our old bench sometimes. It's still there. At least, I think it is. I can't touch it. My hand goes through."
    },
    "echo_12": {
        name: "Technician's Log",
        description: "Echoes are local, unstable, and aggressive. If you activate one, be quick. Or you'll fall through yesterday."
    },
    "echo_16": {
        name: "Echo Research Log",
        description: "Every echo starts with a sound. A breath, a footstep, a closing door. You can't preserve moments—only their noise."
    },
    "echo_24": {
        name: "The Watcher's Field Report",
        description: "The Veiled One passed through at 02:16. No physical trace. Just a sharp drop in temperature and the static whine of recalled time."
    },
    "echo_41": {
        name: "Scavenger's Sketch",
        description: "A torn page with a crude drawing: A figure beneath a moon, arms outstretched. Around her, buildings rebuild themselves mid-collapse. A single phrase is scratched below: \"She carries it all.\""
    }
};

// Update echo data with lore entries
window.echoData = window.echoData || {};
Object.keys(window.echoLoreEntries).forEach(key => {
    const entry = window.echoLoreEntries[key];
    window.echoData[key] = {
        name: entry.name,
        description: entry.description,
        image: `assets/echoes/echo_${key.split('_')[1]}.png`
    };
}); 