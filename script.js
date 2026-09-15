const revealTargets = document.querySelectorAll(".content-section, .welcome-content-section");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealTargets.forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
});
