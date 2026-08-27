

import React from 'react';
import { Section } from './Section';
import { Reveal } from './Reveal';

interface ServiceItem {
  title: string;
  description: string;
  price: string;
}

const SERVICES: ServiceItem[] = [
{
  title: 'Custom Business Websites',
  description: 'Conversion-focused marketing sites built for growing companies.',
  // price: 'Starting at $500'
},
{
  title: 'Portfolio Websites',
  description: 'Elegant personal and creative portfolios that stand out.',
  // price: 'Starting at $300'
},
{
  title: 'Enterprise Web Applications',
  description: 'Complex, scalable systems with dashboards, roles, and data.',
  // price: 'Starting at $1,200'
},
{
  title: 'E-commerce Development',
  description: 'Storefronts, carts, and checkout flows that sell.',
  // price: 'Starting at $700'
},
{
  title: 'AI Chatbots',
  description: 'Intelligent assistants powered by modern LLM APIs.',
  // price: 'Starting at $800'
},
{
  title: 'AI Business Automation',
  description: 'Automate repetitive workflows and internal operations.',
  // price: 'Starting at $600'
},
{
  title: 'ASP.NET Development',
  description: 'Robust backends and services built on ASP.NET Core.',
  // price: 'Starting at $600'
},
{
  title: 'Python / Django Development',
  description: 'Fast, maintainable applications and data services.',
  // price: 'Starting at $600'
},
{
  title: 'REST API Development',
  description: 'Well-documented, secure, and scalable APIs.',
  // price: 'Starting at $300'
},
{
  title: 'Payment Gateway Integration',
  description: 'Stripe, PayPal, and local gateways integrated cleanly.',
  // price: 'Starting at $300'
},
{
  title: 'Dashboard Development',
  description: 'Data-rich admin panels and analytics interfaces.',
  // price: 'Starting at $500'
},
{
  title: 'Website Maintenance',
  description: 'Ongoing updates, monitoring, and support.',
  // price: 'Starting at $100/month'
},
{
  title: 'Bug Fixing',
  description: 'Rapid diagnosis and resolution of issues.',
  // price: '$50/hour'
},
{
  title: 'Technical Consultation',
  description: 'Architecture, strategy, and code review sessions.',
  // price: '$60/hour'
},
{
  title: 'Training and Workshops',
  description: 'Hands on training and interactive workshops for teams and individuals.',
  // price: '$35-$60/hour'
}];


export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Everything you need to design, build, and ship."
      intro="Clear scope, transparent pricing, and production-quality delivery across the full stack.">
      
      <div className="grid grid-cols-1 border-l border-t border-[#dddddd] sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) =>
        <Reveal
          key={s.title}
          delay={i % 3 * 0.05}
          as="article"
          className="group flex flex-col justify-between border-b border-r border-[#dddddd] p-8 transition-colors hover:bg-black">
          
            <div>
              <h3 className="text-lg font-bold text-black transition-colors group-hover:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#555555] transition-colors group-hover:text-[#bbbbbb]">
                {s.description}
              </p>
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-black transition-colors group-hover:text-white">
              {s.price}
            </p>
          </Reveal>
        )}
      </div>
    </Section>);

}
