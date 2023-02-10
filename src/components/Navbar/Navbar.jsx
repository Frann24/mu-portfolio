import React from 'react'
import { Link } from 'react-scroll'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to='home' smooth={true}>Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to='about' smooth={true}>About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to='projects' smooth={true}>Projects</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to='contact' smooth={true}>Contact</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar