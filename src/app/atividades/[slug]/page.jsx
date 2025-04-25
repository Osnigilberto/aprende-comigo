'use client';

import { useParams } from 'next/navigation';
import AssociacaoImagemPalavra from '../../components/AssociacaoImagemPalavra';

export default function AtividadePage() {
  const { slug } = useParams();

  // Aqui você pode futuramente expandir para outras atividades:
  const componentesPorSlug = {
    'associacao-imagem-palavra': <AssociacaoImagemPalavra />,
    // 'escrita-com-arraste-de-letras': <EscritaArrasteLetras />,
    // 'leitura-guiada': <LeituraGuiada />,
    // etc.
  };

  const componenteAtividade = componentesPorSlug[slug];

  if (!componenteAtividade) {
    return <p>Atividade não encontrada 😕</p>;
  }

  return <div>{componenteAtividade}</div>;
}
