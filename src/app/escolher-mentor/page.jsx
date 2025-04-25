'use client';
import React from 'react';
import styles from './EscolherMentor.module.css';
import VovoNeta from '../components/VovoNeta';
import Papaya from '../components/Papaya';
import { useRouter } from 'next/navigation';

const EscolherMentor = () => {
  const router = useRouter();

  const escolherMentor = (mentor) => {
    localStorage.setItem('mentorEscolhido', mentor);
    router.push('/atividades');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Escolha seu mentor</h1>
      <p className={styles.subtitulo}>Quem vai te acompanhar na jornada de aprendizado?</p>

      <div className={styles.mentores}>
        <div className={styles.mentorCard} onClick={() => escolherMentor('vovoNeta')}>
          <VovoNeta fraseUnica="Minha criança, vamos juntos descobrir o mundo com carinho?" />
        </div>
        <div className={styles.mentorCard} onClick={() => escolherMentor('papaya')}>
          <Papaya fraseUnica="Vem comigo! A gente vai brincar, dançar e aprender muito!" />
        </div>
      </div>
    </div>
  );
};

export default EscolherMentor;
