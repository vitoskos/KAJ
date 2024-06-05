window.onload = function() {
    // Function to load a script dynamically
    function loadScript(name) {
        // Remove any existing script first
        var existingScript = document.getElementById('dynamic-script');
        if (existingScript) {
            existingScript.parentNode.removeChild(existingScript);
        }
        
        var script = document.createElement('script');
        script.id = 'dynamic-script';
        script.src = name + '.js';
        document.body.appendChild(script);
    }

    // Load initial script based on URL hash
    var section = window.location.hash.substring(1);  // Remove the '#' character
    if (section) {
        loadScript(section);
    }

    window.onhashchange = function() {
        // Load new script when URL hash changes
        section = window.location.hash.substring(1);
        loadScript(section);
    };

    // Add onclick event listeners to links
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var section = this.getAttribute('href').substring(1); // Remove the '#' character
            window.location.hash = section;
        });
    });

    // Navbar for mobile
    document.querySelector('.menu-button').addEventListener('click', function() {
        let nav = document.querySelector('nav');
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });

    // Theme
    var theme = document.getElementById('theme');
    var currentTheme = sessionStorage.getItem('theme');
    if (currentTheme) {
        theme.setAttribute('href', currentTheme + '.css');
    } else {
        theme.setAttribute('href', 'light.css');
    }
};
