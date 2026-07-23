'use client';

import { useEffect, useState } from 'react';

const offerings = [
  { title: 'Customized Corporate Training', text: 'Tailored programs designed to align with your industry, strategy, and workforce needs.' },
  { title: 'Globally Recognized Certifications', text: 'Equip professionals with credentials that meet international standards.' },
  { title: 'Leadership Development', text: 'Specialized learning paths in supply chain, healthcare, sustainability, and more.' },
  { title: 'Industry-Specific Expertise', text: 'Courses designed for sectors like healthcare, supply chain, and sustainability.' },
];

export default function KeyOfferingsSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 800);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const move = (dir: number) => {
    setIndex((i) => (i + dir + offerings.length) % offerings.length);
  };

  return (
    <div className="slider-container">
      <div
        className="offerings-track"
        style={{ transform: isMobile ? `translateX(-${index * 100}%)` : 'translateX(0)' }}
      >
        {offerings.map((item) => (
          <div className="offering-card" key={item.title}>
            <div className="card-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/border-triangle.png" alt="" className="triangle-icon" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mobile-controls">
        <div className="progress-bars">
          {offerings.map((item, i) => (
            <div className={`progress-step${i === index ? ' active' : ''}`} key={item.title}></div>
          ))}
        </div>
        <div className="nav-buttons">
          <button className="nav-btn" aria-label="Previous slide" onClick={() => move(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="nav-btn" aria-label="Next slide" onClick={() => move(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
