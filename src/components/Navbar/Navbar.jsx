import React from 'react'
import { Link } from 'react-scroll'
import styles from './Navbar.module.css'

function Navbar({ handleNavbarClick, sidebar = false }) {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to='home' smooth={true} onClick={sidebar ? handleNavbarClick : undefined}>Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to='about' smooth={true} onClick={sidebar ? handleNavbarClick : undefined}>About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to='projects' smooth={true} onClick={sidebar ? handleNavbarClick : undefined}>Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar