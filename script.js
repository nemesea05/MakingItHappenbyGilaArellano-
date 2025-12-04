// CTA Button Click
document.getElementById("ctaButton").addEventListener("click", () => {
    alert("Welcome to MyStartup! Let's build something amazing.");
});

// Header shrink on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if(window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
