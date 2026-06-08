// Les intitulés officiels (name/issuer/skills) restent en anglais ;
// la date est bilingue { en, fr }. Voir src/i18n/localize.js (useLoc()).
const certifications = [
  {
    id: 1,
    name: "Introduction to Critical Infrastructure Protection (ICIP)",
    issuer: "OPSWAT Academy",
    date: { en: "May 2026", fr: "Mai 2026" },
    credentialUrl: "https://learn.opswatacademy.com/certificate/Has9N3vTog",
    skills: ["Critical Infrastructure", "OT Security", "Cybersecurity", "Threat Awareness"],
    color: "#ef4444",
  },
  {
    id: 2,
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic Academy",
    date: { en: "Apr 2026", fr: "Avr. 2026" },
    credentialUrl: "https://verify.skilljar.com/c/ymspxpbpy73v",
    skills: ["MCP Architecture", "Tool Integration", "AI Agents", "API Design", "Claude API"],
    color: "#51BFE0",
  },
  {
    id: 3,
    name: "AI Fluency for Students",
    issuer: "Anthropic Academy",
    date: { en: "Apr 2026", fr: "Avr. 2026" },
    credentialUrl: "https://verify.skilljar.com/c/r7eogtkxka2p",
    skills: ["AI Fundamentals", "Prompt Engineering", "AI Ethics", "Responsible AI", "Claude AI"],
    color: "#FF6D00",
  },
  {
    id: 4,
    name: "Project Initiation: Starting a Successful Project",
    issuer: "Google Career Certificate / Coursera",
    date: { en: "Sep 2025", fr: "Sept. 2025" },
    credentialUrl: "https://coursera.org/verify/HUZBGS7FX8SN",
    skills: ["Project Charter", "Stakeholder Analysis", "Goal Setting", "Risk Identification", "Project Planning"],
    color: "#4285F4",
  },
  {
    id: 5,
    name: "Foundations of Project Management",
    issuer: "Google Career Certificate / Coursera",
    date: { en: "Aug 2025", fr: "Août 2025" },
    credentialUrl: "https://coursera.org/verify/NOFNOQ5KE62P",
    skills: ["Project Lifecycle", "Agile", "Waterfall", "Scrum", "Team Leadership"],
    color: "#34A853",
  },
]

export default certifications
