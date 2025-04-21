// Story content generated from Ink files
// This would normally be compiled from .ink files
window.storyContent = {
    "inkVersion": 20,
    "root": [
        ["^You open your eyes, though you're not sure if they were ever closed.", "\n", "^The ground beneath you is cracked stone. Cold. Damp.", "\n", "^Above, a bloated moon clings to a colorless sky. Somewhere in the distance, something breathes—not with lungs, but with **time**.", "\n"],
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
                "->": "DONE"
            }, {
                "#f": 5
            }],
            "g-1": ["^The stones shift beneath your feet.", "\n", "^Each step echoes longer than it should.", "\n", "^In the distance, you hear a hum — not mechanical, but alive.", "\n", "^Something waits to be seen.", "\n", {
                "->": "first_choice"
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
                "#t": "timer-standard default-choice:1",
                "g-0": ["^You brush aside the debris and reveal a glowing shard.", "\n", "^It pulses gently in your hand.", "\n", "^It is warm. Familiar.", "\n", "^You don't remember what it is—but it remembers you.", "\n", {
                    "->": "first_choice_after_shrine",
                    "#t": "echo-lore echo-12"
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
                    "->": "keep_exploring"
                }, "\n", {
                    "#f": 5
                }]
            }], {
                "#f": 1
            }
    ],
    
    "keep_exploring": [
        ["^The road narrows. The air tightens.", "\n", "^You walk toward a broken arch, half-submerged in soil and time.", "\n", ["ev", "str", "Explore the city ruins further", "/str", "/ev", {
                "*": ".^.c-0",
                "c-0": ["\n", {
                    "->": "keep_exploring.0.g-0"
                }, "\n", {
                    "#f": 5
                }]
            }],
            {
                "#f": 1,
                "#t": "city_ruins",
                "g-0": ["^You move deeper into the ruins, past collapsed buildings and fractured streets.", "\n", "^The glow from your chest illuminates fragments of a life that once existed here.", "\n", "^This is as far as this demo goes. In the full game, you would continue your journey to discover the lost echoes and unravel the mystery of the ruined city.", "\n", {
                    "->": "DONE",
                    "#t": "ending:demo"
                }, {
                    "#f": 5
                }]
            }
        ]
    ]
};
