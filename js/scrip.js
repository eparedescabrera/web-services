document.querySelectorAll('.card').forEach((card, index) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
  card.style.animationDelay = `${index * 0.3}s`;
});

const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.getElementById('menuList');

if (menuToggle && menuList) {
  menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('menu-open');
    const isOpen = menuList.classList.contains('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  menuList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuList.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
    contactForm.reset();
  });
}

const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.card img').forEach((img) => {
  img.addEventListener('click', function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

if (closeBtn) {
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };
}

if (modal) {
  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
}
