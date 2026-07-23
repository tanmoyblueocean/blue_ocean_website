'use client';

import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    img: '/images/con-award1.png',
    alt: 'Award Ceremony',
    logo: '/images/IPSC2027.png',
    logoAlt: 'IPSC Logo',
    title: <>International Procurement &amp;<br />Supply Chain Conference</>,
    desc: 'Empowering supply chain leaders with cutting-edge strategies to drive efficiency, resilience, and sustainability.',
    bullets: [
      'Hosted global procurement experts & Fortune 500 leaders',
      'Featured innovations in digital supply chain transformation',
    ],
  },
  {
    img: '/images/con-award2.png',
    alt: 'IHRC Event',
    logo: '/images/IHRC.svg',
    logoAlt: 'IHRC Logo',
    title: 'The International Human Resources Conference',
    desc: 'IHRC is a forward-thinking initiative designed to prepare HR leaders and teams for the rapidly evolving "future of work." IHRC serves as a platform to equip HR professionals with the knowledge, tools, and strategies needed to navigate this dynamic landscape.',
    bullets: [] as string[],
  },
  {
    img: '/images/con-award3.png',
    alt: 'CXO Roundtable',
    logo: '/images/CXO-round table.svg',
    logoAlt: 'CXO Logo',
    title: 'CXO Roundtable – Convergence of the C-Suite',
    desc: 'Uniting top executives to navigate challenges, drive innovation, and shape the future of business leadership',
    bullets: [
      'Exclusive roundtable discussions with industry leaders',
      'Focused on balancing resilience and sustainability in supply chain management',
    ],
  },
  {
    img: '/images/con-award4.png',
    alt: 'BOWLD Event',
    logo: '/images/BOWLD-1.svg',
    logoAlt: 'BOWLD Logo',
    title: 'Blue Ocean Women Leadership Development',
    desc: 'Blue Ocean Women Leadership Development (BOWLD) is an empowering conference held in honor of International Women’s Day. It unites women leaders from diverse fields to inspire, connect, and celebrate achievements while fostering growth and collaboration.',
    bullets: [] as string[],
  },
];

const SLIDE_DURATION = 5000;

export default function SignatureEventsSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
    startTimer();
  };

  return (
    <div className="se-slider-container">
      {slides.map((slide, i) => (
        <div className={`se-slide${i === index ? ' active' : ''}`} key={i}>
          <div className="se-image-section">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.img} alt={slide.alt} className="main-event-img" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mobileSignatrueEventTriangle.png" alt="Mobile Overlay" className="mobile-triangle-overlay" />
          </div>
          <div className="se-text-section">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/con-left-triangle.png" alt="Background Shape" className="desktop-bg-triangle" />
            <div className="se-text-content">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.logo} alt={slide.logoAlt} className="se-logo" />
              <h3>{slide.title}</h3>
              <p>{slide.desc}</p>
              {slide.bullets.length > 0 && (
                <ul>
                  {slide.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
              <a href="#" className="se-nav-btn">&rarr;</a>
            </div>
          </div>
        </div>
      ))}

      <div className="se-slider-controls">
        <button className="se-ctrl-btn prev-btn" onClick={() => go(-1)} aria-label="Previous">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://blueoceancorporation.in/assets/frontend/images/icons/arrow-left.svg" alt="Previous" />
        </button>
        <button className="se-ctrl-btn next-btn" onClick={() => go(1)} aria-label="Next">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://blueoceancorporation.in/assets/frontend/images/icons/arrow-right.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
}
