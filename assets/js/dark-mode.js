document.addEventListener('DOMContentLoaded', function() {
    // Update selector to target the aux link specifically
    const darkModeToggle = document.querySelector('a[href="#"][aria-label="Dark Mode"]');
    
    if (darkModeToggle) {  // Add check to ensure element exists
        darkModeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }
});

// Add a menu at the top for dark mode toggle
const menu = document.createElement('div');
menu.innerHTML = '<a href="#" id="dark-mode-toggle">Toggle Dark Mode</a>';
document.body.insertBefore(menu, document.body.firstChild);

const darkModeToggle = document.getElementById('dark-mode-toggle'); 