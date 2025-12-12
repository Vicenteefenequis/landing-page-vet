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
