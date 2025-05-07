// Story content generated from Ink files
// This would normally be compiled from .ink files
window.storyContent = {
    "inkVersion": 20,
    "root": [
        ["^You open your eyes, though you're not sure if they were ever closed.", "\n", "^The ground beneath you is cracked stone. Cold. Damp.", "\n", "^Above, a bloated moon clings to a colorless sky. Somewhere in the distance, something breathes—not with lungs, but with **time**.", "\n", {
            "#": "cover"
        }],
        ["^You exhale. Or at least, you think you do.", "\n"],
        ["ev", "str", "Look_around", "/str", "/ev", {
            "*": ".^.c-0",
            "c-0": ["\n", {
                "->": "intro.0.g-0"
            }, "\n", {
                "#f": 5
            }]
        }, "ev", "str", "Walk_forward", "/str", "/ev", {
            "*": ".^.c-1",
            "c-1": ["\n", {
                "->": "intro.0.g-1"
            }, "\n", {
                "#f": 5
            }]
        }],
        {
            "g-0": ["^The city is crumbling, but there is a strange stillness.", "\n", "^Blackened structures claw toward the sky, half-swallowed by fog.", "\n", "^The only light comes from your chest — a soft, pulsing glow.", "\n", "^It flickers, in rhythm with something beneath the world.", "\n", "^You remember... nothing.", "\n", {
                "->": "keep_exploring",
                "#": "show_wanderer"
            }, {
                "#f": 5
            }],
            "g-1": ["^The stones shift beneath your feet.", "\n", "^Each step echoes longer than it should.", "\n", "^In the distance, you hear a hum — not mechanical, but alive.", "\n", "^Something waits to be seen.", "\n", {
                "->": "first_choice",
                "#": "city_ruins show_wanderer"
            }, {
                "#f": 5
            }]
        }
    ],

    "first_choice": [
        ["^You pass the remnants of what may have been a shrine.", "\n", "^Shattered beams. Crushed stone.", "\n", "^Something catches your eye — a glimmer beneath the rubble.", "\n", "^It pulses like your own chest does. But slower. Older.", "\n", ["ev", "str", "Investigate_the_glimmer", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "first_choice.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Leave_it_alone", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "first_choice.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "timer-standard default-choice:1",
                "g-0": ["^You brush aside the debris and reveal a glowing shard.", "\n", "^It pulses gently in your hand.", "\n", "^It is warm. Familiar.", "\n", "^You don't remember what it is—but it remembers you.", "\n", {
                    "->": "first_choice_after_shrine",
                    "#": "echo-lore echo-12"
                }, {
                    "#f": 5
                }],
                "g-1": ["^You step away.", "\n", "^Some things are better left buried.", "\n", "^The light dims behind you.", "\n", {
                    "->": "keep_exploring"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "first_choice_after_shrine": [
        ["^The glowing shard fades after a moment, but something has changed in you.", "\n", "^The emblem on your chest pulses slightly stronger now.", "\n", ["ev", "str", "Continue", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "keep_exploring",
                    "#": "city_ruins show_wanderer"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "keep_exploring": [
        ["^The road narrows. The air tightens.", "\n", "^You walk toward a broken arch, half-submerged in soil and time.", "\n", "^To your left, a path descends into shadow.", "\n", "^To your right, something flickers behind a rusted gate.", "\n", ["ev", "str", "Take the left path", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "keep_exploring.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Approach the gate", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "keep_exploring.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Examine the arch", "/str", "/ev", {
                "*": ".^.c-2",
                "c-2": ["\n", {
                    "->": "keep_exploring.0.g-2"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "city_ruins show_wanderer",
                "g-0": ["^You descend slowly, your light barely touching the walls.", "\n", "^The echo follows.", "\n", {
                    "->": "cavern_intro",
                    "#": "whisper_caverns"
                }, {
                    "#f": 5
                }],
                "g-1": ["^The gate resists you at first.", "\n", "^But the moment you place your hand on it, the hum returns—louder.", "\n", {
                    "->": "memory_locked_gate",
                    "#": "memory_gate"
                }, {
                    "#f": 5
                }],
                "g-2": ["^You approach the broken arch. Ancient symbols are carved into its weathered surface.", "\n", "^As you trace them with your finger, you feel a resonance with the emblem on your chest.", "\n", {
                    "->": "arch_echo",
                    "#": "timer-urgent default-choice:1"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "arch_echo": [
        ["^The arch begins to glow faintly, responding to your touch.", "\n", ["ev", "str", "Press the emblem on your chest against the arch", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "arch_echo.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Step back", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "arch_echo.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "g-0": ["^A sudden flash of light. Images pour into your mind:", "\n", "^A bustling city square. Towering spires. People with glowing symbols on their chests.", "\n", "^Then darkness falls. Screams. A great machine beneath the city pulses erratically.", "\n", {
                    "->": "arch_echo_after",
                    "#": "echo-lore echo-16 effect-echo_pulse"
                }, {
                    "#f": 5
                }],
                "g-1": ["^You withdraw your hand. The glow fades.", "\n", "^Some memories might be too painful to restore.", "\n", {
                    "->": "keep_exploring",
                    "#": "city_ruins"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "arch_echo_after": [
        ["^You stumble back, overwhelmed by the vision.", "\n", "^The arch stands silent again, its secret shared.", "\n", ["ev", "str", "Continue exploring", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "keep_exploring",
                    "#": "city_ruins"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "cavern_intro": [
        ["^You find yourself in a cavern not carved by hands, but by forgetting.", "\n", "^The walls breathe. Somewhere, water drips.", "\n", "^It sounds almost like a voice.", "\n", ["ev", "str", "Follow the sound", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "cavern_intro.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Touch the walls", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "cavern_intro.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "whisper_caverns",
                "g-0": ["^The drips lead you deeper into the cavern.", "\n", "^You come to an underground pool, its surface perfectly still and reflective.", "\n", {
                    "->": "underwater_chamber",
                    "#": "whisper_caverns effect-echo_pulse"
                }, {
                    "#f": 5
                }],
                "g-1": ["^As your fingers brush against the damp stone, voices whisper in your mind.", "\n", "^Fragments of conversations. Echoes of lives once lived here.", "\n", {
                    "->": "whispering_walls",
                    "#": "echo-lore echo-09"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "whispering_walls": [
        ["^The whispers fade, but you now understand: these caverns remember.", "\n", "^They hold the echoes of the city above, preserved in stone and moisture.", "\n", ["ev", "str", "Continue to the pool", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "underwater_chamber",
                    "#": "whisper_caverns"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "underwater_chamber": [
        ["^The pool's surface reflects your face—or what would be your face if your hood wasn't obscuring it.", "\n", "^Something glints beneath the water. A mask, perhaps, with no features.", "\n", ["ev", "str", "Reach for the mask", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "underwater_chamber.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Leave it be", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "underwater_chamber.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "timer-urgent default-choice:1",
                "g-0": ["^You reach into the cold water and retrieve the mask.", "\n", "^It's featureless, smooth as glass, but you sense it's important.", "\n", {
                    "->": "mask_acquired",
                    "#": "echo-lore echo-24"
                }, {
                    "#f": 5
                }],
                "g-1": ["^You draw back. Some artifacts are not meant to be disturbed.", "\n", "^The reflection ripples and settles again.", "\n", {
                    "->": "return_to_cavern",
                    "#": "whisper_caverns"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "mask_acquired": [
        ["^The mask seems to hum in your hands, resonating with the emblem on your chest.", "\n", "^You feel it belongs with you, though you can't explain why.", "\n", ["ev", "str", "Return to the surface", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "demo_ending",
                    "#": "city_ruins show_wanderer"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "return_to_cavern": [
        ["^You leave the pool behind and make your way back through the cavern.", "\n", ["ev", "str", "Return to the surface", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "demo_ending",
                    "#": "city_ruins show_wanderer"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "memory_locked_gate": [
        ["^This gate remembers.", "\n", "^There is no key, only **recognition**.", "\n", "^A glyph glows on its frame—the same one on your chest.", "\n", ["ev", "str", "Press your emblem against the gate", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "memory_locked_gate.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Try another path", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "memory_locked_gate.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "memory_gate",
                "g-0": ["^The gate shudders and begins to open, revealing a garden beyond.", "\n", "^But something isn't right. The plants flicker in and out of existence, unstable memories of what once grew here.", "\n", {
                    "->": "ghost_garden_entry",
                    "#": "ghost_garden"
                }, {
                    "#f": 5
                }],
                "g-1": ["^You decide to explore elsewhere first.", "\n", {
                    "->": "keep_exploring",
                    "#": "city_ruins"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "ghost_garden_entry": [
        ["^You step into the garden. Plants phase in and out of existence around you.", "\n", "^In the center stands a tall, still figure. It doesn't move, but you sense it's watching you.", "\n", ["ev", "str", "Approach the figure", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "ghost_garden_entry.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Explore the garden", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "ghost_garden_entry.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "ghost_garden show_watcher",
                "g-0": ["^As you approach, the figure remains motionless.", "\n", "^It wears a cloak similar to yours, but its face is obscured by a featureless mask.", "\n", "^This must be the Silent Watcher mentioned in the echoes.", "\n", {
                    "->": "demo_ending",
                    "#": "ghost_garden show_watcher"
                }, {
                    "#f": 5
                }],
                "g-1": ["^You decide to explore the unstable garden first.", "\n", "^Plants bloom and wither as you pass, their lifecycle compressed into moments.", "\n", "^You find an echo trapped in the heart of a flower that exists only in memory.", "\n", {
                    "->": "garden_echo",
                    "#": "echo-lore echo-41"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "garden_echo": [
        ["^The echo pulses in rhythm with your emblem.", "\n", "^You've collected another fragment of this world's past.", "\n", ["ev", "str", "Approach the Silent Watcher now", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "silent_watcher_meeting",
                    "#": "ghost_garden show_watcher"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "demo_ending": [
        ["^As you proceed deeper into this world, the journey continues...", "\n", ["ev", "str", "Continue your journey", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "silent_watcher_meeting",
                    "#": "ghost_garden show_watcher"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "silent_watcher_meeting": [
        ["^The Silent Watcher remains motionless as you approach.", "\n", "^Though its face is hidden behind a featureless mask, you feel its gaze upon you.", "\n", "^The emblem on your chest pulses more strongly, resonating with something in the Watcher's presence.", "\n", ["ev", "str", "Ask about your purpose", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "silent_watcher_meeting.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Show the echoes you've collected", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "silent_watcher_meeting.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Remain silent", "/str", "/ev", {
                "*": ".^.c-2",
                "c-2": ["\n", {
                    "->": "silent_watcher_meeting.0.g-2"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "ghost_garden show_watcher",
                "g-0": ["^You try to speak, but find no words. Instead, your question forms as a thought, projected toward the Watcher.", "\n", "^*Why am I here?*", "\n", "^Though the Watcher doesn't move, you feel a response forming in your mind.", "\n", "^*To remember. To choose.*", "\n", {
                    "->": "watcher_guidance",
                    "#": "ghost_garden show_watcher effect-echo_pulse"
                }, {
                    "#f": 5
                }],
                "g-1": ["^You focus on the echoes you've gathered, willing them to manifest.", "\n", "^Small orbs of light materialize around you, each containing a fragment of memory you've recovered.", "\n", "^The Watcher regards them, then raises a hand. The echoes orbit faster, forming patterns.", "\n", {
                    "->": "watcher_guidance",
                    "#": "ghost_garden show_watcher effect-echo_pulse"
                }, {
                    "#f": 5
                }],
                "g-2": ["^You stand in silence, watching the Watcher watch you.", "\n", "^After what feels like an eternity, the Watcher inclines its head slightly.", "\n", "^You sense approval in the gesture. Sometimes, silence is the correct response.", "\n", {
                    "->": "watcher_guidance",
                    "#": "ghost_garden show_watcher"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "watcher_guidance": [
        ["^The Watcher's voice continues in your mind:", "\n", "^*Beneath the city lies the Memory Core. The heart of what was. The seed of what could be.*", "\n", "^*The echoes you've gathered are fragments of a greater whole. Take them to the Core.*", "\n", "^*There, you will understand. There, you will choose.*", "\n", ["ev", "str", "Ask how to find the Memory Core", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "watcher_guidance.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Ask what choice awaits", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "watcher_guidance.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Nod and depart", "/str", "/ev", {
                "*": ".^.c-2",
                "c-2": ["\n", {
                    "->": "watcher_guidance.0.g-2"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "ghost_garden show_watcher",
                "g-0": ["^*The path opens to those who carry enough echoes. Return to the gate.*", "\n", "^*The mask you found will guide you deeper.*", "\n", {
                    "->": "watcher_departure",
                    "#": "ghost_garden show_watcher"
                }, {
                    "#f": 5
                }],
                "g-1": ["^*Your choice will determine the fate of what you've remembered.*", "\n", "^*Restore. Preserve. Release. Transform. Become.*", "\n", "^*Each path has consequences. Each reshapes what remains.*", "\n", {
                    "->": "watcher_departure",
                    "#": "ghost_garden show_watcher"
                }, {
                    "#f": 5
                }],
                "g-2": ["^You acknowledge the Watcher's guidance with a simple nod.", "\n", "^The Watcher mirrors your gesture, a silent understanding passing between you.", "\n", {
                    "->": "watcher_departure",
                    "#": "ghost_garden show_watcher"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "watcher_departure": [
        ["^As you turn to leave, the Watcher speaks one final thought into your mind:", "\n", "^*We have stood at this threshold before, you and I. In different forms. Making different choices.*", "\n", "^*The cycle continues, but it need not repeat exactly.*", "\n", "^With those cryptic words echoing in your thoughts, you make your way back toward the Memory Gate.", "\n", ["ev", "str", "Return to the Memory Gate", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "memory_gate_return",
                    "#": "memory_gate"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "memory_gate_return": [
        ["^The Memory Gate stands before you, its ancient mechanisms humming with recognition.", "\n", "^The mask in your possession seems to resonate with the gate, pulling you toward it.", "\n", ["ev", "str", "Place the mask against the gate", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "memory_gate_return.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "memory_gate",
                "g-0": ["^The moment the mask touches the gate, both begin to glow intensely.", "\n", "^The gate shudders, then splits open to reveal not the garden you saw before, but a spiraling staircase descending deep beneath the city.", "\n", "^A soft blue light emanates from below, pulsing in rhythm with your emblem.", "\n", {
                    "->": "descend_to_core",
                    "#": "memory_gate effect-echo_pulse"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "descend_to_core": [
        ["^You descend the spiral staircase, each step bringing you deeper into the earth.", "\n", "^The walls around you are etched with circuitry that pulses with light as you pass.", "\n", "^The echoes you've collected throughout your journey grow more agitated, resonating with something below.", "\n", ["ev", "str", "Continue descending", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "memory_core_arrival",
                    "#": "memory_core"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "memory_core_arrival": [
        ["^You emerge into a vast circular chamber dominated by a column of pure light that stretches from floor to ceiling.", "\n", "^The light pulses and shifts, almost alive. This must be the Memory Core—the heart of the city's memory system.", "\n", "^The emblem on your chest burns brighter than ever, and the echoes you've collected orbit around you like tiny stars.", "\n", ["ev", "str", "Approach the column", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "memory_core_arrival.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Circle the perimeter", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "memory_core_arrival.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "memory_core",
                "g-0": ["^You step forward, the light washing over you.", "\n", "^The emblem on your chest burns brighter than ever, almost painful. It's calling to something in the column—or perhaps the column is calling to it.", "\n", {
                    "->": "core_recognition",
                    "#": "memory_core effect-echo_pulse"
                }, {
                    "#f": 5
                }],
                "g-1": ["^You walk the edge of the chamber, studying the column from different angles.", "\n", "^The walls are etched with circuitry that pulses in rhythm with the light. Equations and symbols flow across the surface, mathematical poetry describing the architecture of memory itself.", "\n", "^On the far side, you find a small terminal with a single interface: a mask-shaped depression.", "\n", {
                    "->": "mask_terminal",
                    "#": "memory_core"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "mask_terminal": [
        ["^You hold the mask over the depression. It hovers for a moment, suspended by an unseen force, then settles into place.", "\n", "^The walls flicker. Suddenly, ghostly scenes play across them—moments from the city's past. People walking streets that are now ruins. Buildings standing tall where there are now only fragments.", "\n", "^A voice echoes through the chamber: \"Configuration accepted. Access granted to Pattern Archive. Please specify memory reconstruction parameters.\"", "\n", ["ev", "str", "Full restoration", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "mask_terminal.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Selective restoration", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "mask_terminal.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Reject restoration", "/str", "/ev", {
                "*": ".^.c-2",
                "c-2": ["\n", {
                    "->": "mask_terminal.0.g-2"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "memory_core",
                "g-0": ["^You don't speak, but you think: *everything*.", "\n", "^The voice responds: \"Caution: Full restoration exceeds safety parameters. Pattern coherence unstable. Proceed?\"", "\n", {
                    "->": "restoration_ending",
                    "#": "memory_core effect-echo_pulse ending:restoration"
                }, {
                    "#f": 5
                }],
                "g-1": ["^You think about the echoes you've collected. Not everything deserves to be brought back. Some things are meant to fade.", "\n", "^You focus on the echoes that moved you, the memories that felt important.", "\n", {
                    "->": "curator_ending",
                    "#": "memory_core effect-echo_pulse ending:curator"
                }, {
                    "#f": 5
                }],
                "g-2": ["^No. The past should remain past. These echoes were never meant to be permanent.", "\n", "^You reach for the mask and lift it from the terminal.", "\n", {
                    "->": "transcendence_ending",
                    "#": "memory_core effect-echo_pulse ending:transcendence"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "core_recognition": [
        ["^The light engulfs you completely. For a moment, you feel weightless.", "\n", "^Then the voices begin—fragments of conversations, laughter, screams, whispers—all the sounds of a city that once lived, compressed into a cacophony that threatens to overwhelm you.", "\n", ["ev", "str", "Focus on the echoes you've collected", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "core_recognition.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "memory_core effect-echo_pulse",
                "g-0": ["^The echoes you've gathered form a pattern within you. They give structure to the chaos, shielding you from being lost in the flood of memories.", "\n", "^The light recedes slightly, and you see a figure standing on the other side of the column. Tall, still, watching—the same entity you encountered in the garden.", "\n", "^But now you understand. This is no mere observer. This is the Guardian of Memory, the one who came before you.", "\n", {
                    "->": "final_choice",
                    "#": "memory_core show_watcher"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "final_choice": [
        ["^The column pulses, awaiting your decision. The echoes you've gathered hover around you like stars in a private constellation. What will you do with what you've remembered?", "\n", ["ev", "str", "Become the new Watcher", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "final_choice.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Release the echoes", "/str", "/ev", {
                "*": ".^.c-1",
                "c-1": ["\n", {
                    "->": "final_choice.0.g-1"
                }, "\n", {
                    "#f": 5
                }]
            }, "ev", "str", "Create something new", "/str", "/ev", {
                "*": ".^.c-2",
                "c-2": ["\n", {
                    "->": "final_choice.0.g-2"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#": "memory_core show_watcher",
                "g-0": ["^You understand now. The Watcher was once like you—a collector of echoes who chose to remain and preserve what memories survived.", "\n", "^You step forward, embracing the column's light. You will become the new Guardian, the new Watcher.", "\n", {
                    "->": "watcher_ending",
                    "#": "memory_core effect-echo_pulse ending:watcher"
                }, {
                    "#f": 5
                }],
                "g-1": ["^These echoes deserve freedom, not preservation. Memory should not be trapped, even with the best intentions.", "\n", "^You reach out to the constellation of fragments around you and will them to disperse—to return to the world, however briefly, before fading naturally.", "\n", {
                    "->": "release_ending",
                    "#": "memory_core effect-echo_pulse ending:release"
                }, {
                    "#f": 5
                }],
                "g-2": ["^These fragments are neither the past to preserve nor the past to forget—they are raw material for something new.", "\n", "^You focus on the echoes, willing them to recombine. Not as they were, but as they could be.", "\n", {
                    "->": "rebirth_ending",
                    "#": "memory_core effect-echo_pulse ending:rebirth"
                }, {
                    "#f": 5
                }]
            }
        ]
    ],
    
    "restoration_ending": [
        ["^The Memory Core erupts with light that floods through the entire underground chamber and beyond. You feel reality shuddering around you as time folds back upon itself.", "\n", "^When your vision clears, you stand in the middle of a street. Not a ruin, but a living thoroughfare. People pass by, speaking in languages you somehow understand. The buildings stand tall, their architecture both familiar and alien.", "\n", "^The city breathes again. Restored to the moment before its fall.", "\n", "^But as you turn to take it all in, you notice something unsettling: every few seconds, the world flickers. Like a projection that can't quite hold steady. The restoration is incomplete, unstable.", "\n", "^The mask is gone from your hands, and the emblem on your chest has faded. Your role is finished. You have given the city a second chance—however fragile, however temporary.", "\n", "^As you walk down the renewed street, a tall figure watches you from the shadows of a doorway. It nods once before vanishing.", "\n", "^The cycle continues, but differently this time.", "\n", ["ev", "str", "The End", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "DONE",
                    "#": "ending:restoration"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "curator_ending": [
        ["^The Memory Core accepts your selection. The echoes you've chosen flow into the circuitry of the walls, illuminating patterns that spread throughout the chamber like constellations.", "\n", "^Not a full restoration—a curation. A memory garden of only what deserved to survive.", "\n", "^The mask rises from the terminal and hovers before you. It has changed, now marked with symbols that match the patterns on the walls. As you take it, you understand its purpose: not to hide your face, but to help you see what others cannot.", "\n", "^With the mask, you can walk between moments, visiting the echoes you've preserved. You've become the Curator of Echoes, keeper of a selective history.", "\n", "^As you leave the chamber, mask in hand, you sense the presence of the Watcher behind you. Not following, but acknowledging. Your paths diverge here—they to watch, you to curate.", "\n", "^The city remains in ruins, but within those ruins, perfect fragments of what once was continue to echo for those who know how to listen.", "\n", ["ev", "str", "The End", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "DONE",
                    "#": "ending:curator"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "transcendence_ending": [
        ["^The Memory Core shimmers as you reject its purpose. The light changes quality, becoming not restoration but transformation.", "\n", "^You don't want to recreate the past. You don't want to preserve it. You want to transcend it.", "\n", "^The mask trembles in your hand, then dissolves into particles of light that swirl around you. The emblem on your chest responds in kind, expanding outward until it envelops your entire form.", "\n", "^You feel yourself changing. Not becoming something else, but becoming *more* of what you already were.", "\n", "^When the light subsides, you remain in the chamber, but you know you're different now. You can see the echoes without activating them. You can walk through time without disturbing it.", "\n", "^You have become something beyond memory or forgetting—a conscious bridge between what was and what is.", "\n", "^As you ascend the spiral staircase one last time, you meet the Watcher. For the first time, you see beyond their stillness to what they truly are: not an entity, but a possibility. A path you chose not to take.", "\n", "^The city awaits you—not to be rebuilt, but to be understood in a way no one else can comprehend.", "\n", ["ev", "str", "The End", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "DONE",
                    "#": "ending:transcendence"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "watcher_ending": [
        ["^The column's light wraps around you like a cloak. You feel yourself changing—not physically, but fundamentally. Your perspective shifts. Your awareness expands.", "\n", "^Time becomes visible to you—not as a line, but as a tapestry. The city exists in all its states simultaneously: being built, standing proud, crumbling, forgotten, rediscovered.", "\n", "^And you see the others. The Veiled Wanderers who came before you. The ones who will come after. Some became Watchers like you are becoming. Others chose different paths.", "\n", "^The cycle is endless, but not unchanging. Each Wanderer who reaches this point alters the pattern slightly.", "\n", "^As the transformation completes, you take your place. Not merely observing, but maintaining. The echoes will continue. The city will remain in its state of remembering and forgetting.", "\n", "^And when the next Wanderer arrives, drawn by the emblem that once adorned your chest, you will watch. You will guide. You will wait.", "\n", ["ev", "str", "The End", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "DONE",
                    "#": "ending:watcher"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "release_ending": [
        ["^The echoes hesitate, as if uncertain. Then, one by one, they drift away from you, passing through the walls of the chamber, returning to the places where you found them.", "\n", "^But they don't simply return—they *expand*. Each memory fragment grows, spreading through the ruins, momentarily restoring not just its immediate area but creating a chain reaction.", "\n", "^Through the walls of the chamber, you see the city light up as the echoes reach their destinations. For one breathtaking moment, everything is illuminated—the complete pattern visible for the first time.", "\n", "^Then it fades, not into darkness, but into peace. The compulsion to remember, to preserve, to echo—it dissipates.", "\n", "^The column of light dims, but doesn't go out entirely. Something new begins to form at its center: not memory, but possibility.", "\n", "^You leave the Memory Core changed. The emblem on your chest no longer glows, but feels warm against your skin. Your journey through echoes has ended, but something else has begun.", "\n", "^As you emerge from the underground, the ruins look different—not restored, but unburdened. Ready for what comes next.", "\n", ["ev", "str", "The End", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "DONE",
                    "#": "ending:release"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "rebirth_ending": [
        ["^The echoes around you begin to move. Not drifting away, not returning to the column, but dancing. Merging. Transforming.", "\n", "^The patterns they form are unlike anything you saw in the ruins. These aren't memories anymore—they're possibilities. Not echoes of what was, but whispers of what could be.", "\n", "^The column pulses in response, its light changing from the stark white of memory to a spectrum of colors that have no names. The walls of the chamber transform, circuitry flowering into organic patterns.", "\n", "^You understand: this place was never meant to simply preserve the past. It was waiting for someone to see beyond restoration to reinvention.", "\n", "^As the transformation spreads beyond the chamber, you feel the entire underground complex awakening to a new purpose. Not a city reborn, but something else. Something that has never existed before.", "\n", "^The emblem on your chest shifts and changes, matching the new patterns all around you. The old cycle is broken. The new one has just begun.", "\n", "^And when you finally emerge into the world above, where the ruins once stood, you find neither restoration nor continued decay, but growth of an entirely different kind.", "\n", ["ev", "str", "The End", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "DONE",
                    "#": "ending:rebirth"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ]
};
