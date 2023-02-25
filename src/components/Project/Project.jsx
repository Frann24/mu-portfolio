import React, { useState } from 'react'
import useSkills from './useSkills'
import styles from  './Project.module.css'
import Modal from '../modal/Modal';

function Project({title,tech,desc,link,img,github,id, active}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    if (active) {
      setIsModalOpen(true);
      document.body.classList.add('modal-open')
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open')
  };

  const skills = useSkills(tech)
  return (
    <div className={`${styles.project} ${!active && styles.no__active}`}>
      <div className={`${styles.project__container__image} `} onClick={openModal}>
        <img className={styles.project__image} src={img} alt={"imagen del proyecto "+{title}} />
        <div className={styles.project__front}></div>
      </div>
      <div className={styles.project__body}>
        <div className={styles.project__skills}>{skills.map((skills,i)=>(<span key={i}>{skills}</span>))}</div>
        <h2 className={styles.project__title}>{title}</h2>
        <p className={styles.project__description}>{desc}</p>
        <div className={styles.project__links}>
          <a href={link} target="_blank" rel='noreferrer'>Deploy</a>
          <a href={github} target="_blank" rel='noreferrer'>Github</a>
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
         <img src={img} alt={"imagen del proyecto "+{title}}/>
        </Modal>
      )}
    </div>
  )
}

export default Project