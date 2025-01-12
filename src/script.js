// Select the menu icon and navbar
let menu = document.querySelector('#menu-icon'); // Select the menu icon using its ID
let navbar = document.querySelector('.navbar'); // Select the navbar using its class

// Toggle the navbar visibility when the menu icon is clicked
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Change the icon to 'X' when the menu is open
    navbar.classList.toggle('active'); // Show/hide the navbar
}

// Close the navbar when scrolling
window.onscroll = () => {
    menu.classList.remove('bx-x'); // Remove the 'X' icon
    navbar.classList.remove('active'); // Hide the navbar
}

// Smooth scroll for anchor links (if you have any anchor links in the navbar)
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const target = document.querySelector(this.getAttribute('href')); // Get the target element
        target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar a'); // Select all navbar links

    // Function to set the active link based on the URL
    function setActiveLink() {
        const currentPath = window.location.hash; // Get the hash (URL fragment)
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active'); // Add active class to matching link
            } else {
                link.classList.remove('active'); // Remove active class from others
            }
        });
    }

    // Run this function at page load
    setActiveLink();

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class from all links
            links.forEach(l => l.classList.remove('active'));
            // Add the active class to the clicked link
            this.classList.add('active');
        });
    });
});

// Select the menu icon and navmenu
let navmenu = document.querySelector('.navmenu'); // Select the navmenu using its class

// Toggle the navmenu visibility when the menu icon is clicked
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Change the icon to 'X' when the menu is open
    navmenu.classList.toggle('active'); // Show/hide the navmenu
}

// Close the navmenu when scrolling
window.onscroll = () => {
    menu.classList.remove('bx-x'); // Remove the 'X' icon
    navmenu.classList.remove('active'); // Hide the navmenu
}

// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const target = document.querySelector(this.getAttribute('href')); // Get the target element
        target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a'); // Select all navbar links

    // Function to set the active link based on the URL
    function setActiveLink() {
        const currentPath = window.location.hash; // Get the hash (URL fragment)
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active'); // Add active class to matching link
            } else {
                link.classList.remove('active'); // Remove active class from others
            }
        });
    }

    // Run this function at page load
    setActiveLink();

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add the active class to the clicked link
            this.classList.add('active');
        });
    });
});
