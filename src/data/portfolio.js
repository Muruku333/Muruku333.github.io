export const profile = {
  name: 'Murugesh',
  fullName: 'Murugesh Kumar V',
  title: 'Full Stack Developer',
  headline: 'Application Development & Solution Delivery',
  roles: [
    'Full Stack Developer',
    'Application Developer',
    'Solution Delivery Engineer',
  ],
  tagline:
    'Building, deploying and supporting enterprise web applications end to end — from solution design to production.',
  location: 'Chennai, Tamil Nadu, India',
  phone: '+91 73058 80787',
  phoneHref: 'tel:+917305880787',
  email: 'kumarmurugesh14032001@gmail.com',
  github: 'https://github.com/Muruku333',
  linkedin: 'https://www.linkedin.com/in/',
  bio: `Full Stack Developer with hands-on experience building, deploying, testing and managing enterprise web applications for the Refex Group of Companies. Experienced in end-to-end application ownership covering solution design, database design, REST API development, frontend development, integrations, PDF/report generation, authentication, automated data synchronisation, server deployment and production support.`,
  focus: 'Enterprise full-stack & solution delivery',
  openTo: 'Roles · collaborations · product builds',
  languages: ['Tamil', 'English'],
};

export const aboutHighlights = [
  {
    title: 'Ownership',
    text: 'End-to-end delivery — requirements, architecture, APIs, frontend, deployment and production support.',
  },
  {
    title: 'Stack',
    text: 'React.js, Node.js, Express.js, MySQL, Sequelize, Java/Spring Boot, Linux and GCP integrations.',
  },
  {
    title: 'Impact',
    text: 'Enterprise apps used across HR, Admin, Finance, Sales and operations — including 1,000+ employee systems.',
  },
];

export const skills = [
  {
    group: 'Frontend',
    items: ['React.js', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Material UI', 'React Native/Expo'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Java', 'Spring Boot', 'Microservices'],
  },
  {
    group: 'Database',
    items: ['MySQL', 'Sequelize ORM', 'Microsoft SQL Server', 'Database Design'],
  },
  {
    group: 'Integrations',
    items: ['HRMS APIs', 'SMTP/Nodemailer', 'JWT Authentication', 'QR-code workflows', 'Third-party APIs'],
  },
  {
    group: 'Automation',
    items: ['PDFKit', 'Puppeteer', 'PDF Generation', 'Report Generation', 'Scheduled Jobs', 'Data Synchronisation'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['Linux Server Deployment', 'GCP', 'Git', 'GitHub', 'Environment Management'],
  },
  {
    group: 'Enterprise',
    items: ['Kissflow', 'SuiteCRM', 'ERPNext/Frappe'],
  },
  {
    group: 'Engineering',
    items: [
      'Application Architecture',
      'Solution Design',
      'API Design',
      'Testing',
      'Debugging',
      'Deployment',
      'Production Support',
    ],
  },
];

export const projects = [
  {
    name: 'GAMA – General Aviation Management Application',
    client: 'Sparzana Aviation Private Limited',
    featured: true,
    description:
      'Independently designed and developed a centralised aviation management platform covering customers, leads, crew rostering, sales, aircraft information and aviation master data — with PDF workflows, HRMS sync and Linux deployment.',
    highlights: [
      'End-to-end ownership: architecture, database, APIs, frontend, integrations, testing and deployment',
      'Quotation, proforma invoice and flight brief sheet workflows with automated PDF generation',
      'HRMS synchronisation, SMTP notifications and website lead integration',
    ],
    tech: [
      'React.js',
      'Vite',
      'Node.js',
      'Express.js',
      'MySQL',
      'Sequelize',
      'JWT',
      'PDFKit/Puppeteer',
      'SMTP',
      'OpenStreetMap',
      'Linux',
    ],
    liveUrl: 'https://sparzana.refex.group/',
    websiteUrl: 'https://sparzana.com/',
  },
  {
    name: 'Refex Contacts – Business Card Management',
    client: 'Refex Group – Admin & HR',
    featured: true,
    description:
      'Centralised business-card management that digitised email-based request and print workflows for employees, HR and Admin — with HRMS sync, approvals and QR-enabled digital contact cards.',
    highlights: [
      'HR request/approval flow and Admin print-ready PDF generation',
      'QR digital cards with WhatsApp, contact save, map and website links',
      'Reduced repetitive design work and improved bulk-print consistency',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Sequelize',
      'PDFKit',
      'QR Code',
      'SMTP',
      'HRMS',
      'Linux',
    ],
    liveUrl: 'https://contacts.dev.refex.group/',
    demoUrl: 'https://contacts.dev.refex.group/vcard/RXIL001279',
  },
  {
    name: 'Refex QR-Code Platform',
    client: 'Refex Group – Group-wide QR Utility',
    featured: true,
    description:
      'Centralised QR platform for business, marketing and operational use — Fixed URL, Dynamic URL, Upload File, Smart Link and Design QR, with SSO and HRMS integrations.',
    highlights: [
      'Dynamic QR destinations without regenerating the image',
      'Smart Link device detection for Play Store / App Store redirects',
      'Multiple SSO identity-provider integrations',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Sequelize',
      'QR Code',
      'SSO',
      'HRMS',
      'SMTP',
      'Linux',
    ],
    liveUrl: 'https://qrcode.refex.group/',
  },
  {
    name: 'F.E.A.S.T – Food Expense and Analytic Smart Terminal',
    client: 'Refex Group Canteen Management',
    featured: true,
    description:
      'Group-wide canteen management supporting 1,000+ employees across locations — QR billing, menus, guest handling, HRMS sync, SMTP alerts and Power BI payroll reporting.',
    highlights: [
      'QR billing with HRMS or F.E.A.S.T QR mapped to the correct employee',
      'Automatic employee sync and user creation for new joiners',
      'Monthly consumption reporting and Power BI payroll deduction workflows',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Sequelize',
      'QR Code',
      'SSO',
      'HRMS',
      'SMTP',
      'Power BI',
      'Linux',
    ],
    liveUrl: 'https://canteen.refex.group/',
  },
  {
    name: 'Refex Renewables Website & CMS',
    client: 'Refex Renewables',
    featured: true,
    description:
      'Single-handedly designed and developed the Refex Renewables corporate website as a full-stack application with a secure CMS for investor documents, management profiles and corporate content — plus lead capture and live stock-market data.',
    highlights: [
      'Admin login CMS so authorised users manage content without developers',
      'Contact-form lead management and live/historical stock-market data',
      'Full stack ownership: frontend, backend, database, APIs, Linux deploy and support',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Sequelize',
      'REST APIs',
      'Linux',
    ],
  },
  {
    name: 'Kissflow Enterprise Applications',
    client: 'Refex Group – Enterprise Application Development',
    featured: false,
    description:
      'Developing and maintaining enterprise low-code applications including Travel Management, Expense Management, Solar Expense Hub and Asset Management — with custom components, API integrations and GCP services.',
    highlights: [
      'Architecture, workflows, forms, business rules and approval processes',
      'Custom components, REST/API integrations and GCP supporting services',
      'Testing, deployment validation and ongoing production support',
    ],
    tech: ['Kissflow', 'Low-code/No-code', 'JavaScript', 'REST APIs', 'GCP'],
  },
];

export const contributions = [
  {
    name: '3i MedTech – QR Brochure / Product Information',
    text: 'QR-driven web workflows for product brochures and information, including form submission and email communication.',
  },
  {
    name: 'Refex Aviation Website / Business API Services',
    text: 'Backend services for trip calculation, aircraft comparison, airport data, enquiry processing and quotation generation.',
  },
  {
    name: 'POS Patrol Data Synchronisation',
    text: 'Scheduled server-side sync for tenant and payment data from POS Patrol APIs, including auth, recurring jobs and DB processing.',
  },
  {
    name: 'Adrenalin HRMS / ESSL Attendance Integration',
    text: 'Attendance-data integration between ESSL biometric systems and Adrenalin HRMS with automated movement and validation.',
  },
  {
    name: 'SCOMA SuiteCRM Integration',
    text: 'API services to retrieve and process SuiteCRM account information for downstream business and Tally-related integrations.',
  },
];

export const experiences = [
  {
    company: 'Refex Group of Companies',
    role: 'Software Developer / Full Stack Developer',
    type: 'Full Time',
    date: '2023 – Present',
    location: 'Chennai, Tamil Nadu',
    points: [
      'Own and manage enterprise web applications from requirement analysis and solution design through development, testing, Linux-server deployment and ongoing production support.',
      'Design and develop frontend, backend and database architecture using React.js, Node.js, Express.js, MySQL and Sequelize ORM.',
      'Develop REST APIs, authentication workflows, business logic, PDF/document generation, scheduled jobs and enterprise integrations.',
      'Manage source code and releases with Git/GitHub; handle Linux deployment, configuration, testing and post-deployment validation.',
      'Troubleshoot production issues, implement enhancements and partner with HR, Admin, Finance and Sales to turn operations into software solutions.',
      'Build on Kissflow, SuiteCRM and ERPNext/Frappe; develop and deploy supporting services on Google Cloud Platform (GCP).',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: "Dharmamurthi Rao Bahadur Calavala Cunnan Chetty's Hindu College, Chennai",
    board: 'Madras University',
    date: '2019 – 2022',
    score: '79.8%',
  },
  {
    degree: 'Higher Secondary – 12th Standard',
    school: 'Government Higher Secondary School, Avadi, Chennai',
    board: 'State Board',
    date: '2018 – 2019',
    score: '60%',
  },
  {
    degree: 'Secondary – 10th Standard',
    school: 'Bharath Matric Higher Secondary School, Ambattur, Chennai',
    board: 'State Board',
    date: '2016 – 2017',
    score: '85.4%',
  },
];

export const certifications = [
  'Professional certification/training in Java Full Stack / Enterprise Java, including Core Java and Spring Boot',
  'Core Java learning/certification through Spoken Tutorial, IIT Bombay',
  'Certification/coursework in HTML, CSS and JavaScript fundamentals',
  'Basic Excel certification/coursework',
];
