import { FaqItem, NavLink, QualificationItem, ServiceItem, SpeciesGroup, Step } from './types';

export const DOCTOR_NAME = "Dra. Isadora Nascimento";
export const CRMV = "CRMV ES 04663";
export const ROLE = "Médica Veterinária de silvestres e exóticos, Mestre em Ciência Animal";
export const REGIONS = ["Marechal Floriano", "Domingos Martins", "Santa Isabel", "Viana", "Cariacica", "Vitória", "Vila Velha"];
export const WHATSAPP_NUMBER = "5562999980268"; // Atualizado para o número solicitado (DDD 62)
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Dra. Isadora! Gostaria de agendar uma consulta a domicílio.')}`;
export const INSTAGRAM_URL = "https://www.instagram.com/vet_isadora.nascimento";
export const BUSINESS_HOURS_LABEL = "Segunda a Sexta, 08h às 18h";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vetisadoranascimento.com.br/';
export const SEO_TITLE = "Veterinária de Silvestres e Exóticos a Domicílio | Dra. Isadora";
export const SEO_DESCRIPTION = "Veterinária de silvestres e exóticos a domicílio: aves, répteis e pequenos mamíferos. Também cães e gatos. Vitória, Vila Velha, Cariacica e região.";

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Espécies', href: '#especies' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Qualificações', href: '#qualificacoes' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
];

export const SPECIES_GROUPS: SpeciesGroup[] = [
  {
    id: 'aves',
    title: 'Aves',
    description: 'Consultas, check-up, manejo alimentar e de ambiente para aves de companhia.',
    species: ['Calopsita', 'Periquito', 'Papagaio', 'Arara'],
    primary: true,
  },
  {
    id: 'repteis',
    title: 'Répteis',
    description: 'Avaliação clínica, nutrição, iluminação e temperatura adequadas para cada espécie.',
    species: ['Jabuti', 'Tartaruga / cágado', 'Iguana', 'Serpentes', 'Lagartos'],
    primary: true,
  },
  {
    id: 'pequenos-mamiferos',
    title: 'Pequenos mamíferos',
    description: 'Cuidados preventivos, odontologia básica, alimentação e bem-estar de pequenos mamíferos.',
    species: ['Coelho', 'Porquinho-da-índia', 'Hamster', 'Chinchila', 'Furão', 'Ouriço-pigmeu-africano'],
    primary: true,
  },
  {
    id: 'caes-e-gatos',
    title: 'Cães e gatos',
    description: 'Também atendo cães e gatos a domicílio: consultas clínicas, vacinação e acompanhamento.',
    species: ['Cães', 'Gatos'],
    primary: false,
  },
];

export const HOW_IT_WORKS: Step[] = [
  {
    title: 'Contato pelo WhatsApp',
    description: 'Conte qual é o seu animal, a sua cidade e o que está acontecendo.',
  },
  {
    title: 'Triagem e agendamento',
    description: 'Combinamos o melhor dia e horário, e você recebe o valor da consulta e da taxa de deslocamento.',
  },
  {
    title: 'Visita a domicílio',
    description: 'O atendimento acontece na sua casa, onde o animal fica menos estressado e o ambiente dele pode ser avaliado.',
  },
  {
    title: 'Acompanhamento',
    description: 'Você recebe as orientações por escrito e segue com acompanhamento pelo WhatsApp.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Há taxa de deslocamento?',
    answer: 'Sim. A taxa de deslocamento varia conforme a cidade e a distância, e é informada no momento do agendamento, antes de confirmar a visita.',
  },
  {
    question: 'Quais espécies são atendidas?',
    answer: 'Aves (calopsita, periquito, papagaio, arara), répteis (jabuti, tartaruga, cágado, iguana, serpentes, lagartos) e pequenos mamíferos (coelho, porquinho-da-índia, hamster, chinchila, furão, ouriço-pigmeu-africano). Também atendo cães e gatos.',
  },
  {
    question: 'Você atende animais silvestres? Preciso de documentação?',
    answer: 'Sim, atendo animais silvestres de origem legal. Tenha em mãos a documentação do animal, como a nota fiscal do criadouro autorizado ou o registro no órgão ambiental. Animais sem origem legal ou encontrados na natureza devem ser encaminhados aos órgãos ambientais competentes.',
  },
  {
    question: 'Quais cidades são atendidas?',
    answer: `Atendo a domicílio em ${REGIONS.slice(0, -1).join(', ')} e ${REGIONS[REGIONS.length - 1]}, no Espírito Santo.`,
  },
  {
    question: 'E em caso de urgência?',
    answer: 'O atendimento é feito com agendamento. Em caso de urgência, envie uma mensagem pelo WhatsApp descrevendo os sinais do animal. Se houver disponibilidade, a visita é antecipada; caso contrário, você recebe orientação sobre o serviço de emergência mais adequado.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Consulta a Domicílio",
    description: "Atendimento clínico na sua casa para silvestres, exóticos, cães e gatos, com exame físico, avaliação do ambiente e plano de cuidados.",
    iconName: "House"
  },
  {
    id: 2,
    title: "Orientação de Manejo e Bem-estar",
    description: "Ajuda com alimentação, recinto, temperatura, iluminação e enriquecimento ambiental adequados à espécie do seu animal.",
    iconName: "Trees"
  },
  {
    id: 3,
    title: "Atestado de Saúde e Laudos",
    description: "Emissão de atestados de saúde e laudos para transporte e viagem do seu animal, conforme as normas vigentes.",
    iconName: "FileCheck"
  },
  {
    id: 4,
    title: "Palestras e Treinamentos",
    description: "Capacitação sobre animais silvestres e exóticos para tutores, criadores, equipes de manejo e estudantes.",
    iconName: "GraduationCap"
  }
];


export const QUALIFICATIONS: QualificationItem[] = [
   {
    id: 1,
    year: "2025",
    title: "Médica Veterinária Responsável Técnica",
    institution: "ZooPark da Montanha",
    description: "Responsável técnica pelo bem-estar e saúde dos animais do zoológico, implementando protocolos de manejo e cuidados veterinários."
  },
  {
    id: 2,
    year: "2024",
    title: "Mestrado em Ciência Animal",
    institution: "Universidade Federal de Goiás",
    description: "Pesquisa focada em medicina preventiva e bacteriologia aplicada a animais silvestres e exóticos."
  },
  {
    id: 3,
    year: "2023",
    title: "Graduação em Medicina Veterinária",
    institution: "Universidade Federal de Goiás",
    description: "Formação de excelência focada em clínica veterinária e saúde animal."
  },
  {
    id: 4,
    year: "2021",
    title: "Membro Associado a ONG Floresta Cheia",
    institution: "ONG Floresta Cheia",
    description: "Atendimento clínico e cirúrgico de fauna silvestre resgatada em parceria com Cetas/IBAMA."
  },
];
