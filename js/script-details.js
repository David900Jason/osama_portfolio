// Script Details Page JavaScript

// Script data for different projects
const scriptData = {
    "khamas-daqaiq": {
        title: "Khamas Daqaiq",
        type: "Television Series",
        year: "2021",
        genre: "Drama",
        description:
            "A social and romantic drama that explores intricate human relationships and emotional complexities within a contemporary setting.",
        synopsis:
            "The series focuses on a collection of love stories that bring various characters together in a high-stakes, emotional atmosphere. The 'Five Minutes' segment specifically features a story starring Jamal Suliman and Wafaa Amer.",
        themes: [
            "Social and familial conflict",
            "Romantic entanglements and 'overflowing emotions'",
            "Psychological drama and interpersonal secrets",
        ],
        audience:
            "Adults and fans or Arabic social drama and romantic suspense",
        format: "Television Series",
        episodes: "8 Episodes",
        duration: "30 to 40 minutes per episode",
        language: "Arabic",
        notes: "This series explores the complexities of modern relationships through interconnected love stories, featuring prominent Arabic actors and addressing contemporary social issues.",
        bannerImage: "../assets/gallery1.jpeg",
    },
    "khasesny-shukran": {
        title: "Khasesny Shukran",
        type: "Feature Film",
        year: "2020",
        genre: "Comedy",
        description:
            "A light-hearted Egyptian comedy that addresses the social and personal challenges of obesity through a satirical lens.",
        synopsis:
            "The film follows four overweight individuals who face various social hurdles and failed diets. Desperate for a change, they seek out a specialized doctor and embark on a series of unconventional and humorous experiments to lose weight and reclaim their lives.",
        themes: [
            "Social pressure and bullying regarding body image",
            "The struggle of weight loss journeys",
            "Self-acceptance and friendship",
        ],
        audience: "Families and fans of light Egyptian comedy",
        format: "Feature Film",
        episodes: "N/A",
        duration: "94 minutes",
        language: "Arabic",
        notes: "This comedy addresses serious social issues about body image and self-acceptance through humor, making it accessible while delivering important messages about health and wellness.",
        bannerImage: "../assets/gallery2.jpeg",
    },
    "skoot-shat": {
        title: "Skoot Shat",
        type: "Television Series",
        year: "2021",
        genre: "Comedy",
        description:
            "A contemporary social thriller that explores the darker consequences of digital communication and the hidden lives people lead online.",
        synopsis:
            "The plot centers on a mysterious online 'chat' that begins to unravel the lives of its participants. What starts as private digital interactions quickly leads to the exposure of long-buried family secrets and betrayals, forcing the characters to face the real-world repercussions of their virtual actions.",
        themes: [
            "Digital privacy and the dangers of the virtual world",
            "Betrayal and hidden identities",
            "Impact of social media on modern family dynamics",
        ],
        audience:
            "Young adults and mature audiences interested in psychological drama and technology-focused thrillers",
        format: "Television Series",
        episodes: "8 Episodes",
        duration: "30 minutes per episode",
        language: "Arabic",
        notes: "This series addresses contemporary concerns about digital privacy and online relationships, exploring how virtual interactions can have devastating real-world consequences.",
        bannerImage: "../assets/gallery3.jpeg",
    },
    "shok-talk": {
        title: "Shok Talk",
        type: "Television Series, Sketch Comedy",
        year: "2018",
        genre: "Satire, Parody, Comedy",
        description:
            "A bold satirical program that critiques social, cultural, and political issues within Egypt and the broader Arab world. It utilizes scripted sketches to parody celebrities, media trends, and societal norms.",
        synopsis:
            "A bold satirical program that critiques social, cultural, and political issues within Egypt and the broader Arab world. It utilizes scripted sketches to parody celebrities, media trends, and societal norms.",
        themes: [
            "Suspension geometry",
            "Off-road racing strategy (e.g., Baja 1000)",
            "Vehicle modifications",
            "Product engineering (coilovers, air suspension)",
        ],
        audience:
            "Automotive enthusiasts, off-roaders, DIY mechanics, and professional racers",
        format: "Television Series",
        episodes: "29 episodes",
        duration: "20 - 35 mins. per episode",
        language: "Arabic",
        notes: "This satirical program uses comedy and parody to address important social and political issues in the Arab world, making it both entertaining and thought-provoking.",
        bannerImage: "../assets/gallery4.jpeg",
    },
    "crazy-taxi": {
        title: "Crazy Taxi",
        type: "TV Prank Series",
        year: "2017",
        genre: "Prank, Reality, Sketch Comedy",
        description:
            "The show features host Ibrahim Al-Samman disguising himself as a variety of eccentric taxi drivers (e.g., a thug, an elderly man, or a person with strange habits) to prank unsuspecting passengers picked up on the streets of Egypt.",
        synopsis:
            "Each episode follows a 'taxi ride' where the driver behaves increasingly erratically or engages the passenger in bizarre, uncomfortable conversations. The tension builds until the prank is revealed, typically ending in laughter once the passengers realize they are being filmed.",
        themes: [
            "Social improvisation",
            "Hidden-camera humor",
            "Egyptian street culture",
            "Character-driven comedy",
        ],
        audience:
            "General Arabic-speaking audiences, particularly those in Egypt who enjoy prank-style reality television during the Ramadan season",
        format: "TV Prank Series",
        episodes: "30 episodes (Season 1), 27 episodes (Season 2)",
        duration: "15 to 20 minutes",
        language: "Arabic",
        notes: "This popular prank show captures authentic reactions from real people, creating humorous situations that showcase Egyptian culture and social dynamics through comedy.",
        bannerImage: "../assets/gallery5.jpeg",
    },
    "blue-whale": {
        title: "Blue Whale",
        type: "Feature Film",
        year: "2020",
        genre: "Thriller, Horror, Mystery",
        description:
            "A social thriller directed by Alaa Morsy that explores the lethal influence of malicious online content on modern youth.",
        synopsis:
            "When teenage suicide rates rise mysteriously, police launch an investigation that links the deaths to the 'Blue Whale Challenge,' a viral online game. The story highlights the risks adolescents face when parents are too preoccupied with technology to monitor their children's digital lives.",
        themes: [
            "Cyber dangers",
            "Parental neglect",
            "Teenage isolation",
            "Mental health",
        ],
        audience:
            "Parents, young adults, and teenagers (rated 18+ in some regions due to mature themes)",
        format: "Feature Film",
        episodes: "N/A",
        duration: "77 to 95 minutes",
        language: "Arabic",
        notes: "This thriller addresses serious contemporary issues about online safety and mental health, serving as both entertainment and a warning about the dangers of unmonitored internet access for young people.",
        bannerImage: "../assets/gallery6.jpeg",
    },
    "al-mesteraiha": {
        title: "Al Mesteraiha",
        type: "Feature Film",
        year: "2025",
        genre: "Comedy, Adventure, Heist",
        description:
            "A masterful con artist returns to Egypt after 20 years in hiding to recover a rare diamond she buried before fleeing. She discovers that the cemetery where the gem was hidden has been relocated, forcing her to reunite with her estranged children to track it down, only to realize she has been caught in a much larger con.",
        synopsis:
            "Shahinez El Marashli, a masterful con artist, returns to Egypt after 20 years in hiding to recover a rare diamond she buried before fleeing. She discovers that the cemetery where the gem was hidden has been relocated, forcing her to reunite with her estranged children to track it down, only to realize she has been caught in a much larger con.",
        themes: [
            "Family reunion",
            "Deception and greed",
            "'Get-rich-quick' schemes",
            "Comedic social interactions",
        ],
        audience:
            "General Arabic-speaking audiences, particularly fans of lighthearted Egyptian family comedies",
        format: "Feature Film",
        episodes: "N/A",
        duration: "105 minutes",
        language: "Arabic",
        notes: "This comedy-heist film combines family dynamics with clever plotting, creating an entertaining story about reconciliation and the consequences of past actions.",
        bannerImage: "../assets/gallery7.jpeg",
    },
    benoon: {
        title: "Benoon",
        type: "Television Series",
        year: "2024",
        genre: "Drama, Mystery, Thriller",
        description:
            "The series follows a high-stakes psychological mystery centered on a wealthy family facing a major crisis. The plot revolves around a man (Hani Adel) from a prominent family who is under intense pressure to produce an heir. When he discovers he is unable to have children, he and his wife (Passant Shawky) find themselves embroiled in a dark web of lies and crimes to protect their secret and the family's reputation.",
        synopsis: "[Add detailed synopsis here]",
        themes: [
            "Infertility",
            "Family legacy",
            "Social pressure",
            "Deception",
            "The lengths people go to for survival and status",
        ],
        audience:
            "Adult viewers interested in intense psychological dramas and social thrillers",
        format: "Television Series",
        episodes: "6 Episodes",
        duration: "45 minutes per episode",
        language: "Arabic",
        notes: "This psychological drama explores sensitive social issues around family legacy and societal expectations, delivering intense character-driven storytelling.",
        bannerImage: "../assets/gallery8.jpeg",
    },
    "awaad-fe-mawsem-el-riyadh": {
        title: "Awaad Fe Mawsem El-Riyadh",
        type: "Live Theater",
        year: "2024",
        genre: "Comedy, Social",
        description:
            "دور أحداث المسرحية حول شخصية 'عواض' الذي يقرر زيارة موسم الرياض للاستمتاع بالفعاليات العالمية، ولكن بسبب عفويته واختلاف بيئته، يجد نفسه في سلسلة من المفارقات المضحكة والمواقف المحرجة مع الزوار والسياح، مما يسلط الضوء على التحولات الثقافية والترفيهية في المملكة بطابع فكاهي.",
        synopsis: "[Add detailed synopsis here]",
        themes: [
            "Entertainment in Saudi Arabia",
            "Cultural conflict",
            "Social Comedy",
        ],
        audience: "Families, and People interested in Arabic Comedy",
        format: "Live Theater",
        episodes: "N/A",
        duration: "140 minutes",
        language: "Arabic (Saudi Arabia's Dialect)",
        notes: "This theatrical comedy explores cultural differences and entertainment developments in Saudi Arabia through humor, highlighting the changing social landscape in an accessible and entertaining way.",
        bannerImage: "../assets/gallery9.jpeg",
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
Contact: usamahossameldin@hotmail.com
Phone: +20 111 114 5975
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
