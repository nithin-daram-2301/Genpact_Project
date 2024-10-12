document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .activity-card');

    const animateOnScroll = () => {
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < windowHeight - 100) {
                card.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check in case cards are already in view

    // Smooth scroll for "Start Your Journey" button
    const ctaButton = document.querySelector('.cta');
    ctaButton.addEventListener('click', () => {
        document.querySelector('.destinations').scrollIntoView({ behavior: 'smooth' });
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            body.style.display = body.style.display === "block" ? "none" : "block";
        });
    });

    // Review slider functionality
    const slides = document.querySelectorAll('.review-slide');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    };

    document.querySelector('.next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
});
