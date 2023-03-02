import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Header.module.css'
import Hamburger from 'hamburger-react'
import logo from '../../assets/logo.svg'
import Sidebar from '../Sidebar/Sidebar'

function Header() {
  const [isOpen, setOpen] = useState(false)
  const handleNavbarClick = () => {
    setOpen(false);
  }
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo de franco ferreyra" />
        <div className={styles.btnMenu}><Hamburger color='#343A40' size={32} toggled={isOpen} toggle={setOpen}/></div>
        <div className={styles.navbar}><Navbar /></div>
      </header>
      <div className={styles.sidebar}>
        {isOpen && <div onClick={() => setOpen(false)} className={styles.back}/>}
        <Sidebar isOpen={isOpen} handleNavbarClick={handleNavbarClick}/>
      </div>
    </div>
  )
}

export default Header