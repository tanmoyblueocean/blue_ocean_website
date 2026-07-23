'use client';

import { useState } from 'react';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const tabs = [
  {
    id: 'corporate-tab',
    label: 'Corporate Training',
    heroImg: '/images/training-tab-hero.png',
    arrowImg: '/images/training-tab-arrow.png',
    heading: null as string | null,
    intro: 'Our corporate training solutions are purpose-built to meet the evolving demands of global businesses. Each program is delivered by industry experts and aligned with international best practices ensuring your team is prepared, agile, and future-ready.',
    listHeading: 'Why Choose Our Corporate Training',
    benefits: [
      'Customized modules aligned with your business objectives goals.',
      'Delivered by globally experienced trainers',
      'Based on proven success frameworks and case studies',
    ],
    highlight: 'Empower your team to exceed performance benchmarks and lead with confidence.',
  },
  {
    id: 'certification-tab',
    label: 'Certification Programs',
    heroImg: '/images/certification-tab-hero.png',
    arrowImg: '/images/certification-tab-arrow-full.png',
    heading: null as string | null,
    intro: "We deliver globally recognized certification programs designed to enhance your team's skills and drive organizational success. Our courses combine comprehensive knowledge, hands-on training, and accredited credentials across key domains such as Logistics & Supply Chain, Procurement, HR, Quality Management, Project Management, Aviation, and IT. By aligning training with industry standards and practical application, we help your organization build a skilled, agile workforce ready to meet today's challenges and lead tomorrow's growth.",
    listHeading: 'Why Choose Our Certification Program?',
    benefits: [
      'Globally accredited certification programs trusted by industry leaders',
      "Expert-led training tailored to your organization's needs",
      'Practical, results-driven learning with real-world case studies',
      'Customized solutions to boost productivity and operational excellence',
      'Proven track record of empowering professionals and organizations worldwide',
    ],
    highlight: "Start your certification journey today and lead with confidence in tomorrow's market.",
  },
  {
    id: 'webinar-tab',
    label: 'Webinar / Seminar',
    heroImg: '/images/training-tab-hero.png',
    arrowImg: '/images/seminar-tab-arrow.png',
    heading: 'Stay Ahead with Expert-Led Webinars & Seminars',
    intro: "We deliver globally recognized certification programs designed to enhance your team's skills and drive organizational success. Our courses combine comprehensive knowledge, hands-on training, and accredited credentials across key domains such as Logistics & Supply Chain, Procurement, HR, Quality Management, Project Management, Aviation, and IT. By aligning training with industry standards and practical application, we help your organization build a skilled, agile workforce ready to meet today's challenges and lead tomorrow's growth.",
    listHeading: 'How Our Webinars Benefit Participants',
    benefits: [
      'Industry Experts: Learn from top professionals and thought leaders.',
      'Current Trends: Access to up-to-date insights and innovative strategies.',
      'Interactive Sessions: Engaging formats with Q&A and live discussions.',
      'Flexible Access: Participate from anywhere with virtual options.',
      'Practical Application: Focus on real-world relevance and actionable takeaways.',
    ],
    highlight: null as string | null,
  },
  {
    id: 'affiliations-tab',
    label: 'Affiliations',
    heroImg: '/images/affiliate-tab-hero.png',
    arrowImg: '/images/seminar-tab-arrow.png',
    heading: null as string | null,
    intro: "We deliver globally recognized certification programs designed to enhance your team's skills and drive organizational success. Our courses combine comprehensive knowledge, hands-on training, and accredited credentials across key domains such as Logistics & Supply Chain, Procurement, HR, Quality Management, Project Management, Aviation, and IT. By aligning training with industry standards and practical application, we help your organization build a skilled, agile workforce ready to meet today's challenges and lead tomorrow's growth.",
    listHeading: 'Why Choose Our Certification Program?',
    benefits: [
      'Globally accredited certification programs trusted by industry leaders',
      "Expert-led training tailored to your organization's needs",
      'Practical, results-driven learning with real-world case studies',
      'Customized solutions to boost productivity and operational excellence',
      'Proven track record of empowering professionals and organizations worldwide',
    ],
    highlight: "Start your certification journey today and lead with confidence in tomorrow's market.",
  },
  {
    id: 'scholarship-tab',
    label: 'Scholarship Program',
    heroImg: '/images/scholership-1.png',
    arrowImg: '/images/training-tab-arrow.png',
    heading: null as string | null,
    intro: "We deliver globally recognized certification programs designed to enhance your team's skills and drive organizational success. Our courses combine comprehensive knowledge, hands-on training, and accredited credentials across key domains such as Logistics & Supply Chain, Procurement, HR, Quality Management, Project Management, Aviation, and IT. By aligning training with industry standards and practical application, we help your organization build a skilled, agile workforce ready to meet today's challenges and lead tomorrow's growth.",
    listHeading: 'Why Choose Our Certification Program?',
    benefits: [
      'Globally accredited certification programs trusted by industry leaders',
      "Expert-led training tailored to your organization's needs",
      'Practical, results-driven learning with real-world case studies',
      'Customized solutions to boost productivity and operational excellence',
      'Proven track record of empowering professionals and organizations worldwide',
    ],
    highlight: "Start your certification journey today and lead with confidence in tomorrow's market.",
  },
];

export default function TrainingTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <div className="containerg">
      <div className="desktop-navs">
        <ul className="nav-tabs">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={tab.id === active ? 'active' : ''}
              data-target={tab.id}
            >
              <a href="#" onClick={(e) => { e.preventDefault(); setActive(tab.id); }}>{tab.label}</a>
            </li>
          ))}
        </ul>
        <div className="search-box desktop-search">
          <input type="text" placeholder="Search Course" />
          <button type="submit" aria-label="Search"><SearchIcon /></button>
        </div>
      </div>

      <div className="mobile-nav">
        <label className="mobile-label">Course Category</label>
        <div className="custom-select">
          <select
            id="mobileTabSelect"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          >
            {tabs.map((tab) => (
              <option value={tab.id} key={tab.id}>{tab.label}</option>
            ))}
          </select>
        </div>

        <h2 className="mobile-heading" id="mobileHeading">{activeTab.label}</h2>

        <div className="search-box mobile-search">
          <input type="text" placeholder="Search Course" />
          <button type="submit" aria-label="Search"><SearchIcon /></button>
        </div>
      </div>

      <div className="tab-content-container">
        {tabs.map((tab) => (
          <div
            id={tab.id}
            key={tab.id}
            className={`tab-panel${tab.id === active ? ' active' : ''}`}
          >
            <div className="content-wrapperr">
              <div className="image-column">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tab.heroImg} alt={tab.label} className="main-hero-img" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tab.arrowImg} alt="" className="overlay-shape-img" aria-hidden="true" />
              </div>
              <div className="text-column">
                {tab.heading && (
                  <h2>Stay Ahead with<span>Expert-Led Webinars & Seminars</span></h2>
                )}
                <p className="intro-text">{tab.intro}</p>
                <h3 className="list-heading">{tab.listHeading}</h3>
                <ul className="benefits-list">
                  {tab.benefits.map((b) => <li key={b}>{b}</li>)}
                </ul>
                {tab.highlight && <p className="highlight-text">{tab.highlight}</p>}
                <a href="#" className="btn-learn-more">
                  Learn More <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
