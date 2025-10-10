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
    // ===== Mobile Menu Toggle =====
    const menu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    menu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

});

window.addEventListener("load", function() {

    // ===== Toggle news content when clicking a headline =====
    document.querySelectorAll(".news-title").forEach(title => {
        title.addEventListener("click", function() {
            const content = this.parentElement.querySelector(".news-content");
            if (!content) return;
            // Toggle display
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
        });
    });


    // ===== Automatically show max 5 latest, move rest to "old-news" =====
    const newsItems = Array.from(document.querySelectorAll("#news > .news-item"));
    const oldNewsContainer = document.getElementById("old-news");
    const maxVisible = 5;

    if (newsItems.length > maxVisible) {
        for (let i = maxVisible; i < newsItems.length; i++) {
            oldNewsContainer.appendChild(newsItems[i]);
        }
    }

    // ===== Toggle previous updates section =====
    const showOlderBtn = document.getElementById("show-older-news");
    showOlderBtn.addEventListener("click", () => {
        const isHidden = oldNewsContainer.classList.toggle("hidden");
        showOlderBtn.textContent = isHidden ? "📜 Previous Updates ▼" : "🔺 Hide Previous Updates";
    });

    // Hide toggle button if no old news
    if (!oldNewsContainer.hasChildNodes()) {
        showOlderBtn.style.display = "none";
    }

});
