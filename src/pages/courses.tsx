import React, { useState } from 'react';
import { BookOpenIcon, CpuIcon, ShieldCheckIcon, Code2Icon, SparklesIcon, MegaphoneIcon, XIcon } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';

const COURSES = [
  {
    title: 'Beginner AI Essentials',
    description: 'Learn AI fundamentals, prompt building, and how to deploy simple smart assistants.',
    icon: SparklesIcon,
    label: 'Free course',
    details: [
      'AI concepts, model types, and practical use cases',
      'Prompt engineering basics for chatbots and generators',
      'Deploy a simple AI assistant without code',
    ],
  },
  {
    title: 'Python for Automation',
    description: 'Build scripts, automate workflows, and turn tasks into reusable Python tools.',
    icon: Code2Icon,
    label: 'Free course',
    details: [
      'Python syntax, functions, and data handling',
      'Automate file work, emails, and repetitive business tasks',
      'Combine Python with APIs and scheduling tools',
    ],
  },
  {
    title: 'Cyber Security Fundamentals',
    description: 'Understand the core security concepts every developer and business owner should know.',
    icon: ShieldCheckIcon,
    label: 'Free course',
    details: [
      'Common vulnerabilities and protection strategies',
      'Secure application design and safe deployment',
      'Easy defensive habits for teams and startups',
    ],
  },
  {
    title: 'Business Automation',
    description: 'Discover automation strategies for sales, operations, and customer support.',
    icon: CpuIcon,
    label: 'Free course',
    details: [
      'Identify high-value automation opportunities',
      'Build workflow flows with bots and scripts',
      'Measure ROI and scale automation safely',
    ],
  },
  {
    title: 'Content Creation Mastery',
    description: 'Create better content with AI, planning frameworks, and fast publishing workflows.',
    icon: MegaphoneIcon,
    label: 'Free course',
    details: [
      'Content planning and idea generation with AI',
      'Workflow shortcuts for blogs, social media, and video',
      'Improve writing, visuals, and publishing speed',
    ],
  },
  {
    title: 'Organization',
    description: 'Combine AI, Notetaking and Organizational skills  .',
    icon: BookOpenIcon,
    label: 'Free course',
    details: [
      'From idea to launch with guided milestones',
      'Build your first working program/project/task/todo etc',
      'Final challange',
    ],
  },
];

export function Courses() {
  const [activeCourse, setActiveCourse] = useState<typeof COURSES[number] | null>(null);

  return (
    <Section
      id="courses"
      eyebrow="Courses"
      title="Free starter courses for AI, Python, security, automation, and content creation."
      intro="Choose the right path and start learning with practical, beginner-friendly lessons that help you build real work-ready skills."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((course, index) => {
          const Icon = course.icon;
          return (
            <Reveal
              key={course.title}
              delay={index * 0.05}
              className="rounded-[2rem] border border-[#eeeeee] bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#f8f8ff] text-[#4338ca]">
                <Icon size={22} />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#555555]">
                {course.label}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-black">{course.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#555555]">{course.description}</p>
              <button
                type="button"
                onClick={() => setActiveCourse(course)}
                className="mt-6 inline-flex items-center rounded-2xl border border-black bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                View course details
              </button>
            </Reveal>
          );
        })}
      </div>

      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveCourse(null)}
              className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200"
              aria-label="Close course details"
            >
              <XIcon size={18} />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#f8f8ff] text-[#4338ca]">
                  <activeCourse.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#555555]">{activeCourse.label}</p>
                  <h3 className="text-3xl font-bold text-black">{activeCourse.title}</h3>
                </div>
              </div>

              <p className="text-lg leading-8 text-[#555555]">{activeCourse.description}</p>
              <ul className="space-y-3">
                {activeCourse.details.map((detail) => (
                  <li key={detail} className="rounded-3xl border border-[#eeeeee] bg-[#fafafa] px-5 py-4 text-sm text-[#444444]">
                    {detail}
                  </li>
                ))}
              </ul>
{/* Decide on the action this button should take. maybe redirect to whatsapp or an onsite learning dash */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black sm:w-auto"
                >
                  Reserve my free course spot
                </a>
                <button
                  type="button"
                  onClick={() => setActiveCourse(null)}
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 sm:w-auto"
                >
                  Close details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
