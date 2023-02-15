import ARQUIHUB_IMG from "../assets/project/arquihub.jpg";
import { ARQUIHUB_LINK } from "./links";
import { EXPRESSJS, JAVASCRIPT, MONGODB, NODEJS, REACTJS, TAILWINDCSS } from "./skills";


export const allProjects = [
  {
    id: 1,
    title: "ArquiHub",
    desc: "ArquiHub es una plataforma de colaboración para proyectos de arquitectura. Con ArquiHub, puedes compartir archivos de AutoCAD con tus colaboradores, subir actualizaciones y hacer comentarios en un solo lugar centralizado. Además, puedes mostrar tu trabajo en un espacio dedicado y conectarte con posibles clientes. La plataforma también ofrece una membresía paga para profesionales y una opción gratuita para estudiantes. Puedes organizar tus archivos y conectarte con otros profesionales en tu campo, lo que te permite colaborar en proyectos y ampliar tu red profesional.",
    img: ARQUIHUB_IMG,
    tech: [JAVASCRIPT, REACTJS, NODEJS, MONGODB,EXPRESSJS,TAILWINDCSS],
    github: "",
    link: ARQUIHUB_LINK,
  },
  /* {
    id: 2,
    title: "App-Pokemon",
    desc: "",
    img: "",
    tech: "",
    github: "",
    link: "",
  }, */
];
