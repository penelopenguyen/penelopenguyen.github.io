window.addEventListener("load", function() {
    // ===== Typewriter effect =====
    const typewriterTarget = document.getElementById("typewriter");
    const text = "Hello! Xin chào! I’m Penelope Gia Bao Huu Nguyen, a doctoral researcher in digital humanities.";
    const speed = 40;
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterTarget.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    if (typewriterTarget) typeWriter();

    // ===== Rotating name effect =====
    const rotator = document.getElementById("name-rotator");
    const names = ["Gia Bảo", "家寶", "家宝", "Penelope", "Penélope", "Pénélope", "Penny"];
    let index = 0;
    const delay = 2000;

    function rotateName() {
        if (rotator) {
            rotator.textContent = names[index];
            index = (index + 1) % names.length;
        }
        setTimeout(rotateName, delay);
    }
    if (rotator) rotateName();

    // ===== Show Email button =====
    const showBtn = document.getElementById("show-email");
    const email = document.getElementById("email");

    if (showBtn && email) {
        showBtn.addEventListener("click", function() {
            email.style.display = "inline";
            showBtn.style.display = "none";
        });
    }
});
