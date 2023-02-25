import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <section  className={styles.about}>
      <h3>About me</h3>
      <div>
        <p>
        Soy un desarrollador de software en ascenso con una pasión por crear soluciones digitales atractivas y eficientes. Con una formación sólida en programación y desarrollo de aplicaciones web, estoy ansioso por aplicar mis habilidades en proyectos emocionantes y desafiantes.
        </p> 
        <p>Me esfuerzo por mantenerme al tanto de las últimas tendencias y tecnologías en el campo para ofrecer soluciones innovadoras y efectivas a mis clientes. Fuera del trabajo, disfruto la música, los deportes y pasar tiempo con mi familia y amigos.</p>
      </div>
    </section>
  )
}

export default About