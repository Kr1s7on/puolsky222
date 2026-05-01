import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import { aws, python, jira, confluence, sonarQube, gitlab, terraform } from '../helpers/skills';

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
        - Supervision Platforms Division, Information Technology Department
      `,
      tagsList: {
        title: 'Technologies',
        tags: [aws(), python(), jira(), confluence(), sonarQube(), gitlab(), terraform()],
      },
      links: [website({ url: 'https://www.mas.gov.sg/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
