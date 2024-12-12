import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/saif.messaoudi',
 
  github: 'https://github.com/saifmessaoudi',
  linkedin: 'https://www.linkedin.com/in/saif-messaoudi/',
};

export const author = {
  name: 'Saif Messaoudi',
  email: 'saif.messaoudi@esprit.tn'
};

export const seoData = {
  title: 'Saif Messaoudi | Mobile Software Engineer',
  description:
    "I'm a Mobile Software Engineer Specializing in creating innovative and user-friendly mobile solutions.",
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/85820227/231264058-df236c47-a8d2-4077-9fa6-3577aa18e8ca.png',
  url: '',
  keywords: [
    'Gaurav',
    'Gaurav Sarage',
    '@Gaurav Sarage',
    'Gaurav Sarage',
    'Portfolio',
    'Gaurav Portfolio ',
    'Gaurav Sarage Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: '01. about', url: '/#about' },
    { name: '02. skills', url: '/#skills' },
    { name: '03. experience', url: '/#experience' },
    { name: '04. projects', url: '/#projects' },
    { name: '05. contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hey there! I'm",
  title: 'Saif Messaoudi',
  tagline: 'I craft mobile applications with passion 📱',
  description:
    "I'm a Mobile Software Engineer Specializing in creating innovative and user-friendly mobile solutions.",
  specialText: 'Currently a Mobile Enginner intern at @Value',
  
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are some of the technologies I’ve been working with recently:',
    items: [
      'Flutter',
      'Next.js',
      'Express.js',
      'Kotlin',
      'MongoDB',
      'Firebase',
    ],
  },
  img: '/saif-messaoudi.jpeg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Mobile full-stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Developing mobile applications using Flutter and Dart',
        'Building mobile applications with clean architecture',
        'Building RESTful APIs using Node.js',
        'State management using GetX and BloC',
        'Integrating third-party services like Firebase',

        
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'Flutter', icon: 'logos:flutter' },
        { name: 'Dart', icon: 'vscode-icons:file-type-dartlang' },
        { name: 'Kotlin', icon: 'logos:kotlin' },
        { name: 'Java', icon: 'logos:java' },
        { name: 'Firebase', icon: 'logos:firebase' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'React', icon: 'vscode-icons:file-type-reactjs' },
        { name: 'Next.js', icon: 'logos:nextjs' },
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
      
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "My experiences",
  experiences: [
    {
      company: 'AirMenus',
      companyUrl: 'https://about.airmenus.in',
      role: 'Frontend Developer Intern',
      started: 'Oct 2022',
      upto: 'Present',
      tasks: [
        "Built 15+ dynamic web applications using React and Next.js, resulting in a 15% increase in user engagement.                      Collaborated closely 'with' the design team to implement pixel-perfect UI/UX designs, consistently delivering projects           on-time.",
        "Developed and maintained responsive web applications for clients in the food and hospitality industry, enhancing their           online presence and customer engagement. Implemented Tailwind CSS to streamline the development process, reducing CSS            codebase by 20%",
        "Collaborated with clients to gather project requirements and translate them into actionable technical tasks, ensuring            client expectations were met or exceeded.",
      ],
    },
    {
      company: 'StarkCon',
      companyUrl: 'https://starkcon.com',
      role: 'StarkCon Cairo Fellow',
      started: 'January 2023',
      upto: 'March 2023',
      tasks: [
        "Selected for the first cohort of StarkCon Cairo Fellow program and got trained on blockchain, Cairo and started building on StarkNet. ",
        "Underwent a 5 week program under mentorship of professionals from StarkNet ecosystem. ",
        "Learnt how to setup Cairo environment, blockchain, basics of ZK and Cairo, writing smart contracts and Starklings.",
        "Earned an exclusive NFT as proof of completion and custom swag kit.",
      ],
    },
    {
      company: 'Yellow Fryum',
      companyUrl: 'https://yellowfryum.com',
      role: 'Frontend Developer & Research Intern',
      started: 'March 2022',
      upto: 'May 2022',
      tasks: [
        "Spearheaded the design and development of a responsive landing page using ReactJS and Tailwind CSS, resulting in a               40% increase in page load speed",
        'Worked closely with a cross-functional team of 5 interns to ideate and implement UI/UX improvements, resulting in a 20%          boost in user engagement and a 15% increase in conversion rates.',
        'Conducted user research and usability testing, gathering feedback from over 100+ users, which directly influenced                design decisions and led to a 30% improvement in user satisfaction scores.',
        "Met project deadlines consistently, delivering good-quality code and designs on time.",
      ],
    },
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  
  title: 'my projects',
  projects: [
    /*{
      id: getId(),
      name: "Instant AI",
      url: "https://github.com/gaurav-sarage/InstantAI",
      repo: "https://github.com/gaurav-sarage/InstantAI",
      img: "",
      year: 2023,
      tags: ["NextJS", "Typescript", "Shadcn", "Prisma"],
    },
    {
      id: getId(),
      name: 'ShopTronics - eCommerce',
      url: 'https://github.com/gaurav-sarage/shopTronics-ecommerce',
      repo: 'https://github.com/gaurav-sarage/shopTronics-ecommerce',
      img: 'https://user-images.githubusercontent.com/85820227/231495891-ec7c33c6-7f36-41fe-8efd-3e992d5b800d.png',
      year: 2023,
      tags: ['React', 'Scss', 'HTML', 'Strapi', 'Stripe Payment Gateway'],
    },
    {
      id: getId(),
      name: 'ProShop MERN eCommerce',
      url: 'https://github.com/gaurav-sarage/ecommerce',
      repo: 'https://github.com/gaurav-sarage/ecommerce',
      img: 'https://user-images.githubusercontent.com/85820227/231498672-64b2e2ff-d987-45a3-bca6-5d8d89759360.png',
      year: 2022,
      tags: ['React', 'Redux', 'Express', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'Photo Gallery App (React)',
      url: 'https://gsierra19-photo-gallery-app.web.app/',
      repo: 'https://github.com/gaurav-sarage/photo-gallery-app',
      img: 'https://user-images.githubusercontent.com/85820227/250177861-cd5a5cd8-590e-49a1-92b5-4273aeee2f57.png',
      year: 2023,
      tags: ['ReactJS', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Modern Art Gallery',
      url: 'https://gaurav-sarage.github.io/Client-02/',
      repo: 'https://github.com/gaurav-sarage/Client-02/',
      img: 'https://user-images.githubusercontent.com/85820227/231500007-aa155693-1871-4e44-8152-9c230861e7bd.png',
      year: 2022,
      tags: ['HTML', 'CSS'],
    },
    {
      id: getId(),
      name: 'countries app using REST API',
      url: 'https://country-api-react-app.netlify.app/',
      repo: 'https://github.com/gaurav-sarage/country-api',
      img: 'https://user-images.githubusercontent.com/85820227/231487782-eb60fb21-32ae-4012-9190-7c42be3d18e8.png',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'GitHub User Search',
      url: 'https://gaurav-sarage.github.io/github-user-search/',
      repo: 'https://github.com/gaurav-sarage/github-user-search',
      img: 'https://user-images.githubusercontent.com/85820227/231501132-067311ef-2222-46d0-a20a-f0bf48827e01.png',
      year: 2021,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Hackathon Portfolio',
      url: 'https://gaurav-sarage.github.io/webathon-portfolio/',
      repo: 'https://github.com/gaurav-sarage/webathon-portfolio',
      img: 'https://user-images.githubusercontent.com/85820227/233788920-7c76e976-2f42-4750-a6ce-ad0fb2eb405d.png',
      year: 2022,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },*/
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
  
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design Inspiration @Brittany Chiang',
  link: 'https://github.com/bchiang7',
};
