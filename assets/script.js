document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello! Xin chào! I’m Penelope Gia Bao Huu Nguyen, an doctoral researcher in digital humanities.";
    const speed = 40; // typing speed in milliseconds
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

document.addEventListener("DOMContentLoaded", function() {
    const names = ["Gia Bảo", "家寶", "家宝", "Penelope", "Penélope", "Pénélope", "Penny"];
    const rotator = document.getElementById("name-rotator");
    let index = 0;
    const delay = 2000; // time (ms) each name is shown

    function rotateName() {
        rotator.textContent = names[index];
        index = (index + 1) % names.length;
        setTimeout(rotateName, delay);
    }

    rotateName();
});

