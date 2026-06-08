// Champs traduisibles en { en, fr } (chaîne ou tableau). Voir i18n/localize.js.
const about = {
  name: "Zangafigué Mathias TRAORE",
  school: "Burkina Institute of Technology (BIT)",
  location: "Koudougou, Burkina Faso",
  year: {
    en: "2nd year — Programming & Entrepreneurship",
    fr: "2ᵉ année — Programmation & Entrepreneuriat",
  },
  bio: {
    en: [
      "I'm a second-year Computer Science student at the Burkina Institute of Technology, on the Programming & Entrepreneurship track.",
      "I'm a full-stack & mobile developer who turns ideas into shipped products — from web SaaS to an educational mobile game — with a product/design sensibility and a strong interest in AI and cybersecurity.",
      "In about a year I've shipped ~14 projects and taken part in 3 hackathons, including as Lead Developer on AgroConnect BF, a B2B agricultural platform for Burkina Faso.",
      "Beyond building, I'm hands-on with IT: software maintenance, OS installation and technical support.",
    ],
    fr: [
      "Je suis étudiant en 2ᵉ année d'informatique au Burkina Institute of Technology, option Programmation & Entrepreneuriat.",
      "Développeur full-stack & mobile, je transforme des idées en produits livrés — du SaaS web au jeu mobile éducatif — avec une sensibilité produit/design et un goût marqué pour l'IA et la cybersécurité.",
      "En environ un an, j'ai livré ~14 projets et participé à 3 hackathons, notamment comme Lead Dev sur AgroConnect BF, une plateforme agricole B2B pour le Burkina Faso.",
      "Au-delà du dev, je suis à l'aise côté IT : maintenance logicielle, installation d'OS et support technique.",
    ],
  },
  languages: [
    { name: { en: "French",  fr: "Français" }, level: { en: "Native",        fr: "Natif" } },
    { name: { en: "Dioula",  fr: "Dioula" },   level: { en: "Native",        fr: "Natif" } },
    { name: { en: "English", fr: "Anglais" },  level: { en: "Intermediate",  fr: "Intermédiaire" } },
  ],
  facts: [
    { label: { en: "Projects built", fr: "Projets livrés" },  value: "14+" },
    { label: { en: "Technologies",   fr: "Technologies" },    value: "20+" },
    { label: { en: "Hackathons",     fr: "Hackathons" },      value: "3" },
    { label: { en: "Certifications", fr: "Certifications" },   value: "5" },
  ],
}

export default about
