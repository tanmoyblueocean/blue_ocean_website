import Header from '@/components/Header';
import Footer from '@/components/Footer';

const pastEvents = [
  {
    logo: '/images/ipsc-delhi.svg',
    logoAlt: 'BOWLD London',
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
    logoAlt: 'BOWLD Riyadh',
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
    logoAlt: 'BOWLD Mumbai',
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
    logoAlt: 'BOWLD Riyadh',
    partnerLogo: '/images/al-faisaliah-tower.png',
    partnerAlt: 'Al Faisaliah Tower',
    partnerTall: true,
    skyline: '/images/riyadh-2016.png',
    skylineAlt: 'Riyadh Skyline',
    city: 'Riyadh',
    actionText: 'Discover IPSC RIYADH 2024 Conference',
  },
];

export default function ConferenceBowldPage() {
  return (
    <>
      <Header />

      {/* Hero Video */}
      <section className="hero-section">
        <video className="hero-bg-video" autoPlay loop muted playsInline controls poster="/images/ipsc-banner.webp">
          <source src="https://blueoceancorporation.in/assets/frontend/images/ipsc-video/Bowld-Promo-2025.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* A Global Platform for Women Empowerment */}
      <section className="ipsc-leadership">
        <div className="ipsc-leadership__concept-element">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/devider_angle-new.png" alt="Concept Element" />
        </div>

        <div className="ipsc-leadership__container">
          <div className="ipsc-leadership__logo-wrapper bowld__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/BOWLD-1.svg" alt="BOWLD Logo" className="ipsc-leadership__logo" />
          </div>

          <div className="ipsc-leadership__content">
            <h2 className="ipsc-leadership__header">
              A Global Platform for <strong>Women Empowerment</strong>
            </h2>

            <p className="ipsc-leadership__para">
              <strong>Blue Ocean Women Leadership Development (BOWLD) – EmpowHer</strong> is a transformative global initiative dedicated to celebrating the achievements of women and fostering a culture of collaboration, inspiration, and mutual support. This powerful platform is designed to enable women to unlock their full potential and drive meaningful change in their organizations and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Recognizing Excellence / Inspiring Leadership */}
      <section className="ipsc-leadership__mission-wrapper">
        <div className="ipsc-leadership__mission-banner ihrc-leadership__mission-banner bowld__banner">
          <div className="ipsc-leadership__mission-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/BOWLD-white.png" alt="BOWLD Logo White" className="ipsc-leadership__mission-logo bowld__mission-logo" />
            <div className="ipsc-leadership__mission-title-stack">
              <div className="stack-line-1">Blue</div>
              <div className="stack-line-2">Ocean Women</div>
              <div className="stack-line-2">Leadership</div>
              <div className="stack-line-3">Development</div>
            </div>
          </div>

          <div className="ipsc-leadership__mission-info">
            <h4 className="ipsc-leadership__info-title">Recognizing Excellence</h4>
            <p className="ipsc-leadership__info-desc">
              EmpowHer highlights the accomplishments of exceptional women leaders, offering them the recognition and visibility they rightfully deserve.
            </p>
          </div>

          <div className="ipsc-leadership__mission-info">
            <h4 className="ipsc-leadership__info-title">Inspiring Leadership</h4>
            <p className="ipsc-leadership__info-desc ipsc-leadership__info-desc--desktop">
              By sharing powerful success stories, the platform encourages emerging women leaders to aspire higher, challenge limitations, and lead with confidence.
            </p>
            <p className="ipsc-leadership__info-desc ipsc-leadership__info-desc--mobile">
              By sharing powerful success stories, the platform encourages emerging women leaders to aspire higher, challenge limitations, and lead with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Fostering a Stronger Community of Women Leaders */}
      <section className="ipsc-keyfeatures">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/supportive_background.png" alt="" className="ikf-bg-image" />

        <div className="ikf-slants">
          <div className="ikf-slant-white"></div>
          <div className="ikf-slant-blue ikf-slant-orange"></div>
          <div className="clipped-border"></div>
        </div>

        <div className="ikf-header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/support_top-angle.png" alt="" className="ikf-triangle" />
          <span className="ikf-header-text" style={{ color: '#0c1896' }}>Fostering a Stronger Community of Women Leaders</span>
        </div>

        <div className="ikf-container">
          <div className="ikf-column">
            <h2 className="ikf-title">
              <span className="fw-200">Global</span><br />
              <span className="fw-700">Connections</span>
            </h2>
            <p className="ikf-desc">
              BOWLD brings together women from diverse industries and backgrounds, building a worldwide network grounded in support, collaboration, and shared success.
            </p>
          </div>

          <div className="ikf-column">
            <h2 className="ikf-title">
              <span className="fw-200">Mentorship</span><br />
              <span className="fw-700">&amp; Guidance</span>
            </h2>
            <p className="ikf-desc">
              The platform creates meaningful mentorship opportunities, where experienced leaders nurture, advise, and empower emerging talent to thrive and lead with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Development */}
      <section className="why-ipsc">
        <div className="wi-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/leader-ship-left-image.png" alt="BOWLD Leadership" />
        </div>

        <div className="wi-container">
          <div className="wi-content-wrapper">
            <div className="ihrc-colaboration">
              <h2>LEADERSHIP <br />DEVELOPMENT</h2>

              <div className="content-grid">
                <div>
                  <h3>Skill Enhancement</h3>
                  <p>EmpowHer offers tailored programs and workshops to help women develop critical leadership skills, from strategic thinking to effective communication.</p>
                </div>
                <div>
                  <h3>Confidence Building</h3>
                  <p>The initiative focuses on empowering women to take on leadership roles with confidence and resilience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Vision Meets Action */}
      <section className="ipsc-achieve-section">
        <div className="ipsc-achieve-box bowld-achieve-box">
          <div className="achieve-canvas">
            <div className="achieve-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/spaecialday_img.png" alt="BOWLD Special Day" />
            </div>
          </div>

          <div className="achieve-content">
            <p>Where Vision Meets Action<br />Redefining Work for<br />a Global Future.</p>
          </div>
        </div>
      </section>

      {/* Rise. Shine. Lead. / Why BOWLD Matters */}
      <section id="bowld-matter-why">
        <div className="bowld-header-area">
          <h2 className="bowld-heading">Rise. Shine. Lead.</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hill.png" alt="" className="bg-hill-top-right" />
        </div>

        <div className="bowld-content-area">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hill-left.png" alt="" className="bg-hill-bottom-left" />

          <div className="bowld-container">
            <div className="bowld-content-grid">
              <div className="bowld-image-col">
                <div className="image-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/why_matter.png" alt="Why BOWLD Matters Leader" className="main-image" />

                  <div className="image-text-overlay">
                    <span className="text-lightt">WHY</span><br />
                    <span className="text-bold">BOWLD<br />MATTERS</span>
                  </div>
                </div>
              </div>

              <div className="bowld-text-col">
                <p><strong>Redefining Leadership:</strong> BOWLD is more than a platform, it&apos;s a global movement to reshape leadership through the advancement of women.</p>
                <p><strong>Bridging the Gender Gap:</strong> Offers tools, resources, and support to address ongoing challenges in gender equality.</p>
                <p><strong>Fostering Global Community:</strong> Connects women across borders to share experiences, support one another, and grow together.</p>
                <p><strong>Empowering with Purpose:</strong> Encourages women to lead with confidence, authenticity, and resilience.</p>
                <p><strong>Driving Change:</strong> Impacts individuals, organizations, and society through inclusive leadership development.</p>
                <p><strong>Championing Diversity:</strong> Promotes the urgent need for diverse perspectives in leadership roles worldwide.</p>
              </div>
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
