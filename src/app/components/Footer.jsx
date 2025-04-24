// components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Aprende Comigo. Todos os direitos reservados. | <a href="mailto:contato@aprendecomigo.com">Contato</a></p>
    </footer>
  );
};

export default Footer;
