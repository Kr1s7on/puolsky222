import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const dart = createSkillFactory({
  name: 'Dart',
  icon: 'simple-icons:dart',
  iconColor: '#0175C2',
  url: 'https://dart.dev/',
});

export const jetpackCompose = createSkillFactory({
  name: 'Jetpack Compose',
  icon: 'simple-icons:jetpackcompose',
  iconColor: '#6200EE',
  url: 'https://developer.android.com/jetpack/compose',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const canva = createSkillFactory({
  name: 'Canva',
  icon: 'simple-icons:canva',
  iconColor: '#00C4CC',
  url: 'https://www.canva.com/',
});

export const instagram = createSkillFactory({
  name: 'Instagram',
  icon: 'simple-icons:instagram',
  iconColor: '#E4405F',
  url: 'https://www.instagram.com/',
});

// for packet tracer
export const packetTracer = createSkillFactory({
  name: 'Packet Tracer',
  icon: 'simple-icons:cisco',
  iconColor: '#1BA0D7',
  url: 'https://www.netacad.com/courses/packet-tracer',
});

export const netcat = createSkillFactory({
  name: 'Netcat',
  icon: 'simple-icons:nec',
  iconColor: '#000000',
  url: 'https://en.wikipedia.org/wiki/Netcat',
});

export const debate = createSkillFactory({
  name: 'Debate',
  icon: 'simple-icons:dbt',
  iconColor: '#000000',
  url: 'https://en.wikipedia.org/wiki/Debate',
});

export const html = createSkillFactory({
  name: 'HTML',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
});

export const css = createSkillFactory({
  name: 'CSS',
  icon: 'simple-icons:css3',
  iconColor: '#1572B6',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
});

export const javascript = createSkillFactory({
  name: 'JavaScript',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
});

export const sql = createSkillFactory({
  name: 'SQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://en.wikipedia.org/wiki/SQL',
});

export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'simple-icons:linux',
  iconColor: '#FCC624',
  url: 'https://www.linux.org/',
});

export const webDesign = createSkillFactory({
  name: 'Web Design',
  icon: 'simple-icons:peakdesign',
  iconColor: '#000000',
  url: 'https://en.wikipedia.org/wiki/Web_design',
});

export const networking = createSkillFactory({
  name: 'Networking',
  icon: 'simple-icons:netto',
  iconColor: '#000000',
  url: 'https://en.wikipedia.org/wiki/Networking',
});

export const powerbi = createSkillFactory({
  name: 'PowerBI',
  icon: 'simple-icons:powerbi',
  iconColor: '#F2C811',
  url: 'https://powerbi.microsoft.com/',
});

export const excel = createSkillFactory({
  name: 'Excel',
  icon: 'simple-icons:microsoftexcel',
  iconColor: '#217346',
  url: 'https://www.microsoft.com/en-sg/microsoft-365/excel',
});

export const scratch = createSkillFactory({
  name: 'Scratch',
  icon: 'simple-icons:scratch',
  iconColor: '#4D97FF',
  url: 'https://scratch.mit.edu/',
});

export const bootstrap = createSkillFactory({
  name: 'Bootstrap',
  icon: 'simple-icons:bootstrap',
  iconColor: '#7952B3',
  url: 'https://getbootstrap.com/',
});

export const pixilart = createSkillFactory({
  name: 'Pixilart',
  icon: 'simple-icons:pix',
  iconColor: '#000000',
  url: 'https://www.pixilart.com/',
});

export const cnycookies = createSkillFactory({
  name: 'CNY Cookies',
  icon: 'simple-icons:coil',
  iconColor: '#000000',
  url: 'https://en.wikipedia.org/wiki/Chinese_New_Year',
});
