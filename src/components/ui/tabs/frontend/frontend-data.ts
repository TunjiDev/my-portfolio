export interface DataType {
  title: string;
  siteUrl: string;
  githubUrl?: string;
  imgSrc: string;
  description: string;
  technologies: string[];
  shortTitle: string;
}

const FrontendData: DataType[] = [
  {
    imgSrc: "/images/suprise-santa-dashboard.png",
    title: "Suprise Santa - An Admin Dashboard Web App",
    siteUrl: "https://secret-santa-supreme.vercel.app",
    githubUrl: "https://github.com/Surprise-Santa/surprrise-santa-fe",
    description:
      "Contributed to the development of Surprise Santa. Surprise santa(more commonly known as secret santa) is a Christmas tradition; It involves a group of people exchanging gifts with each other, but not knowing who is giving them a gift. This is done by randomly assigning each person in the group another person to give a gift to. This is done anonymously, so the person receiving the gift doesn't know who it is from. This is why it is called Surprise Santa.",
    technologies: ["JavaScript", "ReactJs", "NextJs", "TypeScript", "Shadcn UI", "React Hook Form"],
    shortTitle: "Suprise Santa",
  },
  {
    imgSrc: "/images/rees.dcca4347f0a73dece195.png",
    title: "REES - A Real Estate Management Web App",
    siteUrl: "https://rees.vercel.app/",
    githubUrl: "https://github.com/TunjiDev/REES",
    description:
      "REES is a real estate company that provides real estate services to its clients. It is a full-stack web application built with ReactJs, NextJs, TypeScript, Chakra UI, and Supaebase. Client can rent or sell their properties on the platform. They can also view properties that are available for rent or sale, As well as view the details of each property.",
    technologies: ["JavaScript", "ReactJs", "NextJs", "TypeScript", "Chakra UI", "Supabase", "React Hook Form"],
    shortTitle: "REES",
  },
  {
    imgSrc: "/images/scissor.de9129952cb3c32f8b85.png",
    title: "Scissor - A URL-Shortener Web App",
    siteUrl: "https://scissor-cut.vercel.app/",
    githubUrl: "https://github.com/TunjiDev/scissor",
    description:
      "Scissor is a URL shortener web application built with ReactJs, NextJs, TypeScript, and Chakra UI. It allows authenticated users to shorten long URLs. Users can also view the details of each URL they have shortened. They can also edit, de-activate or delete any URL they want.",
    technologies: ["JavaScript", "ReactJs", "NextJs", "TypeScript", "Chakra UI", "React Hook Form"],
    shortTitle: "Scissor",
  },
  {
    imgSrc: "/images/tech1m-juniors.aa2790e9bf339012ff14.png",
    title: "Tech1m Juniors - A School Admin Dashboard",
    siteUrl: "https://tech1m-juniors.netlify.app/",
    githubUrl: "https://github.com/TunjiDev/Tech1M-Frontend-Group5-Submission",
    description:
      "Tech1m Juniors is a school admin dashboard built with ReactJs, Chakra UI and Firebase. It allows the user to signup or login as either an Admin or an Instructor. Authenticated users can view the list of students, courses, payments and assignments, messages and the main dashboard. There is a dark mode toggle that allows the user to switch between light and dark mode. If a user is unable to login, they can click on the forgot password link to reset their password.",
    technologies: ["JavaScript", "ReactJs", "Chakra UI", "Firebase", "React Router"],
    shortTitle: "Tech1m Juniors",
  },
  {
    imgSrc: "/images/tog-redux.afe0d3b8afc2a038fa72.png",
    title: "Tower Of God - A Tower Of God Fan Site",
    siteUrl: "https://tower-of-god.netlify.app/",
    githubUrl: "https://github.com/TunjiDev/tower-of-god-redux",
    description:
      "Tower Of God is a fan site for the popular anime series, Tower Of God. It is built with ReactJs, Redux and Chakra UI. It allows users to signup or login. Authenticated users can also view the list of characters and new characters. They can then logout when they are done.",
    technologies: ["JavaScript", "ReactJs", "Redux", "Chakra UI"],
    shortTitle: "Tower Of God",
  },
  {
    imgSrc: "/images/amazon.5bd6679cf94e728bf797.png",
    title: "Ecommerce Web App - An Amazon Clone",
    siteUrl: "https://clone-4af69.web.app/",
    githubUrl: "https://github.com/TunjiDev/amazon-clone",
    description:
      "This is an Amazon clone built with ReactJs, Redux, React Router, Material UI and Firebase. It allows users to signup or login. Authenticated users can also view the list of products and add/remove products to/from their basket. They can then logout when they are done.",
    technologies: ["JavaScript", "ReactJs", "Redux", "Material UI", "Firebase", "React Router"],
    shortTitle: "Ecommerce Web App",
  },
];

export default FrontendData;
