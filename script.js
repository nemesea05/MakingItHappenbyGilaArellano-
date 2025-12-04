// Animate-in on load
window.addEventListener("load", () => {
    const animated = document.querySelectorAll(".animated");

    animated.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("animate-in");
        }, i * 200);
    });

    // Letter stagger animation
    const letters = document.querySelectorAll(".letter");

    letters.forEach((letter, i) => {
        setTimeout(() => {
            letter.classList.add("letter-visible");
        }, 800 + i * 150);
    });
});
