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
      "Built Alares' first e-commerce store, capturing every purchase attempt as a lead through an RD Station integration.",
    problem:
      'The client depended solely on call-center sales, and purchase attempts that failed to complete — including sales lost to lack of signal coverage in the region — were discarded instead of being followed up on.',
    solution:
      "Built a modern e-commerce site with a mobile-first design and streamlined checkout, integrated with RD Station so every purchase attempt is captured as a lead — including incomplete ones — turning them into future sales opportunities and expanding the client's digital sales channel.",
    stack: ['WordPress', 'Javascript', 'MariaDB', 'API', 'PHP', 'Docker'],
    tags: ['E-Commerce', 'Redesign', 'Frontend', 'Backend', 'API Integration'],
    highlights: [
      "Alares' first e-commerce store, built from the ground up",
      'RD Station integration captures failed/incomplete purchases as leads',
    ],
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
      'Marketing site refresh and incident response across a 5-site network, with a standardized routine to keep WordPress secure and up to date.',
    problem:
      'New features and treatments were not effectively highlighted, and a possible malware security incident hit the entire 5-site Ultherapy network with no standardized update process in place.',
    solution:
      'Delivered new features, bug fixes, and layout/mobile improvements; led incident response and remediation, then standardized an AI-assisted routine for updating WordPress core and dependencies via Composer across 10 repositories (2 pharmaceutical brands × 5 Latin American markets).',
    stack: [
      'WordPress',
      'Timber',
      'Twig',
      'jQuery',
      'Bootstrap',
      'Google Analytics',
      'Apache',
    ],
    tags: ['Marketing Site', 'Redesign', 'Frontend', 'CMS', 'SEO', 'Security'],
    highlights: [
      'Led remediation of a possible-malware incident across a 5-site network',
      'Standardized AI-assisted WordPress/Composer update routine across 10 repositories',
    ],
    metrics: ['Update cycle time cut from 1 week to 1 day'],
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
      "Restored the platform's clinic-search feature and improved messaging and content structure for patients.",
    problem:
      'A fragile in-house geographic search integration was breaking, preventing patients from finding accredited clinics; messaging also lacked a clear hierarchy.',
    solution:
      'Replaced the in-house integration with the Google Places API + ViaCEP to restore reliable clinic search, and delivered a structured campaign layout with stronger messaging hierarchy and accessible sections. Later extended the accredited-clinics network into the DPLATAM market on a full-stack Laravel + Docker and WordPress codebase.',
    stack: ['WordPress', 'Google Analytics', 'Apache'],
    tags: ['Campaign', 'Content', 'Frontend', 'CMS', 'Marketing'],
    highlights: [
      'Clinic search restored via Google Places API + ViaCEP',
      'Accredited-clinics network extended into the DPLATAM market',
    ],
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
      'Localized corporate site with product education, brand consistency, and reliable conversion tracking across 5 country sites.',
    problem:
      'Content was fragmented across pages, and conversion-event failures were distorting campaign data the marketing team relied on for media decisions.',
    solution:
      'Unified content blocks and navigation patterns across templates, and diagnosed/fixed conversion-tracking failures (Google Tag Manager/DataLayer) across the 5-site network, restoring reliable analytics.',
    stack: [
      'WordPress',
      'Timber',
      'Twig',
      'jQuery',
      'Google Analytics',
      'Apache',
    ],
    tags: ['Corporate', 'Localization', 'Frontend', 'CMS', 'Marketing'],
    highlights: [
      'Restored accurate conversion tracking across a 5-site network',
    ],
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
      'Introduced a clearer content architecture with featured sections and responsive UI patterns, and led the kickoff of a full rebuild replacing the heavy Cornerstone page builder with custom blocks — defining the new WordPress technical foundation.',
    stack: ['WordPress', 'Bootstrap', 'Apache', 'CornerStone Builder'],
    tags: ['Portal', 'Content', 'Frontend', 'CMS', 'Education'],
    highlights: ['Led rebuild kickoff, replacing Cornerstone with custom blocks'],
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
      'Reorganized navigation, standardized templates, and led the kickoff of a full rebuild replacing the heavy Cornerstone page builder with custom blocks — defining the new WordPress technical foundation.',
    stack: ['WordPress', 'Bootstrap', 'Apache', 'CornerStone Builder'],
    tags: ['Institutional', 'Events', 'Frontend', 'CMS', 'Content'],
    highlights: ['Led rebuild kickoff, replacing Cornerstone with custom blocks'],
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
      "Led the migration and performance/SEO turnaround of GLP's ~900-page, investor-facing corporate site.",
    problem:
      'The previous site ran on an old, discontinued PHP framework, with ~390 broken links, heavy render-blocking assets hurting mobile performance, and ~900 orphan pages — all damaging SEO for an investor-facing audience.',
    solution:
      'Led the migration to WordPress with a consistent component system, found the root cause of the broken links, optimized render-blocking assets, and cleaned up orphan pages — documenting an audit playbook for reuse on future projects.',
    stack: [
      'WordPress',
      'jQuery',
      'Bootstrap',
      'Google Analytics',
      'Cloudflare',
    ],
    tags: ['Corporate', 'Marketing', 'Frontend', 'CMS', 'Performance', 'SEO'],
    highlights: ['Documented audit playbook reused on later projects'],
    metrics: [
      '~390 broken links diagnosed and fixed',
      '70–75% cut in mobile render-blocking time',
      '~900 orphan pages removed',
    ],
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
      "Institutional site improvements plus a new module in Torrent Pharma's Laravel admin panel for product documentation.",
    problem:
      'Legacy website needed new features and bug fixes for improved user experience and mobile responsiveness; product documentation was also limited to a single file per medication.',
    solution:
      "Developed new features for product search and filters, optimized content layout and mobile responsiveness, and built a module in Torrent Pharma's Laravel admin panel enabling multiple PDF uploads per pharmaceutical product.",
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
    highlights: [
      'Laravel admin module for multi-file product documentation uploads',
    ],
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
      'Regional healthcare site with 5 country-level RD Station integrations and error-free lead capture.',
    problem:
      'Information was dense and not prioritized for quick access by patients and caregivers, and each country landing page sent leads to RD Station with inconsistent, error-prone field mapping (e.g., "estado" in Brazil vs. "provincia" in Argentina).',
    solution:
      'Redesigned content flow with prominent resources and improved mobile readability, and implemented 5 continuous integrations between the multi-country landing pages and RD Station — normalizing divergent fields into a single CRM record, including handling fields missing from specific forms.',
    stack: ['WordPress', 'jQuery', 'Google Analytics', 'Nginx', 'Bootstrap'],
    tags: ['Healthcare', 'Education', 'Frontend', 'CMS', 'Content', 'API Integration'],
    highlights: ['5-country RD Station integration with normalized CRM fields'],
    metrics: ['100% error-free lead capture across 5 countries'],
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
