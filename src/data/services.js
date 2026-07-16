// Prestations freelance — porte « dev / produit » uniquement.
// L'e-book, la bureautique et la vulgarisation informatique relèvent de l'autre
// entonnoir (TikTok / Facebook / WhatsApp) et n'ont pas leur place ici : les mélanger
// recréerait le « fourre-tout » anti-positionnement. Voir PORTFOLIO_BRIEF.md § 8.
//
// Règle d'authenticité : uniquement des prestations réellement maîtrisées.
// Champs bilingues { en, fr } — voir src/i18n/localize.js (useLoc()).
const services = [
  {
    id: 'web',
    title: { en: 'Web development', fr: 'Développement web' },
    description: {
      en: 'Landing pages, web apps and dashboards — fast, responsive, and built around your users.',
      fr: 'Sites vitrines, applications web et tableaux de bord — rapides, responsives et pensés pour vos utilisateurs.',
    },
    stack: ['React', 'Next.js', 'Vue', 'Node.js', 'Express'],
    color: '#00B4D8',
  },
  {
    id: 'mobile',
    title: { en: 'Mobile development', fr: 'Développement mobile' },
    description: {
      en: 'Android and iOS apps with Flutter that keep working without a connection (offline-first) — a real asset in West Africa.',
      fr: 'Applications Android et iOS avec Flutter, qui fonctionnent même sans connexion (offline-first) — un vrai atout en Afrique de l’Ouest.',
    },
    stack: ['Flutter', 'Dart', 'BLoC', 'Hive'],
    color: '#22c55e',
  },
  {
    id: 'backend',
    title: { en: 'Backend, API & SaaS', fr: 'Backend, API & SaaS' },
    description: {
      en: 'The invisible plumbing behind your product: API, database, authentication, user roles and deployment.',
      fr: 'La tuyauterie invisible qui fait tourner votre produit : API, base de données, authentification, rôles utilisateurs et déploiement.',
    },
    stack: ['Django / DRF', 'Flask', 'Node.js', 'Supabase', 'PostgreSQL', 'MongoDB'],
    color: '#f97316',
  },
  {
    id: 'automation',
    title: { en: 'Automation & AI', fr: 'Automatisation & IA' },
    description: {
      en: 'Let the machine handle what takes you hours: webhooks, email sequences, bots, and AI-generated content.',
      fr: 'Faire faire à la machine ce qui vous prend des heures : webhooks, séquences d’emails, bots et génération de contenu par IA.',
    },
    stack: ['Python', 'FastAPI', 'Gemini', 'Groq', 'Telegram'],
    color: '#e11d48',
  },
  {
    id: 'design',
    title: { en: 'UI design', fr: 'Design UI' },
    description: {
      en: 'Web and mobile mockups before any code — validate the interface first, so you don’t pay twice.',
      fr: 'Maquettes web et mobile avant d’écrire le code — on valide l’interface d’abord, pour éviter de payer deux fois.',
    },
    stack: ['Figma', 'Design systems'],
    color: '#eab308',
  },
  {
    id: 'maintenance',
    title: { en: 'Maintenance & consulting', fr: 'Maintenance & conseil' },
    description: {
      en: 'Bug fixes, updates, technical support, and honest advice when you need to choose a stack.',
      fr: 'Correction de bugs, mises à jour, support technique, et un avis honnête quand il faut choisir une techno.',
    },
    stack: ['Git', 'Docker', 'Vercel', 'Render'],
    color: '#a855f7',
  },
]

export default services
