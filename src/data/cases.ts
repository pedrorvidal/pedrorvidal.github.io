import caseAlaresCover from '@/assets/images/cases/case-alares.webp';
import caseUltherapyCover from '@/assets/images/cases/case-ultherapy.webp';
import caseConfidenceToBeMeCover from '@/assets/images/cases/case-confidencetobeme.webp';
import caseMerzAestheticsCover from '@/assets/images/cases/case-merzaesthetics.webp';
import caseTintaDeQualidadeCover from '@/assets/images/cases/case-tintadequalidade.webp';
import caseAbrafatiCover from '@/assets/images/cases/case-abrafati.webp';
import caseGlpCover from '@/assets/images/cases/case-glp.webp';
import caseCuidadosSemLimitesCover from '@/assets/images/cases/case-cuidadosemlimites.webp';
import caseTorrentCover from '@/assets/images/cases/case-torrent.webp';
import caseMedtronicDiabetesLatamCover from '@/assets/images/cases/case-medtronicdiabeteslatam.webp';
import caseAgenciaF2fCover from '@/assets/images/cases/case-agenciaf2f.webp';
import caseChegolaConsorcioCover from '@/assets/images/cases/case-chegolaconsorcio.webp';
import caseMinervaFoodsCover from '@/assets/images/cases/case-minervafoods.webp';
import caseBpTrackerCover from '@/assets/images/cases/case-bp-tracker.webp';
import casePvBlocksSuiteCover from '@/assets/images/cases/case-pv-blocks-suite.webp';
import type { Lang } from '@/i18n/strings';

export interface CaseLink {
  label: string;
  url: string;
}

/** Translatable text fields; `pt` overrides any of them for Portuguese. */
interface CaseText {
  title: string;
  period: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  tags: string[];
  highlights: string[];
  metrics?: string[];
}

export interface Case extends CaseText {
  id: string;
  clientOrProject: string;
  /** client = work for a company; personal = my own open-source project. */
  kind: 'client' | 'personal';
  /** Featured cases are shown first, as larger "boss stage" cards. */
  featured?: boolean;
  /** Hidden until the Konami code is entered. */
  secret?: boolean;
  /** Optional: cards without a cover get a generated pixel panel. */
  coverImage?: string;
  stack: string[];
  links?: CaseLink[];
  pt?: Partial<CaseText>;
}

export function localizeCase(c: Case, lang: Lang): Case {
  return lang === 'pt' && c.pt ? { ...c, ...c.pt } : c;
}

export const cases: Case[] = [
  {
    id: 'glp',
    kind: 'client',
    featured: true,
    title: 'GLP Brazil Website',
    clientOrProject: 'GLP',
    period: '2025',
    role: 'Senior WordPress Developer',
    coverImage: caseGlpCover,
    summary:
      "Led the migration and performance/SEO turnaround of GLP's ~900-page, investor-facing corporate site.",
    problem:
      'The previous site ran on an old, discontinued PHP framework, with ~390 broken links, heavy render-blocking assets hurting mobile performance, and ~900 orphan pages — all damaging SEO for an investor-facing audience.',
    solution:
      'Led the migration to WordPress with a consistent component system, found the root cause of the broken links, optimized render-blocking assets, and cleaned up orphan pages — documenting an audit playbook for reuse on future projects.',
    stack: ['WordPress', 'jQuery', 'Bootstrap', 'Google Analytics', 'Cloudflare'],
    tags: ['Migration', 'Performance', 'SEO', 'Corporate'],
    highlights: ['Documented audit playbook reused on later projects'],
    metrics: [
      '70–75% cut in mobile render-blocking time',
      '~390 broken links diagnosed and fixed',
      '~900 orphan pages removed',
    ],
    links: [{ label: 'Live site', url: 'https://glp.com.br/' }],
    pt: {
      title: 'Site GLP Brasil',
      role: 'Desenvolvedor WordPress Sênior',
      summary:
        'Liderei a migração e a virada de performance e SEO do site corporativo da GLP, com ~900 páginas voltadas a investidores.',
      problem:
        'O site anterior rodava em um framework PHP antigo e descontinuado, com ~390 links quebrados, assets bloqueando a renderização no mobile e ~900 páginas órfãs, tudo prejudicando o SEO para um público de investidores.',
      solution:
        'Liderei a migração para WordPress com um sistema de componentes consistente, encontrei a causa raiz dos links quebrados, otimizei os assets que bloqueavam a renderização e limpei as páginas órfãs, documentando um playbook de auditoria reutilizável em projetos futuros.',
      tags: ['Migração', 'Performance', 'SEO', 'Corporativo'],
      highlights: ['Playbook de auditoria documentado e reutilizado em projetos seguintes'],
      metrics: [
        '70–75% menos tempo de bloqueio de renderização no mobile',
        '~390 links quebrados diagnosticados e corrigidos',
        '~900 páginas órfãs removidas',
      ],
    },
  },
  {
    id: 'ultherapy',
    kind: 'client',
    featured: true,
    title: 'Ultherapy & Merz LATAM Network',
    clientOrProject: 'Ultherapy',
    period: '2025',
    role: 'Technical Lead',
    coverImage: caseUltherapyCover,
    summary:
      'Marketing site refresh and incident response across a 5-site network, with a standardized AI-assisted routine to keep WordPress secure and up to date.',
    problem:
      'New features and treatments were not effectively highlighted, and a possible malware incident hit the entire 5-site Ultherapy network with no standardized update process in place.',
    solution:
      'Delivered new features, bug fixes, and layout/mobile improvements; led incident response and remediation, then standardized an AI-assisted routine (Claude Code) for updating WordPress core and dependencies via Composer across 10 repositories (2 pharmaceutical brands × 5 Latin American markets).',
    stack: ['WordPress', 'Bedrock', 'Composer', 'Timber', 'Twig', 'Claude Code', 'Apache'],
    tags: ['Security', 'Automation', 'Multi-site', 'LATAM'],
    highlights: [
      'Led remediation of a possible-malware incident across a 5-site network',
      'Standardized AI-assisted WordPress/Composer update routine across 10 repositories',
    ],
    metrics: ['Update cycle cut from 1 week to 1 day', '10 repositories, 5 markets'],
    links: [{ label: 'Live site', url: 'https://ultherapy.com/' }],
    pt: {
      title: 'Rede Ultherapy & Merz LATAM',
      role: 'Líder Técnico',
      summary:
        'Atualização do site de marketing e resposta a incidente em uma rede de 5 sites, com uma rotina padronizada e assistida por IA para manter o WordPress seguro e atualizado.',
      problem:
        'Novos recursos e tratamentos não tinham destaque, e um possível incidente de malware atingiu toda a rede de 5 sites da Ultherapy, sem nenhum processo padronizado de atualização.',
      solution:
        'Entreguei novos recursos, correções e melhorias de layout e mobile; liderei a resposta e a remediação do incidente e padronizei uma rotina assistida por IA (Claude Code) para atualizar o core do WordPress e as dependências via Composer em 10 repositórios (2 marcas farmacêuticas × 5 mercados da América Latina).',
      tags: ['Segurança', 'Automação', 'Multi-site', 'LATAM'],
      highlights: [
        'Liderei a remediação de um possível malware em uma rede de 5 sites',
        'Padronizei a rotina de atualização WordPress/Composer assistida por IA em 10 repositórios',
      ],
      metrics: ['Ciclo de atualização de 1 semana para 1 dia', '10 repositórios, 5 mercados'],
    },
  },
  {
    id: 'minerva-portal',
    kind: 'client',
    featured: true,
    title: 'Minerva Foods Corporate Portal',
    clientOrProject: 'Minerva Foods (via DEXA)',
    period: '2022 – 2023',
    role: 'WordPress Developer',
    coverImage: caseMinervaFoodsCover,
    summary:
      'Full rebuild of the trilingual corporate portal of one of South America’s largest beef exporters, moving it off the Divi page builder onto a custom theme with 20+ custom ACF Pro blocks.',
    problem:
      'The portal was built on the Divi page builder: heavy markup and assets, layouts that drifted from the brand on every edit, and content spread across English, Spanish and Portuguese that was hard for the team to maintain consistently.',
    solution:
      'As part of the DEXA team, rebuilt the whole site on a custom WordPress theme, replacing Divi with a library of 20+ custom blocks built with ACF Pro. Editors compose pages from purpose-built, on-brand components (hero sliders, news, products, sustainability and investor content) instead of free-form builder layouts, in all three languages.',
    stack: ['WordPress', 'PHP', 'ACF Pro', 'MySQL', 'Jenkins', 'GitHub Actions'],
    tags: ['Rebuild', 'Custom theme', 'Custom blocks', 'Corporate', 'Agribusiness'],
    highlights: [
      'Divi page builder replaced by a custom theme',
      'Library of 20+ custom ACF Pro blocks for on-brand page building',
      'Trilingual site (EN / ES / PT)',
    ],
    links: [{ label: 'Live site', url: 'https://minervafoods.com/' }],
    pt: {
      title: 'Portal Corporativo Minerva Foods',
      role: 'Desenvolvedor WordPress',
      summary:
        'Reconstrução completa do portal corporativo trilíngue de uma das maiores exportadoras de carne bovina da América do Sul, saindo do page builder Divi para um tema próprio com mais de 20 blocos ACF Pro sob medida.',
      problem:
        'O portal era feito no page builder Divi: markup e assets pesados, layouts que fugiam da marca a cada edição e conteúdo em inglês, espanhol e português difícil de manter com consistência.',
      solution:
        'Com o time da DEXA, reconstruí o site inteiro em um tema WordPress próprio, trocando o Divi por uma biblioteca de mais de 20 blocos sob medida feitos com ACF Pro. Os editores montam as páginas com componentes pensados para a marca (sliders de destaque, notícias, produtos, sustentabilidade e conteúdo para investidores) em vez de layouts livres de builder, nos três idiomas.',
      tags: ['Reconstrução', 'Tema próprio', 'Blocos sob medida', 'Institucional', 'Agronegócio'],
      highlights: [
        'Page builder Divi substituído por tema próprio',
        'Biblioteca de mais de 20 blocos ACF Pro sob medida, fiéis à marca',
        'Site trilíngue (EN / ES / PT)',
      ],
    },
  },
  {
    id: 'pv-blocks-suite',
    kind: 'personal',
    featured: true,
    title: 'PV Blocks Suite — Native Gutenberg Blocks',
    clientOrProject: 'Open source',
    period: 'Sep 2026',
    role: 'WordPress Plugin Developer',
    coverImage: casePvBlocksSuiteCover,
    summary:
      'A WordPress plugin bundling 12 production-ready, fully native Gutenberg blocks — server-rendered, accessible, translatable and covered by PHP and JS tests.',
    problem:
      'Client sites often rely on heavy page builders or a patchwork of third-party block plugins to get common sections like CTAs, accordions, tabs or pricing tables — adding bloat, inconsistent markup, accessibility gaps and dependency risk.',
    solution:
      'Built a single lightweight plugin on WordPress’ native block-editor APIs only: every block is a dynamic block rendered in strictly-typed PHP 8.2, with a React + TypeScript editor UI and auto-registration from block.json. Blocks include Container, CTA, Accordion, Tabs, Pricing Table, Card Grid, Alert Box, Timeline, Before/After, Testimonials, Stats Counter and Team — using semantic HTML, WAI-ARIA patterns, reduced-motion support and the Interactivity API for front-end behavior that degrades gracefully without JavaScript. Shipped as v1.0.0 with a pt_BR translation and a pre-built release zip.',
    stack: [
      'WordPress',
      'Gutenberg',
      'PHP 8.2',
      'React',
      'TypeScript',
      'SCSS',
      'Interactivity API',
      'PHPUnit',
      'Jest',
      'PHPStan',
      'Docker',
    ],
    tags: ['WordPress plugin', 'Gutenberg', 'Accessibility', 'i18n'],
    highlights: [
      '12 native blocks (20 incl. child blocks), no page-builder dependencies',
      'Server-side rendering in strictly-typed PHP 8.2 with block.json auto-discovery',
      'Accessible by design: native <details>, ARIA tabs and slider, semantic markup, contrast warnings',
      'Interactive blocks built on the WordPress Interactivity API with no-JS fallbacks',
      'Quality gate: PHPStan, WPCS, PHPUnit (wp-env), Jest + Testing Library and TypeScript checks',
    ],
    metrics: [
      '~300 automated tests (PHPUnit + Jest)',
      'Every block has render and editor tests',
      'English + pt_BR out of the box',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/pedrorvidal/pv-blocks-suite' },
      { label: 'Release v1.0.0', url: 'https://github.com/pedrorvidal/pv-blocks-suite/releases/latest' },
    ],
    pt: {
      title: 'PV Blocks Suite — Blocos Gutenberg nativos',
      period: 'Set 2026',
      role: 'Desenvolvedor de Plugins WordPress',
      summary:
        'Plugin WordPress com 12 blocos Gutenberg 100% nativos e prontos para produção: renderizados no servidor, acessíveis, traduzíveis e cobertos por testes em PHP e JS.',
      problem:
        'Sites de clientes costumam depender de page builders pesados ou de uma colcha de plugins de blocos de terceiros para seções comuns como CTAs, accordions, abas ou tabelas de preço, o que traz peso, markup inconsistente, falhas de acessibilidade e risco de dependência.',
      solution:
        'Criei um único plugin leve usando apenas as APIs nativas do editor de blocos: cada bloco é dinâmico, renderizado em PHP 8.2 com tipagem estrita, com UI de editor em React + TypeScript e registro automático via block.json. Os blocos incluem Container, CTA, Accordion, Tabs, Pricing Table, Card Grid, Alert Box, Timeline, Before/After, Testimonials, Stats Counter e Team, com HTML semântico, padrões WAI-ARIA, suporte a reduced-motion e a Interactivity API para comportamento no front que degrada bem sem JavaScript. Lançado como v1.0.0 com tradução pt_BR e zip de release pronto.',
      tags: ['Plugin WordPress', 'Gutenberg', 'Acessibilidade', 'i18n'],
      highlights: [
        '12 blocos nativos (20 com os blocos filhos), sem depender de page builder',
        'Renderização no servidor em PHP 8.2 tipado, com auto-descoberta via block.json',
        'Acessível desde o início: <details> nativo, abas e slider com ARIA, markup semântico, alertas de contraste',
        'Blocos interativos com a Interactivity API do WordPress e fallback sem JS',
        'Gate de qualidade: PHPStan, WPCS, PHPUnit (wp-env), Jest + Testing Library e checagem de TypeScript',
      ],
      metrics: [
        '~300 testes automatizados (PHPUnit + Jest)',
        'Todo bloco tem testes de render e de editor',
        'Inglês + pt_BR de fábrica',
      ],
    },
  },
  {
    id: 'bp-tracker',
    kind: 'personal',
    title: 'BP Tracker — Headless WordPress + React',
    clientOrProject: 'Open source',
    period: 'Sep 2026',
    role: 'Full-Stack Developer',
    coverImage: caseBpTrackerCover,
    summary:
      'Blood pressure tracking app with a headless WordPress backend (custom REST API + JWT auth) and a mobile-first React + TypeScript frontend with trend charts.',
    problem:
      'Logging blood pressure twice a day is only useful if the history is easy to read — and health data demands real authentication, strict per-user data isolation, and protection against abuse, none of which WordPress offers out of the box for a decoupled SPA.',
    solution:
      'Built a WordPress plugin that exposes a versioned REST API (bp-tracker/v1) over a custom post type with its own capabilities, secured by HS256 JWT access tokens kept in memory and rotating refresh tokens in an HttpOnly, SameSite=Strict cookie — with reuse detection that revokes the whole session, per-IP and per-account rate limiting, an exact-origin CORS policy, and an admin approval flow for new sign-ups. On top of it, a Vite + React 19 + TypeScript SPA (TanStack Query, Tailwind CSS v4, Recharts) with a fast, validated entry form and a history dashboard: period presets and custom ranges, averages compared against the previous period, ACC/AHA category distribution, a zoomable systolic/diastolic chart with auto-aggregation, and dark mode.',
    stack: [
      'WordPress',
      'PHP 8.2',
      'REST API',
      'JWT',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'Recharts',
      'PHPUnit',
      'Vitest',
      'GitHub Actions',
      'Docker',
    ],
    tags: ['Headless CMS', 'Security', 'Data viz', 'CI/CD'],
    highlights: [
      'Custom REST API with JWT access tokens and rotating, reuse-detecting refresh tokens',
      'Rate limiting, strict CORS, CSRF header and role-based approval flow for sign-ups',
      'Mobile-first dashboard with period comparison, BP categories and a zoomable trend chart',
      'Accessible forms (aria-describedby, focus management, live status) and full dark mode',
      'CI with lint, PHPStan level 6, type-check, tests, dependency audit and Dependabot',
    ],
    metrics: [
      '320+ automated tests (PHPUnit + Vitest)',
      'PHPStan level 6 · strict TypeScript',
      'Zero-warning ESLint gate in CI',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/pedrorvidal/bp-tracker' }],
    pt: {
      title: 'BP Tracker — WordPress headless + React',
      period: 'Set 2026',
      role: 'Desenvolvedor Full-Stack',
      summary:
        'App de acompanhamento de pressão arterial com back-end WordPress headless (REST API própria + autenticação JWT) e front-end React + TypeScript mobile-first com gráficos de tendência.',
      problem:
        'Registrar a pressão duas vezes por dia só é útil se o histórico for fácil de ler, e dados de saúde exigem autenticação de verdade, isolamento estrito por usuário e proteção contra abuso, nada disso pronto no WordPress para uma SPA desacoplada.',
      solution:
        'Criei um plugin WordPress que expõe uma REST API versionada (bp-tracker/v1) sobre um custom post type com capabilities próprias, protegida por access tokens JWT HS256 em memória e refresh tokens rotativos em cookie HttpOnly e SameSite=Strict, com detecção de reuso que revoga a sessão inteira, rate limiting por IP e por conta, CORS de origem exata e fluxo de aprovação de cadastros pelo admin. Por cima, uma SPA Vite + React 19 + TypeScript (TanStack Query, Tailwind CSS v4, Recharts) com formulário rápido e validado e um painel de histórico: períodos pré-definidos e personalizados, médias comparadas ao período anterior, distribuição por categoria ACC/AHA, gráfico sistólica/diastólica com zoom e agregação automática, e modo escuro.',
      tags: ['CMS headless', 'Segurança', 'Visualização de dados', 'CI/CD'],
      highlights: [
        'REST API própria com access tokens JWT e refresh tokens rotativos com detecção de reuso',
        'Rate limiting, CORS estrito, header CSRF e aprovação de cadastros por papel',
        'Painel mobile-first com comparação de períodos, categorias de pressão e gráfico com zoom',
        'Formulários acessíveis (aria-describedby, gestão de foco, status ao vivo) e modo escuro completo',
        'CI com lint, PHPStan nível 6, type-check, testes, auditoria de dependências e Dependabot',
      ],
      metrics: [
        '320+ testes automatizados (PHPUnit + Vitest)',
        'PHPStan nível 6 · TypeScript estrito',
        'ESLint sem warnings como gate no CI',
      ],
    },
  },
  {
    id: 'medtronic',
    kind: 'client',
    title: 'Medtronic Diabetes LATAM',
    clientOrProject: 'Medtronic Diabetes LATAM',
    period: '2025',
    role: 'Senior WordPress Developer',
    coverImage: caseMedtronicDiabetesLatamCover,
    summary:
      'Regional healthcare site with 5 country-level RD Station integrations and error-free lead capture.',
    problem:
      'Information was dense and not prioritized for quick access by patients and caregivers, and each country landing page sent leads to RD Station with inconsistent, error-prone field mapping (e.g., "estado" in Brazil vs. "provincia" in Argentina).',
    solution:
      'Redesigned content flow with prominent resources and improved mobile readability, and implemented 5 continuous integrations between the multi-country landing pages and RD Station — normalizing divergent fields into a single CRM record, including handling fields missing from specific forms.',
    stack: ['WordPress', 'RD Station API', 'PHP', 'jQuery', 'Bootstrap', 'Nginx'],
    tags: ['Healthcare', 'CRM integration', 'Multi-country'],
    highlights: ['5-country RD Station integration with normalized CRM fields'],
    metrics: ['100% error-free lead capture across 5 countries'],
    links: [{ label: 'Live site', url: 'https://medtronicdiabeteslatam.com/' }],
    pt: {
      role: 'Desenvolvedor WordPress Sênior',
      summary:
        'Site regional de saúde com 5 integrações com o RD Station, uma por país, e captura de leads sem erros.',
      problem:
        'A informação era densa e sem prioridade para acesso rápido de pacientes e cuidadores, e cada landing page de país enviava leads ao RD Station com mapeamento de campos inconsistente e sujeito a erros (por exemplo, "estado" no Brasil e "provincia" na Argentina).',
      solution:
        'Redesenhei o fluxo de conteúdo com recursos em destaque e melhor leitura no mobile, e implementei 5 integrações contínuas entre as landing pages dos países e o RD Station, normalizando campos divergentes em um único registro no CRM, inclusive tratando campos ausentes em formulários específicos.',
      tags: ['Saúde', 'Integração CRM', 'Multi-país'],
      highlights: ['Integração RD Station em 5 países com campos de CRM normalizados'],
      metrics: ['100% de captura de leads sem erros em 5 países'],
    },
  },
  {
    id: 'merz',
    kind: 'client',
    title: 'Merz Aesthetics LATAM',
    clientOrProject: 'Merz Aesthetics',
    period: '2025',
    role: 'Senior WordPress Developer',
    coverImage: caseMerzAestheticsCover,
    summary:
      'Localized corporate sites for Brazil, Argentina, Colombia, Mexico and a regional LATAM site, with reliable conversion tracking and Core Web Vitals work across the network.',
    problem:
      'Content was fragmented across pages, and conversion-event failures were distorting campaign data the marketing team relied on for media decisions.',
    solution:
      'Unified content blocks and navigation patterns across templates, diagnosed and fixed conversion-tracking failures (Google Tag Manager/DataLayer) across the 5-site network, and improved Core Web Vitals (WebP/AVIF, lazy loading, critical CSS, Cloudflare) and back-end performance (MySQL query tuning, Redis caching).',
    stack: ['WordPress', 'Timber', 'Twig', 'Google Tag Manager', 'Cloudflare', 'Redis'],
    tags: ['Localization', 'Analytics', 'Core Web Vitals', 'Multi-site'],
    highlights: ['Restored accurate conversion tracking across a 5-site network'],
    metrics: [],
    links: [{ label: 'Live site', url: 'https://merzaesthetics.com.br/' }],
    pt: {
      role: 'Desenvolvedor WordPress Sênior',
      summary:
        'Sites corporativos localizados para Brasil, Argentina, Colômbia, México e um site regional LATAM, com rastreamento de conversões confiável e trabalho de Core Web Vitals na rede.',
      problem:
        'O conteúdo estava fragmentado entre páginas, e falhas nos eventos de conversão distorciam os dados de campanha que o marketing usava para decidir mídia.',
      solution:
        'Unifiquei blocos de conteúdo e padrões de navegação entre templates, diagnostiquei e corrigi falhas de rastreamento de conversão (Google Tag Manager/DataLayer) na rede de 5 sites, e melhorei Core Web Vitals (WebP/AVIF, lazy loading, CSS crítico, Cloudflare) e a performance do back-end (otimização de queries MySQL, cache com Redis).',
      tags: ['Localização', 'Analytics', 'Core Web Vitals', 'Multi-site'],
      highlights: ['Rastreamento de conversões restaurado em uma rede de 5 sites'],
    },
  },
  {
    id: 'confidence',
    kind: 'client',
    title: 'Confidence To Be Me Campaign Site',
    clientOrProject: 'Confidence To Be Me',
    period: '2025',
    role: 'Full-Stack Developer',
    coverImage: caseConfidenceToBeMeCover,
    summary:
      "Restored the platform's clinic-search feature and extended the accredited-clinics network into a new market.",
    problem:
      'A fragile in-house geographic search integration was breaking, preventing patients from finding accredited clinics; messaging also lacked a clear hierarchy.',
    solution:
      'Replaced the in-house integration with the Google Places API + ViaCEP to restore reliable clinic search, and delivered a structured campaign layout with stronger messaging hierarchy and accessible sections. Later extended the accredited-clinics network into the DPLATAM market on a full-stack Laravel + Docker and WordPress codebase.',
    stack: ['WordPress', 'Laravel', 'Google Places API', 'ViaCEP', 'Docker'],
    tags: ['Campaign', 'API integration', 'Geo search'],
    highlights: [
      'Clinic search restored via Google Places API + ViaCEP',
      'Accredited-clinics network extended into the DPLATAM market',
    ],
    metrics: [],
    links: [{ label: 'Live site', url: 'https://confidencetobeme.com/' }],
    pt: {
      title: 'Site da campanha Confidence To Be Me',
      role: 'Desenvolvedor Full-Stack',
      summary:
        'Restaurei a busca de clínicas da plataforma e levei a rede de clínicas credenciadas para um novo mercado.',
      problem:
        'Uma integração caseira e frágil de busca geográfica vivia quebrando, impedindo pacientes de encontrar clínicas credenciadas; a mensagem também não tinha hierarquia clara.',
      solution:
        'Troquei a integração caseira pela Google Places API + ViaCEP para devolver uma busca confiável, e entreguei um layout de campanha estruturado, com hierarquia de mensagem mais forte e seções acessíveis. Depois levei a rede de clínicas credenciadas para o mercado DPLATAM, em uma base full-stack Laravel + Docker e WordPress.',
      tags: ['Campanha', 'Integração de API', 'Busca geográfica'],
      highlights: [
        'Busca de clínicas restaurada com Google Places API + ViaCEP',
        'Rede de clínicas credenciadas expandida para o mercado DPLATAM',
      ],
    },
  },
  {
    id: 'torrent',
    kind: 'client',
    title: 'Torrent Pharma Website & Admin',
    clientOrProject: 'Torrent',
    period: '2025',
    role: 'Full-Stack Developer',
    coverImage: caseTorrentCover,
    summary:
      "Institutional site improvements plus a new module in Torrent Pharma's Laravel admin panel for product documentation.",
    problem:
      'Legacy website needed new features and bug fixes for improved user experience and mobile responsiveness; product documentation was also limited to a single file per medication.',
    solution:
      "Developed new features for product search and filters, optimized content layout and mobile responsiveness, and built a module in Torrent Pharma's Laravel admin panel enabling multiple PDF uploads per pharmaceutical product.",
    stack: ['Laravel', 'PHP', 'CoasterCMS', 'Nginx', 'Google Analytics'],
    tags: ['Laravel', 'Admin panel', 'Pharma'],
    highlights: ['Laravel admin module for multi-file product documentation uploads'],
    metrics: [],
    links: [{ label: 'Live site', url: 'https://www.torrent.com.br/' }],
    pt: {
      title: 'Site e admin da Torrent Pharma',
      role: 'Desenvolvedor Full-Stack',
      summary:
        'Melhorias no site institucional e um novo módulo no painel administrativo Laravel da Torrent Pharma para a documentação de produtos.',
      problem:
        'O site legado precisava de novos recursos e correções de UX e responsividade; a documentação de produtos também era limitada a um único arquivo por medicamento.',
      solution:
        'Desenvolvi busca e filtros de produtos, otimizei o layout e a responsividade, e criei um módulo no painel Laravel da Torrent Pharma que permite enviar vários PDFs por produto farmacêutico.',
      tags: ['Laravel', 'Painel admin', 'Farmacêutica'],
      highlights: ['Módulo Laravel para upload de vários documentos por produto'],
    },
  },
  {
    id: 'alares-ecommerce',
    kind: 'client',
    title: 'Alares Internet E-commerce',
    clientOrProject: 'Alares Internet',
    period: 'Jun 2023 – Dec 2023',
    role: 'Lead Full-Stack Developer',
    coverImage: caseAlaresCover,
    summary:
      "Built Alares' first e-commerce store, capturing every purchase attempt as a lead through an RD Station integration.",
    problem:
      'The client depended solely on call-center sales, and purchase attempts that failed to complete — including sales lost to lack of signal coverage in the region — were discarded instead of being followed up on.',
    solution:
      "Built a modern e-commerce site with a mobile-first design and streamlined checkout, integrated with RD Station so every purchase attempt is captured as a lead — including incomplete ones — turning them into future sales opportunities and expanding the client's digital sales channel.",
    stack: ['WordPress', 'PHP', 'JavaScript', 'MariaDB', 'RD Station API', 'Docker'],
    tags: ['E-commerce', 'CRM integration', 'Lead capture', 'Core Web Vitals'],
    highlights: [
      "Alares' first e-commerce store, built from the ground up",
      'RD Station integration captures failed/incomplete purchases as leads',
    ],
    metrics: [],
    links: [{ label: 'Live site', url: 'https://alaresinternet.com.br' }],
    pt: {
      title: 'E-commerce Alares Internet',
      period: 'Jun 2023 – Dez 2023',
      role: 'Desenvolvedor Full-Stack Líder',
      summary:
        'Criei a primeira loja online da Alares, capturando cada tentativa de compra como lead via integração com o RD Station.',
      problem:
        'O cliente dependia só de vendas por call center, e tentativas de compra que não terminavam, inclusive vendas perdidas por falta de cobertura de sinal na região, eram descartadas em vez de acompanhadas.',
      solution:
        'Construí um e-commerce moderno, mobile-first e com checkout enxuto, integrado ao RD Station para que toda tentativa de compra vire lead, inclusive as incompletas, transformando-as em oportunidades de venda e ampliando o canal digital do cliente.',
      tags: ['E-commerce', 'Integração CRM', 'Captura de leads'],
      highlights: [
        'Primeira loja online da Alares, construída do zero',
        'Integração com RD Station captura compras incompletas como leads',
      ],
    },
  },
  {
    id: 'alares-portal',
    kind: 'client',
    title: 'Alares Internet Portal',
    clientOrProject: 'Alares Internet',
    period: 'Jun 2024 – Dec 2024',
    role: 'Senior WordPress Developer',
    coverImage: caseAlaresCover,
    summary:
      'New portal replacing a legacy system, with a modern design and better experience across all devices.',
    problem:
      'The existing platform depended on a legacy system, resulting in publication issues and poor customer satisfaction.',
    solution:
      'Built a modern website with a mobile-first design, new content management and personalized content recommendations, integrated with the existing CRM and inventory systems through an external API.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    tags: ['Portal', 'Next.js', 'API integration'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live site', url: 'https://alaresinternet.com.br' }],
    pt: {
      title: 'Portal Alares Internet',
      period: 'Jun 2024 – Dez 2024',
      role: 'Desenvolvedor WordPress Sênior',
      summary:
        'Novo portal substituindo um sistema legado, com design moderno e melhor experiência em todos os dispositivos.',
      problem:
        'A plataforma dependia de um sistema legado, o que gerava problemas de publicação e baixa satisfação dos clientes.',
      solution:
        'Construí um site moderno e mobile-first, com nova gestão de conteúdo e recomendações personalizadas, integrado aos sistemas de CRM e estoque existentes por meio de uma API externa.',
      tags: ['Portal', 'Next.js', 'Integração de API'],
    },
  },
  {
    id: 'tinta-de-qualidade',
    kind: 'client',
    title: 'Tinta de Qualidade Portal',
    clientOrProject: 'Tinta de Qualidade',
    period: '2025',
    role: 'Senior WordPress Developer',
    coverImage: caseTintaDeQualidadeCover,
    summary:
      'Institutional portal about paint quality and best practices, with clearer navigation for different audiences.',
    problem: 'Users struggled to find practical guidance and relevant sections quickly on the legacy site.',
    solution:
      'Rebuilt the site on custom Gutenberg blocks (React + PHP), replacing the heavy Cornerstone page builder, with a clearer content architecture and featured sections; then tuned Core Web Vitals (WebP/AVIF, lazy loading, critical CSS, JS/CSS deferral) and database performance.',
    stack: ['WordPress', 'Gutenberg', 'React', 'PHP', 'Cloudflare'],
    tags: ['Portal', 'Content', 'Rebuild'],
    highlights: ['Cornerstone page builder replaced by custom Gutenberg blocks (React + PHP)'],
    metrics: [],
    links: [{ label: 'Live site', url: 'https://tintadequalidade.com.br/' }],
    pt: {
      title: 'Portal Tinta de Qualidade',
      role: 'Desenvolvedor WordPress Sênior',
      summary:
        'Portal institucional sobre qualidade de tintas e boas práticas, com navegação mais clara para públicos diferentes.',
      problem: 'No site legado, os usuários tinham dificuldade para achar orientações práticas e seções relevantes.',
      solution:
        'Reconstruí o site com blocos Gutenberg sob medida (React + PHP), trocando o page builder Cornerstone, com uma arquitetura de conteúdo mais clara e seções em destaque; depois ajustei Core Web Vitals (WebP/AVIF, lazy loading, CSS crítico, adiamento de JS/CSS) e a performance do banco.',
      tags: ['Portal', 'Conteúdo', 'Reconstrução'],
      highlights: ['Page builder Cornerstone substituído por blocos Gutenberg sob medida (React + PHP)'],
    },
  },
  {
    id: 'abrafati',
    kind: 'client',
    title: 'Abrafati Institutional Website',
    clientOrProject: 'Abrafati',
    period: '2025',
    role: 'Senior WordPress Developer',
    coverImage: caseAbrafatiCover,
    summary: 'Institutional website with structured content, events visibility and better mobile navigation.',
    problem: 'Event and association content was difficult to discover and buried across inconsistent pages.',
    solution:
      'Reorganized navigation and rebuilt the site on custom Gutenberg blocks (React + PHP), replacing the heavy Cornerstone page builder, plus Core Web Vitals and MySQL performance work.',
    stack: ['WordPress', 'Gutenberg', 'React', 'PHP', 'Cloudflare'],
    tags: ['Institutional', 'Events', 'Rebuild'],
    highlights: ['Cornerstone page builder replaced by custom Gutenberg blocks (React + PHP)'],
    metrics: [],
    links: [{ label: 'Live site', url: 'https://abrafati.com.br/' }],
    pt: {
      title: 'Site institucional Abrafati',
      role: 'Desenvolvedor WordPress Sênior',
      summary: 'Site institucional com conteúdo estruturado, eventos em evidência e melhor navegação no mobile.',
      problem: 'Eventos e conteúdo da associação eram difíceis de encontrar, espalhados por páginas inconsistentes.',
      solution:
        'Reorganizei a navegação e reconstruí o site com blocos Gutenberg sob medida (React + PHP), trocando o page builder Cornerstone, além de trabalho de Core Web Vitals e performance de MySQL.',
      tags: ['Institucional', 'Eventos', 'Reconstrução'],
      highlights: ['Page builder Cornerstone substituído por blocos Gutenberg sob medida (React + PHP)'],
    },
  },
  {
    id: 'cuidados-sem-limites',
    kind: 'client',
    title: 'Cuidados Sem Limites Campaign',
    clientOrProject: 'Cuidados Sem Limites',
    period: '2025',
    role: 'Senior WordPress Developer',
    coverImage: caseCuidadosSemLimitesCover,
    summary: 'Awareness campaign site with accessible typography and mobile-first sections.',
    problem: 'Messaging lacked a cohesive structure and did not guide visitors through the story effectively.',
    solution: 'Crafted a narrative-driven layout, optimized for readability, and aligned CTAs to key actions.',
    stack: ['WordPress', 'jQuery', 'Bootstrap', 'Google Analytics'],
    tags: ['Campaign', 'Accessibility'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live site', url: 'https://cuidadosemlimites.com.br/' }],
    pt: {
      title: 'Campanha Cuidados Sem Limites',
      role: 'Desenvolvedor WordPress Sênior',
      summary: 'Site de campanha de conscientização com tipografia acessível e seções mobile-first.',
      problem: 'A mensagem não tinha uma estrutura coesa e não conduzia o visitante pela história.',
      solution: 'Montei um layout guiado pela narrativa, otimizado para leitura, com CTAs alinhados às ações principais.',
      tags: ['Campanha', 'Acessibilidade'],
    },
  },
  {
    id: 'agencia-f2f',
    kind: 'client',
    title: 'Agência F2F Website',
    clientOrProject: 'Agência F2F',
    period: '2025',
    role: 'Senior WordPress Developer',
    coverImage: caseAgenciaF2fCover,
    summary: 'Agency website showcasing services and work highlights, with a conversion-focused contact flow.',
    problem: 'The agency needed a redesign that made its services and results easier to scan.',
    solution: 'Rebuilt the page structure with focused service sections, clearer CTAs and cleaner typography.',
    stack: ['WordPress', 'jQuery', 'Bootstrap', 'Google Analytics'],
    tags: ['Agency', 'Redesign'],
    highlights: [],
    metrics: [],
    links: [{ label: 'Live site', url: 'https://agenciaf2f.com/' }],
    pt: {
      title: 'Site da Agência F2F',
      role: 'Desenvolvedor WordPress Sênior',
      summary: 'Site da agência com serviços e trabalhos em destaque, e um fluxo de contato focado em conversão.',
      problem: 'A agência precisava de um redesign que deixasse serviços e resultados mais fáceis de ler.',
      solution: 'Reconstruí a estrutura das páginas com seções de serviço focadas, CTAs mais claros e tipografia mais limpa.',
      tags: ['Agência', 'Redesign'],
    },
  },
  {
    id: 'chego-la',
    kind: 'client',
    title: 'Chego Lá Consórcio Website',
    clientOrProject: 'Chego Lá Consórcio',
    period: '2025',
    role: 'Senior WordPress Developer',
    coverImage: caseChegolaConsorcioCover,
    summary: 'Institutional website refresh with a clear services overview, strong CTAs and a mobile-friendly layout.',
    problem: 'The site needed a redesign, new features and bug fixes to improve experience and mobile responsiveness.',
    solution: 'Built the site on native Gutenberg blocks with no page builder, with a clear services overview and strong CTAs, and maintained its Salesforce lead integration.',
    stack: ['WordPress', 'Gutenberg', 'Salesforce', 'Cloudflare'],
    tags: ['Institutional', 'Gutenberg', 'CRM integration'],
    highlights: ['Native Gutenberg blocks, no page builder', 'Salesforce lead integration'],
    metrics: [],
    links: [{ label: 'Live site', url: 'https://chegolaconsorcio.com.br/' }],
    pt: {
      title: 'Site Chego Lá Consórcio',
      role: 'Desenvolvedor WordPress Sênior',
      summary: 'Renovação do site institucional com visão clara dos serviços, CTAs fortes e layout amigável no mobile.',
      problem: 'O site precisava de redesign, novos recursos e correções para melhorar a experiência e a responsividade.',
      solution: 'Construí o site com blocos Gutenberg nativos, sem page builder, com visão clara dos serviços e CTAs fortes, e mantive a integração de leads com o Salesforce.',
      tags: ['Institucional', 'Gutenberg', 'Integração CRM'],
      highlights: ['Blocos Gutenberg nativos, sem page builder', 'Integração de leads com Salesforce'],
    },
  },
  {
    id: 'minerva-pec',
    kind: 'client',
    title: 'MinervaFoods Carcass Efficiency Program',
    clientOrProject: 'MinervaFoods (via DEXA)',
    period: '2022 – 2023',
    role: 'WordPress Developer',
    summary:
      'Data-management module for MinervaFoods’ Carcass Efficiency Program (PEC), replacing manual Excel tracking with a custom WordPress plugin.',
    problem:
      'Program results were tracked by hand in Excel spreadsheets, which made logging slow, error-prone and hard to filter or audit.',
    solution:
      'As the sole developer on the module, built a custom WordPress plugin integrated with an external API that automates result logging and filtering. Built on the same account as the corporate portal rebuild.',
    stack: ['WordPress', 'PHP', 'MySQL', 'ACF Pro', 'REST API', 'Jenkins', 'GitHub Actions'],
    tags: ['Custom plugin', 'API integration', 'Agribusiness'],
    highlights: [
      'Manual Excel tracking replaced by automated logging and filtering',
    ],
    metrics: [],
    pt: {
      title: 'Programa de Eficiência de Carcaça MinervaFoods',
      role: 'Desenvolvedor WordPress',
      summary:
        'Módulo de gestão de dados do Programa de Eficiência de Carcaça (PEC) da MinervaFoods, trocando o controle manual em Excel por um plugin WordPress sob medida.',
      problem:
        'Os resultados do programa eram registrados à mão em planilhas Excel, o que deixava o lançamento lento, sujeito a erro e difícil de filtrar ou auditar.',
      solution:
        'Como único desenvolvedor do módulo, criei um plugin WordPress integrado a uma API externa que automatiza o registro e a filtragem dos resultados. Feito na mesma conta da reconstrução do portal corporativo.',
      tags: ['Plugin sob medida', 'Integração de API', 'Agronegócio'],
      highlights: [
        'Controle manual em Excel substituído por registro e filtragem automáticos',
      ],
    },
  },
  {
    id: 'trajano-silva',
    kind: 'client',
    title: 'Trajano Silva Auction Platform Migration',
    clientOrProject: 'Trajano Silva (via Rage)',
    period: '2011 – 2015',
    role: 'Sole Developer',
    summary:
      'Complete migration of a high-volume financial auction system from ASP + SQL Server to CodeIgniter + MySQL, with zero data loss and no downtime.',
    problem:
      'A business-critical auction platform with high financial volume ran on a legacy ASP + SQL Server stack full of stored procedures, and it could not stop operating during a migration.',
    solution:
      'As the sole developer, rebuilt the auction area in CodeIgniter + MySQL with a WordPress content portal, and migrated the entire database (records, transaction history and users) without losing data or interrupting operations. Stayed responsible for the platform’s maintenance afterwards.',
    stack: ['CodeIgniter', 'PHP', 'MySQL', 'WordPress', 'SQL Server', 'ASP'],
    tags: ['Legacy migration', 'Finance', 'Data migration'],
    highlights: ['Stored-procedure logic ported to a PHP application', 'Ongoing maintenance after go-live'],
    metrics: ['Zero data loss', 'No business downtime'],
    pt: {
      title: 'Migração da plataforma de leilões Trajano Silva',
      role: 'Único desenvolvedor',
      summary:
        'Migração completa de um sistema de leilões de alto volume financeiro de ASP + SQL Server para CodeIgniter + MySQL, sem perda de dados e sem parar a operação.',
      problem:
        'Uma plataforma de leilões crítica e de alto volume financeiro rodava em ASP + SQL Server legado, cheia de stored procedures, e não podia parar durante a migração.',
      solution:
        'Como único desenvolvedor, reconstruí a área de leilões em CodeIgniter + MySQL com um portal de conteúdo em WordPress, e migrei todo o banco (registros, histórico de transações e usuários) sem perder dados nem interromper a operação. Segui responsável pela manutenção da plataforma depois disso.',
      tags: ['Migração de legado', 'Financeiro', 'Migração de dados'],
      highlights: ['Lógica de stored procedures portada para uma aplicação PHP', 'Manutenção contínua após a virada'],
      metrics: ['Zero perda de dados', 'Sem parada na operação'],
    },
  },
  {
    id: 'vidal-slider-block',
    kind: 'personal',
    title: 'Vidal Slider Block',
    clientOrProject: 'Open source',
    period: 'Aug 2026',
    role: 'WordPress Plugin Developer',
    summary:
      'A native, dynamic Gutenberg image-slider block: no shortcodes, no slider library, server-rendered and tested.',
    problem:
      'Image sliders are one of the most common reasons sites install heavy third-party plugins, with shortcodes and bundled libraries that slow pages down.',
    solution:
      'Built a single dynamic block rendered server-side in PHP, with images picked from the Media Library, optional per-slide links (external ones open in a new tab), boxed or full-width layout, autoplay that pauses on hover, configurable interval, dots and inline-SVG arrows, and separate desktop/mobile minimum heights.',
    stack: ['WordPress', 'Gutenberg', 'PHP', 'JavaScript', 'PHPUnit', 'Jest'],
    tags: ['WordPress plugin', 'Gutenberg', 'Performance'],
    highlights: [
      'Dynamic block: markup generated server-side on every render',
      'No external slider library; arrows are inline SVG',
      'Independent desktop/mobile heights in px, vh or em',
    ],
    metrics: ['PHP render tests + JS editor tests', 'v1.0.0, GPL-2.0'],
    links: [{ label: 'GitHub', url: 'https://github.com/pedrorvidal/vidal-slider-block' }],
    pt: {
      period: 'Ago 2026',
      role: 'Desenvolvedor de Plugins WordPress',
      summary:
        'Bloco Gutenberg nativo e dinâmico de slider de imagens: sem shortcode, sem biblioteca de slider, renderizado no servidor e testado.',
      problem:
        'Sliders de imagem estão entre os motivos mais comuns para instalar plugins pesados de terceiros, com shortcodes e bibliotecas embutidas que deixam as páginas lentas.',
      solution:
        'Criei um único bloco dinâmico renderizado em PHP, com imagens escolhidas na Biblioteca de Mídia, link opcional por slide (externos abrem em nova aba), layout boxed ou full width, autoplay que pausa no hover, intervalo configurável, dots e setas em SVG inline, e alturas mínimas separadas para desktop e mobile.',
      tags: ['Plugin WordPress', 'Gutenberg', 'Performance'],
      highlights: [
        'Bloco dinâmico: markup gerado no servidor a cada renderização',
        'Sem biblioteca externa de slider; setas em SVG inline',
        'Alturas independentes para desktop e mobile em px, vh ou em',
      ],
      metrics: ['Testes de render em PHP + testes de editor em JS', 'v1.0.0, GPL-2.0'],
    },
  },
  {
    id: 'pv-whatsapp-button',
    kind: 'personal',
    title: 'PV Simple WhatsApp Button',
    clientOrProject: 'Open source',
    period: 'Sep 2026',
    role: 'WordPress Plugin Developer',
    summary:
      'A lightweight WordPress plugin for a configurable floating WhatsApp button: no paid API, no tracking, zero runtime dependencies.',
    problem:
      'Most WhatsApp button plugins ship tracking, upsells or external API calls for what is really a single wa.me link.',
    solution:
      'Built a tiny plugin with a settings page (phone, pre-filled message, left/right position), a footer-rendered button with a subtle hover animation, and digits-only phone validation enforced on both the server (PHP) and the client (TypeScript as progressive enhancement).',
    stack: ['WordPress', 'PHP 8.1', 'TypeScript', 'PHPUnit', 'PHPStan', 'PHPCS'],
    tags: ['WordPress plugin', 'i18n', 'Privacy'],
    highlights: [
      'Strictly-typed PHP (strict_types) and typed TypeScript',
      'Validation on server and client',
      'Ships with a pt_BR translation',
    ],
    metrics: ['Zero runtime dependencies', 'Unit tests in PHP and TS'],
    links: [{ label: 'GitHub', url: 'https://github.com/pedrorvidal/pv-simple-whatsapp-button' }],
    pt: {
      period: 'Set 2026',
      role: 'Desenvolvedor de Plugins WordPress',
      summary:
        'Plugin WordPress leve para um botão flutuante de WhatsApp configurável: sem API paga, sem rastreamento, zero dependências em runtime.',
      problem:
        'A maioria dos plugins de botão de WhatsApp vem com rastreamento, upsell ou chamadas a APIs externas para algo que é, no fundo, um único link wa.me.',
      solution:
        'Criei um plugin enxuto com página de configurações (telefone, mensagem pré-preenchida, posição esquerda/direita), botão renderizado no rodapé com uma animação sutil no hover e validação de telefone só com dígitos, feita no servidor (PHP) e no cliente (TypeScript como melhoria progressiva).',
      tags: ['Plugin WordPress', 'i18n', 'Privacidade'],
      highlights: [
        'PHP com tipagem estrita (strict_types) e TypeScript tipado',
        'Validação no servidor e no cliente',
        'Já vem com tradução pt_BR',
      ],
      metrics: ['Zero dependências em runtime', 'Testes unitários em PHP e TS'],
    },
  },
  {
    id: 'secret-portfolio',
    kind: 'personal',
    secret: true,
    title: 'Stage ??: This Portfolio',
    clientOrProject: 'Open source',
    period: '2026',
    role: 'Player 1',
    summary: 'You found the secret stage! This site is an arcade-themed React + Vite SPA with a Konami code inside.',
    problem: 'Build a portfolio that is fun to explore without sacrificing SEO, accessibility or load time.',
    solution:
      'Real text everywhere (no text in images), pixel fonts only for short headings, a readable body font, every animation behind prefers-reduced-motion, self-hosted fonts, WebP images, and a cheat code that only changes decoration.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI', 'Web Audio API'],
    tags: ['Easter egg', 'Accessibility', 'Performance'],
    highlights: ['↑ ↑ ↓ ↓ ← → ← → B A', 'Cheat mode is purely cosmetic and fully reversible'],
    metrics: ['+30 lives'],
    links: [{ label: 'GitHub', url: 'https://github.com/pedrorvidal/pedrorvidal.github.io' }],
    pt: {
      title: 'Fase ??: Este portfólio',
      role: 'Jogador 1',
      summary: 'Você achou a fase secreta! Este site é uma SPA em React + Vite com tema arcade e um Konami code escondido.',
      problem: 'Fazer um portfólio divertido de explorar sem abrir mão de SEO, acessibilidade ou tempo de carregamento.',
      solution:
        'Texto real em todo lugar (nada de texto em imagem), fontes pixel só em títulos curtos, fonte de leitura confortável, toda animação respeitando prefers-reduced-motion, fontes self-hosted, imagens WebP e um cheat code que só muda a decoração.',
      tags: ['Easter egg', 'Acessibilidade', 'Performance'],
      highlights: ['↑ ↑ ↓ ↓ ← → ← → B A', 'O modo cheat é só cosmético e totalmente reversível'],
    },
  },
];
