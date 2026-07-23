'use client';

import { useState } from 'react';

const slides = [
  [
    { type: 'Free Seminar',   city: 'KUWAIT', topic: 'Procurement &\nSupply Chain',          date: "22nd Feb'25" },
    { type: 'Free Workshop',  city: 'DUBAI',  topic: 'Digital Marketing\nEssentials',         date: "10th Mar'25" },
  ],
  [
    { type: 'Free Seminar',   city: 'KUWAIT', topic: 'Procurement &\nSupply Chain',          date: "22nd Feb'25" },
    { type: 'Free Workshop',  city: 'DUBAI',  topic: 'Digital Marketing\nEssentials',         date: "10th Mar'25" },
  ],
  [
    { type: 'Free Seminar',   city: 'KUWAIT', topic: 'Procurement &\nSupply Chain',          date: "22nd Feb'25" },
    { type: 'Free Workshop',  city: 'DUBAI',  topic: 'Digital Marketing\nEssentials',         date: "10th Mar'25" },
  ],
  [
    { type: 'Free Seminar',   city: 'KUWAIT', topic: 'Procurement &\nSupply Chain',          date: "22nd Feb'25" },
    { type: 'Free Workshop',  city: 'DUBAI',  topic: 'Digital Marketing\nEssentials',         date: "10th Mar'25" },
  ],
];

export default function SeminarSlider() {
  const [idx, setIdx] = useState(0);

  const move = (dir: number) => {
    setIdx((i) => (i + dir + slides.length) % slides.length);
  };

  return (
    <div className="seminar-slider-wrap">
      <div className="seminar-slider-container">
        <div
          className="seminar-slider-track"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {slides.map((slide, si) => (
            <div className="seminar-slide" key={si}>
              {slide.map((card, ci) => (
                <div className="seminar-gredi" key={ci}>
                  <div className="seminar-u-head">{card.type}</div>
                  <div className="seminar-u-head-bold">{card.city}</div>
                  <div className="seminar-blue-txt">
                    {card.topic.split('\n').map((line, li) => (
                      <span key={li}>{line}{li < card.topic.split('\n').length - 1 && <br />}</span>
                    ))}
                  </div>
                  <div className="seminar-foot-txt">{card.date}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="seminar-nav-buttons">
        <button className="seminar-nav-btn" onClick={() => move(-1)} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <button className="seminar-nav-btn" onClick={() => move(1)} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
