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
                    "->": "demo_ending",
                    "#": "ghost_garden show_watcher"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "demo_ending": [
        ["^This is as far as the demo version goes. In the full experience, your journey would continue:", "\n", "^- You would meet The Silent Watcher and learn more about your connection to this world", "\n", "^- You would discover the Memory Core beneath the city", "\n", "^- You would make choices that determine the fate of the echoes you've collected", "\n", ["ev", "str", "End Demo", "/str", "/ev", {
                "*": 0,
                "flg": 18
            }], {
                "c-0": ["\n", {
                    "->": "DONE",
                    "#": "ending:demo"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ]
};
