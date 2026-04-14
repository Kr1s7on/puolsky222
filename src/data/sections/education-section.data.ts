import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Applied AI and Analytics',
      institution: 'Nanyang Polytechnic',
      image: import('@/assets/logos/nyp-logo.jpeg'),
      dates: [new Date('2024.04'), new Date('2027.05')],
      description: 'Currently on a year-long internship.',
      links: [
        website({
          url: 'https://www.nyp.edu.sg/student/study/schools/information-technology/diploma-applied-AI-analytics',
        }),
      ],
    },
    {
      title: 'Polytechnic Foundation Programme',
      institution: 'Nanyang Polytechnic',
      image: import('@/assets/logos/nyp-logo.jpeg'),
      dates: [new Date('2023.04'), new Date('2024.03')],
      description: 'Foundational year. GPA 3.66/4.00.',
      links: [website({ url: 'https://www.nyp.edu.sg/student/study/polytechnic-foundation-programme' })],
    },
    {
      title: 'N(A) Level',
      institution: 'Presbyterian High School',
      image: import('@/assets/logos/pres-logo.jpg'),
      dates: [new Date('2019.01'), new Date('2022.12')],
      description: 'Elective Geography, Principles of Accounts, Combined Science (Phy, Chem)',
      links: [website({ url: 'https://www.presbyterian.moe.edu.sg/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
