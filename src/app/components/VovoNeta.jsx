'use client';
import React, { useEffect, useState } from 'react';
import styles from './VovoNeta.module.css';

const frases = [
  'Agora, respire fundo, tome uma água e celebre, você fez tudo com tanto carinho!',
  'Sabe, pequeno padawan, a verdadeira sabedoria está na persistência. Você já está mais sábio.',
  'Minha criança, cada passo seu é uma sementinha plantada com amor.'
];

const VovoNeta = ({ interativa = false, fraseUnica = null }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (interativa && !fraseUnica) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % frases.length);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [interativa, fraseUnica]);

  const fraseExibida = fraseUnica || frases[index];

  return (
    <div className={styles.vovoNeta}>
      <img className={styles.imagem} src="/neta.png" alt="Vovó Neta" />
      <div className={styles.balao}>
        <p>{fraseExibida}</p>
      </div>
    </div>
  );
};

export default VovoNeta;
