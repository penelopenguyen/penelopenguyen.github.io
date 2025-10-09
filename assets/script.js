document.addEventListener("DOMContentLoaded", function() {
    // ===== Typewriter effect =====
    const text = "Hello! Xin chào! I’m Penelope Gia Bao Huu Nguyen, a doctoral researcher in digital humanities.";
    const speed = 40; // typing speed in milliseconds
    let i = 0;
    const typewriterTarget = document.getElementById("typewriter");

    function typeWriter() {
        if (i < text.length) {
            typewriterTarget.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    // ===== Rotating name effect =====
    const names = ["Gia Bảo", "家寶", "家宝", "Penelope", "Penélope", "Pénélope", "Penny"];
    const rotator = document.getElementById("name-rotator");
    let index = 0;
    const delay = 2000; // time each name is shown in ms

    function rotateName() {
        rotator.textContent = names[index];
        index = (index + 1) % names.length;
        setTimeout(rotateName, delay);
    }

    rotateName();
});
