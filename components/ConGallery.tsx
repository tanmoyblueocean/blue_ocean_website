'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { img: '/images/home/conf-grp1.png', alt: 'Conference Panel 1' },
  { img: '/images/home/conf-grp2.png', alt: 'Conference Panel 2' },
  { img: '/images/home/conf-grp3.png', alt: 'Conference Panel 3' },
];

const textSlides = [
  { subtitle: 'Clarity of Transformation', title: 'Illuminating The Road to Success' },
  { subtitle: 'Insightful Conferences', title: 'Connecting Leaders to Drive Change' },
  { subtitle: 'Strategic Business Transformation', title: 'Driving Strategic Impact Through Insight' },
];

const infoSlides = [
  {
    desc: 'Our flagship conferences bring together industry leaders, innovators, and decision-makers to engage in meaningful dialogue, exchange pioneering ideas, and drive sector evolution. These premier forums inspire collaboration and empower thought leadership that shapes tomorrow.',
    tagline: 'Uniting insights, sparking transformation.',
  },
  {
    desc: 'Our consulting solutions help organizations identify challenges, uncover opportunities, and create sustainable value across industries. By delivering data-driven, actionable strategies, we enable measurable improvements in performance and growth.',
    tagline: 'Precision in vision. Clarity in execution.',
  },
  {
    desc: 'Our training programs are thoughtfully designed to build transformative skills across diverse domains. Led by industry experts, each session challenges convention and encourages reimagining possibilities through applied knowledge and strategic foresight.',
    tagline: 'Move beyond competency, step into mastery.',
  },
];

export default function ConGallery() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [textIdx, setTextIdx] = useState(0);
  const [infoIdx, setInfoIdx] = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => setSlideIdx((i) => (i + 1) % slides.length), 5000);
    const t2 = setInterval(() => setTextIdx((i) => (i + 1) % textSlides.length), 5000);
    const t3 = setInterval(() => setInfoIdx((i) => (i + 1) % infoSlides.length), 5000);
    return () => { clearInterval(t1); clearInterval(t2); clearInterval(t3); };
  }, []);

  return (
    <section className="con-gallery">
      {/* Full-width image slider */}
      <div className="slider-wrapper">
        <div className="slider-images">
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.img}
              alt={s.alt}
              className={`slide-img${slideIdx === i ? ' active' : ''}`}
            />
          ))}
        </div>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot${slideIdx === i ? ' active' : ''}`}
              onClick={() => setSlideIdx(i)}
            ></span>
          ))}
        </div>
      </div>

      {/* Blue gradient triangle overlay — absolutely positioned over the slider */}
      <div className="spectrum-overlay">
        <div className="spectrum-bg banner-wide-left">
          <img
            src="/images/left-slide-gradent.png"
            alt="Gradient Spectrum"
            className="gradient-img"
          />
        </div>
        <div className="spectrum-content">
          <div className="text-slider-container">
            {textSlides.map((ts, i) => (
              <div key={i} className={`change-txt text-slide${textIdx === i ? ' active' : ''}`}>
                <p className="subtitle">{ts.subtitle}</p>
                <h1 className="title">{ts.title}</h1>
              </div>
            ))}
          </div>
          <div className="text-slider-dots">
            {textSlides.map((_, i) => (
              <span
                key={i}
                className={`text-dot${textIdx === i ? ' active' : ''}`}
                onClick={() => setTextIdx(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom white text bar */}
      <div className="text-content-bar">
        <div className="info-slider-container">
          {infoSlides.map((info, i) => (
            <div key={i} className={`inner-content info-slide${infoIdx === i ? ' active' : ''}`}>
              <p className="description-text">{info.desc}</p>
              <div className="action-row">
                <a href="#" className="btn-know-more">
                  Know More{' '}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <span className="status-link">{info.tagline}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="info-slider-dots">
          {infoSlides.map((_, i) => (
            <span
              key={i}
              className={`info-dot${infoIdx === i ? ' active' : ''}`}
              onClick={() => setInfoIdx(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
