'use client';

import { useEffect, useState } from 'react';

const courseSlides = [
  {
    body: (
      <>
        <p>Elevate your expertise with the <strong>CISCP</strong>-Certified International Supply Chain Professional program by <strong>Blue Ocean Academy.</strong></p>
        <p>Gain comprehensive knowledge in supply chain strategies, operations, and management to drive efficiency and business success.</p>
        <p className="cta-text">Register today and take the first step toward becoming a Certified Supply Chain Leader!</p>
      </>
    ),
  },
  {
    body: (
      <>
        <p>Advance your procurement expertise with the <strong>CIPM</strong> (Certified International Procurement Manager) program.</p>
        <p>Gain comprehensive knowledge of procurement strategies, supply chain operations, and management to improve efficiency and drive business success.</p>
        <p className="cta-text">Take your expertise to the next level!</p>
      </>
    ),
  },
  {
    body: (
      <>
        <p>Strengthen your expertise in HR with the <strong>CHRP-CHRM</strong> Certified Human Resources Professional / Manager program.</p>
        <p>Gain comprehensive knowledge of HR strategies, operations, and leadership to drive organizational success.</p>
        <p className="cta-text">Take your expertise to the next level!</p>
      </>
    ),
  },
  {
    body: (
      <>
        <p>Advance your expertise with the <strong>CLTD</strong> – Certified in Logistics, Transportation, and Distribution program.</p>
        <p>Acquire comprehensive knowledge of logistics, transportation, and distribution strategies to enhance operational efficiency and drive business success.</p>
        <p className="cta-text">Take Your Expertise to the Next Level!</p>
      </>
    ),
  },
];

const certSlides = [
  { logo: '/images/IPSCMI-logo.png', alt: 'IPSCMI Logo', acronyms: ['CISCP'], name: <>Certified International<br />Supply Chain<br />Professional</> },
  { logo: '/images/Amireican-ceetification-inst.svg', alt: 'ACI Logo', acronyms: ['CHRP', 'CHRM'], name: <>Certified Human<br />Resources Professional<br />/ Management</> },
  { logo: '/images/ascm-logo.png', alt: 'APICS Logo', acronyms: ['APICS', 'CLTD'], name: <>Certified in Logistics,<br />Transportation and<br />Distribution</> },
  { logo: '/images/IPSCMI-logo.png', alt: 'IPSCMI Logo', acronyms: ['CICCM'], name: <>Certified International<br />Commercial Contracts<br />Manager</> },
];

export default function FeaturedCoursesSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % courseSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative' }}>
      <div className="course-select">
        <div className="course-select-container">
          <div className="course-select-media"></div>

          <div className="course-select-content">
            <h2>Our Featured Training Courses</h2>

            <div className="course-text-slider">
              {courseSlides.map((slide, i) => (
                <div className={`course-slide${i === index ? ' active' : ''}`} key={i}>
                  {slide.body}
                </div>
              ))}
            </div>

            <a href="#" className="btn-register">
              Register Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="arrow-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="potential-triangle">
        <div className="triangle-content">
          <h2 className="triangle-heading">
            Stand Out with Industry-Recognized<br />
            Certification
          </h2>

          <div className="certification-slider">
            {certSlides.map((cert, i) => (
              <div className={`cert-slide${i === index ? ' active' : ''}`} key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cert.logo} alt={cert.alt} className="ipscmi-logo" />
                <div className="cert-details">
                  {cert.acronyms.length > 1 ? (
                    <div className="cert-acronym-group">
                      <span className="cert-acronym small-acronym">{cert.acronyms[0]}</span>
                      <span className="cert-acronym">{cert.acronyms[1]}</span>
                    </div>
                  ) : (
                    <span className="cert-acronym">{cert.acronyms[0]}</span>
                  )}
                  <div className="vertical-divider"></div>
                  <p className="cert-full-name">{cert.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
