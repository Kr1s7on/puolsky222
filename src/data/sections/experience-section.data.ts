import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { instagram, linkedin, website } from '../helpers/links';
import { firebase, dart, jetpackCompose, python, canva, packetTracer, netcat, debate } from '../helpers/skills';

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
        - Currently working on and planning a reconstruct of our socials.
        - Peer Tutoring (App Development) event in collaboration with another club.
        - Hosted workshops on Flutter and Jetpack Compose, spanning a total of 100 students.
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
      role: 'Publicity EXCO',
      company: 'NYP AI',
      image: import('@/assets/logos/nyp-ai-logo.png'),
      dates: [new Date('2025-01'), null],
      description: `
        - Socials most of the time.
        - Led publicity campaigns, including social media posts and email outreach.
        - Achieved a 48.9% increase in Instagram impressions.

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
      dates: [new Date('2024-05'), null],
      description: `
        - Python x100
        - Covers basic cybersecurity concepts.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), packetTracer(), netcat()],
      },
      links: [website({ url: 'https://www.mindef.gov.sg/dis/sentinel' })],
    },
    {
      role: 'Member',
      company: 'NYP Current Affairs and Debating Club',
      image: import('@/assets/logos/nyp-cadc.png'),
      dates: [new Date('2023-05'), null],
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
      links: [website({ url: 'https://www.instagram.com/nyp.debate/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
