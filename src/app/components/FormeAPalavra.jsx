'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './FormeAPalavra.module.css';

// Lista de palavras com imagens
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
  const router = useRouter();
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [palavraCerta, setPalavraCerta] = useState(palavras[0].palavra);
  const [letras, setLetras] = useState([]);
  const [palavraFormada, setPalavraFormada] = useState('');
  const [feedback, setFeedback] = useState(''); // "acerto" | "erro" | ""

  // sons (coloque em public/sons/)
  const somAcerto = typeof Audio !== 'undefined' ? new Audio('/sons/correto.mp3') : null;
  const somErro = typeof Audio !== 'undefined' ? new Audio('/sons/erro.mp3') : null;

  // Reinicia a palavra quando muda o índice
  useEffect(() => {
    setPalavraCerta(palavras[indiceAtual].palavra);
    setLetras(palavras[indiceAtual].palavra.split('').sort(() => Math.random() - 0.5));
    setPalavraFormada('');
    setFeedback('');
  }, [indiceAtual]);

  const adicionarLetra = (letra) => {
    const nova = palavraFormada + letra;
    setPalavraFormada(nova);

    if (nova.length === palavraCerta.length) {
      if (nova === palavraCerta) {
        setFeedback('acerto');
        somAcerto?.play();
        setTimeout(() => setIndiceAtual(i => Math.min(i + 1, palavras.length - 1)), 1500);
      } else {
        setFeedback('erro');
        somErro?.play();
        setTimeout(() => {
          setPalavraFormada('');
          setFeedback('');
        }, 800);
      }
    }
  };

  const apagarUltima = () => {
    if (palavraFormada) {
      setPalavraFormada(palavraFormada.slice(0, -1));
      setFeedback('');
    }
  };

  const reiniciar = () => setIndiceAtual(0);

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.botaoTopo}>
        ← Voltar
      </button>

      <h2 className={styles.titulo}>Forme a Palavra</h2>

      <img src={palavras[indiceAtual].imagem} alt={palavraCerta} className={styles.imagemPalavra} />

      <div className={`${styles.palavraFormada} ${feedback === 'acerto' ? styles.acerto : feedback === 'erro' ? styles.erro : ''}`}>
        {palavraFormada}
      </div>

      <div className={styles.letrasContainer}>
        {letras.map((l, i) => (
          <button key={i} className={styles.botaoLetra} onClick={() => adicionarLetra(l)}>
            {l}
          </button>
        ))}
      </div>

      <button onClick={apagarUltima} className={styles.botaoApagar}>
        Apagar
      </button>

      {feedback === 'acerto' && indiceAtual === palavras.length - 1 && (
        <button onClick={reiniciar} className={styles.botaoReiniciar}>
          Reiniciar
        </button>
      )}
    </div>
  );
};

export default FormeAPalavra;
