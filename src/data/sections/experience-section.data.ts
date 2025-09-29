import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { instagram, linkedin, website } from '../helpers/links';
import { firebase, dart, jetpackCompose, python, canva, packetTracer, netcat, debate, scapy } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Co-Curricular Activities',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Comms & Outreach Lead',
      company: 'NYP Google Developer Student Club',
      image: import('@/assets/logos/dsc-nyp-logo.jpg'),
      dates: [new Date('2024-10'), null],
      description: `
        - Hosted workshops engaging over 200 students.
        - Led and organized sessions on topics like Gemini, Google Maps API, Jetpack Compose, Flutter, and programming fundamentals for students of all experience levels.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [dart(), firebase(), jetpackCompose(), python(), canva()],
      },
      links: [
        instagram({ url: 'https://www.instagram.com/nyp_dsc/' }),
        linkedin({ url: 'https://www.linkedin.com/company/dsc-nyp' }),
      ],
    },
    {
      role: 'Head of Publicity',
      company: 'NYP AI',
      image: import('@/assets/logos/nyp-ai-logo.png'),
      dates: [new Date('2025-01'), null],
      description: `
        - Still doing socials..
        - Managing a team of five publicity committee members.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [canva()],
      },
      links: [website({ url: 'https://nyp.ai/' }), instagram({ url: 'https://www.instagram.com/nyp_ai/' })],
    },
    {
      role: 'Sentinel Programme',
      company: 'The Digital and Intelligence Service',
      image: import('@/assets/logos/dis-logo.jpg'),
      dates: [new Date('2024-05'), new Date('2025-09')],
      description: `
        - Projects: Search Engine, Network Forensics, Network Intrusion Detection, Endpoint Detection + Response
        - Python, python, and more python.
        - networking stuff + CTF training
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), packetTracer(), netcat(), scapy()],
      },
      links: [website({ url: 'https://www.mindef.gov.sg/dis/sentinel' })],
    },
    {
      role: 'Member',
      company: 'NYP Current Affairs and Debating Club',
      image: import('@/assets/logos/cadc-logo.png'),
      dates: [new Date('2023-05'), new Date('2025-04')],
      description: `
      Tournaments:
        - Sishu Griha AP Debate 2023
        - Intertext WSC Debate Open 2023
        - CADC Policy Forum 2024
      `,
      tagsList: {
        title: 'Focus',
        tags: [debate()],
      },
      links: [instagram({ url: 'https://www.instagram.com/nyp.debate/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
