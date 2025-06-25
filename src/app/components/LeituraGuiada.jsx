'use client';

import { useState, useRef } from 'react';
import styles from './LeituraGuiada.module.css';
import { useRouter } from 'next/navigation';

const historia = {
  titulo: 'Os Três Porquinhos',
  cenas: [
    {
      texto: 'Era uma vez três porquinhos que decidiram construir suas próprias casas.',
      imagem: '/leitura/tres-porquinhos/1.jpg',
      audio: '/audio/leitura/tres-porquinhos/1.mp3',
    },
    {
      texto: 'O primeiro porquinho fez uma casa de palha, rápida de construir.',
      imagem: '/leitura/tres-porquinhos/2.jpg',
      audio: '/audio/leitura/tres-porquinhos/2.mp3',
    },
    {
      texto: 'O segundo porquinho usou madeira. Era mais forte que palha.',
      imagem: '/leitura/tres-porquinhos/3.jpg',
      audio: '/audio/leitura/tres-porquinhos/3.mp3',
    },
    {
      texto: 'O terceiro porquinho fez uma casa de tijolos, resistente e segura.',
      imagem: '/leitura/tres-porquinhos/4.jpg',
      audio: '/audio/leitura/tres-porquinhos/4.mp3',
    },
    {
      texto: 'Quando o lobo apareceu, ele assoprou e derrubou as duas primeiras casas...',
      imagem: '/leitura/tres-porquinhos/5.jpg',
      audio: '/audio/leitura/tres-porquinhos/5.mp3',
    },
    {
      texto: 'Mas a casa de tijolos resistiu! E os porquinhos viveram seguros e felizes.',
      imagem: '/leitura/tres-porquinhos/6.jpg',
      audio: '/audio/leitura/tres-porquinhos/6.mp3',
    },
  ],
};

export default function LeituraGuiada() {
  const [indice, setIndice] = useState(0);
  const audioRef = useRef(null);
  const router = useRouter();

  const proximaCena = () => {
    if (indice < historia.cenas.length - 1) {
      setIndice(indice + 1);
    }
  };

  const cenaAtual = historia.cenas[indice];

  const tocarAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => router.push('/atividades')} className={styles.voltar}>
        ← Voltar
      </button>

      <h2>{historia.titulo}</h2>

      <div className={styles.imagemContainer}>
        <img src={cenaAtual.imagem} alt="Cena da história" className={styles.imagem} />
      </div>

      <p className={styles.texto}>{cenaAtual.texto}</p>

      <audio ref={audioRef} src={cenaAtual.audio} />

      <div className={styles.botoes}>
        <button onClick={tocarAudio}>🔊 Ouvir</button>
        {indice < historia.cenas.length - 1 ? (
          <button onClick={proximaCena}>Próximo</button>
        ) : (
          <p>Fim da história!</p>
        )}
      </div>
    </div>
  );
}
