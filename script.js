document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('.section');

    const animateSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s forwards';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateSection, {
        root: null,
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Hiệu ứng chữ chạy
    const textWrapper = document.querySelector('.header h1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.header h1 .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i + 1)
        }).add({
            targets: '.header h1',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
});