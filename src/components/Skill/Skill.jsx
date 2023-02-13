import React from 'react'
import styles from './Skill.module.css'
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { SiJavascript,SiExpress,SiPhp,SiPostgresql,SiMongodb, SiTailwindcss,SiBootstrap, SiMaterialui,SiFigma } from 'react-icons/si';

function Skill() {
  return (
    <section className={styles.skill}>
      <h3 className={styles.title}>My Skills</h3>
      <div className={styles.skillContainer}>
        <div className={styles.iconContainer}>
          <SiJavascript className={`${styles.icon} ${styles.js}`}/>
          <span className={styles.tooltip}>JavaScript</span>
        </div>
        <div className={styles.iconContainer}>
          <SiPhp className={`${styles.icon} ${styles.php}`}/>
          <span className={styles.tooltip}>Php</span>
        </div>
        <div className={styles.iconContainer}>
          <FaReact className={`${styles.icon} ${styles.react}`}/>
          <span className={styles.tooltip}>React</span>
        </div>
        <div className={styles.iconContainer}>
          <FaNodeJs className={`${styles.icon} ${styles.node}`}/>
          <span className={styles.tooltip}>Node.Js</span>
        </div>
        <div className={styles.iconContainer}>
          <SiExpress className={`${styles.icon} ${styles.express}`}/>
          <span className={styles.tooltip}>Express.Js</span>
        </div>
        <div className={styles.iconContainer}>
          <SiPostgresql className={`${styles.icon} ${styles.postgresql}`}/>
          <span className={styles.tooltip}>PostgreSQL</span>
        </div>
        <div className={styles.iconContainer}>
          <SiMongodb className={`${styles.icon} ${styles.mongodb}`}/>
          <span className={styles.tooltip}>MongoDB</span>
        </div>
        <div className={styles.iconContainer}>
          <GrMysql className={`${styles.icon} ${styles.mysql}`}/>
          <span className={styles.tooltip}>MySQL</span>
        </div>
        <div className={styles.iconContainer}>
          <SiTailwindcss className={`${styles.icon} ${styles.tailwind}`}/>
          <span className={styles.tooltip}>TailwindCSS</span>
        </div>
        <div className={styles.iconContainer}>
          <SiBootstrap className={`${styles.icon} ${styles.bootstrap}`}/>
          <span className={styles.tooltip}>Bootstrap</span>
        </div>
        <div className={styles.iconContainer}>
          <SiMaterialui className={`${styles.icon} ${styles.materialui}`}/>
          <span className={styles.tooltip}>MaterialUi</span>
        </div>
        <div className={styles.iconContainer}>
          <SiFigma className={`${styles.icon} ${styles.figma}`}/>
          <span className={styles.tooltip}>Figma</span>
        </div>
      </div>
    </section>
  )
}

export default Skill