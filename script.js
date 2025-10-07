const splash = document.getElementById('splash');
const openBtn = document.getElementById('openBtn');
const main = document.getElementById('main-content');
const bgm = document.getElementById('bgm');

// Saat tombol "Buka Undangan" ditekan
openBtn.addEventListener('click', () => {
    splash.classList.add('fade-out');
    setTimeout(() => {
        splash.style.display = 'none';
        main.classList.remove('hidden');
        bgm.play();
    }, 1000);
});

// Animasi fade out untuk splash
const style = document.createElement('style');
style.textContent = `
  .fade-out {
    animation: fadeOut 1s ease forwards;
  }
  @keyframes fadeOut {
    to { opacity: 0; visibility: hidden; }
  }
`;
document.head.appendChild(style);

// Efek animasi scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    },
    { threshold: 0.2 }
);

document
    .querySelectorAll('section')
    .forEach((section) => observer.observe(section));
