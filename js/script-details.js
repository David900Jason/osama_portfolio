// Script Details Page JavaScript

// Script data for different projects
const scriptData = {
    "khamas-daqaiq": {
        title: "Khamas Daqaiq",
        type: "Television Series",
        year: "2021",
        genre: "Drama",
        description:
            "A compelling drama series that explores the complexities of human relationships in modern society. This project showcases expert storytelling with nuanced character development and engaging plot twists.",
        synopsis:
            "This groundbreaking television series delves into the intricate dynamics of contemporary relationships, offering viewers a raw and authentic look at the challenges and triumphs faced by its diverse cast of characters. Through masterful storytelling and compelling character arcs, the series creates a narrative that resonates with audiences on multiple levels.",
        themes: [
            "Human relationships and emotional complexity",
            "Societal pressures and personal growth",
            "Family dynamics and generational differences",
            "Modern love and communication challenges",
        ],
        audience:
            "This series appeals to adult viewers who appreciate character-driven narratives and emotionally resonant storytelling. The content is suitable for mature audiences seeking thought-provoking entertainment.",
        format: "Television Series",
        episodes: "12 Episodes",
        duration: "45 minutes per episode",
        language: "Arabic",
        notes: "This project represents a significant milestone in exploring contemporary social issues through the medium of television drama. The writing process involved extensive research and collaboration with industry professionals to ensure authenticity and emotional depth.",
        bannerImage: "../assets/gallery1.jpeg",
    },
    "khasesny-shukran": {
        title: "Khasesny Shukran",
        type: "Feature Film",
        year: "2020",
        genre: "Comedy",
        description:
            "A heartwarming comedy that explores the humorous side of gratitude and human connections. This film delivers laughs while touching on meaningful themes of appreciation and relationships.",
        synopsis:
            "When an unexpected inheritance forces a cynical protagonist to reevaluate their perspective on life, they embark on a journey of self-discovery filled with comedic mishaps and heartfelt moments. The film balances humor with genuine emotional depth.",
        themes: [
            "The power of gratitude and appreciation",
            "Personal transformation and growth",
            "Family relationships and expectations",
            "Finding joy in everyday moments",
        ],
        audience:
            "Perfect for audiences who enjoy feel-good comedies with substance. Suitable for family viewing with themes that resonate across generations.",
        format: "Feature Film",
        episodes: "N/A",
        duration: "95 minutes",
        language: "Arabic",
        notes: "This comedy project was developed to address the universal theme of gratitude in a contemporary context. The screenplay underwent multiple revisions to perfect the balance between humor and heartfelt moments.",
        bannerImage: "../assets/gallery2.jpeg",
    },
    "skoot-shat": {
        title: "Skoot Shat",
        type: "Television Series",
        year: "2019",
        genre: "Comedy",
        description:
            "A hilarious comedy series that follows the misadventures of a group of friends navigating life's challenges with wit and humor. Each episode delivers laughs while exploring relatable situations.",
        synopsis:
            "Follow the chaotic lives of four friends as they navigate career challenges, romantic entanglements, and family obligations in modern society. The series uses humor to explore serious themes with a light touch.",
        themes: [
            "Friendship and loyalty",
            "Career challenges and aspirations",
            "Modern dating and relationships",
            "Balancing personal and professional life",
        ],
        audience:
            "Ideal for young adults and anyone who enjoys contemporary comedy with relatable characters and situations.",
        format: "Television Series",
        episodes: "15 Episodes",
        duration: "30 minutes per episode",
        language: "Arabic",
        notes: "This series was created to fill a gap in the market for intelligent comedy that speaks to modern audiences. The writing team focused on creating authentic dialogue and situations.",
        bannerImage: "../assets/gallery3.jpeg",
    },
    "shok-talk": {
        title: "Shok Talk",
        type: "Feature Film",
        year: "2018",
        genre: "Drama",
        description:
            "A powerful drama that tackles important social issues through compelling storytelling and strong character development. This film challenges viewers to think critically about contemporary society.",
        synopsis:
            "Set against the backdrop of a rapidly changing society, this drama follows the intersecting lives of individuals from different walks of life. Their stories weave together to create a tapestry of human experience and social commentary.",
        themes: [
            "Social justice and equality",
            "Cultural identity and belonging",
            "Personal responsibility and ethics",
            "Community and social change",
        ],
        audience:
            "For mature audiences interested in thought-provoking cinema that addresses important social themes.",
        format: "Feature Film",
        episodes: "N/A",
        duration: "110 minutes",
        language: "Arabic",
        notes: "This film represents a bold artistic statement on contemporary social issues. The screenplay was developed through extensive research and consultation with community members.",
        bannerImage: "../assets/gallery4.jpeg",
    },
    "crazy-taxi": {
        title: "Crazy Taxi",
        type: "Feature Film",
        year: "2017",
        genre: "Action",
        description:
            "An action-packed thriller that keeps audiences on the edge of their seats with high-octane sequences and unexpected plot twists. This film delivers adrenaline-pumping entertainment.",
        synopsis:
            "When a seemingly ordinary taxi driver gets caught up in a dangerous conspiracy, they must use their street smarts and driving skills to survive. The film combines thrilling action sequences with character-driven storytelling.",
        themes: [
            "Ordinary people in extraordinary circumstances",
            "Justice and morality",
            "Trust and betrayal",
            "Survival and resilience",
        ],
        audience:
            "Perfect for action movie enthusiasts and fans of high-stakes thrillers.",
        format: "Feature Film",
        episodes: "N/A",
        duration: "105 minutes",
        language: "Arabic",
        notes: "This action film was designed to showcase local talent while delivering international-quality entertainment. The screenplay underwent extensive development to perfect the pacing and action sequences.",
        bannerImage: "../assets/gallery5.jpeg",
    },
    "blue-whale": {
        title: "Blue Whale",
        type: "Feature Film",
        year: "2019",
        genre: "Drama",
        description:
            "A deeply moving drama that explores themes of loss, redemption, and the human spirit's capacity for healing. This film offers a poignant look at life's most challenging moments.",
        synopsis:
            "After a devastating loss, a marine biologist embarks on a journey of healing and discovery that leads to unexpected connections and profound personal growth. The film explores the depths of human emotion and resilience.",
        themes: [
            "Grief and healing",
            "Connection to nature",
            "Personal transformation",
            "Hope and resilience",
        ],
        audience:
            "For viewers who appreciate emotionally resonant dramas with beautiful cinematography and powerful performances.",
        format: "Feature Film",
        episodes: "N/A",
        duration: "98 minutes",
        language: "Arabic",
        notes: "This film represents a departure from conventional storytelling, using visual poetry and metaphor to explore deep emotional themes. The screenplay was praised for its sensitivity and artistic vision.",
        bannerImage: "../assets/gallery6.jpeg",
    },
};

// Get script ID from URL parameters
function getScriptId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("script") || "khamas-daqaiq";
}

// Update page content based on script data
function updateScriptContent() {
    const scriptId = getScriptId();
    const script = scriptData[scriptId];

    if (!script) {
        console.error("Script not found:", scriptId);
        return;
    }

    // Update banner image
    document.getElementById("script-banner-image").src = script.bannerImage;
    document.getElementById("script-banner-image").alt = script.title;

    // Update basic info
    document.getElementById("script-title").textContent = script.title;
    document.getElementById("script-type").textContent = script.type;
    document.getElementById("script-year").textContent = script.year;
    document.getElementById("script-genre").textContent = script.genre;
    document.getElementById("script-description").textContent =
        script.description;

    // Update detailed content
    document.getElementById("script-synopsis").textContent = script.synopsis;
    document.getElementById("script-audience").textContent = script.audience;
    document.getElementById("script-notes").textContent = script.notes;

    // Update technical details
    document.getElementById("script-format").textContent = script.format;
    document.getElementById("script-episodes").textContent = script.episodes;
    document.getElementById("script-duration").textContent = script.duration;
    document.getElementById("script-language").textContent = script.language;
    document.getElementById("script-genre-detail").textContent = script.genre;

    // Update themes list
    const themesList = document.getElementById("script-themes");
    themesList.innerHTML = "";
    script.themes.forEach((theme) => {
        const li = document.createElement("li");
        li.textContent = theme;
        themesList.appendChild(li);
    });

    // Update download button
    const downloadBtn = document.getElementById("download-btn");
    downloadBtn.href = `#download-${scriptId}`;
    downloadBtn.onclick = (e) => {
        e.preventDefault();
        handleDownload(scriptId);
    };

    // Update page title
    document.title = `${script.title} | Script Details | Usama Hossam El-din`;
}

// Handle script download
function handleDownload(scriptId) {
    const script = scriptData[scriptId];

    // Create a simple text file with script information
    const scriptContent = `
${script.title}
${"=".repeat(script.title.length)}

Type: ${script.type}
Year: ${script.year}
Genre: ${script.genre}

Description:
${script.description}

Synopsis:
${script.synopsis}

Key Themes:
${script.themes.map((theme) => `• ${theme}`).join("\n")}

Target Audience:
${script.audience}

Technical Details:
Format: ${script.format}
${script.episodes !== "N/A" ? `Episodes: ${script.episodes}` : ""}
Duration: ${script.duration}
Language: ${script.language}

Writer's Notes:
${script.notes}

---
Downloaded from Usama Hossam El-din's Portfolio
Contact: contact@example.com
    `.trim();

    // Create and trigger download
    const blob = new Blob([scriptContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${script.title.replace(/\s+/g, "_")}_Script_Info.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    // Show success message
    showNotification("Script information downloaded successfully!");
}

// Show notification
function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--teal);
        color: var(--dark-navy);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = "slideOut 0.3s ease";
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Functionality
    setupMobileMenu();

    updateScriptContent();

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});

// Mobile Menu Functionality
function setupMobileMenu() {
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
        if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
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
