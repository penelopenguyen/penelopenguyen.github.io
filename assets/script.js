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


