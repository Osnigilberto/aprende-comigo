'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './AssociacaoImagemPalavra.module.css';

export default function AssociacaoImagemPalavraPage() {
  const [iniciou, setIniciou] = useState(false);
  const [feedback, setFeedback] = useState('');
  const audioRef = useRef(null);

  const opcoes = [
    { id: 1, imagem: '/atividades/gato.jpg', palavra: 'Gato' },
    { id: 2, imagem: '/atividades/cachorro.jpg', palavra: 'Cachorro' },
    { id: 3, imagem: '/atividades/passaro.jpg', palavra: 'Pássaro' },
  ];

  const verificarResposta = (id) => {
    const resposta = id === 1 ? 'Você acertou!' : 'Tente novamente!';
    setFeedback(resposta);
  };

  const iniciarAtividade = () => {
    setIniciou(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 300); // pequena espera pro áudio carregar
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Associação Imagem-Palavra</h2>

      {!iniciou ? (
        <button className={styles.botaoIniciar} onClick={iniciarAtividade}>
          Iniciar Atividade
        </button>
      ) : (
        <>
          <div className={styles.imagemContainer}>
            <img
              src="/atividades/gato.jpg"
              alt="Imagem de um animal"
              className={styles.imagem}
            />
          </div>

          <audio ref={audioRef} src="/audio/que-animal-eh-esse.mp3" />

          <div className={styles.opcoesContainer}>
            {opcoes.map((opcao) => (
              <button
                key={opcao.id}
                className={styles.botaoOpcao}
                onClick={() => verificarResposta(opcao.id)}
              >
                <img
                  src={opcao.imagem}
                  alt={opcao.palavra}
                  className={styles.opcaoImagem}
                />
                <p>{opcao.palavra}</p>
              </button>
            ))}
          </div>

          {feedback && <p className={styles.feedback}>{feedback}</p>}
        </>
      )}
    </div>
  );
}
