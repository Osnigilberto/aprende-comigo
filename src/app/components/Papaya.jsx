'use client';
import React, { useEffect, useState } from 'react';
import styles from './Papaya.module.css';

const frases = [
  'Agora, respire fundo, tome uma água e celebre, você fez tudo com tanto carinho!',
  'Uhul! Você mandou bem demais!',
  'Boi bumbá dançou só pra você! Vamos continuar brincando?'
];

const Papaya = ({ interativa = false, fraseUnica = null }) => {
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
    <div className={styles.papaya}>
      <img className={styles.imagem} src="/papaya.png" alt="Papaya" />
      <div className={styles.balao}>
        <p>{fraseExibida}</p>
      </div>
    </div>
  );
};

export default Papaya;
