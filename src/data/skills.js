// Compétences par domaine, en tags (sans pourcentages factices).
// Le nom des catégories est bilingue { en, fr } ; les noms de techno restent
// tels quels (noms propres). Voir src/i18n/localize.js (useLoc()).
const skills = [
  {
    category: { en: "Frontend", fr: "Frontend" },
    color: "#00B4D8",
    items: ["React 19", "JavaScript ES6+", "TypeScript", "Vue.js", "Tailwind CSS", "Three.js"],
  },
  {
    category: { en: "Mobile", fr: "Mobile" },
    color: "#22c55e",
    items: ["Flutter", "Dart", "BLoC", "Hive"],
  },
  {
    category: { en: "Backend", fr: "Backend" },
    color: "#f97316",
    items: ["Node.js", "Express", "Python", "Django / DRF", "FastAPI", "Flask", "REST", "JWT"],
  },
  {
    category: { en: "Databases", fr: "Bases de données" },
    color: "#a855f7",
    items: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "Redis"],
  },
  {
    category: { en: "AI / LLM", fr: "IA / LLM" },
    color: "#e11d48",
    items: ["Gemini", "Groq / Llama 3.3", "MCP", "Prompt engineering"],
  },
  {
    category: { en: "DevOps & Tools", fr: "DevOps & Outils" },
    color: "#0ea5e9",
    items: ["Git / GitHub", "Docker", "Vite", "Render", "Vercel"],
  },
  {
    category: { en: "Systems & IT", fr: "Systèmes & IT" },
    color: "#14b8a6",
    items: [
      { en: "Software maintenance", fr: "Maintenance logicielle" },
      { en: "OS install (Windows/Linux)", fr: "Installation d'OS (Windows/Linux)" },
      { en: "Troubleshooting", fr: "Dépannage" },
      { en: "Technical support", fr: "Support technique" },
      { en: "Networking", fr: "Réseau" },
    ],
  },
  {
    category: { en: "Design", fr: "Design" },
    color: "#eab308",
    items: ["Figma", "Design systems"],
  },
  {
    category: { en: "Currently learning", fr: "En apprentissage" },
    color: "#64748b",
    items: ["C", "PHP / Laravel", "Java / Spring"],
  },
]

export default skills
