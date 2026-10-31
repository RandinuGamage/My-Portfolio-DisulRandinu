export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  categories: Array<'Machine Learning' | 'Data Science' | 'NLP / AI' | 'Web Development' | 'Group Projects'>;
  primaryCategory: string;
  shortDescription: string;
  detailedPoints: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  isGroupProject: boolean;
  groupProjectNote?: string;
  metricBadge?: { label: string; value: string };
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: string[];
  summary: string;
}

export interface HighlightCard {
  title: string;
  description: string;
  iconName: string;
}

export const personalInfo = {
  name: "Disul Randinu Gamage",
  shortName: "Disul Randinu",
  initials: "DRG",
  titles: [
    "Data Science Undergraduate",
    "Machine Learning Enthusiast",
    "Aspiring Data Scientist",
    "AI & Data Analytics Enthusiast"
  ],
  primaryTitle: "Data Science Undergraduate | Machine Learning Enthusiast | Aspiring Data Scientist",
  university: "Sabaragamuwa University of Sri Lanka",
  faculty: "Faculty of Computing",
  department: "Department of Data Science",
  degree: "Bachelor of Science Honours in Data Science (B.Sc. (Hons.) in Data Science)",
  degreeShort: "B.Sc. (Hons.) in Data Science",
  expectedGraduation: "2028",
  location: "Belihuloya, Sri Lanka",
  country: "Sri Lanka",
  email: "randinugamage1121@gmail.com",
  phone: "+94 77 196 3634",
  phoneClean: "+94771963634",
  github: "https://github.com/RandinuGamage",
  githubDisplay: "github.com/RandinuGamage",
  linkedin: "https://www.linkedin.com/in/disul-randinu/",
  linkedinDisplay: "linkedin.com/in/disul-randinu",
  heroIntro:
    "I'm passionate about transforming data into meaningful insights and building intelligent solutions that address real-world challenges. Through academic projects and independent development, I explore machine learning, predictive analytics, natural language processing, and data-driven applications.",
  aboutIntro:
    "I am a Data Science undergraduate at the Faculty of Computing, Department of Data Science, Sabaragamuwa University of Sri Lanka. I am passionate about machine learning, data analytics, artificial intelligence, and natural language processing. Through academic and personal projects, I explore data-driven solutions, predictive modelling, and practical applications of technology. I enjoy learning new technologies, solving problems, and transforming data into meaningful insights.",
  contactHeading: "Let's Build Something Meaningful Together.",
  contactMessage:
    "I'm always interested in connecting with people, exploring new opportunities, and collaborating on technology and data-driven projects."
};

export const aboutHighlights: HighlightCard[] = [
  {
    title: "Data Science Undergraduate",
    description: "Studying at the Faculty of Computing, Department of Data Science, Sabaragamuwa University of Sri Lanka with strong mathematical and computational rigor.",
    iconName: "GraduationCap"
  },
  {
    title: "Machine Learning Projects",
    description: "Hands-on experience modeling agricultural yields, customer churn dynamics, and sentiment classification algorithms.",
    iconName: "BrainCircuit"
  },
  {
    title: "Full-Stack Development",
    description: "Constructing responsive, data-driven web applications and APIs using React, Node.js, Express, and MongoDB.",
    iconName: "Layout"
  },
  {
    title: "Continuous Learner",
    description: "Committed to expanding analytical depth through verifiable credentials including the Google AI Essentials Specialization.",
    iconName: "Sparkles"
  }
];

export const technicalSkills: SkillGroup[] = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    summary: "Core languages applied across analytical workflows, algorithms, and application backends.",
    skills: ["Python", "Java", "JavaScript", "SQL"]
  },
  {
    category: "Data Science",
    iconName: "BarChart3",
    summary: "Tabular data extraction, normalization, exploratory analysis, and statistical hypothesis testing.",
    skills: ["Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis", "Statistics"]
  },
  {
    category: "Machine Learning",
    iconName: "Cpu",
    summary: "Supervised predictive modeling, feature engineering, loss minimization, and model validation.",
    skills: ["Scikit-learn", "CatBoost", "Regression", "Classification", "Model Evaluation"]
  },
  {
    category: "Natural Language Processing",
    iconName: "MessageSquareCode",
    summary: "Linguistic preprocessing, tokenization, polarity detection, and transformer representations.",
    skills: ["NLTK", "Transformers", "BERT", "Sentiment Analysis"]
  },
  {
    category: "Data Visualization",
    iconName: "PieChart",
    summary: "Analytical interfaces and interactive charts for empirical data discovery and model explainability.",
    skills: ["Plotly", "Streamlit"]
  },
  {
    category: "Web Development",
    iconName: "Globe2",
    summary: "Modern client-server architectures, RESTful interfaces, and modular user components.",
    skills: ["React.js", "Node.js", "Express.js", "HTML", "CSS"]
  },
  {
    category: "Databases",
    iconName: "Database",
    summary: "Document persistence, schema definition, query design, and cloud database cluster management.",
    skills: ["MongoDB", "MongoDB Atlas", "Mongoose"]
  },
  {
    category: "Tools & Environments",
    iconName: "Wrench",
    summary: "Version control, reproducible notebook environments, and API inspection utilities.",
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Postman"]
  }
];

export const projectFilters = [
  "All Projects",
  "Machine Learning",
  "Data Science",
  "NLP / AI",
  "Web Development",
  "Group Projects"
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: "tea-yield-micro-region-modeling",
    name: "Agro-Climatic Micro-Region Yield Modeling and Harvest Readiness Classification",
    subtitle: "Precision Agriculture Machine Learning Application",
    categories: ["Machine Learning", "Data Science"],
    primaryCategory: "Machine Learning",
    shortDescription:
      "A machine learning application developed for tea yield prediction and harvest readiness classification using Sri Lankan regional plantation agro-climatic data. Features trained regression and classification models deployed through an interactive Streamlit dashboard.",
    detailedPoints: [
      "Engineered tabular data preprocessing pipelines integrating agro-climatic metrics such as precipitation patterns, ambient temperature, and regional altitude.",
      "Trained and evaluated CatBoost and Scikit-learn regression models for harvest yield prediction alongside classification models for optimal harvest readiness.",
      "Developed an interactive Streamlit and Plotly analytical interface allowing agricultural stakeholders to explore predictions and feature correlations."
    ],
    technologies: ["Python", "Pandas", "CatBoost", "Scikit-learn", "Streamlit", "Plotly"],
    githubUrl: "https://github.com/RandinuGamage/tea-yield-micro-region-modeling",
    isGroupProject: false,
    metricBadge: { label: "Target", value: "Yield & Harvest Timing" }
  },
  {
    id: "nlp-movie-review-sentiment-analysis",
    name: "Movie Review Sentiment Analysis",
    subtitle: "NLP Classification with TMDB API & Transformer Models",
    categories: ["NLP / AI", "Machine Learning", "Data Science"],
    primaryCategory: "NLP / AI",
    shortDescription:
      "An end-to-end Natural Language Processing system that gathers movie reviews via the TMDB API, cleans unstructured text, and benchmarks traditional machine learning classifiers against BERT-based representations.",
    detailedPoints: [
      "Constructed an automated data ingestion workflow querying the TMDB API to assemble a multi-genre movie review corpus.",
      "Implemented comprehensive NLP text cleaning: tokenization, lemmatization, stopword filtering, and n-gram vectorization.",
      "Executed comparative performance evaluations for Positive, Neutral, and Negative sentiment classification comparing traditional Scikit-learn models with BERT transformer architectures."
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "NLTK", "Transformers", "BERT", "TMDB API"],
    githubUrl: "https://github.com/RandinuGamage/NLP-Movie-Review-Sentiment-Analysis",
    isGroupProject: false,
    metricBadge: { label: "Classes", value: "Pos / Neu / Neg Polarity" }
  },
  {
    id: "aws-customer-churn-prediction",
    name: "AWS Customer Churn Prediction",
    subtitle: "Cloud-Based Machine Learning Analytics Pipeline",
    categories: ["Group Projects", "Machine Learning", "Data Science"],
    primaryCategory: "Group Project",
    shortDescription:
      "A collaborative cloud-native machine learning project designed to identify subscriber churn risks using SQL analytics and machine learning workflows on AWS. Showcases team-based data engineering and predictive modeling.",
    detailedPoints: [
      "Collaborated on designing the customer churn modeling architecture from raw subscriber telemetry to predictive inference.",
      "Contributed to data preprocessing, exploratory SQL analytics, and feature engineering to detect early customer disengagement indicators.",
      "Participated in benchmarking machine learning classification algorithms to surface high-risk accounts for retention actions."
    ],
    technologies: ["AWS", "Python", "SQL Analytics", "Scikit-learn", "Pandas", "Machine Learning"],
    githubUrl: "https://github.com/PHGNKavindya/AWS-Customer-Churn-Prediction",
    isGroupProject: true,
    groupProjectNote:
      "Collaborative Group Project — Contributed to data preprocessing, SQL-driven exploratory analysis, and classification model evaluation.",
    metricBadge: { label: "Attribution", value: "Team ML Pipeline" }
  },
  {
    id: "newspulse-aggregator",
    name: "NewsPulse — News Aggregator",
    subtitle: "Automated Multi-Source News Curation Platform",
    categories: ["Web Development"],
    primaryCategory: "Web Development",
    shortDescription:
      "A modern full-stack news aggregation platform providing automated article harvesting, category-based topic filtering, and an interactive reader dashboard integrated with MongoDB.",
    detailedPoints: [
      "Engineered automated article collection leveraging Python web scraping (BeautifulSoup, Feedparser) and REST API ingestion.",
      "Constructed a responsive React & Vite dashboard supporting topic categorization (Tech, Business, Science, World) with fast search.",
      "Architected a robust Express.js backend with MongoDB for organized article persistence and user preference management."
    ],
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Python", "BeautifulSoup", "Feedparser"],
    githubUrl: "https://github.com/RandinuGamage/News-aggregator-app",
    isGroupProject: false,
    metricBadge: { label: "Architecture", value: "Full-Stack MERN + Python" }
  },
  {
    id: "edupilot-administration-system",
    name: "EduPilot — Tuition Institute Administration System",
    subtitle: "Operations & Attendance Management Platform",
    categories: ["Web Development"],
    primaryCategory: "Web Development",
    shortDescription:
      "A comprehensive administration application built to streamline operations for tuition institutes, featuring class scheduling, user management, student attendance, and fee tracking.",
    detailedPoints: [
      "Implemented core administrative modules for class management, student enrollments, and teacher schedules.",
      "Constructed attendance logging and fee collection tracking systems with automated summary calculations.",
      "Engineered secure authentication workflows with JWT and persistent document storage using MongoDB and Mongoose."
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "CSS"],
    githubUrl: "https://github.com/RandinuGamage/EduPilot",
    isGroupProject: false,
    metricBadge: { label: "Scope", value: "Management & Finance" }
  }
];

export const educationInfo = {
  degree: "Bachelor of Science Honours in Data Science (B.Sc. (Hons.) in Data Science)",
  degreeShort: "B.Sc. (Hons.) in Data Science",
  institution: "Sabaragamuwa University of Sri Lanka",
  faculty: "Faculty of Computing",
  department: "Department of Data Science",
  location: "Belihuloya, Sri Lanka",
  expectedGraduation: "2028",
  description:
    "Comprehensive honours degree program offered by the Department of Data Science, Faculty of Computing, integrating mathematical statistics, computational modeling, algorithm design, machine learning architectures, and modern data engineering practices.",
  coreSubjects: [
    "Statistical Inference & Probability Theory",
    "Machine Learning & Pattern Recognition",
    "Exploratory Data Analysis & Visualization",
    "Database Management Systems (RDBMS & NoSQL)",
    "Data Structures & Object-Oriented Programming",
    "Big Data Analytics & Cloud Systems",
    "Deep Learning & NLP Foundations",
    "Software Engineering Principles"
  ]
};

export const certificationsData = [
  {
    title: "Google AI Essentials Specialization",
    provider: "Coursera",
    credentialIssuer: "Google",
    completionDate: "September 11, 2025",
    topics: [
      "Introduction to Artificial Intelligence & its practical capabilities",
      "AI productivity tools and workflow enhancement",
      "Effective prompt engineering strategies",
      "Responsible AI principles, bias mitigation & data security"
    ]
  }
];

export const volunteeringData = [
  {
    role: "Program Team Member",
    summary:
      "Active team member contributing to event planning, operational coordination, and collaborative execution of community and academic programs.",
    competencies: [
      "Collaborative Event Coordination",
      "Operational Logistics Support",
      "Cross-Functional Team Communication"
    ]
  }
];
