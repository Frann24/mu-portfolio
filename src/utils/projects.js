import ARQUIHUB_IMG from "../assets/project/arquihub.jpg";
import { ARQUIHUB_LINK } from "./links";
import {
  EXPRESSJS,
  JAVASCRIPT,
  MONGODB,
  NODEJS,
  REACTJS,
  /* POSTGRESQL, 
  REDUX, 
  SEQUELIZE,  */
  TAILWINDCSS,
} from "./skills";

export const allProjects = [
  {
    id: 1,
    title: "ArquiHub",
    desc: "ArquiHub es una plataforma de colaboración para proyectos de arquitectura. Puedes compartir archivos de AutoCAD, hacer comentarios y mostrar tu trabajo.",
    img: ARQUIHUB_IMG,
    tech: [JAVASCRIPT, REACTJS, NODEJS, MONGODB, EXPRESSJS, TAILWINDCSS],
    github: "",
    link: ARQUIHUB_LINK,
  },
];
