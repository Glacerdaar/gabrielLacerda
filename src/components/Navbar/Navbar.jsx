import {useState} from 'react'

import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbarContainer}>
        <div className={styles.navBar}>
            <a className={styles.title} href="/">Gabriel Lacerda</a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src=
                        {menuOpen ? getImageUrl("nav/closeIcon.png") 
                        : getImageUrl("nav/menuIcon.png") 
                    }
                    alt="menu-button" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    />

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contacts">Contatos</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
