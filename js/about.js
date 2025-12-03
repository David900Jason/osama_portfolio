// About Page Animations and Functionality
document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scroll behavior for scroll indicator
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
        scrollIndicator.addEventListener("click", function () {
            const nextSection = document.querySelector("main");
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });

        // Add cursor pointer to indicate it's clickable
        scrollIndicator.style.cursor = "pointer";
    }

    // Add smooth scroll behavior for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.style.animationPlayState = "paused";
        observer.observe(section);
    });

    // Add hover effects to section icons
    const sectionIcons = document.querySelectorAll(".section-icon");
    sectionIcons.forEach((icon) => {
        icon.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-5px) rotate(5deg)";
        });

        icon.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0) rotate(0)";
        });
    });

    // Add hover effects to expertise items
    const expertiseItems = document.querySelectorAll(".expertise-item");
    expertiseItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
            this.style.transform = "translateX(10px)";
            this.style.boxShadow = "0 5px 20px -5px var(--navy-shadow)";
        });

        item.addEventListener("mouseleave", function () {
            this.style.transform = "translateX(0)";
            this.style.boxShadow = "none";
        });
    });

    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-10px)";
            this.style.boxShadow = "0 20px 40px -15px var(--navy-shadow)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "none";
        });
    });

    // Add entrance animations for initial load
    const missionSection = document.querySelector(".mission-section");
    const storySection = document.querySelector(".story-section");
    const expertiseSection = document.querySelector(".expertise-section");
    const servicesSection = document.querySelector(".services-section");

    setTimeout(() => {
        if (missionSection) {
            missionSection.style.opacity = "1";
            missionSection.style.transform = "translateY(0)";
        }
    }, 200);

    setTimeout(() => {
        if (storySection) {
            storySection.style.opacity = "1";
            storySection.style.transform = "translateY(0)";
        }
    }, 400);

    setTimeout(() => {
        if (expertiseSection) {
            expertiseSection.style.opacity = "1";
            expertiseSection.style.transform = "translateY(0)";
        }
    }, 600);

    setTimeout(() => {
        if (servicesSection) {
            servicesSection.style.opacity = "1";
            servicesSection.style.transform = "translateY(0)";
        }
    }, 800);
});
