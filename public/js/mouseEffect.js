document.addEventListener("DOMContentLoaded", () => {
    const glow = document.getElementById("mouse-glow");

    document.addEventListener("mousemove", (event) => {
        const { clientX: x, clientY: y } = event;

        // Move the glow effect dynamically
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;

        // Force browser to repaint (helps in some cases)
        glow.style.transform = `translate(-50%, -50%)`;
    });
});
