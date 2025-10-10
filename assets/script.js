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

    // ===== Toggle news content when clicking a headline =====
    function toggleNews(element) {
      const content = element.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    }

    // ===== Toggle Previous Updates section =====
    function togglePrevious() {
      const oldNews = document.getElementById("old-news");
      const toggle = document.querySelector(".toggle-previous");
      const isHidden = oldNews.classList.toggle("hidden");
      toggle.textContent = isHidden ? "Previous updates ▼" : "Previous updates ▲";
    }
    // ===== Optional: automatically move news beyond 5 into "Previous Updates" =====
    const newsItems = document.querySelectorAll("#news > .news-item");
    const oldNewsContainer = document.getElementById("old-news");
    const maxVisible = 5;

    if (newsItems.length > maxVisible) {
      for (let i = maxVisible; i < newsItems.length; i++) {
        oldNewsContainer.appendChild(newsItems[i]);
      }
    }

});
