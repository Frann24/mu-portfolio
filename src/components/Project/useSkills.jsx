import React from 'react'
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

import { EXPRESSJS, JAVASCRIPT, MONGODB, NODEJS, REACTJS, TAILWINDCSS } from "../../utils/skills";

function useSkills(tech) {
  const icons = []
    if(tech.includes(JAVASCRIPT)) icons.push(<SiJavascript/>)
    if(tech.includes(REACTJS)) icons.push(<SiReact/>)
    if(tech.includes(MONGODB)) icons.push(<SiMongodb/>)
    if(tech.includes(EXPRESSJS)) icons.push(<SiExpress/>)
    if(tech.includes(NODEJS)) icons.push(<SiNodedotjs/>)
    if(tech.includes(TAILWINDCSS)) icons.push(<SiTailwindcss/>)
  return icons
}

export default useSkills