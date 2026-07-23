import Header from '@/components/Header';
import Footer from '@/components/Footer';

const pastEvents = [
  {
    logo: '/images/ipsc-delhi.svg',
    logoAlt: 'CXO London',
    partnerLogo: '/images/field fisher 1.png',
    partnerAlt: 'Fieldfisher',
    partnerTall: false,
    skyline: '/images/london 001 1.png',
    skylineAlt: 'London Skyline',
    city: 'London',
    actionText: 'Discover IPSC LONDON 2024 Conference',
  },
  {
    logo: '/images/IPSC riyadh.svg',
    logoAlt: 'CXO Riyadh',
    partnerLogo: '/images/kingdom-logo 1.png',
    partnerAlt: 'Kingdom Centre',
    partnerTall: true,
    skyline: '/images/riyadh-2016.png',
    skylineAlt: 'Riyadh Skyline',
    city: 'Riyadh',
    actionText: 'Discover IPSC RIYADH 2024 Conference',
  },
  {
    logo: '/images/IPSC mumbai.svg',
    logoAlt: 'CXO Mumbai',
    partnerLogo: '/images/01-03.svg',
    partnerAlt: 'Mumbai Partner',
    partnerTall: true,
    skyline: '/images/TAj Mumbai 1.png',
    skylineAlt: 'Mumbai Skyline',
    city: 'Mumbai',
    actionText: 'Discover IPSC MUMBAI 2024 Conferences',
  },
  {
    logo: '/images/IPSC riyadh.svg',
    logoAlt: 'CXO Riyadh',
    partnerLogo: '/images/al-faisaliah-tower.png',
    partnerAlt: 'Al Faisaliah Tower',
    partnerTall: true,
    skyline: '/images/riyadh-2016.png',
    skylineAlt: 'Riyadh Skyline',
    city: 'Riyadh',
    actionText: 'Discover IPSC RIYADH 2024 Conference',
  },
];

export default function ConferenceCxoPage() {
  return (
    <>
      <Header />

      {/* Hero Video */}
      <section className="hero-section">
        <video className="hero-bg-video" autoPlay loop muted playsInline controls poster="/images/ipsc-banner.webp">
          <source src="https://blueoceancorporation.in/assets/frontend/images/ipsc-video/Cxo-Highlights-2024.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Voices of Strategic Leadership */}
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
            <img src="/images/CXO-round-table.svg" alt="CXO Logo" className="ipsc-leadership__logo" />
          </div>

          <div className="ipsc-leadership__content">
            <h2 className="ipsc-leadership__header">
              <strong>Voices of Strategic Leadership</strong>
            </h2>

            <p className="ipsc-leadership__para">
              The CXO Roundtable is an exclusive platform that brings together C-suite executives CEOs, CFOs, COOs, CHROs, and other senior leaders to exchange insights on innovation, strategy, and transformative leadership. This high-level forum fosters meaningful dialogue, peer-to-peer learning, and collaborative thinking to navigate challenges and shape future-ready organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section id="cxo-mission">
        <h2 className="section-title">Mission and Vision</h2>

        <div className="cxo-gradient-box">
          <div className="cxo-content-grid">
            <div className="cxo-brand-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/CXO-round-white.png" alt="CXO Round Table Logo" className="cxo-logo" />
              <div className="cxo-tagline">
                <span className="tagline-small">CONVERGENCE<br />OF THE</span><br />
                <span className="tagline-large">C-SUITES</span>
              </div>
            </div>

            <div className="cxo-text-col">
              <div className="cxo-mission-block">
                <h3>Mission</h3>
                <p>To foster innovation and excellence in leadership by creating a collaborative environment for industry leaders to share knowledge and strategies</p>
              </div>

              <div className="cxo-vision-block">
                <h3>Vision</h3>
                <p>To be a beacon of enlightenment for executives, empowering them to navigate evolving market dynamics and achieve organizational success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="ipsc-keyfeatures">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/cxo-full.png" alt="" className="ikf-bg-image" />

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
              <span className="fw-200">Innovation</span>
              <span className="fw-700">Leadership</span>
              <span className="fw-200" style={{ fontWeight: 100 }}>Strategy</span><br />
              <span className="fw-700">Digital</span><br />
              <span className="fw-200" style={{ fontWeight: 100 }}>Transformation</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Driving Excellence Through Innovation and Strategy */}
      <section className="why-ipsc">
        <div className="wi-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/leftcenpayner.png" alt="CXO Roundtable" />
        </div>

        <div className="wi-container">
          <div className="wi-content-wrapper">
            <div id="cxo-colaboration">
              <h2>Driving Excellence Through Innovation and Strategy.</h2>

              <div className="colaboration-grid">
                <div className="colaboration-column">
                  <div className="content-block">
                    <h3>Innovation</h3>
                    <p>Exploring cutting-edge ideas and technologies to drive business transformation</p>
                  </div>
                  <div className="content-block">
                    <h3>Strategy</h3>
                    <p>Developing actionable strategies to address challenges and seize opportunities in the global market.</p>
                  </div>
                </div>

                <div className="colaboration-column">
                  <div className="content-block">
                    <h3>Leadership</h3>
                    <p>Cultivating leadership skills to inspire teams and drive organizational excellence.</p>
                  </div>
                  <div className="content-block">
                    <h3>Digital Transformation</h3>
                    <p>Leveraging digital technologies to enhance processes, improve customer experience, and foster agility.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership conversations that spark meaningful change */}
      <section className="ipsc-achieve-section">
        <div className="ipsc-achieve-box">
          <div className="achieve-canvas">
            <div className="achieve-bg achieve-bg-cxo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/chain-innovation.png" alt="Innovation Chain" />
            </div>
          </div>

          <div className="achieve-content" style={{ textAlign: 'right' }}>
            <p>Leadership<br />conversations that <br />spark meaningful <br />change</p>
          </div>
        </div>
      </section>

      {/* Why CXO Roundtable */}
      <section id="cxo-round">
        <div className="cxo-round-container">
          <div className="cxo-title-column">
            <h2 className="masked-text">
              <span className="weight-light">WHY</span><br />
              <span className="weight-black">CXO</span><br />
              <span className="weight-bold">ROUNDTABLE?</span>
            </h2>
          </div>

          <div className="cxo-benefits-grid">
            <div className="cxo-benefit-col">
              <div className="benefit-block">
                <h3>Industry-Leading Insights</h3>
                <p>Access thought leadership and best practices shared by top executives and industry experts.</p>
              </div>
              <div className="benefit-block">
                <h3>Actionable Solutions</h3>
                <p>Gain practical strategies that you can immediately apply to your organization.</p>
              </div>
            </div>

            <div className="cxo-benefit-col">
              <div className="benefit-block">
                <h3>Networking Opportunities</h3>
                <p>Engage with like-minded leaders to build valuable professional relationships.</p>
              </div>
              <div className="benefit-block">
                <h3>Driving Innovation and Growth</h3>
                <p>Discover forward-thinking approaches to foster innovation and accelerate business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Will Attend */}
      <section id="cxo-consultants">
        <div className="consultants-image-area">
          <div className="triangle-indicator"></div>
        </div>

        <div className="consultants-content-area">
          <div className="left-col">
            <h2 className="why-text">Who<br />Will<br />Attend?</h2>
          </div>

          <div className="right-col">
            <div className="blue-panel">
              <p className="panel-sub">The CXO<br />Roundtable<br />is designed for:</p>
              <p className="panel-list">C-suite executives</p>
              <h3 className="panel-main">CEOs, CFOs,<br />COOs, CIOs <span className="small-text">etc.</span></h3>
              <p className="panel-list">Senior leaders and<br />decision-makers</p>
              <p className="panel-list">Industry experts and<br />consultants</p>
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

      {/* IPSC Signature Past Events */}
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
