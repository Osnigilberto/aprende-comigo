'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Contato.module.css';

const Contato = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback('Mensagem enviada! Obrigado pelo contato :)');
  };

  return (
    <motion.section
      className={styles.contatoContainer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className={styles.contatoTitle}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Contato
      </motion.h2>

      <motion.p
        className={styles.contatoText}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Quer saber mais? Entre em contato conosco!
      </motion.p>

      <motion.form
        key="form"
        className={styles.form}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        onSubmit={(e) => {
            e.preventDefault();
            alert('Mensagem enviada! Obrigado pelo contato :)');
        }}
        >
        <label key="nome" className={styles.label}>
        Nome
        <input type="text" name="nome" required className={styles.input} />
        </label>

        <label key="email" className={styles.label}>
        Email
        <input type="email" name="email" required className={styles.input} />
        </label>

        <label key="mensagem" className={styles.label}>
        Mensagem
        <textarea name="mensagem" rows="5" required className={styles.textarea} />
        </label>


        <motion.button
            key="submit-button"
            type="submit"
            className={styles.button}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            Enviar
        </motion.button>
        </motion.form>


      {feedback && <p className={styles.feedbackMessage}>{feedback}</p>}

      <motion.p
        className={styles.contatoEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
      </motion.p>
    </motion.section>
  );
};

export default Contato;
