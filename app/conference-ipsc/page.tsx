import Header from '@/components/Header';
import Footer from '@/components/Footer';

const pastEvents = [
  {
    logo: '/images/ipsc-delhi.svg',
    logoAlt: 'IPSC London',
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
    logoAlt: 'IPSC Riyadh',
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
    logoAlt: 'IPSC Mumbai',
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
    logoAlt: 'IPSC Riyadh',
    partnerLogo: '/images/al-faisaliah-tower.png',
    partnerAlt: 'Al Faisaliah Tower',
    partnerTall: true,
    skyline: '/images/riyadh-2016.png',
    skylineAlt: 'Riyadh Skyline',
    city: 'Riyadh',
    actionText: 'Discover IPSC RIYADH 2024 Conference',
  },
  {
    logo: '/images/IPSC2027.png',
    logoAlt: 'IPSC Dubai',
    partnerLogo: '/images/palm-dubai-1.png',
    partnerAlt: 'Palm Dubai',
    partnerTall: true,
    skyline: '/images/atalntic the plam 1.png',
    skylineAlt: 'Dubai Skyline',
    city: 'Dubai',
    actionText: 'Discover IPSC DUBAI 2024 Conference',
  },
  {
    logo: '/images/abudhabi.png',
    logoAlt: 'IPSC Abu Dhabi',
    partnerLogo: '/images/emirates.png',
    partnerAlt: 'Emirates',
    partnerTall: true,
    skyline: '/images/Abu dhabi 1.png',
    skylineAlt: 'Abu Dhabi Skyline',
    city: 'Abu Dhabi',
    actionText: 'Discover IPSC ABU DHABI 2024 Conference',
  },
  {
    logo: '/images/IPSC2027.png',
    logoAlt: 'IPSC Dubai',
    partnerLogo: '/images/palm-dubai-1.png',
    partnerAlt: 'Palm Dubai',
    partnerTall: true,
    skyline: '/images/Dubai 2.png',
    skylineAlt: 'Dubai Skyline',
    city: 'Dubai',
    actionText: 'Discover IPSC DUBAI 2024 Conference',
  },
  {
    logo: '/images/IPSC-qatar.png',
    logoAlt: 'IPSC Qatar',
    partnerLogo: '/images/sheraton.png',
    partnerAlt: 'Sheraton',
    partnerTall: true,
    skyline: '/images/qatar 1.png',
    skylineAlt: 'Qatar Skyline',
    city: 'Qatar',
    actionText: 'Discover IPSC QATAR 2024 Conference',
  },
];

export default function ConferenceIpscPage() {
  return (
    <>
      <Header />

      {/* Hero Video */}
      <section className="hero-section">
        <video className="hero-bg-video" autoPlay loop muted playsInline controls poster="/images/ipsc-banner.webp">
          <source src="https://blueoceancorporation.in/assets/frontend/images/ipsc-video/ipsc-delhi-promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Elevating Global Thought Leadership */}
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
            <img src="/images/IPSC2027N.png" alt="IPSC Logo" className="ipsc-leadership__logo" />
          </div>

          <div className="ipsc-leadership__content">
            <h2 className="ipsc-leadership__header">
              Elevating Global <strong>Thought Leadership</strong>
            </h2>

            <p className="ipsc-leadership__para">
              The International Procurement and Supply Chain Conference - <strong>IPSC</strong> is a flagship event organized by Blue Ocean Corporation. It is a premier platform aimed at fostering the development and expansion of the global supply chain community.
            </p>
          </div>
        </div>
      </section>

      {/* Non-Profit Initiative / Strategic Impact */}
      <section className="ipsc-leadership__mission-wrapper">
        <div className="ipsc-leadership__mission-banner">
          <div className="ipsc-leadership__mission-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ipsc-logo-white.svg" alt="IPSC Logo White" className="ipsc-leadership__mission-logo" />
            <div className="ipsc-leadership__mission-title-stack">
              <div className="stack-line-1">THE</div>
              <div className="stack-line-2">INTERNATIONAL</div>
              <div className="stack-line-2">PROCUREMENT &amp;</div>
              <div className="stack-line-3">SUPPLY CHAIN</div>
              <div className="stack-line-4">CONFERENCE</div>
            </div>
          </div>

          <div className="ipsc-leadership__mission-info">
            <h4 className="ipsc-leadership__info-title">Non-Profit Initiative</h4>
            <p className="ipsc-leadership__info-desc">
              <strong>IPSC</strong> is a non-profit initiative designed to drive transformative change across the supply chain and procurement sectors.
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
        <img src="/images/key-feayure.svg" alt="" className="ikf-bg-image" />

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
              <span className="fw-200">Global</span><br />
              <span className="fw-700">Gathering</span>
            </h2>
            <p className="ikf-desc">
              <strong>IPSC</strong> brings together thought leaders, industry experts, and emerging talents from around the world.
            </p>
          </div>

          <div className="ikf-column">
            <h2 className="ikf-title">
              <span className="fw-200">Collaborative</span><br />
              <span className="fw-700">Platform</span>
            </h2>
            <p className="ikf-desc">
              It serves as a collaborative platform to overcome challenges and enable every segment of the supply chain industry to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Why IPSC Matters */}
      <section className="why-ipsc">
        <div className="wi-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/ipsc-ganguly.png" alt="Sourav Ganguly keynote speaker" />
        </div>

        <div className="wi-container">
          <div className="wi-content-wrapper">
            <div className="wi-title-box">
              <span className="wi-sub-text">WHY</span>
              <h2 className="wi-main-text">IPSC<br />MATTERS</h2>
            </div>

            <div className="wi-list-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/flag-in-blue.webp" alt="" className="wi-flag-icon" />

              <div className="wi-list-item">
                <h3 className="wi-item-title">Thought Leadership</h3>
                <p className="wi-item-desc">The conference provides a platform for sharing innovative ideas and best practices.</p>
              </div>

              <div className="wi-list-item">
                <h3 className="wi-item-title">Industry Transformation</h3>
                <p className="wi-item-desc"><strong>IPSC</strong> plays a pivotal role in shaping the future of the global supply chain community by addressing key challenges and fostering collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IPSC is more than a conference */}
      <section className="ipsc-achieve-section">
        <div className="ipsc-achieve-box">
          <div className="achieve-canvas">
            <div className="achieve-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/ipcs-btm-banner.svg" alt="IPSC Supply Chain Excellence" />
            </div>
            <div className="achieve-blue-overlay"></div>
          </div>

          <div className="achieve-content">
            <h2>IPSC</h2>
            <p>is more than just a conference; it is a movement dedicated to empowering the supply chain and procurement industries to achieve sustainable growth and excellence.</p>
          </div>
        </div>
      </section>

      {/* Inception / Expansion / Recognition */}
      <section className="ipsc-expansion-section">
        <div className="ipsc-expansion-wrapper">
          <div className="expansion-grid">
            <div className="expansion-box">
              <h3 className="exp-title">Inception</h3>
              <p className="exp-lead">IPSC<br />launched in<br />2014 in Doha, Qatar.</p>
            </div>

            <div className="expansion-box">
              <h3 className="exp-title">Expansion</h3>
              <p className="exp-para">IPSC has expanded to key cities like Mumbai, Dubai, Abu Dhabi, and Riyadh, broadening its regional impact.</p>
            </div>

            <div className="expansion-box">
              <h3 className="exp-title">Recognition</h3>
              <p className="exp-para">IPSC is widely recognized for driving innovation and excellence in supply chain and procurement industries.</p>
            </div>
          </div>
        </div>

        <div className="skyline-stage-full">
          <div className="qatar-ghost-text">QATAR</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gray-quter.png" alt="Qatar Skyline" className="skyline-layer sky-gray" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/colorful-quter.png" alt="Qatar Skyline" className="skyline-layer sky-color" />
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

      <Footer />
    </>
  );
}
