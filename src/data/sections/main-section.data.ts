import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/shoes.jpeg'),
  fullName: 'Kriston Jomari',
  role: 'Y2 Applied AI Student',
  details: [
    { label: 'School', value: 'Nanyang Polytechnic' },
    { label: 'Email', value: 'j.kriston@icloud.com', url: 'mailto:j.kriston@icloud.com' },
    { label: 'From', value: 'Singapore' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'j.kriston@icloud.com' },
    { label: 'LinkedIn', value: '/in/kristonj', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/Kr1s7on', url: 'https://github.com' },
  ],
  description:
    "I find AI intriguing and I love doing UI/UX work. When I'm not coding, I'm engrossed in mystery novels, usually with a cup of coffee.",
  tags: [{ name: 'I 🤍 Tableau' }, { name: 'Linux' }, { name: 'UI/UX' }],
  action: {
    label: 'Download CV',
    url: '/Kriston Jomari.pdf',
    downloadedFileName: 'Kriston Jomari.pdf',
  },
  links: [github({ url: 'https://github.com/Kr1s7on' }), linkedin({ url: 'https://linkedin.com/in/kristonj' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
