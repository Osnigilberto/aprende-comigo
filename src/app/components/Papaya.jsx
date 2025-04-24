'use client';
import React, { useEffect, useState } from 'react';
import styles from './Papaya.module.css';

const frases = [
  'Agora, respire fundo, tome uma água e celebre, você fez tudo com tanto carinho!',
  'Uhul! Você mandou bem demais!',
  'Boi bumbá dançou só pra você! Vamos continuar brincando?'
];

const Papaya = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(frases[index]);
    utter.lang = 'pt-BR';
    synth.speak(utter);

    const interval = setInterval(() => {
      const next = (index + 1) % frases.length;
      setIndex(next);
    }, 8000);

    return () => {
      synth.cancel();
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className={styles.papaya}>
      <img src="/papaya.png" alt="Papaya" />
      <div className={styles.balao}>
        <p>{frases[index]}</p>
      </div>
    </div>
  );
};

export default Papaya;
