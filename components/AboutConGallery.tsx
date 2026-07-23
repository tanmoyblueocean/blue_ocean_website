'use client';

import { useState, useEffect } from 'react';

const slides = [
  { img: '/images/ourVision-img2.png', alt: 'Our Vision 1' },
  { img: '/images/ourVision-img1.jpg', alt: 'Our Vision 2' },
];

const textSlides = [
  { subtitle: 'Clarity of Transformation', title: 'Illuminating The Road to Success' },
  { subtitle: 'Insightful Conferences',    title: 'Connecting Leaders to Drive Change' },
];

const infoSlides = [
  {
    desc: 'To be the world\'s most trusted partner in professional growth and organizational transformation, delivering immersive learning experiences, cutting-edge consulting, and future-defining conferences. We envision a borderless ecosystem where technology powers personalized learning, data-driven insights fuel strategic excellence, and every interaction creates lasting value for our clients, learners, and communities.',
    tagline: 'At Blue Ocean, we will not just prepare you for the future, we will co-create it with you.',
    isList: false,
  },
  {
    items: [
      'Empowering organizations to overcome challenges and achieve lasting success through expert consulting solutions.',
      'Future-proofing professionals with industry knowledge needed to lead the world through impactful training.',
      'Providing opportunities for meaningful connections through our flagship events that shape a thriving future.',
    ],
    isList: true,
  },
];

export default function AboutConGallery() {
  const [slideIdx, setSlideIdx]   = useState(0);
  const [textIdx, setTextIdx]     = useState(0);
  const [infoIdx, setInfoIdx]     = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => setSlideIdx((i) => (i + 1) % slides.length), 5000);
    const t2 = setInterval(() => setTextIdx((i)  => (i + 1) % textSlides.length), 5000);
    const t3 = setInterval(() => setInfoIdx((i)  => (i + 1) % infoSlides.length), 5000);
    return () => { clearInterval(t1); clearInterval(t2); clearInterval(t3); };
  }, []);

  return (
    <section className="con-gallery">
      <div className="slider-wrapper">
        <div className="slider-images">
          {slides.map((s, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={s.img} alt={s.alt} className={`slide-img${slideIdx === i ? ' active' : ''}`} />
          ))}
        </div>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <span key={i} className={`dot${slideIdx === i ? ' active' : ''}`} onClick={() => setSlideIdx(i)}></span>
          ))}
        </div>
      </div>

      <div className="spectrum-overlay">
        <div className="spectrum-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/left-slide-gradent.png" alt="Gradient Spectrum" className="gradient-img" />
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
              <span key={i} className={`text-dot${textIdx === i ? ' active' : ''}`} onClick={() => setTextIdx(i)}></span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-content-bar text-content-bar-about">
        <div className="info-slider-container">
          {infoSlides.map((info, i) => (
            <div key={i} className={`inner-content info-slide${infoIdx === i ? ' active' : ''}`}>
              {info.isList ? (
                <ul className="list-disc list-disc-about">
                  {info.items!.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              ) : (
                <>
                  <p className="description-text">{info.desc}</p>
                  <div className="action-row">
                    <span className="status-link">{info.tagline}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="info-slider-dots">
          {infoSlides.map((_, i) => (
            <span key={i} className={`info-dot${infoIdx === i ? ' active' : ''}`} onClick={() => setInfoIdx(i)}></span>
          ))}
        </div>
      </div>
    </section>
  );
}
