const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const navItems = [
  { name: "About", link: "#about" },
  {name: "Work Experience", link: "#workExperience"},
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "#resume" },
];

export const gridItems = [
  // TOP-LEFT — BIG (3 units)
  {
    id: 1,
    title:
      "Strong applied foundation across AI/ML, Computer Vision, and Data Science through coursework, projects, and industry experience.",
    description: "",
    className: "md:col-start-1 md:row-span-3",   // big = span 3 rows
    img: asset("/AI.jpg"),
    imgClassName: "object-cover opacity-60",
    titleClassName: "justify-end",
    spareImg: "",
  },

  // TOP-RIGHT — SMALL (1 unit)
  {
    id: 2,
    title: "I'm flexible across time zone communications",
    description: "",
    className: "md:col-start-2 md:row-span-1",   // small = span 1 row
    img: asset("/grid.svg"),
    imgClassName: "object-cover opacity-20",
    titleClassName: "items-center  text-center",
    spareImg: "",
  },
    // BOTTOM-RIGHT — BIG (3 units)
  {
    id: 5,
    title: "Currently working on an AWS lakehouse for market data - downloader -> Spark ETL -> S3 (Parquet), queried via Athena, orchestrated with Airflow.",
    description: "The Inside Scoop",
    className: "md:col-start-2 md:row-span-3",   // big
    img: asset("/DE.png"),
    imgClassName: "object-end opacity-70",
    titleClassName: "justify-end",
    spareImg: "",
  },


  // BOTTOM-LEFT — SMALL (1 unit)
  {
    id: 6,
    title: "Focusing on software development - building, testing, deploying.",
    description: "",
    className: "md:col-start-1 md:row-span-1",   // small
    img: "",
    imgClassName: "",
    titleClassName: "items-center justify-center text-center",
    spareImg: "",
  },

];


export const projects = [
  {
    id: 1,
    title: "Secure-RAG: Permissioned Retrieval & Data Sanitization",
    des: "Hardened RAG with role-aware retrieval, pre/post-answer sanitizers, and full audit logging to prevent PII/secret leakage; production-minded policies and tests.",
    img: asset("/SecureRag.png"),
    height: "300px",
    width: "400px",
    link: "https://github.com/harshvardhanvn1/secure-rag",
  },
  {
    id: 2,
    title: "Adversarial Time-Series Forecasting",
    des: "TFT/Informer on UCI Electricity & M4; FGSM/PGD attacks and smoothing defense; reproducible PyTorch pipelines with evaluation and plots.",
    img: asset("/Timeseries.png"),
    height: "300px",
    width: "400px",
    link: "https://github.com/harshvardhanvn1/Adversarial-Timeseries-Forecasting",
  },
  {
    id: 3,
    title: "LLM-Join Spider: Discovering SQL Join Keys",
    des: "Query-conditioned join-key discovery on Spider; value-overlap baselines, schema parsing, and automated failure mining + evaluation.",
    img: asset("/LLM.png"),
    height: "300px",
    width: "400px",
    link: "https://github.com/harshvardhanvn1/llm-join-spider",
  },
  {
    id: 4,
    title: "Computer Vision in Biomedics",
    des: "UNet++ and SOTA comparisons for medical imaging; structured notebooks with loaders, training/eval, and experiment tracking.",
    img: asset("/CV.png"),
    height: "300px",
    width: "400px",
    link: "https://github.com/harshvardhanvn1/biomed-cv-notebooks",
  },
];




// =================== ExperienceV2 data ===================
export type ExperienceV2 = {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
  location: string;
  employmentType: "Intern" | "Full-Time" | "Contract" | "Part-Time";
  remote?: boolean;
  logo: string;         // path in /public (e.g., /exp4.svg)
  summary: string;      // one-liner under the header
  tags: string[];       // skill chips
  details?: string[];   // optional bullets for the expander
};

export const experienceV2: ExperienceV2[] = [
  {
    id: 1,
    role: "Data Analytics, Simulation & IoT, AMI Intern",
    company: "MAGNA International",
    companyUrl: "https://www.magna.com/",
    start: "May 2025",
    end: "Present",
    location: "Troy, MI",
    employmentType: "Intern",
    remote: false,
    logo: asset("/magnalogo.png"),
    summary:
      "Acheived 80% cost savings by creating custom ROS2 camera node; benchmarked CV models and shipped forecasting (~89% accuracy). +8% mIOU via synthetic data.",
    tags: ["ROS2", "Python", "YOLO", "SegFormer", "RTMDet", "Databricks", "Stable Diffusion"],
    details: [
      "Cut camera setup time from 3-4 weeks to less than 1 day by configuring GigE industrial cameras with ROS2 and SDKs, and creating instructional videos and confluence documentation that streamlined deployment across plants.",
      "Engineered and deployed a custom ROS2 node using camera's HTTP API SDK and Python wrapper, achieving 80% cost savings - earning accolades from senior leadership; followed software development practices and pushed code to GitHub for integration with the AI Vision Platform.",
      "Benchmarked cutting-edge vision models (SegFormer, UNet, YOLO, RTMDet, DINO) and commercial platforms (Sony BrainBuilder) for segmentation/detection tasks, guiding model adoption strategies.",
      "Aided plant engineers to install and configure 24 industrial cameras to the same network as virtual machines; selected among interns to join a 3-member support team to enable deployment of the image collection application by understanding and working through a professionally developed repository of vision platform by senior engineers.",
      "Performing complex data analysis, including predictive forecasting on inventory management with 89% accuracy even with a limited dataset, for Smart Manufacturing, leveraging Databricks.",
      "Improved defect detection mIOU by 8% through Stable Diffusion based synthetic data generation of realistic defective images, tuning hyperparameters, and annotating outputs in CVAT - mitigating bias and balancing the dataset."
    ]
  },
  {
    id: 2,
    role: "AI/ML Intern",
    company: "Brandbook Studio",
    start: "Jan 2024",
    end: "Apr 2024",
    location: "Orissa, India",
    employmentType: "Intern",
    remote: true,
    logo: asset("/brandbookstudio_logo.jpeg"),
    summary:
      "Scaled dataset (+19%) via targeted scraping + captioning; diffusion pipeline with ResNet/YOLO gates improved downstream detection/seg by ~12%.",
    tags: ["Selenium", "BeautifulSoup", "PyTorch Diffusers", "YOLO", "CLIPScore", "LangChain"],
    details: [
      "Expanded image dataset by 19\% via targeted web scraping (Selenium/Beautiful Soup) and attribute-rich, semi-automatic captions (Microsoft Copilot + Llama/LangChain). Structured prompts around color/position for controlled text-to-image and validated alignment with CLIPScore/BLIP-QA.",
      "Implemented a reproducible Stable Diffusion pipeline (PyTorch Diffusers) with versioned config and prompt templates; added perception-in-the-loop checks (ResNet/YOLO) to gate outputs, raising downstream detection/segmentation by 12\% and reducing bad generations.",
      "Explored advanced directions - LoRA/ControlNet for attribute control, multimodal evaluation (CLIPScore + light human review), and a text-to-video feasibility scan-then documented trade-offs and next-step prototypes to guide future work."
    ]
  },
  {
    id: 3,
    role: "Data Analyst Intern",
    company: "Roopa Screen Pvt. Ltd.",
    start: "Jul 2023",
    end: "Dec 2023",
    location: "Ahmedabad, India",
    employmentType: "Intern",
    remote: false,
    logo: asset("/roopa_logo.jpeg"),
    summary:
      "EDA + SQL reduced ~14 hrs/week manual review; dashboards drove decisions and contributed to ~27% revenue growth.",
    tags: ["Python", "Pandas", "SQL", "Power BI", "EDA"],
    details: [
      "Reduced manual review workload by 14 hours per week by independently researching and implementing Python (Pandas), SQL, and Excel–based preprocessing techniques; conducted exploratory analysis across diverse departmental datasets to build cleaner, more reliable data pipelines.",
      "Delivered actionable insights that influenced product improvements by investigating advanced Logistic Regression, Linear Regression, Decision Trees, and Clustering models in Python; performed independent testing on real-world data and collaborated with 3 cross-functional teams to validate findings and translate into strategic recommendations.",
      "Designed interactive dashboards with comprehensive data visualization tools - Power BI to illustrate key metrics (transaction history, order value, customer satisfaction), contributing to a 27\% revenue surge."
    ]
  },
  {
    id: 4,
    role: "Summer AI Intern",
    company: "eInfochips",
    start: "May 2023",
    end: "Jun 2023",
    location: "Ahmedabad, India",
    employmentType: "Intern",
    remote: false,
    logo: asset("/eInfochips_logo.avif"),
    summary:
      "RNN sentiment with bias mitigation (-0.15 variance); explored transfer learning and RL (Q-Learning, DQN) to improve accuracy and reduce training time.",
    tags: ["TensorFlow", "PyTorch", "RNN", "Transfer Learning", "Reinforcement Learning"],
    details: [
      "Developed and fine-tuned a deep learning model (RNNs for sentiment analysis) using TensorFlow and PyTorch, incorporating bias-mitigation techniques (data re-sampling, feature selection) that reduced bias variance by 0.15.",
      "ollaborated in a team of four using Github for version control to implement transfer learning with pre-trained models and incorporate reinforcement learning (Q-Learning, Deep Q-networks), cutting training time and increasing accuracy.",
      "Articulated comprehensive technical findings to senior management, reflecting initiative and robust teamwork."
    ]
  }
];




export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/harshvardhanvn1",
  },
  
  {
    id: 3,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/harshvardhannagar-profile/",
  },
];

// =================== Education data ===================
export type Education = {
  id: number;
  degree: string;
  school: string;
  start: string;
  end: string;
  location: string;
  gpa?: string;
  coursework: string[];
};

export const education: Education[] = [
  {
    id: 1,
    degree: "Masters of Science in Computer Science",
    school: "Arizona State University",
    start: "2024",
    end: "2026",
    location: "Arizona, USA",
    gpa: "3.83/4.00",
    coursework: [
      "Fundamentals of Statistical Learning and Pattern Recognition",
      "Data Mining",
      "Natural Language Processing",
      "Data Processing at Scale",
      "Knowledge Representation and Reasoning",
      "Image Processing and Analysis",
      "Information Assurance & Security",
      "Software Security"
    ],
  },
  {
    id: 2,
    degree: "B.Tech in Information and Communication Technology",
    school: "Pandit Deendayal Energy University",
    start: "2020",
    end: "2024",
    location: "Gujarat, India",
    gpa: "3.80/4.00",
    coursework: [
      "Data Structures & Algorithms",
      "Object Oriented Concepts & Programming",
      "Operating Systems",
      "DBMS",
      "Cloud Computing",
      "Computer Networks",
      "Machine Learning",
      "AI Systems",
      "Deep Reinforcement Learning",
      "Digital Signal Processing"
    ],
  },
];
