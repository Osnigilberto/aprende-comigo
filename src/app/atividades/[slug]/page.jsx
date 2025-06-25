'use client';

import { useParams } from 'next/navigation';
import AssociacaoImagemPalavra from '../../components/AssociacaoImagemPalavra';
import FormeAPalavra from '../../components/FormeAPalavra';
import LeituraGuiada from '../../components/LeituraGuiada';
import Pintura from '../../components/Pintura';

export default function AtividadePage() {
  const { slug } = useParams();

  // Aqui você pode futuramente expandir para outras atividades:
  const componentesPorSlug = {
    'associacao-imagem-palavra': <AssociacaoImagemPalavra />,
    'forme-a-palavra': <FormeAPalavra />,
     'leitura-guiada': <LeituraGuiada />,
     'pintura': <Pintura />,
    // etc.
  };

  const componenteAtividade = componentesPorSlug[slug];

  if (!componenteAtividade) {
    return <p>Atividade não encontrada 😕</p>;
  }

  return <div>{componenteAtividade}</div>;
}
