// ======================================================
// ECHOES OF THE PAST - ECHO JOURNAL SYSTEM
// ======================================================
// This file implements the memory tracking system that records
// which echoes the player has discovered, locations visited,
// and significant events experienced during gameplay.
//
// The journal serves both as a narrative tool (allowing players 
// to review what they've learned) and a gameplay mechanic
// (certain paths only open after specific echoes are found).
// ======================================================
// EXPANSION POTENTIAL:
// - Visual journal interface with CSS/JS integration
// - Echo categories with unlock rewards
// - Echo relationship mapping to show connections
// - Achievement system based on collection patterns
// - Dynamic background that changes with echo count
// ======================================================

// ======================================================
// UTILITY FUNCTIONS
// ======================================================

// Returns the total number of echoes remembered
=== function echo_count() ===
~ return remembered_echoes

// Checks if a specific echo has been remembered
// Used for conditional narrative branches
=== function has_echo(echo_id) ===
{
    - echo_id == 3: ~ return remembered_echo_3
    - echo_id == 7: ~ return remembered_echo_7
    - echo_id == 9: ~ return remembered_echo_9
    - echo_id == 12: ~ return remembered_echo_12
    - echo_id == 16: ~ return remembered_echo_16
    - echo_id == 18: ~ return remembered_echo_18
    - echo_id == 22: ~ return remembered_echo_22
    - echo_id == 24: ~ return remembered_echo_24
    - echo_id == 30: ~ return remembered_echo_30
    - echo_id == 33: ~ return remembered_echo_33
    - echo_id == 37: ~ return remembered_echo_37
    - echo_id == 41: ~ return remembered_echo_41
    - else: ~ return false
}

// Records that a specific echo has been remembered
// Called when the player discovers an echo fragment
=== function add_echo(echo_id) ===
{
    - echo_id == 3: ~ remembered_echo_3 = true
    - echo_id == 7: ~ remembered_echo_7 = true
    - echo_id == 9: ~ remembered_echo_9 = true
    - echo_id == 12: ~ remembered_echo_12 = true
    - echo_id == 16: ~ remembered_echo_16 = true
    - echo_id == 18: ~ remembered_echo_18 = true
    - echo_id == 22: ~ remembered_echo_22 = true
    - echo_id == 24: ~ remembered_echo_24 = true
    - echo_id == 30: ~ remembered_echo_30 = true
    - echo_id == 33: ~ remembered_echo_33 = true
    - echo_id == 37: ~ remembered_echo_37 = true
    - echo_id == 41: ~ remembered_echo_41 = true
}

// EXPANSION POTENTIAL: Add function to check for specific echo combinations
// that could unlock special paths or narrative insights
// === function has_echo_pattern(pattern_id) ===
// Example pattern checks: Technical + Watcher echoes, all Child echoes, etc.

// ======================================================
// STATE VARIABLES - ECHO TRACKING
// ======================================================

// Individual flags for each possible echo fragment
// These track which specific echoes have been discovered
VAR remembered_echo_3 = false   // Architect's Note
VAR remembered_echo_7 = false   // Memory Engineer's Journal
VAR remembered_echo_9 = false   // Personal Letter
VAR remembered_echo_12 = false  // Technician's Log
VAR remembered_echo_16 = false  // Echo Research Log
VAR remembered_echo_18 = false  // Maintenance Report
VAR remembered_echo_22 = false  // Child's Drawing
VAR remembered_echo_24 = false  // Watcher's Field Report
VAR remembered_echo_30 = false  // Water Treatment Log
VAR remembered_echo_33 = false  // Security Override Protocol
VAR remembered_echo_37 = false  // Torn Journal Page
VAR remembered_echo_41 = false  // Scavenger's Sketch

// EXPANSION POTENTIAL: Add more echo categories and types
// Examples: Personal memories, technical records, warnings, prophecies

// Total count of echo fragments found
// Used for conditional narrative branches and ending determination
VAR remembered_echoes = 0

// ======================================================
// STATE VARIABLES - KEY ITEMS & LOCATIONS
// ======================================================

// Tracks significant items and events
VAR found_key_echo = false      // The mask from the underwater column
VAR entered_memory_core = false // Whether player has reached the core

// Tracks which areas the player has visited
// Used for journal display and potential future mechanics
VAR visited_shrine = false
VAR visited_cavern = false
VAR visited_gate = false
VAR visited_garden = false
VAR visited_pavilion = false
VAR encountered_watcher = false

// EXPANSION POTENTIAL: Add variables to track player's emotional choices
// VAR chose_to_remember = 0      // Times player chose to remember vs. ignore
// VAR follows_watcher = false    // Whether player followed Watcher's guidance
// VAR echo_affinity = ""         // Player's echo "type" based on choices

// ======================================================
// JOURNAL INTERFACE
// ======================================================

// This function presents the journal interface to the player
// It can be called from any point in the main narrative
=== view_journal ===
// Display the journal when requested by the player

*[View Journal]
    # JOURNAL: Echoes of the Past
    You have remembered {remembered_echoes} echo{remembered_echoes != 1: es}.
    
    # Locations Discovered:
    // Only show locations that have been visited
    {visited_shrine: * The Forgotten Shrine}
    {visited_cavern: * The Whisper Caverns}
    {visited_gate: * The Memory Gate}
    {visited_garden: * The Ghost Garden}
    {visited_pavilion: * The Echo Pavilion}
    {entered_memory_core: * The Memory Core}
    
    # Notable Encounters:
    // Only show encounters that have happened
    {encountered_watcher: * The Silent Watcher}
    {found_key_echo: * The Faceless Mask}
    
    # Remembered Echoes:
    // Only show echoes that have been discovered
    {remembered_echo_3: * Echo #03 - Architect's Note}
    {remembered_echo_7: * Echo #07 - Memory Engineer's Journal}
    {remembered_echo_9: * Echo #09 - Personal Letter}
    {remembered_echo_12: * Echo #12 - Technician's Log}
    {remembered_echo_16: * Echo #16 - Echo Research Log}
    {remembered_echo_18: * Echo #18 - Maintenance Report}
    {remembered_echo_22: * Echo #22 - Child's Drawing}
    {remembered_echo_24: * Echo #24 - Watcher's Field Report}
    {remembered_echo_30: * Echo #30 - Water Treatment Log}
    {remembered_echo_33: * Echo #33 - Security Override Protocol}
    {remembered_echo_37: * Echo #37 - Torn Journal Page}
    {remembered_echo_41: * Echo #41 - Scavenger's Sketch}
    
    // EXPANSION POTENTIAL: Add a "Read Echo Details" submenu that allows
    // players to revisit the full text of echoes they've already found
    
-> DONE 