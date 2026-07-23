'use client';

import { useState } from 'react';

const milestoneData: Record<string, { items: string[]; ctaText: string; ctaLink: string }> = {
  '1998': {
    items: [
      'Blue Ocean Corporation was officially established in 1998.',
      'Laid the initial groundwork for regional supply chain consulting.',
      'Formed preliminary partnerships with global certifying bodies.',
    ],
    ctaText: 'Explore 1998 Foundation', ctaLink: '#1998',
  },
  '2014': {
    items: [
      'Hosted the first International Procurement and Supply Chain Conference (IPSC) in Doha, Qatar.',
      'Organized the second edition of the IPSC at Dubai\'s Atlantis The Palm.',
      'Conducted a Spring Convocation Ceremony in March, where over 400 students received international certifications.',
    ],
    ctaText: "Explore IPSC Qatar' 2014 Conference", ctaLink: '#ipsc-2014',
  },
  '2016': {
    items: [
      'Expanded corporate training operations into the UAE and Saudi Arabia.',
      'Introduced advanced modules in Six Sigma and Lean Logistics.',
      'Reached a milestone of 10,000 certified alumni worldwide.',
    ],
    ctaText: 'Explore 2016 Milestones', ctaLink: '#2016',
  },
};

const years = ['1998','2014','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'];

years.forEach((yr) => {
  if (!milestoneData[yr]) {
    milestoneData[yr] = {
      items: [
        `Continued strategic corporate expansion and global outreach throughout ${yr}.`,
        'Hosted regional leadership masterclasses and supply chain forums.',
        "Awarded 'Top Regional Partner' by major international accreditation bodies.",
      ],
      ctaText: `Explore ${yr} Highlights`,
      ctaLink: `#year-${yr}`,
    };
  }
});

export default function AchievementTimeline() {
  const [activeYear, setActiveYear] = useState('2014');
  const data = milestoneData[activeYear];
  const activeIndex = years.indexOf(activeYear);
  const progressPercent = ((activeIndex + 1) / years.length) * 100;

  return (
    <section className="achevement-sec">
      <div className="ach-wrap">
        <div className="ach-main-grid">
          <div className="ach-left-col">
            <div className="ach-cyan-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-white.png" alt="Blue Ocean Corporation" className="ach-logo" />
              <div className="ach-year-display">{activeYear}</div>
            </div>
            <div className="ach-info-text">
              <h2 className="ach-title">Facts and Milestones</h2>
              <p className="ach-desc">
                Blue Ocean Corporation, founded in 1998, has achieved significant milestones over the years. Here&apos;s a comprehensive timeline of our notable accomplishments:
              </p>
            </div>
          </div>

          <div className="ach-right-col">
            <div className="ach-navy-card">
              <ul className="ach-milestone-list">
                {data.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <a href={data.ctaLink} className="ach-cta">
                <span className="ach-cta-text">{data.ctaText}</span>
                <span className="ach-cta-arrow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Arrow right.png" alt="Arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="ach-timeline-container">
          <div className="ach-timeline-track">
            <div className="ach-years-list">
              {years.map((yr) => (
                <div
                  key={yr}
                  className={`ach-year-tab${activeYear === yr ? ' active' : ''}`}
                  onClick={() => setActiveYear(yr)}
                >
                  <span>{yr}</span>
                  <div className="ach-caret"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="ach-mobile-progress">
            <div className="ach-progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
