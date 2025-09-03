'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './sonsEAnimais.module.css';

const animais = [
  { nome: 'GATO', imagem: '/imagens/gato.png', som: '/sons/gato.mp3' },
  { nome: 'CÃO', imagem: '/imagens/cao.png', som: '/sons/cao.mp3' },
  { nome: 'LEÃO', imagem: '/imagens/leao.png', som: '/sons/leao.mp3' },
  { nome: 'ELEFANTE', imagem: '/imagens/elefante.png', som: '/sons/elefante.mp3' },
  { nome: 'PATO', imagem: '/imagens/pato.png', som: '/sons/pato.mp3' },
];

export default function SonsEAnimais() {
  const router = useRouter();
  const [animalAtual, setAnimalAtual] = useState(null);
  const [resposta, setResposta] = useState('');
  const [feedback, setFeedback] = useState('');
  const [pontuacao, setPontuacao] = useState(0);
  const [tentativa, setTentativa] = useState(0);
  const [tentativasNoSom, setTentativasNoSom] = useState(0);
  const [jogoIniciado, setJogoIniciado] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const tocarSomAleatorio = () => {
    const index = Math.floor(Math.random() * animais.length);
    const animal = animais[index];
    new Audio(animal.som).play();
    setAnimalAtual(animal);
    setResposta('');
    setFeedback('');
    setTentativasNoSom(0);
    setAcertou(false);
  };

  const iniciarJogo = () => {
    setJogoIniciado(true);
    tocarSomAleatorio();
  };

  const verificarResposta = () => {
    if (!animalAtual) return;
    setTentativa(tentativa + 1);
    const novaTentativa = tentativasNoSom + 1;
    setTentativasNoSom(novaTentativa);

    if (resposta.trim().toUpperCase() === animalAtual.nome) {
      setFeedback('✅ Acertou!');
      setPontuacao(pontuacao + 1);
      setAcertou(true);

      // toca som de acerto
      new Audio('/sons/correto.mp3').play();

      // próximo som após 1 segundo
      setTimeout(() => {
        tocarSomAleatorio();
      }, 1000);
    } else if (novaTentativa >= 3) {
      setFeedback(`❌ Errou! O correto era ${animalAtual.nome}. Próximo som...`);

      // toca som de erro
      new Audio('/sons/erro.mp3').play();

      setTimeout(() => {
        tocarSomAleatorio();
      }, 1500);
    } else {
      setFeedback(`❌ Errou! Tente novamente.`);
      new Audio(animalAtual.som).play(); // repete o som do animal
    }

    setResposta('');
  };

  const resetJogo = () => {
    setAnimalAtual(null);
    setResposta('');
    setFeedback('');
    setPontuacao(0);
    setTentativa(0);
    setTentativasNoSom(0);
    setJogoIniciado(false);
    setAcertou(false);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.voltarButton}>
        ← Voltar
      </button>

      <h2 className={styles.titulo}>Ouça os sons dos animais e adivinhe qual é o animal!</h2>

      <p className={styles.pontuacao}>
        Pontuação: {pontuacao} | Tentativas: {tentativa}
      </p>

      {!jogoIniciado ? (
        <button onClick={iniciarJogo} className={styles.botaoIniciar}>
          🎉 Vamos começar?
        </button>
      ) : (
        <>
          {animalAtual && (
            <>
              {acertou && (
                <img
                  src={animalAtual.imagem}
                  alt={animalAtual.nome}
                  width={200}
                  height={200}
                  className={`${styles.animalImagem} ${acertou ? 'acerto' : ''}`}
                />
              )}

              <div className={styles.inputContainer}>
                <input
                  type="text"
                  value={resposta}
                  onChange={(e) => setResposta(e.target.value)}
                  placeholder="Digite o nome do animal"
                  className={styles.inputResposta}
                />
                <button onClick={verificarResposta} className={styles.botaoVerificar}>
                  Verificar
                </button>
              </div>

              {feedback && (
                <p
                  className={styles.feedback}
                  style={{ color: feedback.includes('Acertou') ? 'green' : 'red' }}
                >
                  {feedback}
                </p>
              )}
            </>
          )}
        </>
      )}

      <button onClick={resetJogo} className={styles.botaoReset}>
        🔄 Reiniciar Jogo
      </button>
    </div>
  );
}
