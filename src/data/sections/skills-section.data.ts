import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  firebase,
  python,
  javascript,
  sql,
  linux,
  webDesign,
  networking,
  react,
  dart,
  powerbi,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        webDesign({
          level: 5,
        }),
        linux({
          level: 4,
          description: 'Experienced with Linux system administration and shell scripting.',
        }),
        python({
          level: 4,
        }),
        javascript({
          level: 2,
        }),
        sql({
          level: 3,
        }),
        networking({
          level: 2,
          description: 'Knowledgeable in networking fundamentals and security principles.',
        }),
        firebase({
          level: 1,
          description: 'Basic familiarity with Firebase for backend and real-time applications.',
        }),
        powerbi({
          level: 3,
        }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [react(), dart()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:sg', name: 'English - native' },
        { icon: 'circle-flags:ph', name: 'Tagalog - working proficiency' },
        { icon: 'circle-flags:de', name: 'German - beginner' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
