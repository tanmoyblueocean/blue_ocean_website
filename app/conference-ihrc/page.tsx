import Header from '@/components/Header';
import Footer from '@/components/Footer';

const pastEvents = [
  {
    logo: '/images/ipsc-delhi.svg',
    logoAlt: 'IHRC London',
    partnerLogo: '/images/field fisher 1.png',
    partnerAlt: 'Fieldfisher',
    partnerTall: false,
    skyline: '/images/london 001 1.png',
    skylineAlt: 'London Skyline',
    city: 'London',
    actionText: 'Discover IHRC LONDON 2024 Conference',
  },
  {
    logo: '/images/IPSC riyadh.svg',
    logoAlt: 'IHRC Riyadh',
    partnerLogo: '/images/kingdom-logo 1.png',
    partnerAlt: 'Kingdom Centre',
    partnerTall: true,
    skyline: '/images/riyadh-2016.png',
    skylineAlt: 'Riyadh Skyline',
    city: 'Riyadh',
    actionText: 'Discover IHRC RIYADH 2024 Conference',
  },
  {
    logo: '/images/IPSC mumbai.svg',
    logoAlt: 'IHRC Mumbai',
    partnerLogo: '/images/01-03.svg',
    partnerAlt: 'Mumbai Partner',
    partnerTall: true,
    skyline: '/images/TAj Mumbai 1.png',
    skylineAlt: 'Mumbai Skyline',
    city: 'Mumbai',
    actionText: 'Discover IHRC MUMBAI 2024 Conferences',
  },
  {
    logo: '/images/IPSC riyadh.svg',
    logoAlt: 'IHRC Riyadh',
    partnerLogo: '/images/al-faisaliah-tower.png',
    partnerAlt: 'Al Faisaliah Tower',
    partnerTall: true,
    skyline: '/images/riyadh-2016.png',
    skylineAlt: 'Riyadh Skyline',
    city: 'Riyadh',
    actionText: 'Discover IHRC RIYADH 2024 Conference',
  },
];

export default function ConferenceIhrcPage() {
  return (
    <>
      <Header />

      {/* Hero Video */}
      <section className="hero-section">
        <video className="hero-bg-video" autoPlay loop muted playsInline controls poster="/images/ipsc-banner.webp">
          <source src="https://blueoceancorporation.in/assets/frontend/images/ipsc-video/IHRC-2022-armani -hotel-dubai.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Embracing the Future of Work */}
      <section className="ipsc-leadership">
        <div className="con-main-hight">
          <div className="con-highlighted" style={{ display: 'block' }}>
            <div className="ipsc_stripe ipsc-new-bg banner-bottom-strip">
              <div className="ipsc-cont-strip">
                <div className="logo-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://blueoceancorporation.in/assets/frontend/images/ipsc_hover.svg" alt="IPSC Logo" />
                </div>
                <div className="strip-text">IPSC <span>2026</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ipsc-leadership__concept-element">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Concept Element.png" alt="Concept Element" />
        </div>

        <div className="ipsc-leadership__container">
          <div className="ipsc-leadership__logo-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ihrc.webp" alt="IHRC Logo" className="ipsc-leadership__logo" />
          </div>

          <div className="ipsc-leadership__content">
            <h2 className="ipsc-leadership__header">
              Embracing <strong>The Future of Work</strong>
            </h2>

            <p className="ipsc-leadership__para">
              The International Human Resources Conference (IHRC) is a future-focused platform designed to equip HR leaders and teams with the knowledge, tools, and strategies to navigate the evolving world of work.
            </p>
          </div>
        </div>
      </section>

      {/* Non-Profit Initiative / Strategic Impact */}
      <section className="ipsc-leadership__mission-wrapper">
        <div className="ipsc-leadership__mission-banner ihrc-leadership__mission-banner">
          <div className="ipsc-leadership__mission-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/IHRC-hover.svg" alt="IHRC Logo White" className="ipsc-leadership__mission-logo" />
            <div className="ipsc-leadership__mission-title-stack">
              <div className="stack-line-1">THE</div>
              <div className="stack-line-2">INTERNATIONAL</div>
              <div className="stack-line-3">HUMAN RESOURCES</div>
              <div className="stack-line-4">CONFERENCE</div>
            </div>
          </div>

          <div className="ipsc-leadership__mission-info">
            <h4 className="ipsc-leadership__info-title">Non-Profit Initiative</h4>
            <p className="ipsc-leadership__info-desc">
              <strong>IHRC</strong> is a non-profit initiative designed to drive transformative change across the human resources and people-management sectors.
            </p>
          </div>

          <div className="ipsc-leadership__mission-info">
            <h4 className="ipsc-leadership__info-title">Strategic Impact</h4>
            <p className="ipsc-leadership__info-desc ipsc-leadership__info-desc--desktop">
              The conference leverages strategic and financial support to address challenges and create opportunities for growth within the industry.
            </p>
            <p className="ipsc-leadership__info-desc ipsc-leadership__info-desc--mobile">
              The conference addresses critical industry challenges and drives transformation by delivering global insights, fostering collaboration, and offering practical solutions for sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="ipsc-keyfeatures">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/ihrc-feature.png" alt="" className="ikf-bg-image" />

        <div className="ikf-slants">
          <div className="ikf-slant-white"></div>
          <div className="ikf-slant-blue"></div>
          <div className="clipped-border"></div>
        </div>

        <div className="ikf-header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/angle-ihrc.png" alt="" className="ikf-triangle" />
          <span className="ikf-header-text">Key Features</span>
        </div>

        <div className="ikf-container">
          <div className="ikf-column">
            <h2 className="ikf-title">
              <span className="fw-200">Future -</span><br />
              <span className="fw-700">Ready Skills</span>
            </h2>
            <p className="ikf-desc">
              <strong>IHRC</strong> highlights the need for upskilling and reskilling the workforce to meet the demands of tomorrow&apos;s job market. It explores strategies for fostering a culture of continuous learning and development.
            </p>
          </div>

          <div className="ikf-column">
            <h2 className="ikf-title">
              <span className="fw-200">Employee</span><br />
              <span className="fw-700">Experience</span>
            </h2>
            <p className="ikf-desc">
              The conference delves into creating a seamless and engaging employee experience, ensuring organizations can attract, retain, and nurture top talent in a competitive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership and Collaboration */}
      <section className="why-ipsc">
        <div className="wi-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/ihrc-right-images.png" alt="IHRC keynote speaker" />
        </div>

        <div className="wi-container">
          <div className="wi-content-wrapper">
            <div className="ihrc-colaboration">
              <h2>LEADERSHIP <span style={{ fontWeight: 100 }}>AND</span><br />COLLABORATION</h2>

              <div className="content-grid">
                <div>
                  <h3>Visionary Leadership</h3>
                  <p>IHRC underscores the importance of visionary leadership in driving organizational success. It brings together global HR thought leaders to share best practices and innovative approaches.</p>
                </div>
                <div>
                  <h3>Cross-Functional Collaboration</h3>
                  <p>The conference encourages collaboration across departments, breaking down silos to create a cohesive and aligned workforce.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Vision Meets Action */}
      <section className="ipsc-achieve-section">
        <div className="ipsc-achieve-box">
          <div className="achieve-canvas">
            <div className="achieve-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/ihrc-overlay.png" alt="IHRC Overlay" />
            </div>
            <div className="achieve-blue-overlay"></div>
          </div>

          <div className="achieve-content">
            <p>Where Vision Meets Action<br />Redefining Work for<br />a Global Future.</p>
          </div>
        </div>
      </section>

      {/* Aspire. Empower. Ignite. */}
      <section className="aspire">
        <div className="aspire-top-container">
          <h2 className="aspire-heading">ASPIRE. EMPOWER. IGNITE.</h2>

          <div className="aspire-grid-top">
            <div className="aspire-image-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/leader-why.png" alt="Why IHRC Matters Leader" />
            </div>
            <div className="aspire-list-col">
              <ul>
                <li>Bridges strategy, people, and performance</li>
                <li>Explores future-focused trends in work and workforce</li>
                <li>Provides access to global HR thought leaders</li>
                <li>Focuses on technology, agility, and innovation in HR</li>
                <li>Highlights sustainable and inclusive HR practices</li>
                <li>Offers actionable insights for real-world application</li>
                <li>Builds capabilities for future-ready HR leadership</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="aspire-bottom-container">
          <div className="metaverse-triangle">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hr-hr-metaverse.png" alt="HR Metaverse" />
          </div>

          <div className="aspire-grid-bottom">
            <div className="aspire-text-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/IHRC-sticky-menu-logo-1.svg" alt="IHRC Logo" className="ihrc-logo" />
              <h3 className="gold-heading">A unique platform to learn, network, and advance your HR career and organization.</h3>
              <p>IHRC brings together decision-makers, thought leaders, and HR professionals to explore the latest trends, innovations, and best practices shaping the HR landscape.</p>
              <p>Join industry experts and peers to gain insights, share knowledge, and drive impactful change in your organization.</p>
              <a href="#" className="btn-primary">
                Know More
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/arrow-right.svg" alt="Right Arrow" className="ea-arrow-iconnn" style={{ position: 'relative', top: 6 }} />
              </a>
            </div>
            <div className="aspire-featured-img-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/ihrc-home.png" alt="Armani Hotel Dubai Burj Khalifa" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming IPSC 2025 Conference */}
      <section className="upcoming-events">
        <div className="upcoming-bg-track">
          <div className="upcoming-wrapper">
            <h2 className="upcoming-title">Upcoming IPSC 2025 Conference</h2>
          </div>
        </div>

        <div className="upcoming-wrapper">
          <div className="conference-card">
            <div className="conf-info-wrapper">
              <div className="conf-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/ipsc-delhi.svg" alt="IPSC 2025 Delhi" />
              </div>

              <div className="info-divider div-left"></div>

              <div className="conf-meta-stack">
                <div className="conf-date-box">
                  <div className="date-day">7<sup>TH</sup></div>
                  <div className="date-month">AUGUST<br />2025</div>
                </div>

                <div className="info-divider div-right"></div>

                <div className="conf-venue-box">
                  <div className="venue-name">LE<br />MÉRIDIEN</div>
                  <div className="venue-city">New Delhi</div>
                </div>
              </div>
            </div>

            <div className="conf-graphic-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/7gIQUKRXf6IrHt7vCu9QgM2ETasFuxIAFkQMeAMT.svg" alt="IPSC 2025 Highlights" />
            </div>

            <a href="#" className="conf-action-bar">
              <span className="bar-text">Discover More</span>
              <span className="bar-arrow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Arrow right.png" alt="Right Arrow" className="btn-icon" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* IHRC Signature Past Events */}
      <section className="past-events">
        <div className="upcoming-wrapper">
          <h2 className="past-events-title">IPSC Signature Past Events</h2>

          <ul className="past-events-list">
            {pastEvents.map((event, i) => (
              <li className="past-event-card" key={i}>
                <div className="pe-brand-area">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={event.logo} alt={event.logoAlt} className="pe-ipsc-logo" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={event.partnerLogo} alt={event.partnerAlt} className={`pe-partner-logo${event.partnerTall ? ' partner-tall' : ''}`} />
                </div>

                <div className="pe-skyline-area">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={event.skyline} alt={event.skylineAlt} className="pe-skyline-img" />
                  <span className="pe-city-watermark">{event.city}</span>
                </div>

                <a href="#" className="pe-action-bar">
                  <span className="pe-action-text">{event.actionText}</span>
                  <span className="bar-arrow">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/Arrow right.png" alt="Right Arrow" className="btn-iconss" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where Leaders Meet */}
      <section className="where-leader-meet">
        <h2>Where Leaders Meet. Where Industries Evolve.</h2>
        <a href="#" className="btn-revolution">
          Be Part Of The Revolution
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Arrow right.png" alt="Arrow Right" />
        </a>
      </section>

      <Footer />
    </>
  );
}
