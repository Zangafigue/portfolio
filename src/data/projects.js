// Champs bilingues : { en, fr }. Voir src/i18n/localize.js (useLoc()).
// slug → capture attendue dans public/projects/<slug>.jpg (fallback élégant sinon).
const projects = [
  {
    id: 1,
    slug: "agroconnect",
    name: "AgroConnect BF",
    role: {
      en: "Lead Developer — architecture & team coordination",
      fr: "Lead Dev — architecture & coordination d'équipe",
    },
    description: {
      en: "B2B agricultural platform connecting farmers, buyers and transporters in Burkina Faso. Multi-platform: web (React/Vite), mobile (Flutter) and a Node/Express REST API, across 3 coordinated repositories.",
      fr: "Plateforme agricole B2B reliant agriculteurs, acheteurs et transporteurs au Burkina Faso. Multi-plateforme : web (React/Vite), mobile (Flutter) et API REST Node/Express, sur 3 dépôts coordonnés.",
    },
    outcome: {
      en: "Coordinated the team and integrated 3 repos into one shipped platform.",
      fr: "Coordination de l'équipe et intégration de 3 dépôts en une plateforme livrée.",
    },
    category: "Web",
    stack: ["React", "Vite", "Flutter", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Zangafigue/agroconnect-web",
    live: "https://agroconnect-web.vercel.app",
    featured: true,
  },
  {
    id: 2,
    slug: "zamsma",
    name: "Zamsma (Valence)",
    description: {
      en: "Offline-first educational chemistry mobile game built around Bloom's taxonomy. Flutter (BLoC, Hive) + Django 5 / DRF (PostgreSQL, Redis, JWT), Dockerized, with a local-network challenge mode.",
      fr: "Jeu mobile éducatif de chimie, offline-first, conçu autour de la taxonomie de Bloom. Flutter (BLoC, Hive) + Django 5 / DRF (PostgreSQL, Redis, JWT), Dockerisé, avec un mode défi en réseau local.",
    },
    outcome: {
      en: "Built for the Hackathon des Grandes Écoles 2026 with Team Mirror.",
      fr: "Conçu pour le Hackathon des Grandes Écoles 2026 avec la Team Mirror.",
    },
    category: "Mobile",
    stack: ["Flutter", "Dart", "Django", "DRF", "PostgreSQL", "Redis", "Docker"],
    shot: "contain",
    github: "https://github.com/Zangafigue/Valence",
    live: null,
    featured: true,
  },
  {
    id: 3,
    slug: "gymx-v2",
    name: "GymX v2",
    description: {
      en: "Premium gym-management SaaS: real-time class booking (capacity, no double-booking), an RBAC back-office with CRUD, analytics and FR/EN i18n.",
      fr: "SaaS premium de gestion de salle de sport : réservation temps réel (capacité, anti-doublon), back-office CRUD avec RBAC, analytics et i18n FR/EN.",
    },
    outcome: {
      en: "Production-grade auth and row-level security with Supabase RLS.",
      fr: "Auth et sécurité au niveau ligne (Supabase RLS) de niveau production.",
    },
    category: "Web",
    stack: ["React 19", "TypeScript", "Tailwind", "Supabase", "RLS", "Recharts"],
    github: "https://github.com/Zangafigue/GymX-v2",
    live: "https://gym-x-v2.vercel.app",
    featured: true,
  },
  {
    id: 4,
    slug: "cv-builder",
    name: "CV Builder Pro",
    description: {
      en: "Résumé builder with 14 templates and ATS-friendly PDF, Word and JSON export. Gemini AI for analysis and FR↔EN translation via a serverless proxy, plus a local suggestion engine. Tested with Vitest.",
      fr: "Générateur de CV avec 14 modèles et export PDF ATS, Word et JSON. IA Gemini pour l'analyse et la traduction FR↔EN via proxy serverless, et un moteur de suggestions local. Testé avec Vitest.",
    },
    outcome: {
      en: "Three export formats incl. ATS-ready PDF, with AI assistance.",
      fr: "Trois formats d'export dont PDF compatible ATS, avec assistance IA.",
    },
    category: "Web",
    stack: ["React 19", "Vite", "Gemini AI", "Vitest"],
    github: "https://github.com/Zangafigue/cv-builder",
    live: "https://cv-builder-three-tau.vercel.app",
    featured: true,
  },
  {
    id: 5,
    slug: "knowhub",
    name: "KnowHub Automation",
    description: {
      en: "After-sales automation for digital products: a FastAPI backend with HMAC webhooks, a Supabase CRM, email sequences, AI content generation (Llama 3.3 via Groq), Facebook publishing and a Telegram bot.",
      fr: "Automatisation après-vente d'infoproduits : backend FastAPI avec webhooks HMAC, CRM Supabase, séquences d'emails, génération de contenu IA (Llama 3.3 via Groq), publication Facebook et bot Telegram.",
    },
    outcome: {
      en: "End-to-end automation: from webhook to AI content to publishing.",
      fr: "Automatisation de bout en bout : du webhook au contenu IA jusqu'à la publication.",
    },
    category: "AI",
    stack: ["Python", "FastAPI", "Supabase", "Groq", "Telegram"],
    github: null,
    live: null,
    featured: false,
  },
  {
    id: 6,
    slug: "school-management",
    name: "School Management App",
    description: {
      en: "Collaborative school-management platform built with Vue.js and containerized with Docker.",
      fr: "Plateforme collaborative de gestion scolaire développée en Vue.js et conteneurisée avec Docker.",
    },
    outcome: {
      en: "Shipped collaboratively with a teammate.",
      fr: "Livré en collaboration avec un coéquipier.",
    },
    category: "Web",
    stack: ["Vue.js", "JavaScript", "Docker"],
    github: "https://github.com/RayaneBICABA/School_management_app",
    live: null,
    featured: false,
  },
  {
    id: 7,
    slug: "portfolio",
    name: "Portfolio",
    description: {
      en: "This site: a product-first, bilingual FR/EN portfolio in React + Vite, with a preserved 3D space 'lab'.",
      fr: "Ce site : portfolio produit-first bilingue FR/EN en React + Vite, avec un « lab » spatial 3D préservé.",
    },
    outcome: {
      en: "Bilingual FR/EN, deployed on Vercel.",
      fr: "Bilingue FR/EN, déployé sur Vercel.",
    },
    category: "Web",
    stack: ["React", "Vite", "Framer Motion", "i18next"],
    github: "https://github.com/Zangafigue/portfolio",
    live: null,
    featured: false,
  },
  {
    id: 8,
    slug: "e-suggestion-box",
    name: "E-Suggestion Box",
    description: {
      en: "Student idea platform with anonymous submissions, an admin voting system and idea ranking, backed by a Flask REST API.",
      fr: "Plateforme d'idées étudiantes avec soumissions anonymes, système de vote admin et classement des idées, sur une API REST Flask.",
    },
    outcome: {
      en: "Anonymous submissions with admin moderation and ranking.",
      fr: "Soumissions anonymes avec modération admin et classement.",
    },
    category: "Web",
    stack: ["Python", "Flask", "JavaScript"],
    github: "https://github.com/Zangafigue/E-Suggestion-Box",
    live: null,
    featured: false,
  },
  {
    id: 9,
    slug: "stock-management",
    name: "Stock Management System",
    description: {
      en: "CLI inventory manager in C: full CRUD, search by name or ID and text-file persistence.",
      fr: "Gestionnaire d'inventaire en ligne de commande en C : CRUD complet, recherche par nom ou ID et persistance sur fichier texte.",
    },
    outcome: {
      en: "Pure C with file-based persistence — fundamentals, no framework.",
      fr: "C pur avec persistance fichier — les fondamentaux, sans framework.",
    },
    category: "Other",
    stack: ["C", "File I/O"],
    github: "https://github.com/Zangafigue/Stock-Management-System",
    live: null,
    featured: false,
  },
  {
    id: 10,
    slug: "quiz-game",
    name: "Quiz Game",
    description: {
      en: "Desktop quiz game with a Pygame UI, 4 categories, 3 difficulty levels, a JSON question bank and persistent scores.",
      fr: "Jeu de quiz desktop avec interface Pygame, 4 catégories, 3 niveaux de difficulté, banque de questions JSON et scores persistants.",
    },
    outcome: {
      en: "Game loop, state and scoring in Pygame.",
      fr: "Boucle de jeu, état et score en Pygame.",
    },
    category: "Other",
    stack: ["Python", "Pygame", "JSON"],
    github: "https://github.com/Zangafigue/Quiz_Game",
    live: null,
    featured: false,
  },
]

export const categories = ["All", "Web", "Mobile", "AI", "Other"]

export default projects
