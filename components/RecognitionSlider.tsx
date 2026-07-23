'use client';

import { useState, useEffect } from 'react';

const awardsData = [
  { img: '/images/certi-1.png',         text: 'Dubai Quality Appreciation Award – Education Sector (2023)' },
  { img: '/images/best-work-place.png', text: '2024 | Won #2 Best Workplace in the Middle East & UAE' },
  { img: '/images/superbrand.png',       text: 'Recognized as an official UAE Superbrand for Excellence in Logistics' },
  { img: '/images/certi-1.png',         text: '2022 | Logistics Consultancy of the Year by Logistics Middle East Awards' },
];

export default function RecognitionSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % awardsData.length), 4000);
    return () => clearInterval(t);
  }, []);

  const move = (dir: number) => setIdx((i) => (i + dir + awardsData.length) % awardsData.length);

  return (
    <section className="recognition-sec">
      <div className="rec-container">
        <div className="rec-left-col">
          <div className="rec-text-content">
            <h2 className="rec-title">Awards &amp; Recognition</h2>
            <p className="rec-desc">
              Over the past nearly three decades, Blue Ocean has become a trusted leader in education, known for integrity, passion, and empowerment. Our excellence has been recognized with over 25+ prestigious awards, cementing our innovative role in the industry.
            </p>
          </div>
          <div className="rec-logo-box">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-small.png" alt="Blue Ocean Corporation" className="rec-logo" />
          </div>
          <div className="rec-blue-strip">
            <div className="rec-strip-text-wrap">
              <p id="rec-dynamic-text">{awardsData[idx].text}</p>
            </div>
          </div>
        </div>

        <div className="rec-right-col">
          <div className="rec-slider-stage">
            <div className="rec-triangle-backdrop">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Polygon 111.png" alt="" />
            </div>
            <div className="rec-award-img-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={awardsData[idx].img}
                alt="Award Recognition"
                style={{ opacity: 1, transform: 'scale(1)', transition: 'opacity 0.24s ease, transform 0.24s ease' }}
              />
            </div>
          </div>
          <div className="rec-slider-controls">
            <button className="rec-arrow rec-prev" aria-label="Previous Award" onClick={() => move(-1)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Arrow left.png" alt="Prev" />
            </button>
            <button className="rec-arrow rec-next" aria-label="Next Award" onClick={() => move(1)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Arrow right.png" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
