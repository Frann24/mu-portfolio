import React from "react";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiCss3,
  SiSequelize,
  SiRedux,
} from "react-icons/si";

import {
  CSS,
  EXPRESSJS,
  JAVASCRIPT,
  MONGODB,
  NODEJS,
  POSTGRESQL,
  REACTJS,
  REDUX,
  SEQUELIZE,
  TAILWINDCSS,
} from "../../utils/skills";

function useSkills(tech) {
  const icons = [];
  if (tech.includes(JAVASCRIPT)) icons.push(<SiJavascript />);
  if (tech.includes(REACTJS)) icons.push(<SiReact />);
  if (tech.includes(MONGODB)) icons.push(<SiMongodb />);
  if (tech.includes(EXPRESSJS)) icons.push(<SiExpress />);
  if (tech.includes(NODEJS)) icons.push(<SiNodedotjs />);
  if (tech.includes(TAILWINDCSS)) icons.push(<SiTailwindcss />);
  if (tech.includes(POSTGRESQL)) icons.push(<SiPostgresql />);
  if (tech.includes(CSS)) icons.push(<SiCss3 />);
  if (tech.includes(SEQUELIZE)) icons.push(<SiSequelize />);
  if (tech.includes(REDUX)) icons.push(<SiRedux />);
  return icons;
}

export default useSkills;
