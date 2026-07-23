'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const awards = [
  '/images/award-1.png',
  '/images/award-2.png',
  '/images/award-3.png',
  '/images/award-4.png',
  '/images/award-5.png',
];

export default function LegacySection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % awards.length), 4000);
    return () => clearInterval(t);
  }, []);

  const go = (dir: number) => setIdx((i) => (i + dir + awards.length) % awards.length);

  return (
    <section className="legacy-section">
      <div className="legacy-top">
        <div className="container">
          <div className="legacy-content">
            <div className="legacy-text">
              <h2 className="legacy-subtitle">Honoured with</h2>
              <h2 className="legacy-title">30+ International Awards</h2>
              <p className="legacy-description">
                Recognized globally for excellence, Blue Ocean Corporation has earned over 30 prestigious accolades including the ASCM Awards of Excellence, Dubai Quality Appreciation Award, Great Place to Work certification, Logistics Consultancy of the Year, Global Training and Development Leadership Award, and honors from the Ministry of Human Resources &amp; Emiratisation. These achievements reflect our enduring commitment to innovation, quality, and transformative impact across consulting, training, and organizational development.
              </p>
            </div>
            <div className="legacy-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/triangle-award.png" alt="Triangle Background" className="bg-triangle" />
              <div className="award-slider">
                {awards.map((src, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={i}
                    src={src}
                    alt={`Award ${i + 1}`}
                    className={`award-slide${idx === i ? ' active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="legacy-bottom">
        <div className="container">
          <div className="bottom-content">
            <div className="brand-info">
              <Image src="/images/logo-blue.png" alt="Blue Ocean Corporation" width={160} height={50} className="footer-logo" style={{ height: 'auto' }} />
              <div className="brand-text">
                <h3>A Symbol of Quality,<br />Leadership and Trust.</h3>
                <a href="#" className="success-link">
                  Success Stories{' '}
                  <Image src="/images/color-arrow.png" alt="Arrow" width={20} height={20} className="link-arrow" />
                </a>
              </div>
            </div>
            <div className="slider-controls">
              <button className="nav-btn prev-btn" onClick={() => go(-1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button className="nav-btn next-btn" onClick={() => go(1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
