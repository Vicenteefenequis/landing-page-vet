export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface QualificationItem {
  id: number;
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SpeciesGroup {
  id: string;
  title: string;
  description: string;
  species: string[];
  /** true para a especialidade principal; false para atendimento complementar */
  primary: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  description: string;
}
