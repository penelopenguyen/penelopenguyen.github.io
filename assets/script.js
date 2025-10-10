window.addEventListener('load', function () {
  // ===== Typewriter effect =====
  const typewriterTarget = document.getElementById('typewriter');
  const text = "Hello! Xin chào! I’m Penelope Gia Bao Huu Nguyen, a doctoral researcher in digital humanities.";
  const speed = 40;
  let i = 0;

  function typeWriter() {
    if (!typewriterTarget) return;
    if (i < text.length) {
      typewriterTarget.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  if (typewriterTarget) {
    typewriterTarget.textContent = ''; // reset if re-run
    typeWriter();
  }

  // ===== Rotating name effect =====
  const rotator = document.getElementById('name-rotator');
  const names = ['Gia Bảo', '家寶', '家宝', 'Penelope', 'Penélope', 'Pénélope', 'Penny'];
  let index = 0;
  const delay = 2000;

  function rotateName() {
    if (!rotator) return;
    rotator.textContent = names[index];
    index = (index + 1) % names.length;
    setTimeout(rotateName, delay);
  }
  if (rotator) rotateName();

  // ===== Show Email button =====
  const showBtn = document.getElementById('show-email');
  const email = document.getElementById('email');

  if (showBtn && email) {
    showBtn.addEventListener('click', function () {
      email.style.display = 'inline';
      showBtn.style.display = 'none';
    });
  }

  // ===== Mobile Menu Toggle =====
  const menu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (menu && navLinks) {
    menu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // ===== Toggle individual news item (accordion) =====
  document.querySelectorAll('.news-title').forEach(title => {
    title.addEventListener('click', function() {
        const content = this.closest('.news-item').querySelector('.news-content');
        if (content) {
            content.classList.toggle('visible');  // toggle simple show/hide
        }
    });
  });

  // ===== Automatically show max 5 latest, move rest to "old-news" =====
  const newsItems = Array.from(document.querySelectorAll('#news > .news-item'));
  const oldNewsContainer = document.getElementById('old-news');
  const maxVisible = 5;

  if (oldNewsContainer && newsItems.length > maxVisible) {
    for (let k = maxVisible; k < newsItems.length; k++) {
      oldNewsContainer.appendChild(newsItems[k]);
    }
  }

  // ===== Toggle previous updates section =====
  const showOlderBtn = document.getElementById('show-older-news');
  if (showOlderBtn && oldNewsContainer) {
    // Hide the button if there is nothing inside old-news
    if (!oldNewsContainer.hasChildNodes()) {
      showOlderBtn.style.display = 'none';
    } else {
      // start hidden by default (optional)
      if (!oldNewsContainer.classList.contains('hidden')) {
        oldNewsContainer.classList.add('hidden');
      }
      showOlderBtn.addEventListener('click', () => {
        const isHidden = oldNewsContainer.classList.toggle('hidden');
        showOlderBtn.textContent = isHidden ? '📜 Previous Updates ▼' : '🔺 Hide Previous Updates';
      });
    }
  }
});
