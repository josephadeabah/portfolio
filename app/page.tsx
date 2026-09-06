'use client'

import { useState } from 'react'
import Image from "next/image";

const skills = {
  softwareEngineering: {
    title: 'Software Engineering',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Python', 'FastAPI', 'Node.js', 'Express', 'NestJS', 'Ruby on Rails', 'REST APIs', 'GraphQL', 'WebSockets', 'Microservices']
  },
  linuxSystems: {
    title: 'Linux, Systems & Server Administration',
    skills: ['Linux', 'Linux Server Administration', 'Server Deployment', 'Server Troubleshooting', 'SSH', 'Nginx', 'Docker', 'Docker Compose', 'Process/Service Troubleshooting', 'Production Support', 'GitHub Actions']
  },
  networking: {
    title: 'Networking & Connectivity',
    skills: ['TCP/IP', 'DNS', 'SSL/TLS', 'SSH', 'VPN', 'Firewall Configuration']
  },
  cloudInfrastructure: {
    title: 'Cloud & Infrastructure',
    skills: ['AWS', 'EC2', 'S3', 'Google Cloud Platform', 'Docker', 'Nginx', 'Vercel', 'Northflank', 'OVHCloud', 'GitHub Actions', 'Cloud Deployment', 'Production Infrastructure']
  },
  backendDatabases: {
    title: 'Backend, Databases & APIs',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'Supabase', 'SQLAlchemy', 'Webhooks', 'Third-Party API Integration']
  },
  aiEmerging: {
    title: 'AI & Emerging Technology',
    skills: ['LLM APIs', 'Generative AI', 'AI Application Development', 'OCR', 'Embeddings', 'Semantic Search', 'Voice AI']
  },
  reliability: {
    title: 'Reliability & Distributed Systems',
    skills: ['Offline-First Systems', 'Service Workers', 'IndexedDB', 'Outbox Pattern', 'Idempotency', 'Client-Side Deduplication', 'Conflict Handling', 'Real-Time Synchronization', 'Asynchronous Processing', 'Failure Handling']
  },
  devTools: {
    title: 'Engineering & Development Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Claude Code', 'GitHub Copilot', 'Codex', 'Jest', 'Unit Testing', 'Integration Testing', 'API Testing', 'CI/CD', 'Debugging', 'Production Troubleshooting']
  },
  productDesign: {
    title: 'Product Design & Prototyping',
    skills: ['Figma', 'Google Stitch', 'UI/UX Design', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems', 'User Flows', 'Interaction Design']
  },
  softSkills: {
    title: 'Project Delivery & Soft Skills',
    skills: ['Agile Methodology', 'Scrum', 'Sprint Planning', 'Project Management', 'Team Leadership', 'Cross-functional Collaboration', 'Stakeholder Communication', 'Technical Documentation', 'Mentoring', 'Problem Solving', 'Critical Thinking', 'Time Management', 'Remote Collaboration', 'Entrepreneurship']
  }
}

type Experience = {
  dates: string
  role: string
  company: string
  details: string
  links?: [string, string][]
}

const experience: Experience[] = [
  {
    dates: 'Oct 2024 — Apr 2026',
    role: 'Product & Engineering Lead',
    company: 'BantuHive Ltd · Takoradi, Ghana',
    details: 'Led engineering for a peer-to-peer financial investment platform. Built Rails, Node.js, and microservice backends with Paystack and Stripe integrations, idempotent transaction workflows, AI-assisted fraud detection, and production systems that improved response times by approximately 40%.',
  },
  {
    dates: 'Oct 2021 — Sep 2024',
    role: 'Software Engineer',
    company: 'Amalitech Services GmbH · Takoradi, Ghana',
    details: 'Built and maintained production full-stack applications with React, Next.js, TypeScript, and Node.js. Created REST APIs, reusable component architecture, GitHub Actions CI/CD pipelines, and supported AWS and Vercel production environments.',
  },
  {
    dates: 'May 2023 — Jul 2023',
    role: 'Software Engineer — AI Digital Product Program',
    company: 'Digital Product School (UnternehmerTUM) · Munich, Germany',
    details: 'Collaborated with AWS and the German Red Cross to develop GeoHilfe, an AI-powered emergency-response technology project. Built real-time backend functionality with Node.js and WebSockets, integrated Twilio Voice APIs, and deployed services on AWS EC2 and S3. Worked in a rapid, multidisciplinary product environment across prototyping, user feedback, iteration, and deployment.',
    links: [
      ['Case study', 'https://digitalproductschool.io/case-geohilfe-drk'],
      ['Certificate', 'https://certificates.dpschool.io/shared/678dfeeb-241a-4fdf-82dd-394ab6c200b6'],
    ],
  },
  {
    dates: 'Jun 2026 — Present',
    role: 'AI Engineer Intern — AI Product Management Program',
    company: 'Product Manager Accelerator · Remote',
    details: 'Contributing to MyHealthNode AI across document intelligence, OCR, semantic search, conversational AI, voice AI, and Python/FastAPI services. Translating real healthcare workflows into reliable AI-powered features.',
    links: [
      ['AI Engineering Bootcamp Certificate', 'https://drive.google.com/file/d/1q-uZ65JfEo9vtuh2vxzemfl6z0cbO8Nc/view?usp=sharing'],
      ['Recommendation from Dr. Nancy Li', 'https://drive.google.com/file/d/1toItdgEKdDY045v6YOLrM3a63OL-tzOw/view?usp=sharing'],
    ],
  },
]

type Award = {
  year: string
  title: string
  organization: string
  description: string
  link?: string
}

const awards: Award[] = [
  {
    year: '2025',
    title: 'Tony Elumelu Entrepreneurship Programme',
    organization: 'Tony Elumelu Foundation',
    description: 'Selected as one of the entrepreneurs to receive $5,000 in seed funding to scale BantuHive Ltd, an AI-powered crowdfunding and peer-to-peer capital infrastructure platform for African communities, startups, and SMEs.',
    link: 'https://drive.google.com/file/d/1a5hLDypF4vOfuQabOJ4fhs8RzdbcPwXE/view?usp=sharing',
  },
]

const projects = [
  {
    name: 'BantuHive Ltd',
    type: 'Crowdfunding & capital infrastructure',
    description: 'AI-powered crowdfunding and peer-to-peer capital infrastructure helping communities, startups, SMEs, and enterprises raise and manage capital digitally.',
    url: 'https://crowdfundn.vercel.app',
    stack: 'Next.js · Ruby on Rails · AI · Fintech · Paystack',
    preview: 'bantuhive',
    video: 'https://www.youtube.com/watch?v=_PhQYCNRRAc',
  },
  {
    name: 'PNPM Media',
    type: 'Personal knowledge journal',
    description: 'A personal blog for sharing my knowledge and perspective on the world, built with a flexible CMS and a thoughtful commenting experience.',
    url: 'https://pnpmmedia.com',
    stack: 'Vue.js · TypeScript · Storyblok · Appwrite',
    preview: 'blog',
    video: 'https://www.youtube.com/watch?v=0RtV_TG4PRE',
  },
  {
    name: 'LEXEP',
    type: 'Opportunity & mentorship platform',
    description: 'AI-powered matching for African youth, internships, mentors, and community-funded grants.',
    url: 'https://lexep.vercel.app',
    stack: 'Next.js · FastAPI · PostgreSQL',
    preview: 'lexep',
    video: 'https://www.youtube.com/watch?v=ORghchtMU4s',
  },
  {
    name: 'MyHealthNode AI',
    type: 'Personal health command center',
    description: 'Document intelligence and medication adherence workflows with voice AI and confidence-based review.',
    url: 'https://myhealthnode.ai',
    stack: 'Python · FastAPI · Llama · OCR',
    preview: 'health',
    video: 'https://www.youtube.com/watch?v=-kouMOE_Zgo',
  },
  {
    name: 'Dreston Elite Montessori',
    type: 'Offline-first school management',
    description: 'Reliable school operations for records, attendance, fees, and parent communication—even offline.',
    url: 'https://dreston-school-app-ruddy.vercel.app/login',
    stack: 'Next.js · FastAPI · Supabase · IndexedDB',
    preview: 'school',
    video: 'https://www.youtube.com/watch?v=OXdrQ1Z1XG8',
  },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{children}</h2>
}

function ProjectPreview({ type }: { type: string }) {
  const base = 'relative min-h-[220px] overflow-hidden p-5 font-sans text-[8px] sm:min-h-[250px]'
  const nav = 'flex items-center justify-between gap-3'
  const orbit = 'absolute right-[8%] top-20 size-40 rounded-full border border-muted-foreground/50'
  const dots = <><i className="absolute -left-1 top-[76px] size-2 rounded-full bg-muted-foreground" /><i className="absolute right-[18px] top-[13px] size-2 rounded-full bg-muted-foreground" /><i className="absolute right-[15px] bottom-6 size-2 rounded-full bg-muted-foreground" /></>
  if (type === 'bantuhive') return <div className={`${base} bg-[#d8d8d4] text-[#171717]`}><div className={nav}><b className="mr-auto text-[13px] tracking-[-.06em]">BantuHive</b><span>Invest</span><span>Raise capital</span><span>How it works</span><button className="rounded-full bg-[#171717] px-2.5 py-1.5 text-[#f5f5f3]">Get started</button></div><div className="absolute left-5 top-[88px] z-10"><span className="font-bold tracking-[.15em]">AI-POWERED DEAL ANALYSIS</span><strong className="mt-2 block text-[29px] leading-[.94] tracking-[-.07em]">Capital that moves<br />communities forward.</strong><div className="mt-5 flex gap-1.5"><i className="rounded-full bg-[#171717] px-3 py-2 not-italic text-[#f5f5f3]">Start investing</i><i className="rounded-full border border-[#999] px-3 py-2 not-italic">Raise capital</i></div></div><div className={orbit}>{dots}<span className="absolute inset-[57px] rounded-full bg-[#171717]" /></div></div>
  if (type === 'blog') return <div className={`${base} bg-[#202020] text-[#f5f5f3]`}><div className={`${nav} text-[#bdbdb8]`}><b className="mr-auto text-[13px] tracking-[-.06em] text-[#f5f5f3]">PNPM</b><span>Essays</span><span>About</span><span>Search</span></div><div className="absolute left-5 top-[78px]"><span className="font-bold tracking-[.15em]">JOSEPH ADEABAH</span><strong className="mt-2 block text-[29px] leading-[.94] tracking-[-.07em]">Notes on building,<br />believing, and becoming.</strong><p className="mt-3 text-[9px] text-[#999]">Ideas from my perspective of the world.</p></div><div className="absolute inset-x-5 bottom-[54px] h-px bg-[#555]" /><div className="absolute inset-x-5 bottom-5 flex gap-2"><i className="h-[18px] flex-1 rounded bg-[#777]" /><i className="h-[18px] flex-1 rounded bg-[#3b3b3b]" /><i className="h-[18px] flex-1 rounded bg-[#3b3b3b]" /></div></div>
  if (type === 'health') return <div className={`${base} bg-[#202020] p-[18px] text-[#f5f5f3]`}><div className="flex items-center text-[9px]"><span className="mr-2 grid size-5 place-items-center rounded-md bg-[#b4e4bc] text-[#202020]">M</span><span>MyHealthNode</span><span className="ml-auto text-[#999]">Menu</span></div><div className="absolute left-[18px] top-[83px]"><span className="font-bold tracking-[.15em]">YOUR HEALTH, CONNECTED</span><strong className="mt-2 block max-w-[210px] text-[29px] leading-[.98] tracking-[-.06em]">A clearer view of your health.</strong><div className="mt-4 h-[3px] w-20 bg-[#b4e4bc]" /></div><div className="absolute bottom-[22px] right-5 flex gap-1.5"><i className="h-[35px] w-[55px] rounded-md bg-[#b4e4bc]" /><i className="h-[35px] w-[55px] rounded-md bg-[#343434]" /><i className="h-[35px] w-[55px] rounded-md bg-[#343434]" /></div></div>
  if (type === 'school') return <div className="flex min-h-[220px] overflow-hidden bg-[#e7e7e5] text-[8px] text-[#262626] sm:min-h-[250px]"><div className="flex w-[28%] flex-col gap-4 bg-[#d2d2cf] p-3"><b className="mb-2 text-sm">DE</b><span className="text-[#666]">Overview</span><span className="text-[#666]">Students</span><span className="text-[#666]">Attendance</span><span className="text-[#666]">Finance</span></div><div className="flex-1 p-[18px]"><div className="flex items-center justify-between text-xs font-semibold"><span>Good morning, Admin</span><i className="size-5 rounded-full bg-[#999]" /></div><div className="mt-6 flex gap-2"><i className="h-12 flex-1 rounded bg-[#262626]" /><i className="h-12 flex-1 rounded bg-[#d1d1ce]" /><i className="h-12 flex-1 rounded bg-[#d1d1ce]" /></div><div className="mt-4 rounded bg-[#f5f5f3] p-2"><i className="mb-2 block h-1 w-[70%] rounded bg-[#777]" /><i className="my-2 block h-1 rounded bg-[#c9c9c6]" /><i className="my-2 block h-1 rounded bg-[#c9c9c6]" /></div></div></div>
  return <div className={`${base} bg-[#dededb] text-[#181818]`}><div className={nav}><b className="mr-auto text-[13px] tracking-[-.06em]">LEXEP</b><span>Opportunities</span><span>Mentors</span><span>Community</span><button className="rounded-full bg-[#191919] px-2.5 py-1.5 text-[#f5f5f3]">Get started</button></div><div className="absolute left-5 top-[92px] z-10"><span className="font-bold tracking-[.15em]">BUILT FOR YOUR NEXT MOVE</span><strong className="mt-2 block text-[30px] leading-[.94] tracking-[-.07em]">Find the opportunity<br />that finds you.</strong><div className="mt-5 inline-block rounded-full bg-[#191919] px-3 py-2 text-[#f5f5f3]">Explore opportunities →</div></div><div className={`${orbit} right-[13%] top-[85px] size-[150px]`}>{dots}<span className="absolute inset-[45px] rounded-full bg-[#191919]" /></div></div>
}

export default function Page() {
  const [activeVideo, setActiveVideo] = useState<(typeof projects)[number] | null>(null)

  return (
    <>
    <main className="mx-auto max-w-5xl px-6 py-8 sm:px-10 sm:py-12">
      <header className="flex items-center justify-between border-b border-border pb-5">
        <a className="font-mono text-sm font-semibold tracking-tight" href="#top">JA<span className="text-muted-foreground">/</span>26</a>
        <nav className="flex gap-5 text-xs font-medium text-muted-foreground sm:gap-8"><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#awards">Awards</a><a href="#contact">Contact</a></nav>
      </header>

      <section id="top" className="grid gap-10 border-b border-border py-16 sm:py-24 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Fullstack Engineer · AI/ML Engineer</p>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">Architect & Builder of Reliable Modern Systems.</h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-muted-foreground">I&apos;m Joseph Adeabah, a Fullstack, Forward-deployed software engineer with 5+ years of experience building production systems across fintech, health-tech, education, and real-time applications.</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
            <a className="underline decoration-muted-foreground underline-offset-4" href="mailto:ansahadeabaj45@gmail.com">Email me ↗</a>
            <a className="underline decoration-muted-foreground underline-offset-4" href="https://github.com/josephadeabah">GitHub ↗</a>
            <a className="underline decoration-muted-foreground underline-offset-4" href="https://linkedin.com/in/joseph-adeabah">LinkedIn ↗</a>
          </div>
        </div>
        
        <aside className="flex flex-col items-center justify-end border-l border-border pl-6 text-sm text-muted-foreground">
          <div className="mb-6 h-64 w-64 overflow-hidden rounded-full border-2 border-border/50">
            <Image
              src="/images/Joseph.png"
              alt="Joseph Adeabah"
              width={128}
              height={128}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          
          <p>Based in</p>
          <p className="mt-1 text-foreground">Accra, Ghana</p>
          <p className="mt-6">Currently</p>
          <p className="mt-1 text-foreground">Building AI-powered products</p>
          <a className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground" href="/joseph-adeabah-resume.pdf" download>
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </aside>
      </section>

      <section id="skills" className="border-b border-border py-14">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="space-y-8">
          {Object.values(skills).map((category) => (
            <div key={category.title} className="grid gap-3 md:grid-cols-[0.7fr_1.3fr] md:gap-8">
              <h3 className="font-semibold text-sm text-foreground">{category.title}</h3>
              <div className="flex flex-wrap content-start gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="border-b border-border py-14">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-10">
          {experience.map((item) => (
            <article key={item.role} className="grid gap-2 md:grid-cols-[0.7fr_1.3fr] md:gap-8">
              <p className="font-mono text-xs text-muted-foreground">{item.dates}</p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{item.details}</p>
                {item.links && (
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium">
                    {item.links.map(([label, url]) => (
                      <a key={label} className="underline underline-offset-4" href={url} target="_blank" rel="noreferrer">{label} ↗</a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="border-b border-border py-14">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle>Selected projects</SectionTitle>
          <span className="mb-8 font-mono text-xs text-muted-foreground">05 / live work</span>
        </div>
        <div className="grid gap-6">
          {projects.map((project) => (
            <article key={project.name} className="group grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[1.15fr_0.85fr]">
              <ProjectPreview type={project.preview} />
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{project.description}</p>
                </div>
                <div className="mt-10">
                  <p className="mb-4 text-xs text-muted-foreground">{project.stack}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
                    <a className="underline underline-offset-4" href={project.url} target="_blank" rel="noreferrer">View live project ↗</a>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-foreground underline decoration-muted-foreground underline-offset-4 transition-colors hover:text-muted-foreground"
                      onClick={() => setActiveVideo(project)}
                    >
                      <span className="grid size-5 place-items-center rounded-full border border-foreground text-[9px] no-underline" aria-hidden="true">▶</span>
                      Watch walkthrough
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="awards" className="border-b border-border py-14">
        <SectionTitle>Awards & Recognition</SectionTitle>
        <div className="space-y-6">
          {awards.map((award) => (
            <article key={award.title} className="grid gap-2 md:grid-cols-[0.7fr_1.3fr] md:gap-8">
              <p className="font-mono text-xs text-muted-foreground">{award.year}</p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{award.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{award.organization}</p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{award.description}</p>
                {award.link && (
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium">
                    <a className="underline underline-offset-4" href={award.link} target="_blank" rel="noreferrer">Certificate ↗</a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-b border-border py-14 md:grid-cols-[0.7fr_1.3fr]">
        <SectionTitle>Education & programs</SectionTitle>
        <div className="space-y-5 text-sm">
          <div>
            <p className="font-semibold">BSc Computer Science</p>
            <p className="text-muted-foreground">University of Energy and Natural Resources</p>
          </div>
          <div>
            <p className="font-semibold">AWS AI & ML Scholars Program</p>
            <p className="text-muted-foreground">Udacity · March 2026</p>
          </div>
          <div>
            <p className="font-semibold">Digital Product School</p>
            <p className="text-muted-foreground">UnternehmerTUM · Munich · 2023</p>
          </div>
          <div>
            <p className="font-semibold">Tony Elumelu Entrepreneurship Programme</p>
            <p className="text-muted-foreground">Tony Elumelu Foundation · 2025</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="flex flex-col gap-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-2xl font-semibold tracking-tight">Have a meaningful problem?</p>
          <a className="mt-2 inline-block text-sm text-muted-foreground underline underline-offset-4" href="mailto:ansahadeabaj45@gmail.com">ansahadeabaj45@gmail.com</a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">© 2026 Joseph Adeabah</p>
      </footer>
    </main>
    {activeVideo && (
      <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/80 p-4" role="dialog" aria-modal="true" aria-labelledby="video-dialog-title" onClick={() => setActiveVideo(null)}>
        <div className="w-full max-w-3xl rounded-xl border border-border bg-background p-3 shadow-2xl sm:p-5" onClick={(event) => event.stopPropagation()}>
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Project walkthrough</p>
              <h2 id="video-dialog-title" className="mt-1 text-lg font-semibold tracking-tight">{activeVideo.name}</h2>
            </div>
            <button type="button" className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted" onClick={() => setActiveVideo(null)} aria-label="Close video preview">
              Close
            </button>
          </div>
          <div className="aspect-video overflow-hidden rounded-lg bg-foreground">
            <iframe
              className="size-full"
              src={`https://www.youtube.com/embed/${activeVideo.video.split('v=')[1]}?autoplay=1`}
              title={`${activeVideo.name} project walkthrough`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    )}
    </>
  )
}