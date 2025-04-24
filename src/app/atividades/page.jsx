// src/app/atividades/page.jsx

'use client';
import React from 'react';
import styles from './Atividades.module.css';
import Papaya from '../components/Papaya';
import VovoNeta from '../components/VovoNeta';
import Link from 'next/link';

const atividadesList = [
  {
    emoji: '🖼️',
    titulo: 'Associação imagem-palavra',
    descricao: 'Ouça a pergunta, observe a imagem e escolha a resposta correta.',
    rota: '/atividades/associacao'
  },
  {
    emoji: '🔤',
    titulo: 'Escrita com arraste de letras',
    descricao: 'Forme a palavra correta arrastando as letras na ordem certa.',
    rota: '/atividades/escrita'
  },
  {
    emoji: '📖',
    titulo: 'Leitura guiada',
    descricao: 'Leia e ouça histórias simples, com palavras destacadas.',
    rota: '/atividades/leitura'
  },
  {
    emoji: '🐾',
    titulo: 'Sons e animais',
    descricao: 'Descubra qual animal faz cada som. Miau, au au... quem será?',
    rota: '/atividades/sons'
  },
  {
    emoji: '🧠',
    titulo: 'Fala com o mascote',
    descricao: 'Converse com seu mascote e aprenda curiosidades divertidas!',
    rota: '/atividades/conversa'
  }
];

const Atividades = () => {
  return (
    <div className={styles.atividade}>
      <div className={styles.header}>
        <VovoNeta />
        <Papaya />
      </div>

      <h1>Vamos brincar e aprender?</h1>
      <p className={styles.intro}>
        Escolha uma das atividades abaixo para começar sua jornada com a Vovó Neta e o Papaya.
      </p>

      <div className={styles.cards}>
        {atividadesList.map((atividade, index) => (
          <Link href={atividade.rota} key={index} className={styles.card}>
            <h2>{atividade.emoji} {atividade.titulo}</h2>
            <p>{atividade.descricao}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Atividades;
