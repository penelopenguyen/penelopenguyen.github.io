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

    // ===== Latest news toggle =====
    const newsToggles = document.querySelectorAll(".news-toggle");

    newsToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const newsItem = toggle.parentElement;
            newsItem.classList.toggle("active");
        });
    });
    
    // ===== Show only 5 latest news =====
    const allNews = document.querySelectorAll(".latest-news .news-item");
    const maxVisible = 5;
    const showOlderBtn = document.getElementById("show-older-news");

    if (allNews.length > maxVisible) {
      // hide older items
      for (let i = maxVisible; i < allNews.length; i++) {
        allNews[i].style.display = "none";
      }

      // toggle visibility when clicking "Previous Updates"
      showOlderBtn.addEventListener("click", () => {
        const isHidden = allNews[maxVisible].style.display === "none";
        for (let i = maxVisible; i < allNews.length; i++) {
          allNews[i].style.display = isHidden ? "block" : "none";
        }
        showOlderBtn.textContent = isHidden ? "🔺 Hide Previous Updates" : "📜 Previous Updates";
      });
    } else {
      // hide button if fewer than 5 items
      if (showOlderBtn) showOlderBtn.style.display = "none";
    }

});
