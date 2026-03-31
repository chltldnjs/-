document.addEventListener('DOMContentLoaded', () => {
    // Highlight active link based on current path
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Default active parsing (since file:// protocols behave differently locally)
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (currentPath.endsWith(linkHref)) {
            link.classList.add('active');
        } else if (currentPath.endsWith('/') && linkHref === 'index.html') {
            link.classList.add('active');
        }
    });

    // Form Submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission
            const name = document.getElementById('name').value;
            alert(`감사합니다, ${name}님! 메시지가 성공적으로 전송되었습니다. (데모 버전)`);
            contactForm.reset();
        });
    }

    // Parallax effect on mouse move in background
    document.addEventListener('mousemove', (e) => {
        const xCoord = (window.innerWidth / 2 - e.pageX) / 50;
        const yCoord = (window.innerHeight / 2 - e.pageY) / 50;
        
        const glassCards = document.querySelectorAll('.glass-card');
        glassCards.forEach(card => {
            // Apply subtle tilt effect on mouse movement globally
            if(window.innerWidth > 768) { 
                card.style.transform = `perspective(1000px) rotateX(${yCoord * 0.5}deg) rotateY(${xCoord * 0.5}deg) translateY(-5px)`;
            }
        });
    });
    
    // Reset transform when mouse leaves
    document.addEventListener('mouseleave', () => {
        const glassCards = document.querySelectorAll('.glass-card');
        glassCards.forEach(card => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
        });
    });
});
