'use client';

import { useState } from 'react';

const stories = [
  {
    logo: '/images/adnoc-logo.png',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus aperiam ipsum reprehenderit, sequi suscipit esse obcaecati saepe ipsam, pariatur neque quis architecto, non nostrum molestiae illum quia? Blanditiis, sequi?',
    author: 'Jhon Deo',
    role: 'CEO, ADNOC',
  },
  {
    logo: '/images/etihad-logo.png',
    quote: 'Etihad Aviation Group has experienced a fundamental shift in operational agility. The strategic frameworks introduced gave our ground logistics the precision required to scale safely during peak international transit cycles.',
    author: 'Sarah Al-Mansouri',
    role: 'VP Operations, Etihad',
  },
  {
    logo: '/images/neom-logo.png',
    quote: 'Building the infrastructure of tomorrow requires absolute synchronization. Their bespoke supply chain modeling allowed us to bypass traditional bottlenecking and maintain our aggressive phase-one developmental milestones.',
    author: 'Tariq Bin Laden',
    role: 'Logistics Director, NEOM',
  },
  {
    logo: '/images/sabic-logo.png',
    quote: 'As a global specialty chemicals leader, risk mitigation is our top metric. The analytical ecosystems deployed provided our stakeholder matrix with 100% transparent downstream accountability.',
    author: 'Dr. Faisal Al-Ghamdi',
    role: 'Chief Strategy Officer, SABIC',
  },
];

export default function SuccessStoriesSlider() {
  const [index, setIndex] = useState(0);
  const active = stories[index];

  const go = (dir: number) => {
    setIndex((i) => (i + dir + stories.length) % stories.length);
  };

  return (
    <section className="success-stories">
      <div className="ss-container">
        <h2 className="ss-section-title">Where Strategy Meets Success Stories</h2>

        <div className="ss-card">
          <div className="ss-card-bg"></div>

          <div className="ss-card-grid">
            <div className="ss-logo-col">
              <div className="ss-white-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={active.logo} id="ss-active-logo" alt="Client Success Logo" />
              </div>
            </div>

            <div className="ss-text-col">
              <div className="ss-quote-wrap">
                <p className="ss-quote-text" id="ss-active-quote">
                  {active.quote}
                </p>

                <div className="ss-author-meta">
                  <span className="ss-author-name" id="ss-active-author">{active.author}</span>,{' '}
                  <span className="ss-author-role" id="ss-active-role">{active.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ss-controls">
          <button className="ss-btn ss-prev" aria-label="Previous Success Story" onClick={() => go(-1)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Arrow left.png" alt="Left Arrow" className="btn-icon" />
          </button>
          <button className="ss-btn ss-next" aria-label="Next Success Story" onClick={() => go(1)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Arrow right.png" alt="Right Arrow" className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
