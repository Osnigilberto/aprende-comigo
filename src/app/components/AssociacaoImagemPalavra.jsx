'use client';

import styles from './AssociacaoImagemPalavra.module.css';

export default function AssociacaoImagemPalavraPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Atividade em Construção</h2>
      
      <div className={styles.personagem}>
        <img
          src="/neta-papaya1.png"
          alt="Vovó Neta"
          className={styles.imagemPersonagem}
        />
        
        <div className={styles.balao}>
          <p>Estamos ajeitando essa atividade, minha criança. Volte logo, tá bom?</p>
        </div>
      </div>
    </div>
  );
}
