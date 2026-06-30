import type { BackgroundType, BannerFormData, BannerStyle, BannerTemplate, CareerField, ColorTheme } from "@/types/banner";

export const STORAGE_KEY = "bannerforge-ai-form";
export const PROMPT_STORAGE_KEY = "bannerforge-ai-prompt";

export const careerFields: CareerField[] = [
  "Student",
  "Software Development",
  "AI/ML",
  "Data Science",
  "Cybersecurity",
  "Finance",
  "Marketing",
  "Design",
  "Business",
  "Sales",
  "Human Resources",
  "Legal",
  "Real Estate",
  "Consulting",
  "Operations",
  "Product",
  "Content Creation",
  "Architecture",
  "Government",
  "Nonprofit",
  "Healthcare",
  "Education",
  "Other"
];

export const subfieldsByCareer: Record<CareerField, string[]> = {
  Student: [
    "Computer Science",
    "AI & Data Science",
    "Electronics",
    "Mechanical",
    "Civil",
    "Commerce",
    "Medical"
  ],
  "Software Development": ["Frontend", "Backend", "Full Stack", "Mobile", "DevOps", "Cloud", "SaaS", "Open Source"],
  "AI/ML": ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Generative AI", "MLOps", "AI Research"],
  "Data Science": ["Analytics", "BI", "Data Engineering", "Visualization", "Decision Science", "Statistics"],
  Cybersecurity: ["Ethical Hacking", "SOC", "Pentesting", "Cloud Security", "GRC", "Threat Intelligence"],
  Finance: ["Investment Banking", "Trading", "FinTech", "Accounting", "Wealth Management", "Corporate Finance"],
  Marketing: ["Digital Marketing", "SEO", "Content Marketing", "Brand Strategy", "Performance Marketing", "Growth"],
  Design: ["UI/UX", "Graphic Design", "Product Design", "Brand Design", "Motion Design", "Design Systems"],
  Business: ["Founder", "Startup", "Product Manager", "Strategy", "Business Analyst", "Venture Capital"],
  Sales: ["B2B Sales", "SaaS Sales", "Enterprise Sales", "Account Executive", "Customer Success", "Partnerships"],
  "Human Resources": ["Talent Acquisition", "People Operations", "HR Business Partner", "Learning & Development", "Culture"],
  Legal: ["Corporate Law", "IP Law", "Compliance", "Legal Tech", "Policy", "Contracts"],
  "Real Estate": ["Broker", "Property Consultant", "Commercial Real Estate", "Interior Property", "Investment"],
  Consulting: ["Management Consulting", "Strategy Consulting", "Tech Consulting", "Operations Consulting", "Financial Advisory"],
  Operations: ["Supply Chain", "Logistics", "Program Management", "Process Excellence", "Manufacturing"],
  Product: ["Product Management", "Product Marketing", "Growth Product", "Platform Product", "Consumer Product"],
  "Content Creation": ["Creator", "YouTube", "Podcasting", "Writing", "Personal Branding", "Community"],
  Architecture: ["Urban Design", "Interior Design", "Sustainable Architecture", "Landscape", "3D Visualization"],
  Government: ["Public Policy", "Civil Services", "Administration", "Diplomacy", "Public Affairs"],
  Nonprofit: ["Social Impact", "Fundraising", "Community Development", "NGO Leadership", "Advocacy"],
  Healthcare: ["Doctor", "Medical Research", "Healthcare Tech", "Nursing", "Pharma", "Public Health"],
  Education: ["Teacher", "Professor", "Researcher", "EdTech", "Academic Leader", "Instructional Design"],
  Other: ["Custom Input"]
};

export const bannerStyles: BannerStyle[] = [
  "Corporate",
  "Luxury",
  "Nature",
  "Futuristic",
  "Technology",
  "Minimalist",
  "Dark",
  "Light",
  "Editorial",
  "Founder",
  "Neon",
  "Academic"
];

export const colorThemes: ColorTheme[] = ["Blue", "Green", "Purple", "Black", "White", "Custom"];

export const backgroundTypes: BackgroundType[] = ["Generate AI Background", "Upload Personal Image"];

export const defaultBannerFormData: BannerFormData = {
  fullName: "",
  role: "",
  organization: "",
  email: "",
  careerField: "Student",
  subfield: "Computer Science",
  customSubfield: "",
  bannerStyle: "Corporate",
  colorTheme: "Blue",
  customColor: "#2563eb",
  backgroundType: "Generate AI Background",
  uploadedImageName: "",
  uploadedImageDataUrl: "",
  additionalNotes: "",
  selectedTemplateId: ""
};

export const featureItems = [
  "AI Prompt Generation",
  "Career-Specific Templates",
  "ChatGPT Ready",
  "Gemini Ready",
  "Mobile Friendly",
  "Dark Mode"
];

export const howItWorksSteps = ["Pick Template", "Fill Details", "Generate Prompt", "Create Banner"];

export const bannerTemplates: BannerTemplate[] = [
  {
    id: "ai-founder",
    title: "AI Founder Signal",
    audience: "Founders, builders, startup operators",
    careerField: "Business",
    subfield: "Founder",
    role: "AI Startup Founder",
    bannerStyle: "Founder",
    colorTheme: "Blue",
    backgroundType: "Generate AI Background",
    notes: "Create a high-trust founder brand with product vision, traction energy, subtle AI motifs, investor-ready polish, and clean space for a strong headline.",
    accent: "from-blue-600 via-cyan-500 to-emerald-400"
  },
  {
    id: "software-premium",
    title: "Senior Software Pro",
    audience: "Developers and engineering leaders",
    careerField: "Software Development",
    subfield: "Full Stack",
    role: "Full Stack Developer",
    bannerStyle: "Technology",
    colorTheme: "Blue",
    backgroundType: "Generate AI Background",
    notes: "Show refined code grids, product architecture, cloud depth, and reliable engineering leadership without clutter.",
    accent: "from-sky-500 via-blue-600 to-slate-900"
  },
  {
    id: "data-executive",
    title: "Data Leadership",
    audience: "Data analysts, BI, analytics managers",
    careerField: "Data Science",
    subfield: "Analytics",
    role: "Data Analyst",
    bannerStyle: "Corporate",
    colorTheme: "Green",
    backgroundType: "Generate AI Background",
    notes: "Use premium dashboards, abstract charts, decision intelligence, and executive clarity in a clean horizontal composition.",
    accent: "from-emerald-500 via-teal-500 to-blue-500"
  },
  {
    id: "cyber-elite",
    title: "Cybersecurity Elite",
    audience: "Security engineers and SOC professionals",
    careerField: "Cybersecurity",
    subfield: "Cloud Security",
    role: "Cybersecurity Specialist",
    bannerStyle: "Dark",
    colorTheme: "Black",
    backgroundType: "Generate AI Background",
    notes: "Make the banner feel secure, premium, controlled, and cinematic with encrypted grids and defensive architecture.",
    accent: "from-zinc-950 via-cyan-600 to-emerald-400"
  },
  {
    id: "ux-portfolio",
    title: "Designer Portfolio",
    audience: "UI/UX, product, and brand designers",
    careerField: "Design",
    subfield: "UI/UX",
    role: "Product Designer",
    bannerStyle: "Editorial",
    colorTheme: "Purple",
    backgroundType: "Generate AI Background",
    notes: "Highlight taste, craft, layout precision, design systems, and polished product storytelling with editorial spacing.",
    accent: "from-fuchsia-500 via-violet-600 to-indigo-600"
  },
  {
    id: "finance-trust",
    title: "Finance Trust",
    audience: "Finance, banking, fintech, trading",
    careerField: "Finance",
    subfield: "FinTech",
    role: "Finance Professional",
    bannerStyle: "Luxury",
    colorTheme: "Black",
    backgroundType: "Generate AI Background",
    notes: "Use restrained luxury, market geometry, trust, numbers, growth, and polished wealth-management confidence.",
    accent: "from-stone-950 via-amber-500 to-zinc-700"
  },
  {
    id: "marketing-growth",
    title: "Growth Marketer",
    audience: "Marketing, SEO, content, growth teams",
    careerField: "Marketing",
    subfield: "Growth",
    role: "Growth Marketer",
    bannerStyle: "Light",
    colorTheme: "Green",
    backgroundType: "Generate AI Background",
    notes: "Show campaign momentum, brand clarity, conversion paths, and bright optimistic growth with clean premium visuals.",
    accent: "from-lime-400 via-emerald-500 to-sky-500"
  },
  {
    id: "sales-rainmaker",
    title: "Sales Rainmaker",
    audience: "Account executives and revenue leaders",
    careerField: "Sales",
    subfield: "Enterprise Sales",
    role: "Enterprise Account Executive",
    bannerStyle: "Corporate",
    colorTheme: "Blue",
    backgroundType: "Generate AI Background",
    notes: "Communicate trust, pipeline, partnerships, negotiation strength, and revenue momentum with premium business energy.",
    accent: "from-blue-700 via-indigo-500 to-teal-400"
  },
  {
    id: "student-career",
    title: "Student Career Launch",
    audience: "Students, interns, freshers",
    careerField: "Student",
    subfield: "Computer Science",
    role: "Computer Science Student",
    bannerStyle: "Minimalist",
    colorTheme: "Blue",
    backgroundType: "Generate AI Background",
    notes: "Make the banner aspirational, clean, recruiter-friendly, and focused on learning, projects, internships, and future potential.",
    accent: "from-cyan-400 via-blue-500 to-indigo-500"
  },
  {
    id: "healthcare-modern",
    title: "Healthcare Authority",
    audience: "Doctors, researchers, healthcare tech",
    careerField: "Healthcare",
    subfield: "Healthcare Tech",
    role: "Healthcare Professional",
    bannerStyle: "Light",
    colorTheme: "Green",
    backgroundType: "Generate AI Background",
    notes: "Use compassionate authority, medical precision, soft light, trust, innovation, and clean clinical design cues.",
    accent: "from-teal-400 via-emerald-500 to-blue-500"
  },
  {
    id: "teacher-scholar",
    title: "Academic Scholar",
    audience: "Teachers, professors, researchers",
    careerField: "Education",
    subfield: "Researcher",
    role: "Research Scholar",
    bannerStyle: "Academic",
    colorTheme: "White",
    backgroundType: "Generate AI Background",
    notes: "Create an intelligent academic brand with knowledge, research papers, calm authority, and readable text hierarchy.",
    accent: "from-slate-200 via-sky-300 to-indigo-400"
  },
  {
    id: "consultant-strategy",
    title: "Strategy Consultant",
    audience: "Consultants and business advisors",
    careerField: "Consulting",
    subfield: "Strategy Consulting",
    role: "Strategy Consultant",
    bannerStyle: "Corporate",
    colorTheme: "Purple",
    backgroundType: "Generate AI Background",
    notes: "Make it boardroom-ready with frameworks, transformation, clarity, high-stakes decision making, and premium executive polish.",
    accent: "from-violet-700 via-blue-600 to-cyan-400"
  },
  {
    id: "creator-brand",
    title: "Creator Brand",
    audience: "Creators, writers, podcasters",
    careerField: "Content Creation",
    subfield: "Personal Branding",
    role: "Content Creator",
    bannerStyle: "Editorial",
    colorTheme: "Purple",
    backgroundType: "Generate AI Background",
    notes: "Design for personality, audience growth, content pillars, high recall value, and a premium media-brand look.",
    accent: "from-pink-500 via-purple-500 to-orange-400"
  },
  {
    id: "legal-precision",
    title: "Legal Precision",
    audience: "Lawyers, legal tech, compliance",
    careerField: "Legal",
    subfield: "Corporate Law",
    role: "Legal Professional",
    bannerStyle: "Luxury",
    colorTheme: "Black",
    backgroundType: "Generate AI Background",
    notes: "Use precise, trustworthy, elegant legal symbolism with a premium modern law-firm feel and strong readable hierarchy.",
    accent: "from-zinc-950 via-stone-700 to-amber-300"
  },
  {
    id: "real-estate-premium",
    title: "Real Estate Premium",
    audience: "Property consultants and brokers",
    careerField: "Real Estate",
    subfield: "Commercial Real Estate",
    role: "Real Estate Consultant",
    bannerStyle: "Luxury",
    colorTheme: "White",
    backgroundType: "Generate AI Background",
    notes: "Show premium properties, skyline depth, trust, negotiation, and elegant high-value market positioning.",
    accent: "from-slate-100 via-sky-300 to-stone-600"
  },
  {
    id: "operations-excellence",
    title: "Operations Excellence",
    audience: "Ops, supply chain, program managers",
    careerField: "Operations",
    subfield: "Program Management",
    role: "Operations Manager",
    bannerStyle: "Corporate",
    colorTheme: "Green",
    backgroundType: "Generate AI Background",
    notes: "Communicate systems thinking, execution, scale, process improvement, and calm operational control.",
    accent: "from-emerald-600 via-cyan-500 to-slate-700"
  }
];
