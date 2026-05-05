export type ProjectItem = {
  id: string
  title: string
  category: string
  description: string
  /** URL otimizada (tamanho fixo) para carregamento previsível em deploy estático */
  imageSrc: string
  imageWidth: number
  imageHeight: number
}

/** Lista expansível: adicione novos itens mantendo dimensões declaradas para layout estável */
export const projects: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Edifício corporativo',
    category: 'Estruturas metálicas',
    description:
      'Projeto e compatibilização estrutural para núcleo corporativo com sistema misto concreto-aço.',
    imageSrc:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=75',
    imageWidth: 800,
    imageHeight: 533,
  },
  {
    id: 'p2',
    title: 'Retrofit estrutural',
    category: 'Reforço',
    description:
      'Diagnóstico e reforço em elementos estruturais com interferência mínima na operação.',
    imageSrc:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=75',
    imageWidth: 800,
    imageHeight: 533,
  },
  {
    id: 'p3',
    title: 'Complexo habitacional',
    category: 'Gerenciamento',
    description:
      'Planejamento integrado de obra com foco em prazo, segurança e indicadores de qualidade.',
    imageSrc:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=75',
    imageWidth: 800,
    imageHeight: 532,
  },
  {
    id: 'p4',
    title: 'Infraestrutura viária',
    category: 'Obras civis',
    description:
      'Modelagem e acompanhamento de serviços de drenagem e pavimentação em vias urbanas.',
    imageSrc:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=75',
    imageWidth: 800,
    imageHeight: 533,
  },
  {
    id: 'p5',
    title: 'Laudos técnicos',
    category: 'Consultoria',
    description:
      'Pareceres, fiscalização e documentação perante órgãos para regularização e conformidade.',
    imageSrc:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=75',
    imageWidth: 800,
    imageHeight: 534,
  },
  {
    id: 'p6',
    title: 'Reforma integrada',
    category: 'Projetos',
    description:
      'Anteprojeto e detalhamento de reformas com levantamento laser e compatibilização MEP.',
    imageSrc:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=75',
    imageWidth: 800,
    imageHeight: 534,
  },
]
