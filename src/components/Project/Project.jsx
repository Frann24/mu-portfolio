import React from "react";
import styles from "./Project.module.css";
import useSkills from "./useSkills";

function Project({ title, desc, img, tech }) {
  const skills = useSkills(tech)
  return (
    <div className={styles.project}>
      <img src={img} alt={`imagen del proyecto ${title}`} />
      <h4>{title}</h4>
      <p>{desc}</p>
      <div>
        {skills.map((skill,i) => <span key={i}>{skill}</span>)}
      </div>
    </div>
  );
}

export default Project;
