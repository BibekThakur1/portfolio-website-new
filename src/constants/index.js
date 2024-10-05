import {
  mobile,
  backend,
  creator,
  web,
  flixify1,
  todo_image,
  logo1,
  spotify,
  javascript,
  typescript,
  flixify_image,
  old_version_image,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },



  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Digital Marketer  ",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Agency Leader (Flixify)",
    icon: flixify1,
  },
  {
    title: "Sales Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cofounder & Web Developer",
    company_name: "Flixify",
    icon: flixify1, // Add your company logo here
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Co-founded Flixify, a digital content agency focused on video editing, marketing assets, and AI-driven solutions.",
      "Developed and maintained responsive websites using React, ensuring a smooth user experience.",
      "Collaborated with clients to create AI-powered tools for improving content production efficiency.",
      "Led front-end development efforts for multiple projects.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Self-Taught",
    icon: tesla, // Add relevant icon
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Mastered core React concepts such as hooks, state management, and component lifecycles.",
      "Built and deployed several web applications focusing on reusable components, performance optimization, and responsive design.",
      "Integrated external APIs and managed app state using modern libraries like Redux and Zustand.",
      "Contributed to open-source projects and actively participated in coding communities to enhance knowledge.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Spotify",
    icon: spotify, // replace this with the correct Spotify icon variable
    iconBg: "#1DB954", // Spotify's green color
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to enhance Spotify's user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility across multiple platforms.",
      "Contributing to code reviews, mentoring junior developers, and fostering a collaborative development environment.",
    ],
  }
  ,
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "To-Do-List",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: todo_image,
    source_code_link: "https://react-jstodolist.netlify.app/",
  },
  {
    name: "Flixify Agency",
    description:
    "A content creation agency offering video production, social media management, and digital marketing to help businesses grow their online presence.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flixify_image,
    source_code_link: "https://flixifyagency.com/",
  },
  {
    name: "Old Version",
    description:

"An old version of a personal portfolio showcasing past web development projects and content creation work, demonstrating skills in design, coding, and digital strategy.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: old_version_image,
    source_code_link: "https://github.com/BibekThakur1/portfolio-website",
  },
  {
    name: "Flixify Agency",
    description:
    "A content creation agency offering video production, social media management, and digital marketing to help businesses grow their online presence.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flixify_image,
    source_code_link: "https://flixifyagency.com/",
  },
  {
    name: "Flixify Agency",
    description:
    "A content creation agency offering video production, social media management, and digital marketing to help businesses grow their online presence.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flixify_image,
    source_code_link: "https://flixifyagency.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
