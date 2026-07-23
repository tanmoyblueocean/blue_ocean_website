'use client';

import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    title: 'IPSCMI',
    logo: '/images/ipscmi.svg',
    alt: 'IPSCMI Logo',
    description: <>As a globally recognized certification body, <strong>IPSCMI</strong> sets the standard for supply chain and procurement excellence. Our affiliation ensures professionals gain industry-leading expertise, unlocking strategic advantages in global trade and logistics.</>,
    highlight: <><span className="light-blue">Transforming Potential into Expertise</span><br /><span className="bold-blue">One Certification at a Time.</span></>,
  },
  {
    title: 'CILT',
    logo: '/images/cilt.svg',
    alt: 'CILT Logo',
    description: <>The Chartered Institute of Logistics and Transport (<strong>CILT</strong>) is the leading professional body for everyone who works in supply chain, logistics and transport.</>,
    highlight: <><span className="light-blue">Empowering Global Logistics</span><br /><span className="bold-blue">Connecting the World.</span></>,
  },
  {
    title: 'CIPS',
    logo: '/images/cips.svg',
    alt: 'CIPS Logo',
    description: <>The Chartered Institute of Procurement &amp; Supply (<strong>CIPS</strong>) promotes and develops high standards of professional skill, ability, and integrity among all those engaged in purchasing and supply chain management.</>,
    highlight: <><span className="light-blue">Leading Global Procurement</span><br /><span className="bold-blue">Setting the Standard.</span></>,
  },
  {
    title: 'American Purchasing',
    logo: '/images/american-purchasing.svg',
    alt: 'American Purchasing Logo',
    description: 'Providing world-class training and certification for procurement professionals, ensuring compliance, efficiency, and strategic sourcing mastery across all industries.',
    highlight: <><span className="light-blue">Advancing Procurement Strategies</span><br /><span className="bold-blue">Optimizing Value.</span></>,
  },
  {
    title: 'PeopleCert',
    logo: '/images/prople-cert.png',
    alt: 'PeopleCert Logo',
    description: 'PeopleCert is a global leader in the delivery of examination and certification services, equipping learners and organizations with the tools needed to drive efficiency and innovation.',
    highlight: <><span className="light-blue">Certifying the Future</span><br /><span className="bold-blue">Driving Excellence.</span></>,
  },
];

const SLIDE_DURATION = 4000;

export default function ExcellenceSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startAutoSlide();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
    startAutoSlide();
  };

  return (
    <div className="excellence-content-wrapper">
      <div className="excellence-text">
        <div className="excellence-text-slider">
          {slides.map((slide, i) => (
            <div className={`exc-slide${i === index ? ' active' : ''}`} key={slide.title}>
              <h3 className="brand-title">{slide.title}</h3>
              <p className="description">{slide.description}</p>
              <p className="highlight-textt">{slide.highlight}</p>
            </div>
          ))}
        </div>
        <a href="#" className="btn-know-more">
          Know More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="arrow-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <div className="excellence-visual">
        <div className="triangle-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/train-triangle.png" alt="Triangle shape" className="triangle-bg" />
          {slides.map((slide, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={slide.title}
              src={slide.logo}
              alt={slide.alt}
              className={`center-logo logo-slide${i === index ? ' active' : ''}`}
              style={i === 0 ? { width: 130 } : undefined}
            />
          ))}
        </div>

        <div className="slider-controls">
          <button className="slider-btn prev-btn" onClick={() => go(-1)} aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          </button>
          <button className="slider-btn next-btn" onClick={() => go(1)} aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
