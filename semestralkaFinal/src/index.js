

// adds script to the page
window.onload = function() {
//check for hash in URL

    if (!window.location.hash.substring(1)) {
        window.location.hash = 'main';
    }
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
// Interact with SVG elements: You can add event listeners to SVG elements just like any other HTML elements. For example, you can change the color of a circle when it's clicked:

let isCircle = true; // Start with a circle
let svg = document.querySelector('svg');

// Function to toggle the shape
function toggleShape() {
    // Remove the current shape
    shape.parentNode.removeChild(shape);

    if (isCircle) {
        // If the current shape is a circle, create a square
        shape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        shape.setAttribute('id', 'shape');
        shape.setAttribute('x', '10');
        shape.setAttribute('y', '5');
        shape.setAttribute('width', '10');
        shape.setAttribute('height', '10');
        shape.setAttribute('fill', 'red');
    } else {
        // If the current shape is a square, create a circle
        shape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        shape.setAttribute('id', 'shape');
        shape.setAttribute('cx', '15');
        shape.setAttribute('cy', '10');
        shape.setAttribute('r', '5');
        shape.setAttribute('fill', 'blue');
    }

    // Add the new shape to the SVG
    svg.appendChild(shape);

    // Add the event listener to the new shape
    shape.addEventListener('click', toggleShape);

    // Toggle the isCircle variable
    isCircle = !isCircle;
}

// Create the initial circle
let shape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
shape.setAttribute('id', 'shape');
shape.setAttribute('cx', '15');
shape.setAttribute('cy', '10');
shape.setAttribute('r', '5');
shape.setAttribute('fill', 'blue');
svg.appendChild(shape);

// Add the event listener to the initial circle
shape.addEventListener('click', toggleShape);