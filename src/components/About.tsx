

import { Section } from './Section';
import { Reveal } from './Reveal';

const PORTRAIT = `${import.meta.env.BASE_URL}portfolioIMG.png`;


const SKILLS = [
'ASP.NET Core',
'C#',
'Cyber Security',
'React',
'Python',
'Django',
'REST APIs',
'AI Applications',
'Business Automation',
'Database Design',
'Cloud Deployment'];


const STATS = [
{ value: '5+', label: 'Years of professional experience' },
{ value: '40+', label: 'Projects delivered' },
{ value: '16+', label: 'Technologies mastered' }];


export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A full stack engineer focused on outcomes, not just output.">
      
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
        <Reveal className="order-2 md:order-1">
          <div className="border border-[#dddddd]">
            <img
              src={PORTRAIT}
              alt="Portrait of Nathan George"
              className="h-full w-full object-cover"
              loading="lazy" />
            
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <p className="text-lg leading-relaxed text-[#555555]">
            I'm{' '}
            <span className="font-semibold text-black">George Nathan</span>,  Founder, Full
            Stack Software Engineer specializing in building scalable, reliable
            software for startups, businesses, organizations and individuals. My work spans
            modern web platforms, enterprise applications, AI-powered products, and
            business automation systems.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[#555555]">
            With over{' '}
            <span className="font-semibold text-black">
              5 years of professional experience
            </span>
            , I've delivered production software end to end — from database design
            and API architecture to polished front-end interfaces and cloud
            deployment.
          </p>

          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#555555]">
              Core Expertise
            </p>
            <ul className="flex flex-wrap gap-3">
              {SKILLS.map((s) =>
              <li
                key={s}
                className="border border-[#dddddd] px-4 py-2 text-sm font-medium text-black">
                
                  {s}
                </li>
              )}
            </ul>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-[#dddddd] pt-8">
            {STATS.map((s) =>
            <div key={s.label}>
                <dt className="text-4xl font-extrabold tracking-tight text-black">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-[#555555]">
                  {s.label}
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </div>
    </Section>);

}
