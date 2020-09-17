export default function initAnimateScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowHeight = window.innerHeight * 0.6;

        function animateScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowHeight) < 0;
                if (isSectionVisible) {
                    section.classList.add('active');
                }
                else {
                    section.classList.remove('active');
                }
            });
        }

        animateScroll();

        window.addEventListener('scroll', animateScroll);
    }
}
