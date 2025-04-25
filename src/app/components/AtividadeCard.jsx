import styles from './AtividadeCard.module.css';

export default function AtividadeCard({ titulo, descricao, imagem, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={imagem} alt={titulo} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{titulo}</h3>
        <p className={styles.cardDescription}>{descricao}</p>
      </div>
    </div>
  );
}
