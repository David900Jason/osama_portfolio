// Enhanced Animation System for Index.html
class AnimationController {
    constructor() {
        this.roles = [
            "Script Writer",
            "Storyteller",
            "Screenwriting Expert",
            "Narrative Consultant",
            "Creative Writer",
        ];
        this.currentRoleIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typewriterSpeed = 100;
        this.deleteSpeed = 50;
        this.pauseDuration = 2000;

        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupTypewriter();
        this.setupScrollAnimations();
        this.setupParallaxEffects();
        this.setupServiceCardAnimations();
        this.setupGalleryAnimations();
        this.setupParticleEffects();
        this.setupNavbarEffects();

        // Start animations after page load
        window.addEventListener("load", () => {
            this.startInitialAnimations();
        });
    }

    // Mobile Menu Functionality
    setupMobileMenu() {
        const hamburgerMenu = document.getElementById("hamburger-menu");
        const navMenu = document.getElementById("nav-menu");
        const navLinks = document.querySelectorAll(".nav-link");

        if (!hamburgerMenu || !navMenu) return;

        // Toggle mobile menu
        hamburgerMenu.addEventListener("click", () => {
            hamburgerMenu.classList.toggle("active");
            navMenu.classList.toggle("active");
            document.body.style.overflow = navMenu.classList.contains("active")
                ? "hidden"
                : "";
        });

        // Close menu when clicking on a link
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                hamburgerMenu.classList.remove("active");
                navMenu.classList.remove("active");
                document.body.style.overflow = "";
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (
                !hamburgerMenu.contains(e.target) &&
                !navMenu.contains(e.target)
            ) {
                hamburgerMenu.classList.remove("active");
                navMenu.classList.remove("active");
                document.body.style.overflow = "";
            }
        });

        // Close menu on escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navMenu.classList.contains("active")) {
                hamburgerMenu.classList.remove("active");
                navMenu.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }

    // Enhanced Typewriter Effect
    setupTypewriter() {
        const textElement = document.getElementById("job-role");
        if (!textElement) return;

        // Create a text node for the typewriter text
        const textNode = document.createTextNode("");
        textElement.innerHTML = ""; // Clear existing content
        textElement.appendChild(textNode);

        // Create cursor element
        const cursor = document.createElement("span");
        cursor.className = "typewriter-cursor";
        textElement.appendChild(cursor);

        const typeWriter = () => {
            const currentRole = this.roles[this.currentRoleIndex];

            if (!this.isDeleting) {
                // Typing
                textNode.textContent = currentRole.substring(
                    0,
                    this.currentCharIndex + 1
                );
                this.currentCharIndex++;

                if (this.currentCharIndex === currentRole.length) {
                    // Pause at end of word
                    this.isDeleting = true;
                    setTimeout(typeWriter, this.pauseDuration);
                    return;
                }
            } else {
                // Deleting
                textNode.textContent = currentRole.substring(
                    0,
                    this.currentCharIndex - 1
                );
                this.currentCharIndex--;

                if (this.currentCharIndex === 0) {
                    // Move to next word
                    this.isDeleting = false;
                    this.currentRoleIndex =
                        (this.currentRoleIndex + 1) % this.roles.length;
                }
            }

            const speed = this.isDeleting
                ? this.deleteSpeed
                : this.typewriterSpeed;
            setTimeout(typeWriter, speed);
        };

        // Start typewriter effect
        setTimeout(typeWriter, 1000);
    }

    // Scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll(
            "section, main > .container > h2, .card, .img-card"
        );
        sections.forEach((section) => {
            section.classList.add("animate-on-scroll");
            observer.observe(section);
        });
    }

    animateElement(element) {
        element.classList.add("animated");

        // Add specific animation classes based on element type
        if (element.classList.contains("card")) {
            this.animateServiceCard(element);
        } else if (element.classList.contains("img-card")) {
            this.animateGalleryCard(element);
        } else if (element.tagName === "H2") {
            this.animateHeading(element);
        } else {
            this.animateFadeInUp(element);
        }
    }

    // Parallax Effects
    setupParallaxEffects() {
        const heroImage = document.querySelector(".img-box");
        const heroText = document.querySelector(".text");

        if (heroImage || heroText) {
            window.addEventListener("scroll", () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;

                if (heroImage) {
                    heroImage.style.transform = `translateY(${rate}px)`;
                }
                if (heroText) {
                    heroText.style.transform = `translateY(${rate * 0.3}px)`;
                }
            });
        }
    }

    // Service Card Animations
    setupServiceCardAnimations() {
        const cards = document.querySelectorAll(".card");

        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;

            // Add hover effects
            card.addEventListener("mouseenter", () => {
                this.animateCardHover(card, true);
            });

            card.addEventListener("mouseleave", () => {
                this.animateCardHover(card, false);
            });
        });
    }

    animateServiceCard(card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px) rotateX(10deg)";

        setTimeout(() => {
            card.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0) rotateX(0)";
        }, 100);
    }

    animateCardHover(card, isHovering) {
        const icon = card.querySelector("i");
        const title = card.querySelector("h3");

        if (isHovering) {
            card.style.transform = "translateY(-15px) scale(1.02)";
            if (icon) icon.style.transform = "rotateY(360deg) scale(1.2)";
            if (title) title.style.color = "var(--teal)";
        } else {
            card.style.transform = "translateY(0) scale(1)";
            if (icon) icon.style.transform = "rotateY(0) scale(1)";
            if (title) title.style.color = "var(--light-slate)";
        }
    }

    // Gallery Animations
    setupGalleryAnimations() {
        const galleryCards = document.querySelectorAll(".img-card");

        galleryCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;

            // Enhanced hover effects
            card.addEventListener("mouseenter", () => {
                this.animateGalleryCardHover(card, true);
            });

            card.addEventListener("mouseleave", () => {
                this.animateGalleryCardHover(card, false);
            });
        });
    }

    animateGalleryCard(card) {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8) rotateY(45deg)";

        setTimeout(() => {
            card.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
            card.style.opacity = "1";
            card.style.transform = "scale(1) rotateY(0)";
        }, 100);
    }

    animateGalleryCardHover(card, isHovering) {
        const img = card.querySelector("img");
        const details = card.querySelector(".img-card-details");

        if (isHovering) {
            card.style.transform = "scale(1.05) rotateY(5deg)";
            if (img) img.style.transform = "scale(1.1)";
            if (details) details.style.transform = "translateY(0)";
        } else {
            card.style.transform = "scale(1) rotateY(0)";
            if (img) img.style.transform = "scale(1)";
            if (details) details.style.transform = "translateY(20px)";
        }
    }

    // Particle Effects
    setupParticleEffects() {
        this.createParticles();
        this.setupFloatingElements();
    }

    createParticles() {
        const header = document.querySelector("header");
        if (!header) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: var(--teal);
                border-radius: 50%;
                opacity: ${Math.random() * 0.5 + 0.2};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s linear infinite;
                pointer-events: none;
            `;
            header.appendChild(particle);
        }
    }

    setupFloatingElements() {
        const style = document.createElement("style");
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100vh) translateX(${
                    Math.random() * 200 - 100
                }px); opacity: 0; }
            }
            
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(50px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes slideInLeft {
                from { opacity: 0; transform: translateX(-50px); }
                to { opacity: 1; transform: translateX(0); }
            }
            
            @keyframes slideInRight {
                from { opacity: 0; transform: translateX(50px); }
                to { opacity: 1; transform: translateX(0); }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            .animate-on-scroll {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .animate-on-scroll.animated {
                opacity: 1;
                transform: translateY(0);
            }
            
            .text-highlight {
                animation: pulse 2s infinite;
            }
        `;
        document.head.appendChild(style);
    }

    // Navbar Effects
    setupNavbarEffects() {
        const navbar = document.querySelector("nav");
        const navLinks = navbar.querySelectorAll("ul li");

        // Add scroll effect to navbar
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                navbar.style.background = "rgba(13, 17, 23, 0.95)";
                navbar.style.backdropFilter = "blur(20px)";
            } else {
                navbar.style.background = "rgba(13, 17, 23, 0.85)";
                navbar.style.backdropFilter = "blur(10px)";
            }
        });

        // Add hover effects to nav links
        navLinks.forEach((link, index) => {
            link.style.animationDelay = `${index * 0.1}s`;
            link.addEventListener("mouseenter", () => {
                link.style.transform = "translateY(-2px)";
            });
            link.addEventListener("mouseleave", () => {
                link.style.transform = "translateY(0)";
            });
        });
    }

    // Initial entrance animations
    startInitialAnimations() {
        // Animate hero text
        const heroText = document.querySelector(".text");
        const heroImage = document.querySelector(".img-box");

        if (heroText) {
            heroText.style.opacity = "0";
            heroText.style.transform = "translateX(-50px)";
            setTimeout(() => {
                heroText.style.transition =
                    "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
                heroText.style.opacity = "1";
                heroText.style.transform = "translateX(0)";
            }, 300);
        }

        if (heroImage) {
            heroImage.style.opacity = "0";
            heroImage.style.transform = "translateX(50px) scale(0.8)";
            setTimeout(() => {
                heroImage.style.transition =
                    "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
                heroImage.style.opacity = "1";
                heroImage.style.transform = "translateX(0) scale(1)";
            }, 600);
        }

        // Animate navbar
        const navbar = document.querySelector("nav");
        if (navbar) {
            navbar.style.opacity = "0";
            navbar.style.transform = "translateY(-100%)";
            setTimeout(() => {
                navbar.style.transition =
                    "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
                navbar.style.opacity = "1";
                navbar.style.transform = "translateY(0)";
            }, 100);
        }
    }

    // Helper animation methods
    animateFadeInUp(element) {
        element.style.animation =
            "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards";
    }

    animateHeading(element) {
        element.style.animation =
            "slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards";
    }
}

// Initialize animation controller
document.addEventListener("DOMContentLoaded", () => {
    new AnimationController();
});
