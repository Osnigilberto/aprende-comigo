'use client';
import React, { useEffect, useState } from 'react';
import styles from './VovoNeta.module.css';

const frases = [
  'Agora, respire fundo, tome uma água e celebre, você fez tudo com tanto carinho!',
  'Sabe, pequeno padawan, a verdadeira sabedoria está na persistência. Você já está mais sábio.',
  'Minha criança, cada passo seu é uma sementinha plantada com amor.'
];

const VovoNeta = () => {
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
    <div className={styles.vovoNeta}>
      <img src="/neta.png" alt="Vovó Neta" />
      <div className={styles.balao}>
        <p>{frases[index]}</p>
      </div>
    </div>
  );
};

export default VovoNeta;
