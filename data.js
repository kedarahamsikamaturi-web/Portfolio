/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * Developer: M. Kedara Hamsika
 * 
 * 💡 EDITING GUIDE:
 * This file is the single source of truth for your portfolio content.
 * You can edit your personal details, skills, projects, certifications,
 * and learning journey here without modifying HTML code.
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // ----------------------------------------------------------------------------
  // 1. Personal & Profile Information
  // ----------------------------------------------------------------------------
  profile: {
    name: "M. Kedara Hamsika",
    shortName: "Kedara Hamsika",
    role: "Computer Science Engineering Student | Aspiring Software Developer | Python Learner",
    headline: "I turn curiosity into code.",
    status: "CSE Student · Building and Learning",
    college: "Ramachandra College of Engineering, Eluru",
    location: "Eluru, Andhra Pradesh, India",
    academicStatus: "Second-Year B.Tech CSE Student",
    cgpa: "9.3",
    cgpaScale: "10.0",
    expectedGraduation: "2029",
    email: "kedarahamsikamaturi@gmail.com", // Editable: replace with your primary email
    githubUsername: "kedarahamsikamaturi-web",
    githubUrl: "https://github.com/kedarahamsikamaturi-web",
    linkedinUrl: "https://www.linkedin.com/", // Editable: add your exact LinkedIn profile link
    resumeUrl: "#resume-modal", // Triggers the built-in interactive resume viewer/placeholder
    summary:
      "Second-year Computer Science and Engineering student at Ramachandra College of Engineering with an academic CGPA of 9.3/10. Enthusiastic about Python, Java, Data Structures & Algorithms, modern web technologies, and AI-driven applications. Committed to developing practical software through project-based learning and continuous problem-solving."
  },

  // ----------------------------------------------------------------------------
  // 2. Technical Skills & Competencies (Grouped & Editable)
  // ----------------------------------------------------------------------------
  skills: [
    {
      category: "programming",
      categoryTitle: "Programming Languages",
      description: "Languages used for algorithmic problem solving, object-oriented design, and application logic.",
      items: [
        {
          name: "Python",
          level: "Active Learning & Projects",
          note: "HackerRank Certified (Basic) · October 2026",
          badge: "Certified"
        },
        {
          name: "Java",
          level: "Working Knowledge",
          note: "Object-Oriented Design, Collections, Exception Handling",
          badge: "Core"
        },
        {
          name: "C",
          level: "Foundational",
          note: "Memory basics, pointers, procedural programming",
          badge: "Foundation"
        }
      ]
    },
    {
      category: "computer_science",
      categoryTitle: "Computer Science Fundamentals",
      description: "Core theoretical and algorithmic principles driving efficient engineering solutions.",
      items: [
        {
          name: "Data Structures & Algorithms",
          level: "Active Practice",
          note: "Arrays, Linked Lists, Stacks, Queues, Sorting & Searching",
          badge: "DSA"
        },
        {
          name: "Problem Solving",
          level: "Regular Practice",
          note: "Algorithmic thinking and pattern recognition",
          badge: "Core"
        },
        {
          name: "Discrete Mathematics",
          level: "Academic Study",
          note: "Logic, set theory, relations, combinatorics",
          badge: "Theory"
        },
        {
          name: "Digital Logic",
          level: "Academic Study",
          note: "Boolean algebra, logic gates, combinatorial circuits",
          badge: "Theory"
        }
      ]
    },
    {
      category: "development",
      categoryTitle: "Web & Developer Tooling",
      description: "Standards and tools utilized for interface development and collaborative version control.",
      items: [
        {
          name: "HTML5 & CSS3",
          level: "Proficient",
          note: "Semantic structure, responsive layouts, Flexbox & Grid",
          badge: "Frontend"
        },
        {
          name: "JavaScript (ES6+)",
          level: "Working Knowledge",
          note: "DOM manipulation, asynchronous fetch, events",
          badge: "Frontend"
        },
        {
          name: "Git & GitHub",
          level: "Active Tool",
          note: "Version control, commits, repository management",
          badge: "Tooling"
        },
        {
          name: "VS Code & Antigravity",
          level: "Daily Workflow",
          note: "Modern developer environment & AI-assisted tooling",
          badge: "Environment"
        }
      ]
    },
    {
      category: "data_ai",
      categoryTitle: "Data & AI Exploration",
      description: "Libraries and concepts currently being explored for data analysis and intelligent systems.",
      items: [
        {
          name: "NumPy & Pandas",
          level: "Currently Learning",
          note: "Data structures, array operations, tabular analysis",
          badge: "Data"
        },
        {
          name: "Introductory ML Concepts",
          level: "Conceptual Study",
          note: "Supervised learning fundamentals & model pipelines",
          badge: "Exploration"
        },
        {
          name: "AI Project Exploration",
          level: "Concept Prototyping",
          note: "Applying computer vision concepts to agricultural leaf health",
          badge: "Prototype"
        }
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // 3. Featured Projects (With Case Study Writeups)
  // ----------------------------------------------------------------------------
  projects: [
    {
      id: "weather-now",
      title: "Weather Now – Location-Based Weather Website",
      tagline: "Real-time global weather dashboard powered by public REST APIs",
      status: "Deployed & Live",
      statusType: "deployed", // 'deployed' | 'prototype' | 'active'
      previewBadge: "Live Web App",
      technologies: ["HTML5", "CSS3", "JavaScript", "Open-Meteo REST API", "Geolocation API"],
      githubUrl: "https://github.com/kedarahamsikamaturi-web/Weather-Now",
      demoUrl: "https://kedarahamsikamaturi-web.github.io/Weather-Now/",
      shortDescription:
        "A responsive location-based weather dashboard that retrieves live meteorological data worldwide via the free public Open-Meteo REST API. Accurately displays temperatures, weather conditions, wind speed, humidity, 24-hour hourly trends, and a 7-day outlook.",
      caseStudy: {
        problem:
          "Many weather interfaces are cluttered with excessive ads, slow API response times, or require paid API keys that complicate student and open-source deployments.",
        solution:
          "Built a lightweight, zero-dependency client-side dashboard utilizing the free Open-Meteo REST API and browser Geolocation. Created an adaptive background that transitions based on current conditions (Clear, Rain, Clouds, Snow).",
        myContribution:
          "Designed the complete UI/UX in CSS, implemented asynchronous Fetch API integration, wrote data transformation functions for temperature conversion (°C/°F), and deployed the site via GitHub Pages.",
        highlights: [
          "100% Free & Open-source API integration (no API key required)",
          "Dynamic condition-based UI themes and WMO weather code mapping",
          "One-click browser GPS geolocation with graceful search fallback",
          "Full mobile-first responsiveness across all viewport sizes"
        ]
      }
    },
    {
      id: "collegedock",
      title: "CollegeDock – Student Campus Utility Hub",
      tagline: "Concept utility application designed to streamline campus academic routines",
      status: "Concept & UI Prototype",
      statusType: "prototype",
      previewBadge: "Concept Prototype",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Modular UI"],
      githubUrl: "https://github.com/kedarahamsikamaturi-web", // Editable placeholder
      demoUrl: null, // Set to URL when deployed
      shortDescription:
        "A student-centric utility application concept designed to eliminate campus information fragmentation by consolidating timetables, subject study resources, academic notice feeds, and personal task tracking into a unified dashboard.",
      caseStudy: {
        problem:
          "College students frequently juggle fragmented information across multiple WhatsApp groups, unofficial PDFs, notice boards, and scattered study resources, leading to missed deadlines and disorganized schedules.",
        solution:
          "Designed the architecture for CollegeDock — an intuitive single-window portal featuring an offline-capable daily timetable widget, course material organizer, and quick task planner.",
        myContribution:
          "Conceptualized user stories and workflow requirements for engineering students, created UI wireframes and interactive component prototypes, and established client-side LocalStorage schema for offline notes.",
        highlights: [
          "Zero-friction daily timetable and class schedule viewer",
          "Subject-wise academic notes and question bank repository index",
          "Personal assignment deadline tracker with priority tagging",
          "Designed specifically for CSE departmental academic routines"
        ]
      }
    },
    {
      id: "bhoomi-sahayak",
      title: "Bhoomi Sahayak / Aero Crop – Smart Agriculture Concept",
      tagline: "AI and IoT-based agricultural advisory system for proactive crop management",
      status: "Research & Prototype (In Development)",
      statusType: "prototype",
      previewBadge: "Research Concept",
      technologies: ["Python", "AI Concepts", "IoT Telemetry", "Computer Vision Concepts"],
      githubUrl: "https://github.com/kedarahamsikamaturi-web",
      demoUrl: null,
      shortDescription:
        "An innovative AI and IoT-driven smart agriculture solution concept designed to assist farming communities through automated crop disease detection, soil and environmental risk forecasting, and localized crop cultivation guidance.",
      caseStudy: {
        problem:
          "Smallholder farmers often suffer substantial yield loss due to delayed detection of leaf diseases, unforeseen weather fluctuations, and lack of timely expert advisory.",
        solution:
          "Formulated the system design for an affordable multi-modal assistant combining low-cost environmental telemetry (temperature, soil humidity) with smartphone-captured leaf disease analysis.",
        myContribution:
          "Researched agricultural problem statements, formulated IoT sensor pipeline requirements, drafted initial Python classification architecture, and presented the research framework at institutional innovation forums.",
        highlights: [
          "Early detection methodology for common leaf pathogens and pests",
          "Weather-sensitive agricultural advisory alerts for irrigation planning",
          "Ethically scoped and presented as an active research concept prototype"
        ]
      }
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. Achievements & Verified Certifications
  // ----------------------------------------------------------------------------
  achievements: [
    {
      id: "hackerrank-python",
      title: "Python (Basic) Skill Certification",
      issuer: "HackerRank",
      date: "October 20, 2026",
      status: "Verified",
      verified: true,
      verificationUrl: "https://www.hackerrank.com/certificates/83a133c8a965",
      description:
        "Verified foundational proficiency in Python programming covering data types, conditional logic, loops, collections (lists, tuples, dictionaries), string operations, and modular functions."
    },
    {
      id: "academic-excellence",
      title: "Academic Excellence – CGPA 9.3 / 10.0",
      issuer: "Ramachandra College of Engineering",
      date: "2024 – Present",
      status: "Honor",
      verified: true,
      verificationUrl: null,
      description:
        "Maintained a stellar 9.3 CGPA throughout the first two years of Computer Science and Engineering, demonstrating exceptional consistency and discipline across theoretical and laboratory coursework."
    },
    {
      id: "rtih-innovation",
      title: "Rashtriya Innovation Challenge Participant",
      issuer: "Ratan Tata Innovation Hub (RTIH), Andhra Pradesh",
      date: "2026",
      status: "Innovation Challenge",
      verified: true,
      verificationUrl: null,
      description:
        "Participated in the state-level innovation challenge organized by RTIH, collaborating on problem identification, technology feasibility analysis, and ideation for sustainable technological interventions."
    },
    {
      id: "rce-ambassador",
      title: "RCE Ambassador 2K26 Activities",
      issuer: "Ramachandra College of Engineering",
      date: "2026",
      status: "Leadership",
      verified: true,
      verificationUrl: null,
      description:
        "Active involvement in campus leadership, technical seminars, peer learning circles, and representing the CSE student community in institutional engagement initiatives."
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. Currently Exploring (Learning Journey Milestones)
  // ----------------------------------------------------------------------------
  learningJourney: [
    {
      topic: "Python & Data Foundations",
      focus: "Object-Oriented Python, list comprehensions, and data manipulation with NumPy and Pandas.",
      status: "In Progress · Daily Practice",
      icon: "python"
    },
    {
      topic: "Data Structures & Algorithms",
      focus: "Mastering array manipulation, recursion, two-pointer techniques, stacks, and binary trees.",
      status: "Active Problem Solving",
      icon: "dsa"
    },
    {
      topic: "Java OOP & System Foundations",
      focus: "Polymorphism, interfaces, abstraction, and memory organization in Java and C.",
      status: "Core Academic Curriculum",
      icon: "java"
    },
    {
      topic: "Modern Web Architectures",
      focus: "Building performant, accessible user interfaces with clean semantic HTML, modular CSS, and ES6+.",
      status: "Applied in Portfolio & Weather Now",
      icon: "web"
    },
    {
      topic: "AI & IoT Applied Concepts",
      focus: "Exploring computer vision fundamentals and sensor data pipelines for the Bhoomi Sahayak concept.",
      status: "Research & Prototyping",
      icon: "ai"
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. Education Details
  // ----------------------------------------------------------------------------
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering",
    institution: "Ramachandra College of Engineering",
    location: "Eluru, Andhra Pradesh",
    standing: "Second-Year Undergraduate",
    duration: "2025 – 2029 (Expected)",
    cgpa: "9.3",
    cgpaScale: "10.0",
    highlights: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (Java)",
      "Problem Solving using C & Python",
      "Discrete Mathematics",
      "Digital Logic & Computer Organization",
      "Web Development Technologies"
    ]
  }
};

// Export for browser script usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
