import React from 'react'
import  {allProjects}  from '../../utils/projects'
import Project from './Project';
import styles from './Projects.module.css'
function Projects() {
  return (
    <section className={styles.projects}>
      <h2>My Projects</h2>
      {allProjects.map(project => (
        <Project key={project.id}
          title={project.title} 
          desc={project.desc}
          img={project.img}
          tech={project.tech}
          github={project.github}
          link={project.link}
        />
      ))}
    </section>
  )
}

export default Projects