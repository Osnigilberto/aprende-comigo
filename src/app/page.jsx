import styles from './page.module.css';
import SobreNos from './Pages/SobreNos';
import Contato from './Pages/Contato';
import Atividades from './atividades/page';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        {/* Banner de boas-vindas */}
        <section className={styles.welcomeBanner}>
          <div>
            <h1>Bem-vindo ao Aprende Comigo</h1>
            <p>Um mundo de aprendizado interativo para crianças de 2 a 5 anos, explorando o conhecimento de forma divertida e criativa.</p>
          </div>
          
        </section>

        {/* Seções */}
        <section id="sobreNos">
          <SobreNos />
        </section>

        <section id="contato">
          <Contato />
        </section>
      </main>
    </div>
  );
}
