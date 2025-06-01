import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoFigma, IoLogoJavascript} from "react-icons/io5";
import{
  SiMongodb,
} from "react-icons/si";
import { IoLogoNpm } from "react-icons/io";

export const navbarData = [
  { id: 1, name: "Home", path: "home" },
  { id: 2, name: "About", path: "about" },
  { id: 3, name: "Education", path: "education" },
  { id: 4, name: "Skills", path: "skills" },
  { id: 5, name: "Projects", path: "projects" },
  { id: 6, name: "Blog", path: "blog" },
  { id: 7, name: "Contact", path: "contact" },
];

export const skills = [
  {
    category: "Frontend Development",
    items: [
      { id: 1, name: "HTML", icon: FaHtml5 },
      { id: 2, name: "CSS", icon: FaCss3Alt },
      { id: 3, name: "JavaScript", icon: IoLogoJavascript },
      { id: 4, name: "React", icon: FaReact },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { id: 1, name: "Node.js", icon: FaNode },
      { id: 2, name: "MongoDb", icon: SiMongodb },
    ],
  },
  {
    category: "Other Development Tools",
    items: [
      { id: 1, name: "Npm", icon: IoLogoNpm },
      { id: 2, name: "Git", icon: FaGitAlt },
      { id: 3, name: "Figma", icon: IoLogoFigma },

    ]
  }
];