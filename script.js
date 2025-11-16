/* -------------------- SCROLL ANIMATIONS -------------------- */
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 1s ease-out";
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
sliders.forEach(slider => appearOnScroll.observe(slider));

/* -------------------- TYPING ANIMATION -------------------- */
const heroText = "Welcome to Machine Learning Mavericks";
let i = 0;
const speed = 100;

function typeWriter() {
    if (i < heroText.length) {
        const h2 = document.querySelector('.hero-content h2');
        h2.innerHTML += heroText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.querySelector('.hero-content h2').innerHTML = '';
window.addEventListener('load', typeWriter);

/* -------------------- BUTTON HOVER EFFECT -------------------- */
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = "scale(1.05)";
        btn.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    });
});

/* -------------------- GALLERY TILT EFFECT -------------------- */
const galleryImgs = document.querySelectorAll('.gallery-container img');

galleryImgs.forEach(img => {
    img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;
        const rotateX = ((y - midY) / midY) * 10;
        const rotateY = ((x - midX) / midX) * 10;
        img.style.transform = `scale(1.05) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
        img.style.transition = "transform 0.1s";
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
        img.style.transition = "transform 0.3s";
    });
});

/* -------------------- FLOATING SECTIONS -------------------- */
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.transition = "transform 6s ease-in-out";
    setInterval(() => {
        const randomX = (Math.random()-0.5)*4;
        const randomY = (Math.random()-0.5)*4;
        section.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 5000);
});
