// Initialize AOS
AOS.init({
    duration: 1000,
    offset: 100,
    once: true
});

// Typing Animation
const typed = new Typed(".typing", {
    strings: ["Java Developer", "Web Developer", "Full Stack Developer", "Designer","Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Navbar Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 20);
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-btn i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change menu icon
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
    });
});

// Skill Bars Animation
const skillSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skill-per');

function showProgress() {
    skillBars.forEach(skill => {
        skill.style.width = skill.dataset.progress;
    });
}

function hideProgress() {
    skillBars.forEach(skill => {
        skill.style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});

// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formProps = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formProps);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});

// Initialize AOS with custom settings for skills section
AOS.init({
    duration: 800,
    offset: 100,
    delay: 100,
    once: true,
    easing: 'ease-in-out'
});

// Optional: Add smooth transition when hovering over skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
}); 