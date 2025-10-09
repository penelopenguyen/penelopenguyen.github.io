const text = "Hello! Xin chào! I’m Penelope Gia Bao Huu Nguyen, an doctoral researcher in digital humanities.";
let i = 0;
const target = document.querySelector('.welcome p');
target.textContent = "";

function typeWriter() {
    if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    }
}
typeWriter();
