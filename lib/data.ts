
export const personalInfo = {
    name: "Aryan Patel",
    title: "Python & AI/ML Internship Aspirant",
    tagline: "Building intelligent systems that solve real-world problems with precision and impact",
    location: "Surat, Gujarat, India",
    email: "aryanp1544@gmail.com",
    github: "https://github.com/aryan578765",
    linkedin: "https://linkedin.com/in/aryan-patel-0635a3380",
    availability: "Actively Seeking Python & AI/ML Internship Opportunities",
    about: {
        heading: "Passionate About Building Intelligent Systems",
        bio: [
            "Final-year Information Technology student at S.N. Patel Institute of Technology with a CGPA of 7.98/10. I specialize in machine learning and predictive analytics, focusing on building production-ready applications that deliver measurable impact.",
            "My expertise spans supervised and unsupervised learning with 10+ algorithms, advanced feature engineering, and hyperparameter optimization. I've deployed live ML applications including a solar power forecasting system and a heart disease prediction model with 77.48% recall on 300K+ patient records.",
        ],
        stats: [
            { label: "Python Dev", value: "2+", suffix: " Years" },
            { label: "Healthcare", value: "77%", suffix: " Recall" },
            { label: "Deployed", value: "5+", suffix: " Projects" },
            { label: "IBM, Google", value: "5+", suffix: " Certs" }
        ]
    }
};

export const skills = {
    categories: [
        {
            title: "Languages & Frameworks",
            items: ["Python", "JavaScript", "TypeScript", "SQL", "PHP"]
        },
        {
            title: "AI/ML Stack",
            items: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"]
        },
        {
            title: "Web Development",
            items: ["React.js", "Next.js 14", "Node.js", "HTML", "CSS", "Tailwind CSS", "Supabase"]
        },
        {
            title: "Tools & Platforms",
            items: ["Git/GitHub", "Jupyter Notebook", "VS Code", "Postman", "Docker"]
        }
    ]
};

export const projects = [
    {
        title: "Heart Disease Prediction System",
        description: "Machine learning healthcare application predicting heart disease risk using 17 personal health indicators from CDC's BRFSS 2020 dataset.",
        tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Seaborn"],
        metrics: [
            "77.48% Recall (optimized)",
            "300K+ patient records processed",
            "74.89% Accuracy",
            "Live Streamlit deployment"
        ],
        highlights: [
            "Trained and compared 6 classification algorithms",
            "Handled severe 91:9 class imbalance with stratified splitting",
            "RandomizedSearchCV hyperparameter tuning for recall optimization",
            "StandardScaler normalization and extensive EDA"
        ],
        links: {
            demo: "https://heart-disease-prediction-7.streamlit.app",
            github: "https://github.com/aryan578765/Heart-Disease-Prediction"
        },
        image: "/projects/heart-disease.jpg" // Placeholder path
    },
    {
        title: "Solar Power Generation Forecasting",
        description: "Machine learning system forecasting solar power output based on environmental conditions (irradiation, module temperature, ambient temperature) and temporal features.",
        tech: ["Python", "Scikit-learn", "Streamlit", "Time Series", "Jupyter"],
        metrics: [
            "Real-time predictions",
            "7 engineered features",
            "Interactive web interface",
            "Scalable ML pipeline"
        ],
        highlights: [
            "Feature engineering from environmental sensor data",
            "Time-based feature extraction (hour, day, month)",
            "Data scaling and preprocessing pipeline",
            "Production-ready Streamlit deployment"
        ],
        links: {
            demo: "#", // Placeholder
            github: "https://github.com/aryan578765/SPGF"
        },
        image: "/projects/solar-power.jpg"
    },
    {
        title: "Money Collection Management System",
        description: "Full-stack web application for household payment tracking with secure authentication, real-time updates, and export functionality.",
        tech: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "React Hook Form"],
        metrics: [
            "JWT authentication with Supabase",
            "CRUD operations with PostgreSQL",
            "Row-level security (RLS)",
            "CSV data export",
            "Mobile-responsive design"
        ],
        highlights: [
            "Supabase Auth integration",
            "TypeScript for type safety",
            "Custom React components with Tailwind",
            "Optimistic UI updates"
        ],
        links: {
            demo: "#",
            github: "https://github.com/aryan578765/money-collection-system"
        },
        image: "/projects/money-collection.jpg"
    },
    {
        title: "Tweet Sentiment Analyzer",
        description: "NLP classification model analyzing tweet sentiment using text preprocessing, TF-IDF vectorization, and supervised learning.",
        tech: ["Python", "NLP", "Scikit-learn", "NLTK", "Streamlit"],
        metrics: [
            "3-class sentiment classification",
            "Text preprocessing pipeline",
            "TF-IDF and CountVectorizer",
            "Real-time analysis"
        ],
        highlights: [
            "NLTK for text preprocessing",
            "Multiple vectorization techniques",
            "Cross-validation for model robustness",
            "Confusion matrix evaluation"
        ],
        links: {
            demo: "#",
            github: "https://github.com/aryan578765/Tweet-Sentiment-Analyzer"
        },
        image: "/projects/sentiment-analyzer.jpg"
    }
];

export const experience = [
    {
        title: "Final Year IT Student",
        company: "S.N. Patel Institute of Technology & Research Centre",
        location: "Bardoli, Gujarat",
        period: "2022 - 2026",
        description: ["CGPA: 7.98/10 (6th Sem: 8.22)"]
    },
    {
        title: "AI Intern",
        company: "CSRBOX",
        location: "Surat, Gujarat",
        period: "July 2025 - July 2025",
        description: [
            "Developing AI/ML solutions for social impact projects",
            "Applying machine learning to real-world CSR challenges"
        ]
    },
    {
        title: "12th Grade",
        company: "Adarsh Vidhyalay",
        location: "",
        period: "2021-2022",
        description: []
    }
];

export const certifications = [
    { title: "AI Foundation", issuer: "Infosys Springboard", date: "Dec 2025" },
    { title: "AI Primer", issuer: "Infosys Springboard", date: "Dec 2025" },
    { title: "ML Foundation", issuer: "Infosys Springboard", date: "Dec 2025" },
    { title: "Generative AI", issuer: "Google", date: "June 2025" },
    { title: "AI Agent Architect", issuer: "IBM SkillsBuild", date: "July 2025" },
];
