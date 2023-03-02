import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styles from './BtnToTop.module.css'

function BtnToTop() {
  const [showToTopButton, setShowToTopButton] = useState(false);
  console.log(showToTopButton);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`${showToTopButton ? styles.show : styles.hidden}`}>
      {/* {showToTopButton && ( */}
      <Link to='home' smooth={true} >
        <button className={styles.btn__up}>
          <BsFillArrowUpCircleFill className={styles.icon}/>
        </button>
      </Link>
    {/* )} */}
    </div>
  )
}

export default BtnToTop