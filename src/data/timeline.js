// Champs bilingues { en, fr } pour year / title / description. Voir i18n/localize.js.
const timeline = [
  {
    id: 1,
    year: { en: "July 2024", fr: "Juillet 2024" },
    title: { en: "Baccalauréat (Science)", fr: "Baccalauréat (série D)" },
    description: {
      en: "Earned my scientific Baccalauréat — the end of secondary school and the start of a new chapter.",
      fr: "Obtention du Baccalauréat scientifique — fin du secondaire et début d'un nouveau chapitre.",
    },
    type: "education",
  },
  {
    id: 2,
    year: { en: "October 2024", fr: "Octobre 2024" },
    title: { en: "Started CS at BIT", fr: "Début d'informatique au BIT" },
    description: {
      en: "Enrolled at the Burkina Institute of Technology, on the Programming & Entrepreneurship track.",
      fr: "Entrée au Burkina Institute of Technology, option Programmation & Entrepreneuriat.",
    },
    type: "education",
  },
  {
    id: 3,
    year: { en: "2024 – 2025", fr: "2024 – 2025" },
    title: { en: "First projects", fr: "Premiers projets" },
    description: {
      en: "Built Quiz Game (Pygame), E-Suggestion Box (Flask) and Stock Management System (C) — learning by shipping.",
      fr: "Quiz Game (Pygame), E-Suggestion Box (Flask) et Stock Management System (C) — apprendre en livrant.",
    },
    type: "project",
  },
  {
    id: 4,
    year: { en: "Aug – Sep 2025", fr: "Août – Sept. 2025" },
    title: { en: "Google PM Certificates", fr: "Certificats Google PM" },
    description: {
      en: "Completed two Google Career Certificates in Project Management via Coursera.",
      fr: "Deux Google Career Certificates en gestion de projet via Coursera.",
    },
    type: "certification",
  },
  {
    id: 5,
    year: { en: "October 2025", fr: "Octobre 2025" },
    title: { en: "2nd year at BIT", fr: "2ᵉ année au BIT" },
    description: {
      en: "Started my second year, deepening full-stack skills (TypeScript, Supabase, Django, FastAPI).",
      fr: "Début de la 2ᵉ année, approfondissement du full-stack (TypeScript, Supabase, Django, FastAPI).",
    },
    type: "education",
  },
  {
    id: 6,
    year: { en: "2025 – 2026", fr: "2025 – 2026" },
    title: { en: "Lead Dev — AgroConnect BF", fr: "Lead Dev — AgroConnect BF" },
    description: {
      en: "Led a B2B agricultural platform (web + mobile + API) — architecture, coordination and integration of 3 repos.",
      fr: "Pilotage d'une plateforme agricole B2B (web + mobile + API) — architecture, coordination et intégration de 3 dépôts.",
    },
    type: "project",
  },
  {
    id: 7,
    year: { en: "2026", fr: "2026" },
    title: { en: "Hackathons", fr: "Hackathons" },
    description: {
      en: "HUAWEI ICT Competition (Network, national stage), Merradis cybersecurity hackathon, and HGE with Zamsma (Team Mirror).",
      fr: "HUAWEI ICT Competition (Réseau, épreuves nationales), hackathon cybersécurité Merradis, et HGE avec Zamsma (Team Mirror).",
    },
    type: "achievement",
  },
  {
    id: 8,
    year: { en: "Apr – May 2026", fr: "Avr. – Mai 2026" },
    title: { en: "AI & Security certs", fr: "Certifs IA & Sécurité" },
    description: {
      en: "AI Fluency and MCP (Anthropic Academy) and ICIP (OPSWAT) — leaning into AI and cybersecurity.",
      fr: "AI Fluency et MCP (Anthropic Academy) et ICIP (OPSWAT) — orientation IA et cybersécurité.",
    },
    type: "certification",
  },
  {
    id: 9,
    year: { en: "Aug – Sep 2026", fr: "Août – Sept. 2026" },
    title: { en: "Web & Mobile Developer Intern — WoeLab", fr: "Stage développeur web & mobile — WoeLab" },
    description: {
      en: "At HubCity in Lomé, audited and documented existing SCoPE codebases, contributed to the Admin dashboard and MVP consolidation, and prepared technical handoff.",
      fr: "À HubCity à Lomé, audit et documentation de l'existant SCoPE, contribution au dashboard Admin et à la consolidation du MVP, puis préparation de la passation technique.",
    },
    type: "achievement",
  },
  {
    id: 10,
    year: { en: "2026", fr: "2026" },
    title: { en: "Freelance & product work", fr: "Freelance & développement produit" },
    description: {
      en: "Building products as a freelancer and deepening my web and mobile profile across backend and AI integrations.",
      fr: "Je développe des produits en freelance et j'approfondis mon profil web et mobile, avec du backend et des intégrations IA.",
    },
    type: "project",
    current: true,
  },
]

export const typeColors = {
  education:     "#00B4D8",
  project:       "#a855f7",
  certification: "#22c55e",
  achievement:   "#eab308",
}

export default timeline
