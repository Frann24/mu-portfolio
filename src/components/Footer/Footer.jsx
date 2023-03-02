import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__line__up}></div>
      <div className={styles.footer__line__down}></div>
      <div className={styles.footer__row}>
      <svg viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 32V9.77778C1.5 5.3595 5.08172 1.77778 9.5 1.77778H26.3889V3.55556V4.88889C26.3889 7.09803 24.598 8.88889 22.3889 8.88889H21.0556H13.9444V8.88889C10.9989 8.88889 8.61111 11.2767 8.61111 14.2222V14.2222V16H26.3889V17.7778V19.1111C26.3889 21.3202 24.598 23.1111 22.3889 23.1111H21.0556H17.5H13.9444V23.1111C10.9989 23.1111 8.61111 25.4989 8.61111 28.4444V28.4444V30.2222H25.5C29.9183 30.2222 33.5 26.6405 33.5 22.2222V15.1111V0" stroke="#E9ECEF" strokeWidth="2"/>
      </svg>
        <div className={styles.footer__contact}>
          <a href="/" target="_blank">Mail</a>
          <a href="/" target="_blank">LinkedIn</a>
          <a href="/" target="_blank">Resume</a>
        </div>
      </div>
      <p className={styles.footer__autor}><span className={styles.footer__autor__name}>© 2023 Franco Ferreyra</span>. Todos los derechos reservados.</p>

    </footer>
  )
}

export default Footer