'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Leaf, X } from 'phosphor-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/logo-preview.png" alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Aprende Comigo</h1>
      </div>

      <nav
        ref={navRef}
        className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}
      >
        <ul>
          <li><a href="/">Início</a></li>
          <li><button onClick={() => scrollToSection('sobreNos')}>Sobre Nós</button></li>
          <li><button onClick={() => scrollToSection('contato')}>Contato</button></li>
          <li><Link href="/escolher-mentor">Atividades</Link></li>
        </ul>
      </nav>

      <button className={styles.toggleButton} onClick={toggleMenu}>
        {isMenuOpen ? (
          <X size={28} weight="bold" />
        ) : (
          <Leaf size={28} weight="bold" />
        )}
      </button>
    </header>
  );
};

export default Navbar;
