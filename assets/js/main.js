document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Logic
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.mobile-nav');
    
    if(toggle) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            // Animate toggle lines
            const spans = toggle.querySelectorAll('span');
            spans[0].style.transform = menu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.transform = menu.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
        });
    }

    // 2. Scroll Animation Observer
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 3. Navbar Scroll Class
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });
});