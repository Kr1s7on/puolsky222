import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, writeup } from '../helpers/links';
import {
  python,
  html,
  css,
  javascript,
  scratch,
  bootstrap,
  powerbi,
  excel,
  pixilart,
  cnycookies,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Visual Analytics Project',
      image: import('@/assets/portfolio/panalytics2.png'),
      dates: [new Date('2024-12'), new Date('2025-02')],
      details: [
        { label: 'Team size', value: '4 people' },
        { label: 'My role', value: ['Team Lead', 'Designer'] },
        { label: 'Contributors', value: 'Jun Lin, Xuan Wei, Clifton' },
        { label: 'Category', value: ['Analytics', 'Power BI'] },
      ],
      pdfDetails: [],
      screenshots: [
        { src: import('@/assets/portfolio/power1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/power2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/power3.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/power4.png'), alt: 'Fourth screenshot' },
      ],
      description:
        'This project examines consumer preferences for locally-produced food and their role in food sustainability in Singapore. Using Power BI and Excel, we analyzed data to understand trends, challenges, and opportunities.',
      tagsList: {
        title: 'Technologies',
        tags: [powerbi(), excel()],
      },
      links: [writeup({ url: 'https://github.com/Kr1s7on/puolsky-writeups/blob/main/visual-analytics-project.md' })],
    },
    {
      name: "Turto's Project",
      image: import('@/assets/portfolio/cc-logo.png'),
      dates: [new Date('2024-11'), new Date('2025-02')],
      details: [
        { label: 'Team size', value: '12 people' },
        { label: 'My role', value: ['Publicity', 'Logistics'] },
        { label: 'Beneficiaries', value: 'Cheng San Senior Resident Center' },
        { label: 'Category', value: ['Service', 'Volunteering'] },
      ],
      pdfDetails: [],
      screenshots: [
        { src: import('@/assets/portfolio/cc1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/cc2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/cc3.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/cc4.png'), alt: 'Fourth screenshot' },
      ],
      description:
        "Turto's Project is a community service project that aims to distribute CNY cookies to the elderly. We collaborated with Cheng San Senior Resident Center who did weekly distributions to the elderly. The project was a success and we managed to distribute $500 worth of cookies to roughly 100 elderly.",
      tagsList: {
        title: 'Donated Items',
        tags: [cnycookies()],
      },
      links: [],
    },
    {
      name: 'KRYJ Hotel Website',
      image: import('@/assets/portfolio/kryj-logo.png'),
      dates: [new Date('2024-04'), new Date('2024-07')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Contributors', value: 'Joon Yin, Yu En' },
        { label: 'Category', value: ['Website', 'Prototype'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://kr1s7on.github.io/KRYJ-Hotel/', url: '#' },
        { label: 'Repository', value: 'https://github.com/Kr1s7on/kryj-hotel', url: '#' },
      ],
      description:
        'A hotel website prototype designed to be fully responsive and user-friendly. I worked on the front-end using HTML, CSS, JavaScript, and Bootstrap to create a modern layout with easy navigation.',
      tagsList: {
        title: 'Technologies',
        tags: [html(), css(), javascript(), bootstrap()],
      },
      links: [
        writeup({ url: 'https://github.com/Kr1s7on/puolsky-writeups/blob/main/kryj-hotel.md' }),
        github({ url: 'https://github.com/Kr1s7on/kryj-hotel' }),
        demo({ url: 'https://kr1s7on.github.io/KRYJ-Hotel/' }),
      ],
    },
    {
      name: 'Pyventory',
      image: import('@/assets/portfolio/py-logo.png'),
      dates: [new Date('2024-05'), new Date('2024-07')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: 'Programmer' },
        { label: 'Contributors', value: 'me' },
        { label: 'Category', value: ['System Utility', 'Terminal'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/Kr1s7on/Pyventory', url: '#' }],
      screenshots: [{ src: import('@/assets/portfolio/pyventory.png'), alt: 'First screenshot' }],
      description:
        'Pyventory is a simple inventory management system built in Python. It helps users track and manage their stock efficiently through a command-line interface.',
      tagsList: {
        title: 'Technologies',
        tags: [python()],
      },
      links: [
        writeup({ url: 'https://github.com/Kr1s7on/puolsky-writeups/blob/main/pyventory.md' }),
        github({ url: 'https://github.com/Kr1s7on/Pyventory' }),
      ],
    },
    {
      name: 'Lion Quest',
      image: import('@/assets/portfolio/lionq.png'),
      dates: [new Date('2023-08'), new Date('2024-01')],
      details: [
        { label: 'Team size', value: '4 people' },
        { label: 'My role', value: 'Pixel Artist, Developed game mechanics' },
        { label: 'Contributors', value: 'Muhammad, Yong Zhe, Sihan' },
        { label: 'Category', value: ['2D Platformer', 'Scratch'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://scratch.mit.edu/projects/1126734393', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/lion1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/lion2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/lion3.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/lion4.png'), alt: 'Fourth screenshot' },
        { src: import('@/assets/portfolio/lion5.png'), alt: 'Fifth screenshot' },
        { src: import('@/assets/portfolio/lion6.png'), alt: 'Sixth screenshot' },
      ],
      description:
        'Lion Quest is a fun, interactive game that turns exploring Singapore into an adventure, starting from Changi Airport and guiding players through landmarks with rewards and challenges.',
      tagsList: {
        title: 'Technologies',
        tags: [scratch(), pixilart()],
      },
      links: [
        demo({ url: 'https://scratch.mit.edu/projects/1126734393' }),
        github({ url: 'https://github.com/Kr1s7on/Lion-Quest' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
