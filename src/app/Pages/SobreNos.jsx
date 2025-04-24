'use client';
import { motion } from 'framer-motion';
import styles from './SobreNos.module.css';

const SobreNos = () => {
  return (
    <motion.section
      className={styles.sobreNosContainer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className={styles.sobreNosTitle}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Sobre Nós
      </motion.h2>

      <p className={styles.sobreNosText}>
        Aprende Comigo é um aplicativo educativo desenvolvido especialmente para crianças de 2 a 5 anos,
        focando no aprendizado de leitura, escrita e fala de maneira lúdica e interativa.
      </p>

      <p className={styles.sobreNosText}>
        A nossa missão é criar uma alternativa saudável e educativa ao uso excessivo de tecnologia por crianças pequenas,
        permitindo que elas aprendam de forma divertida e segura.
      </p>

      <p className={styles.sobreNosText}>
        Com atividades que estimulam a associação de imagens e palavras,
        escrita com arraste de letras, leitura guiada, sons de animais e muito mais,
        o Aprende Comigo é projetado para ser usado com a supervisão de responsáveis,
        promovendo uma interação positiva com a tecnologia e garantindo que as crianças se desenvolvam de maneira equilibrada.
      </p>

      <p className={styles.sobreNosText}>
        Nosso objetivo é proporcionar uma experiência que combine educação e diversão,
        incentivando o aprendizado de forma envolvente e adaptada às necessidades das crianças dessa faixa etária.
      </p>

      <p className={styles.sobreNosText}>
        Além disso, temos um mascote carinhoso e educativo, que guia as crianças por meio das atividades
        e oferece feedback positivo e encorajador, sempre motivando o aprendizado e o crescimento.
      </p>
    </motion.section>
  );
};

export default SobreNos;
