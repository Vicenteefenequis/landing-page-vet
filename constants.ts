import { ServiceItem, QualificationItem, TestimonialItem, NavLink } from './types';

export const DOCTOR_NAME = "Dra. Isadora Nascimento";
export const ROLE = "Médica Veterinária & Consultora Especializada";
export const REGIONS = ["Marechal Floriano", "Domingos Martins", "Vitória", "Vila Velha"];
export const WHATSAPP_NUMBER = "5562999980268"; // Atualizado para o número solicitado (DDD 62)
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20consultoria.`;

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Qualificações', href: '#qualificacoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Consultoria para Zoológicos",
    description: "Planejamento estratégico de manejo, bem-estar animal e adequação às normativas ambientais vigentes.",
    iconName: "Trees"
  },
  {
    id: 2,
    title: "Gestão Clínica Veterinária",
    description: "Auditoria de processos clínicos, treinamento de equipes e implementação de protocolos de excelência.",
    iconName: "Stethoscope"
  },
  {
    id: 3,
    title: "Atendimento Especializado",
    description: "Consultas e procedimentos para casos de alta complexidade em diversas espécies.",
    iconName: "Activity"
  },
  {
    id: 4,
    title: "Palestras e Treinamentos",
    description: "Capacitação técnica para equipes de tratamento, biólogos e estudantes de veterinária.",
    iconName: "GraduationCap"
  }
];

export const QUALIFICATIONS: QualificationItem[] = [
  {
    id: 1,
    year: "2023",
    title: "Mestrado em Conservação",
    institution: "Universidade Federal",
    description: "Pesquisa focada em estratégias de conservação ex-situ e bem-estar de fauna silvestre."
  },
  {
    id: 2,
    year: "2020",
    title: "Especialização em Clínica Médica",
    institution: "Instituto de Referência",
    description: "Pós-graduação lato sensu com ênfase em clínica médica e cirúrgica de pequenos animais."
  },
  {
    id: 3,
    year: "2018",
    title: "Graduação em Medicina Veterinária",
    institution: "Universidade Estadual",
    description: "Formação de excelência com láurea acadêmica e estágio internacional."
  }
];
