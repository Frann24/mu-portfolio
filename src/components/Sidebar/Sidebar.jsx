import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Sidebar.module.css'
function Sidebar({isOpen, handleNavbarClick}) {
  return (
    <aside className={isOpen ? styles.open : styles.close}>
      <div className={styles.navbar}>
        <Navbar handleNavbarClick={handleNavbarClick} sidebar={true} isOpen={isOpen}/>
      </div>
      <button className={styles.btnResume}>My Resume</button>
    </aside>
  )
}

export default Sidebar