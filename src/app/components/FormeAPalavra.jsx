'use client';

import { useState, useEffect } from 'react';
import styles from './FormeAPalavra.module.css';

const palavras = [
  { palavra: 'GATO', imagem: '/imagens/gato.png' },
  { palavra: 'CÃO', imagem: '/imagens/cao.png' },
  { palavra: 'PEIXE', imagem: '/imagens/peixe.png' },
  { palavra: 'PATO', imagem: '/imagens/pato.png' },
  { palavra: 'BOI', imagem: '/imagens/boi.png' },
  { palavra: 'CAVALO', imagem: '/imagens/cavalo.png' },
  { palavra: 'RATO', imagem: '/imagens/rato.png' },
  { palavra: 'URSO', imagem: '/imagens/urso.png' },
  { palavra: 'LUA', imagem: '/imagens/lua.png' },
  { palavra: 'SOL', imagem: '/imagens/sol.png' },
  { palavra: 'MELANCIA', imagem: '/imagens/melancia.png' },
  { palavra: 'ABACAXI', imagem: '/imagens/abacaxi.png' },
  { palavra: 'BANANA', imagem: '/imagens/banana.png' },
  { palavra: 'LARANJA', imagem: '/imagens/laranja.png' },
  { palavra: 'BOLA', imagem: '/imagens/bola.png' },
  { palavra: 'ELEFANTE', imagem: '/imagens/elefante.png' },
  { palavra: 'HIPOPÓTAMO', imagem: '/imagens/hipopotamo.png' },
  { palavra: 'RINOCERONTE', imagem: '/imagens/rinoceronte.png' },
  { palavra: 'GUAXINIM', imagem: '/imagens/guaxinim.png' },
  { palavra: 'CANGURU', imagem: '/imagens/canguru.png' },
  { palavra: 'CACHORRO', imagem: '/imagens/cachorro.png' },
  { palavra: 'GIRAFA', imagem: '/imagens/girafa.png' },
  { palavra: 'TIGRE', imagem: '/imagens/tigre.png' },
  { palavra: 'LEÃO', imagem: '/imagens/leao.png' },
  { palavra: 'ZEBRA', imagem: '/imagens/zebra.png' },
];

const FormeAPalavra = () => {
  const [palavraCerta, setPalavraCerta] = useState(palavras[0].palavra);
  const [letras, setLetras] = useState([]);
  const [palavraFormada, setPalavraFormada] = useState('');
  const [feedback, setFeedback] = useState('');

  // UseEffect para gerar letras embaralhadas no cliente
  useEffect(() => {
    const embaralharLetras = palavraCerta.split('').sort(() => Math.random() - 0.5);
    setLetras(embaralharLetras);
  }, [palavraCerta]);

  const adicionarLetra = (letra) => {
    const novaPalavra = palavraFormada + letra;
    setPalavraFormada(novaPalavra);

    if (novaPalavra.length === palavraCerta.length) {
      if (novaPalavra === palavraCerta) {
        setFeedback('Parabéns! Você formou a palavra! 🎉');
        setTimeout(() => avançarPalavra(), 2000);
      } else {
        setFeedback('Ops! Tente novamente.');
        setPalavraFormada(''); // Limpa a palavra formada caso o usuário erre
      }
    }
  };

  const avançarPalavra = () => {
    const indexAtual = palavras.findIndex(p => p.palavra === palavraCerta);
    if (indexAtual < palavras.length - 1) {
      const novaPalavra = palavras[indexAtual + 1];
      setPalavraCerta(novaPalavra.palavra);
      setPalavraFormada('');
      setFeedback('');
    } else {
      setFeedback('Parabéns, você completou todas as palavras! 🎉');
    }
  };

  const resetarPalavra = () => {
    setPalavraFormada('');
    setFeedback('');
    setLetras(palavraCerta.split('').sort(() => Math.random() - 0.5));
  };

  return (
    <div className={styles.container}>
      <h2>Forme a Palavra</h2>

      <div className={styles.imagemPalavra}>
        <img src={palavras.find(p => p.palavra === palavraCerta).imagem} alt={palavraCerta} className={styles.imagemPalavra} />
      </div>

      <div className={styles.palavraFormada}>{palavraFormada}</div>

      <div className={styles.letrasContainer}>
        {letras.map((letra, index) => (
          <button
            key={index}
            className={styles.botaoLetra}
            onClick={() => adicionarLetra(letra)}
          >
            {letra}
          </button>
        ))}
      </div>

      {feedback && <p className={styles.feedback}>{feedback}</p>}

      {feedback && palavraCerta === palavras[palavras.length - 1].palavra && (
        <button onClick={resetarPalavra} className={styles.botaoVoltar}>
          Reiniciar Atividade
        </button>
      )}
    </div>
  );
};

export default FormeAPalavra;
