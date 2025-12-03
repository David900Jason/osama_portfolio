// Course Category Filter Functionality
document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const featuredCourseCards = document.querySelectorAll(
        ".featured-courses-section .course-card"
    );
    const allCourseCards = document.querySelectorAll(
        ".all-courses-section .course-card"
    );

    // Initialize all courses as visible
    featuredCourseCards.forEach((card) => {
        card.classList.add("visible");
    });
    allCourseCards.forEach((card) => {
        card.classList.add("visible");
    });

    // Add click event listeners to category buttons
    categoryButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const selectedCategory = this.getAttribute("data-category");

            // Remove active class from all buttons
            categoryButtons.forEach((btn) => btn.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");

            // Filter courses in both sections
            filterCoursesInSection(
                selectedCategory,
                featuredCourseCards,
                "featured"
            );
            filterCoursesInSection(selectedCategory, allCourseCards, "all");
        });
    });

    function filterCoursesInSection(category, courseCards, sectionType) {
        let visibleCourses = 0;
        const placeholderId =
            sectionType === "featured"
                ? "no-featured-courses-placeholder"
                : "no-all-courses-placeholder";
        const placeholder = document.getElementById(placeholderId);

        courseCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");

            if (category === "all" || cardCategory === category) {
                card.classList.remove("hidden");
                card.classList.add("visible");
                visibleCourses++;
            } else {
                card.classList.remove("visible");
                card.classList.add("hidden");
            }
        });

        // Show/hide placeholder based on visible courses
        if (visibleCourses > 0) {
            if (placeholder) {
                placeholder.style.display = "none";
            }
        } else {
            if (placeholder) {
                placeholder.style.display = "block";
            }
        }
    }

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
});
