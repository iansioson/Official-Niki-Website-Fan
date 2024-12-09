// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handler
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields');
                return;
            }
            
            // TODO: Add actual form submission logic (e.g., fetch API or form service)
            alert('Message sent! We will get back to you soon.');
            this.reset();
        });
    }
});

// Active navigation state
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Simple animations using GSAP (if included)
if (typeof gsap !== 'undefined') {
    // Example animation for hero section
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Stagger animation for music or tour cards
    gsap.from('.album-card, .tour-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power2.out'
    });
}