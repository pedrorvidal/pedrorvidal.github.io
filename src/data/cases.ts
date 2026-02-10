import caseAlaresCover from '@/assets/images/cases/case-alares.png';
import caseUltherapyCover from '@/assets/images/cases/case-ultherapy.png';
import caseConfidenceToBeMeCover from '@/assets/images/cases/case-confidencetobeme.png';
import caseMerzAestheticsCover from '@/assets/images/cases/case-merzaesthetics.png';
import caseTintaDeQualidadeCover from '@/assets/images/cases/case-tintadequalidade.png';
import caseAbrafatiCover from '@/assets/images/cases/case-abrafati.png';
import caseGlpCover from '@/assets/images/cases/case-glp.png';
import caseCuidadosSemLimitesCover from '@/assets/images/cases/case-cuidadosemlimites.png';
import caseTorrentCover from '@/assets/images/cases/case-torrent.png';
import caseMedtronicDiabetesLatamCover from '@/assets/images/cases/case-medtronicdiabeteslatam.png';
import caseAgenciaF2fCover from '@/assets/images/cases/case-agenciaf2f.png';
import caseChegolaConsorcioCover from '@/assets/images/cases/case-chegolaconsorcio.png';

export interface CaseLink {
  label: string;
  url: string;
}

export interface Case {
  id: string;
  title: string;
  clientOrProject: string;
  period: string;
  role: string;
  coverImage: string;
  galleryImages?: string[];
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  tags: string[];
  highlights: string[];
  metrics?: string[];
  links?: CaseLink[];
}

export const cases: Case[] = [
  {
    id: '1',
    title: 'E-Commerce Alares internet',
    clientOrProject: 'Alares Internet',
    period: 'Jun 2023 – Dec 2023',
    role: 'Lead Fullstack Developer',
    coverImage: caseAlaresCover,
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    ],
    summary:
      'Implementation of a new e-commerce platform, improving conversion rates and user experience across all devices.',
    problem:
      'The existing platform used to depend only on call center sales, resulting in a 25% drop in revenue and poor customer satisfaction.',
    solution:
      'Built a modern e-commerce site with a mobile-first design, streamlined checkout process, and personalized product recommendations, all integrated with the existing CRM and inventory systems thru an external API.',
    stack: ['WordPress', 'Javascript', 'MariaDB', 'API', 'PHP', 'Docker'],
    tags: ['E-Commerce', 'Redesign', 'Frontend', 'Backend', 'API Integration'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://alaresinternet.com.br' }],
  },
  {
    id: '2',
    title: 'Portal Alares Internet',
    clientOrProject: 'Alares Internet',
    period: 'Jun 2024 – Dec 2024',
    role: 'Frontend Developer',
    coverImage: caseAlaresCover,
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    ],
    summary:
      'Implementation of a new website, using a modern design and improving user experience across all devices.',
    problem:
      'The existing platform used to depend on a legacy system, resulting in publication issues and poor customer satisfaction.',
    solution:
      'Built a modern website with a mobile-first design, new content management system and personalized content recommendations, all integrated with the existing CRM and inventory systems thru an external API.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'NextJS'],
    tags: ['Portal', 'Redesign', 'Frontend', 'Backend', 'API Integration'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://alaresinternet.com.br' }],
  },
  {
    id: '3',
    title: 'Ultherapy Marketing Website',
    clientOrProject: 'Ultherapy',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseUltherapyCover,
    summary:
      'Marketing site refresh focused on treatment education, clear CTAs, and a consistent visual narrative across devices.',
    problem:
      'New features and treatments were not effectively highlighted, leading to lower engagement and conversion rates.',
    solution:
      'Developed new features and bug fixes for improved user experience, optimized content layout, and enhanced mobile responsiveness.',
    stack: [
      'WordPress',
      'Timber',
      'Twig',
      'jQuery',
      'Bootstrap',
      'Google Analytics',
      'Apache',
    ],
    tags: ['Marketing Site', 'Redesign', 'Frontend', 'CMS', 'SEO'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://ultherapy.com/' }],
  },
  {
    id: '4',
    title: 'Confidence To Be Me Campaign Site',
    clientOrProject: 'Confidence To Be Me',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseConfidenceToBeMeCover,
    summary:
      'Development of new features and bug fixes for a campaign site focused on user engagement and clear messaging.',
    problem: 'Legacy website',
    solution:
      'Delivered a structured campaign layout with stronger messaging hierarchy, accessible sections, and analytics tracking.',
    stack: ['WordPress', 'Google Analytics', 'Apache'],
    tags: ['Campaign', 'Content', 'Frontend', 'CMS', 'Marketing'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://confidencetobeme.com/' }],
  },
  {
    id: '5',
    title: 'Merz Aesthetics Brazil, Argentina, Chile, Colombia and LATAM',
    clientOrProject: 'Merz Aesthetics',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseMerzAestheticsCover,
    summary:
      'Localized corporate site with product education, brand consistency, and mobile-first navigation.',
    problem:
      'Content was fragmented across pages and lacked consistent structure for the audience.',
    solution:
      'Unified content blocks, improved navigation patterns, and ensured responsive layouts across core templates.',
    stack: [
      'WordPress',
      'Timber',
      'Twig',
      'jQuery',
      'Google Analytics',
      'Apache',
    ],
    tags: ['Corporate', 'Localization', 'Frontend', 'CMS', 'Marketing'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://merzaesthetics.com.br/' }],
  },
  {
    id: '6',
    title: 'Tinta de Qualidade Portal',
    clientOrProject: 'Tinta de Qualidade',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseTintaDeQualidadeCover,
    summary:
      'Institutional portal focused on paint quality, best practices, and clear navigation for different audiences.',
    problem:
      'Users struggled to find practical guidance and relevant sections quickly on the legacy site.',
    solution:
      'Introduced a clearer content architecture with featured sections and responsive UI patterns.',
    stack: ['WordPress', 'Bootstrap', 'Apache', 'CornerStone Builder'],
    tags: ['Portal', 'Content', 'Frontend', 'CMS', 'Education'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://tintadequalidade.com.br/' }],
  },
  {
    id: '7',
    title: 'Abrafati Institutional Website',
    clientOrProject: 'Abrafati',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseAbrafatiCover,
    summary:
      'Institutional website with structured content, events visibility, and improved navigation on mobile.',
    problem:
      'Event and association content was difficult to discover and buried across inconsistent pages.',
    solution:
      'Reorganized navigation, standardized templates, and improved content discoverability across devices.',
    stack: ['WordPress', 'Bootstrap', 'Apache', 'CornerStone Builder'],
    tags: ['Institutional', 'Events', 'Frontend', 'CMS', 'Content'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://abrafati.com.br/' }],
  },
  {
    id: '8',
    title: 'GLP Brazil Website',
    clientOrProject: 'GLP',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseGlpCover,
    summary:
      'Corporate website highlighting logistics solutions with clean visual hierarchy and strong calls to action.',
    problem:
      'Previous website used an old and discontinued php framework, leading to performance and maintenance issues.',
    solution:
      'Built a consistent component system and improved content hierarchy to emphasize key offerings.',
    stack: [
      'WordPress',
      'jQuery',
      'Bootstrap',
      'Google Analytics',
      'Cloudflare',
    ],
    tags: ['Corporate', 'Marketing', 'Frontend', 'CMS', 'Performance'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://glp.com.br/' }],
  },
  {
    id: '9',
    title: 'Cuidados Sem Limites Campaign',
    clientOrProject: 'Cuidados Sem Limites',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseCuidadosSemLimitesCover,
    summary:
      'Campaign site centered on awareness content with accessible typography and mobile-first sections.',
    problem:
      'Messaging lacked a cohesive structure and did not guide visitors through the story effectively.',
    solution:
      'Crafted a narrative-driven layout, optimized for readability, and aligned CTAs to key actions.',
    stack: ['WordPress', 'jQuery', 'Bootstrap', 'Google Analytics'],
    tags: ['Campaign', 'Awareness', 'Frontend', 'CMS', 'Accessibility'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://cuidadosemlimites.com.br/' }],
  },
  {
    id: '10',
    title: 'Torrent Institutional Website',
    clientOrProject: 'Torrent',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseTorrentCover,
    summary:
      'Institutional site focused on clear communication of services and a responsive layout.',
    problem:
      'Legacy website, needed new features and bug fixes for improved user experience and mobile responsiveness.',
    solution:
      'Developed new features for product search and added new filters, optimized content layout, and enhanced mobile responsiveness.',
    stack: ['Google Analytics', 'Nginx'],
    tags: [
      'Institutional',
      'Responsive',
      'Frontend',
      'Performance',
      'Backend',
      'Laravel',
      'CoasterCMS',
    ],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://www.torrent.com.br/' }],
  },
  {
    id: '11',
    title: 'Medtronic Diabetes LATAM',
    clientOrProject: 'Medtronic Diabetes LATAM',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseMedtronicDiabetesLatamCover,
    summary:
      'Regional healthcare site emphasizing patient education, device guidance, and clear navigation paths.',
    problem:
      'Information was dense and not prioritized for quick access by patients and caregivers.',
    solution:
      'Redesigned content flow with prominent resources and improved mobile readability.',
    stack: ['WordPress', 'jQuery', 'Google Analytics', 'Nginx', 'Bootstrap'],
    tags: ['Healthcare', 'Education', 'Frontend', 'CMS', 'Content'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://medtronicdiabeteslatam.com/' }],
  },
  {
    id: '12',
    title: 'Agencia F2F Website',
    clientOrProject: 'Agencia F2F',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseAgenciaF2fCover,
    summary:
      'Agency website showcasing services, work highlights, and a conversion-focused contact flow.',
    problem: 'New site redesign.',
    solution:
      'Rebuilt page structure with focused service sections, improved CTAs, and cleaner typography.',
    stack: ['WordPress', 'jQuery', 'Bootstrap', 'Google Analytics'],
    tags: ['Agency', 'Portfolio', 'Frontend', 'CMS', 'Marketing'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://agenciaf2f.com/' }],
  },
  {
    id: '13',
    title: 'Chego La Consorcio Website',
    clientOrProject: 'Chego La Consorcio',
    period: '2025',
    role: 'Frontend Developer',
    coverImage: caseChegolaConsorcioCover,
    summary:
      'Institutional website refresh with a clear services overview, strong CTAs, and a mobile-friendly layout.',
    problem:
      'Site redesign with new features and bug fixes for improved user experience and mobile responsiveness.',
    solution:
      'Reorganized content blocks, improved visual hierarchy, and ensured responsive layouts across core sections.',
    stack: ['WordPress', 'jQuery', 'Google Analytics', 'Cloudflare'],
    tags: ['Institutional', 'Frontend', 'CMS', 'Marketing'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live Demo', url: 'https://chegolaconsorcio.com.br/' }],
  },
];
