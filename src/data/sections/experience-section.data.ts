import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { instagram, linkedin, website } from '../helpers/links';
import {
  aws,
  python,
  packetTracer,
  netcat,
  scapy,
  jira,
  confluence,
  sonarQube,
  gitlab,
  terraform,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Solutions Architect Intern',
      company: 'Monetary Authority of Singapore',
      image: import('@/assets/logos/mas-logo.jpg'),
      dates: [new Date('2026-03'), null],
      description: `
        - Supervision Platforms Div, App Engineering.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [aws(), python(), jira(), confluence(), sonarQube(), gitlab(), terraform()],
      },
      links: [website({ url: 'https://www.mas.gov.sg/' })],
    },
    {
      role: 'Sentinel Programme',
      company: 'The Digital and Intelligence Service',
      image: import('@/assets/logos/dis-logo.jpg'),
      dates: [new Date('2024-05'), new Date('2025-09')],
      description: `
        - Built fundamentals in cybersecurity concepts, including endpoint monitoring, intrusion detection, and network analysis through projects and competitions.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), packetTracer(), netcat(), scapy()],
      },
      links: [website({ url: 'https://www.mindef.gov.sg/dis/sentinel' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
