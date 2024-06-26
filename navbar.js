document.addEventListener('DOMContentLoaded', () => {
    gsap.from('#nav #sections #section', {
        duration: 1,
        x: 20,// Start off-screen to the right
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1, // Staggered animation
        delay: 0.2, // Delay after name animation
    });
});

// Wrap code in a DOMContentLoaded event listener to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".hover-cursor h4");

    const followStrengthx = 0.3; // Adjust follow strength (higher value = more movement)
    const followStrengthy = 0.5; // Adjust follow strength (higher value = more movement)

    // Add event listeners to each section
    sections.forEach(section => {
        section.addEventListener("mousemove", function(dets){
            // GSAP animation to follow mouse within section bounds
            gsap.to(section, {
                duration: 0.3,
                x: (dets.x - section.offsetLeft - (section.offsetWidth / 2)) * followStrengthx,
                y: (dets.y - section.offsetTop - (section.offsetHeight / 2)) * followStrengthy,
                ease: "power3.out"
            });
        });

        section.addEventListener("mouseleave", () => {
            // Return section to original position on mouseleave
            gsap.to(section, {
                duration: 0.4,
                x: 0,
                y: 0,
                ease: "bounce.out"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const btnClick = document.querySelector('.name-bar');
    const cbd = document.querySelector('.cbn');
    const cb = document.querySelector('.code-by');

    cbWidth = cb.offsetWidth;

    btnClick.addEventListener('mouseenter', () => {
        gsap.to(cbd, { x: -cbWidth, duration: 1, ease: "power1.inOut" }); // Adjust to ensure it stops before the copyright symbol
    });

    btnClick.addEventListener('mouseleave', () => {
        gsap.to(cbd, { x: 0, duration: 1, ease: "bounce.out" });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // GSAP animation for opacity change on hover
    const elements = document.querySelectorAll('#sections h4, #nav h2');

    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, { opacity: 1, duration: 0.3 });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(element, { opacity: 0.8, duration: 0.3 });
        });
    });
    
});

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all parallax layers
const parallaxLayers = document.querySelectorAll('.parallax-layer');

// Create a parallax effect for each layer
parallaxLayers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');

    gsap.to(layer, {
        y: () => window.innerHeight * speed * -1, // Calculate the total movement
        ease: "none",
        scrollTrigger: {
            trigger: document.body, // Use the entire body as the trigger
            start: "top top",
            end: "bottom bottom",
            scrub: true, // Smooth scrubbing effect
            invalidateOnRefresh: true // Recalculate on window resize
        }
    });
});









