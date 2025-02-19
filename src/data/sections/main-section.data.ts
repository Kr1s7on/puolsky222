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
  image: import('@/assets/jpn-prof.png'),
  fullName: 'Kriston Jomari',
  role: 'Y1 Applied AI Student',
  details: [
    { label: 'School', value: 'Nanyang Poytecnic' },
    { label: 'Email', value: 'j.kriston@icloud.com', url: 'mailto:j.kriston@icloud.com' },
    { label: 'From', value: 'Singapore' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'j.kriston@icloud.com' },
    { label: 'LinkedIn', value: '/in/kristonj', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/Kr1s7on', url: 'https://github.com' },
  ],
  description:
    "I find AI intriguing and I love doing UI/UX work. When I'm not coding, I'm engrossed in mystery novels, usually with a cup of coffee. I'm also a member of my school's debate club, where I like engaging in thought-provoking discussions and improving my public speaking.",
  tags: [{ name: 'UI/UX' }, { name: 'Linux' }, { name: 'Web Design' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Kriston_Jomari.pdf',
  },
  links: [github({ url: 'https://github.com/Kr1s7on' }), linkedin({ url: 'https://linkedin.com/in/kristonj' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
