// Wrap code in a DOMContentLoaded event listener to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".sticky");

    const followStrengthx = 0.3; // Adjust follow strength (higher value = more movement)
    const followStrengthy = 0.6; // Adjust follow strength (higher value = more movement)

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


// navbar.js
gsap.registerPlugin(ScrollTrigger);

const circle = document.querySelector('.circle');

gsap.to(circle, {
    duration: 0.5,
    delay: 0.5,
    scale: 1.5,
    ease: "in",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 85%",
        end: "top 70%",
        scrub: true,
    }
});