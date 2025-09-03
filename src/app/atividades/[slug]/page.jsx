'use client';

import { useParams } from 'next/navigation';
import AssociacaoImagemPalavra from '@/app/components/AssociacaoImagemPalavra';
import FormeAPalavra from '@/app/components/FormeAPalavra';
import LeituraGuiada from '@/app/components/LeituraGuiada';
import Pintura from '@/app/components/Pintura';
import SonsEAnimais from '@/app/components/sonsEAnimais';

export default function AtividadePage() {
  const { slug } = useParams();

  // Aqui você pode futuramente expandir para outras atividades:
  const componentesPorSlug = {
    'associacao-imagem-palavra': <AssociacaoImagemPalavra />,
    'forme-a-palavra': <FormeAPalavra />,
     'leitura-guiada': <LeituraGuiada />,
     'sons-e-animais': <SonsEAnimais />,
     'pintura': <Pintura />,
    // etc.
  };

  const componenteAtividade = componentesPorSlug[slug];

  if (!componenteAtividade) {
    return <p>Atividade não encontrada 😕</p>;
  }

  return <div>{componenteAtividade}</div>;
}
