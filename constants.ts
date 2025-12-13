import { ServiceItem, QualificationItem,  NavLink } from './types';

export const DOCTOR_NAME = "Dra. Isadora Nascimento";
export const CRMV = "CRMV-ES 04663";
export const ROLE = "Médica Veterinária & Mestre em Ciência Animal";
export const REGIONS = ["Marechal Floriano", "Domingos Martins", "Santa Isabel", "Viana", "Cariacica", "Vitória", "Vila Velha"];
export const WHATSAPP_NUMBER = "5562999980268"; // Atualizado para o número solicitado (DDD 62)
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.`;

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Qualificações', href: '#qualificacoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Consultoria para Responsáveis de Pets Não Convencionais",
    description: "Orientação especializada para o manejo, saúde e bem-estar de animais exóticos e silvestres mantidos como pets.",
    iconName: "Trees"
  },
  {
    id: 2,
    title: "Atendimento Veterinário",
    description: "Cuidados clínicos e cirúrgicos para uma ampla variedade de espécies, com foco em medicina preventiva e tratamentos personalizados.",
    iconName: "Stethoscope"
  },
  {
    id: 3,
    title: "Atestado de Saúde e Laudos Técnicos",
    description: "Emissão de documentos oficiais para transporte, garantindo conformidade com as normas vigentes.",
    iconName: "Activity"
  },
  {
    id: 4,
    title: "Palestras e Treinamentos",
    description: "Capacitação técnica para equipes de manejo e estudantes de veterinária.",
    iconName: "GraduationCap"
  }
];

export const QUALIFICATIONS: QualificationItem[] = [
   {
    id: 1,
    year: "2025",
    title: "Medica Veterinária Responsável Técnica",
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
