import React from 'react';
import {
  CRMV,
  DOCTOR_NAME,
  FAQ_ITEMS,
  INSTAGRAM_URL,
  REGIONS,
  SEO_DESCRIPTION,
  SITE_URL,
  WHATSAPP_NUMBER,
} from '@/constants';

const baseUrl = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;

// +55 62 99998-0268
const telephone = `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2, 4)} ${WHATSAPP_NUMBER.slice(4, 9)}-${WHATSAPP_NUMBER.slice(9)}`;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'VeterinaryCare',
      '@id': `${baseUrl}/#business`,
      name: `${DOCTOR_NAME} - Veterinária de Silvestres e Exóticos a Domicílio`,
      description: SEO_DESCRIPTION,
      url: `${baseUrl}/`,
      image: `${baseUrl}/images/og.jpg`,
      telephone,
      // Atendimento exclusivamente a domicílio: sem endereço de rua.
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'ES',
        addressCountry: 'BR',
      },
      areaServed: REGIONS.map((city) => ({
        '@type': 'City',
        name: city,
        containedInPlace: { '@type': 'State', name: 'Espírito Santo' },
      })),
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      sameAs: [INSTAGRAM_URL],
      founder: { '@id': `${baseUrl}/#isadora` },
      employee: { '@id': `${baseUrl}/#isadora` },
    },
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#isadora`,
      name: DOCTOR_NAME,
      jobTitle: 'Médica Veterinária',
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidade Federal de Goiás' },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: CRMV,
        credentialCategory: 'Registro profissional',
        recognizedBy: { '@type': 'Organization', name: 'Conselho Regional de Medicina Veterinária do Espírito Santo' },
      },
      sameAs: [INSTAGRAM_URL],
    },
    {
      '@type': 'FAQPage',
      '@id': `${baseUrl}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
};

export const StructuredData: React.FC = () => (
  <script
    type="application/ld+json"
    // JSON.stringify não escapa "<"; isso evita fechar a tag script por acidente.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
  />
);
