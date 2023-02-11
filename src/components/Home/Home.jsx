import React from 'react'
import styles from './Home.module.css'
import img from '../../assets/my2.jpg'
import { BsChevronCompactDown } from 'react-icons/bs';

function Home() {
  return (
    <div className={styles.home}>
    <section className={styles.homeContainer}>
      <div className={styles.box}>
        <h3><span>Hola!,</span> mi nombre es</h3>
        <h1>Franco Ferreyra</h1>
        <h4>Full Stack Developer</h4>
      </div>
      <div className={styles.containerImg}>
        <div className={styles.cuadrado1}></div>
        <div className={styles.cuadrado2}>
          <div><img src={img} alt="fotografia de Franco" /></div>
        </div>
      </div>
    </section>
      <div className={styles.lines}>
        <div></div>
      </div>
      <div className={styles.btnContainer}><button className={styles.btnDown}><BsChevronCompactDown className={styles.down}/></button></div>
    </div>
  )
}

export default Home