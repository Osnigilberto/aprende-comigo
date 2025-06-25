'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Atividades.module.css';
import VovoNeta from '../components/VovoNeta';
import Papaya from '../components/Papaya';
import AtividadeCard from '../components/AtividadeCard';

export default function Atividades() {
  const router = useRouter();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const escolhido = localStorage.getItem('mentorEscolhido');
    if (!escolhido) {
      router.push('/escolher-mentor');
    } else {
      setMentor(escolhido);
    }
  }, []);

  if (!mentor) return null;

  const atividades = [
    {
      titulo: 'Associação Imagem-Palavra',
      descricao: 'Vamos aprender a associar imagens e palavras com diversão!',
      imagem: '/atividades/associacao-imagem-palavra.png',
    },
    {
      titulo: 'Forme a Palavra',
      descricao: 'Arraste as letras para formar palavras e melhorar sua escrita!',
      imagem: '/atividades/escrita-arraste-letras.png',
    },
    {
      titulo: 'Leitura Guiada',
      descricao: 'Leitura de livrinhos com narração e ilustrações divertidas!',
      imagem: '/atividades/leitura-guiada.png',
    },
    {
      titulo: 'Sons e Animais',
      descricao: 'Ouça os sons dos animais e adivinhe qual é o animal!',
      imagem: '/atividades/sons-animais.png',
    },
    {
      titulo: 'Fala com o Mascote',
      descricao: 'Pergunte ao mascote e ele te responderá com histórias e curiosidades!',
      imagem: '/atividades/fala-com-mascote.png',
    },
    {
      titulo: 'Pintura',
      descricao: 'Pintura com o Papaya e o Vovo Neta!',
      imagem: '/atividades/pintura.png',
    }
  ];

  const handleAtividadeClick = (titulo) => {
    const slug = titulo
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove acentos
      .replace(/ /g, '-');
  
    router.push(`/atividades/${slug}`);
  };
  

  return (
    <main className={styles.mainContent}>
      <h1 className={styles.titulo}>Vamos aprender brincando!</h1>

      {/* Mentor no topo com fala ativada */}
      <div className={styles.mentorWrapper}>
        {mentor === 'vovoNeta' && <VovoNeta interativa={true} />}
        {mentor === 'papaya' && <Papaya interativa={true} />}
      </div>

      {/* Cards das atividades */}
      <div className={styles.gridAtividades}>
        {atividades.map((atividade, index) => (
          <AtividadeCard
            key={index}
            {...atividade}
            onClick={() => handleAtividadeClick(atividade.titulo)}
          />
        ))}
      </div>

      <button
        className={styles.trocarMentorBtn}
        onClick={() => {
          localStorage.removeItem('mentorEscolhido');
          router.push('/escolher-mentor');
        }}
      >
        Trocar Mentor
      </button>
    </main>
  );
}
