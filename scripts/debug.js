// Debug script to log errors
console.log("Debug script loaded");

// Log all errors
window.onerror = function(message, source, lineno, colno, error) {
    console.error("Error:", message);
    console.error("Source:", source);
    console.error("Line:", lineno, "Column:", colno);
    console.error("Error object:", error);
    return false;
};

// Log when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM content loaded");
    
    // Check if key story content is available
    console.log("Story content available:", !!window.storyContent);
    
    // Check if makeChoice function is defined
    console.log("makeChoice function available:", typeof window.makeChoice === 'function');
    
    // Log initial button setup
    const buttons = document.querySelectorAll('.choice-button');
    console.log("Choice buttons found:", buttons.length);
    buttons.forEach((button, index) => {
        console.log(`Button ${index}:`, button.textContent, "Has onclick:", !!button.onclick);
    });
    
    // Test clicking the first button programmatically after a delay
    setTimeout(() => {
        const firstButton = document.querySelector('.choice-button');
        if (firstButton) {
            console.log("Attempting to programmatically click first button:", firstButton.textContent);
            try {
                // Try both methods
                if (typeof firstButton.onclick === 'function') {
                    console.log("Calling onclick handler directly");
                    firstButton.onclick();
                } else {
                    console.log("Using click() method");
                    firstButton.click();
                }
            } catch (e) {
                console.error("Error clicking button:", e);
            }
        }
    }, 3000);
    
    // Add debug info to the page
    const debugInfo = document.createElement('div');
    debugInfo.style.position = 'fixed';
    debugInfo.style.bottom = '10px';
    debugInfo.style.right = '10px';
    debugInfo.style.background = 'rgba(0,0,0,0.7)';
    debugInfo.style.color = 'white';
    debugInfo.style.padding = '10px';
    debugInfo.style.borderRadius = '5px';
    debugInfo.style.zIndex = '9999';
    debugInfo.style.fontSize = '12px';
    debugInfo.id = 'debug-info';
    debugInfo.innerHTML = 'Debug mode enabled. Check console for errors.';
    document.body.appendChild(debugInfo);
}); 