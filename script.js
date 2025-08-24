let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }

    // Toggle navbar
    navbar.classList.toggle('active');
};

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove menu while scrolling
    menuIcon.classList.remove('fa-xmark');
menuIcon.classList.add('fa-bars');
navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box , .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// // Typed.js effect
// const typed = new Typed('.multiple-text', {
//     strings: ['Frontend Developer', 'Youtuber', 'Blogger'],
//     typeSpeed: 100,
//     backSpeed: 80,
//     backDelay: 1500,
//     loop: true
// });
//rotating words
const words = ['Software Engineer','Frontend Developer', 'Mobile Application Developer','Flutter developer'];
let index = 0;
const rotatingSpan = document.querySelector('.rotating-words');

setInterval(() => {
  rotatingSpan.style.opacity = 0;
  rotatingSpan.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    index = (index + 1) % words.length;
    rotatingSpan.textContent = words[index];
    rotatingSpan.style.opacity = 1;
    rotatingSpan.style.transform = 'translateY(0)';
  }, 300);
}, 3000);


