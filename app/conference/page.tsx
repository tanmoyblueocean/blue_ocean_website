import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignatureEventsSlider from '@/components/SignatureEventsSlider';
import SponsorshipTabs from '@/components/SponsorshipTabs';
import WorldMapSection from '@/components/WorldMapSection';

const innovationCards = [
  {
    className: 'card-ipsc',
    imgDefault: '/images/IPSC2026.svg',
    imgHover: '/images/ipsc_hoverr.svg',
    alt: 'IPSC',
    desktopText: <>Connecting Global –<br /><strong>Supply Chain Leaders.</strong></>,
    mobileText: 'Illuminating the Future of Supply Chain – Transforming Complexity into Opportunity.',
  },
  {
    className: 'card-ihrc',
    imgDefault: '/images/IHRC.svg',
    imgHover: '/images/IHRC-hover.svg',
    alt: 'IHRC',
    desktopText: 'Reframing the Workforce – Empowering People, Driving Change.',
    mobileText: null,
  },
  {
    className: 'card-cxo',
    imgDefault: '/images/CXO-round table.svg',
    imgHover: '/images/cxo_white.svg',
    alt: 'CXO',
    desktopText: 'Refracting Challenges into Strategies – Balancing Resilience & Sustainability in Supply Chains.',
    mobileText: null,
  },
  {
    className: 'card-bowld',
    imgDefault: '/images/BOWLD-1.svg',
    imgHover: '/images/WD-white.svg',
    alt: 'BOWLD',
    desktopText: 'A Spectrum of Strength – Inspiring Women, Igniting Leadership.',
    mobileText: null,
  },
];

const logoMarquee = [
  { src: '/images/salam-adahar.jpg', alt: 'Salam Aldar' },
  { src: '/images/b4u-logo.jpg', alt: 'B4U' },
  { src: '/images/platform-logo.jpg', alt: '1-Platform' },
];

export default function ConferencePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero-section">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/home/home-banner.png" alt="Drive Transformation" className="hero-bg-img" />
        <div className="hero-content con-training con-conf">
          <p>Synergizing Innovation</p>
          <h1>Connecting Possibilities</h1>
        </div>
      </section>

      {/* Connecting Visionaries — Desktop */}
      <section className="spectrum-section spec-con">
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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decoration" className="left-decor" />

        <div className="spectrum-container">
          <div className="spectrum-content less-padding">
            <div className="spectrum-header">
              <h2 className="sec-title">
                <span className="font-light">Connecting Visionaries</span><br />
                <strong>Through Engagement</strong>
              </h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/28exc.png" alt="28 Years of Excellence" className="badge-28" />
            </div>

            <div className="divider-line"></div>

            <div className="intro-block intro-block-training">
              <p className="dip">For over 28 years Blue Ocean Corporation has been a leading name in the training, consulting, and conference domain.</p>
              <p>Blue Ocean Conferences brings together leaders, experts, and innovators from across the globe through our flagship events such as the International Procurement and Supply Chain Conference (IPSC), International Human Resource Conference (IHRC), and Blue Ocean Women&apos;s Leadership Development (BOWLD). These platforms create dynamic spaces for collaboration, knowledge sharing, and breakthrough thinking.</p>
              <p className="dip-second">Blue Ocean Conferences brings together strong leadership and fosters the development of innovative ideas.</p>
            </div>

            <div className="feature-list feature-list-training">
              <div className="feature-item-training">
                <p className="dip-third">Elevate Engagement -<span>Transformation Connections into Impact</span></p>
                <a href="#" className="btn-blue">
                  Learn More
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="spectrum-visual for-train">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/confarence_about.png" alt="Triangle Concept" className="overlap-triangle show-dek onlytrain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/conference-image-sm.png" alt="Triangle Concept" className="overlap-triangle show-mob" />
          </div>
        </div>
      </section>

      {/* Connecting Visionaries — Mobile */}
      <section className="spectrum-section-mob" style={{ position: 'relative' }}>
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

        <div className="spectrum-container">
          <div className="spectrum-header">
            <h2 className="sec-title">
              <span className="font-light">Connecting Visionaries</span><br />
              <strong>Through Engagement</strong>
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/28exc.png" alt="28 Years of Excellence" className="badge-28" />
          </div>

          <div className="intro-block">
            <p>For over 28 years Blue Ocean Corporation has been a leading name in the training, consulting, and conference domain.</p>
            <p>Blue Ocean Conferences brings together leaders, experts, and innovators from across the globe through our flagship events such as the International Procurement and Supply Chain Conference (IPSC), International Human Resource Conference (IHRC), and Blue Ocean Women&apos;s Leadership Development (BOWLD). These platforms create dynamic spaces for collaboration, knowledge sharing, and breakthrough thinking.</p>
            <p>Blue Ocean Conferences brings together strong leadership and fosters the development of innovative ideas.</p>
          </div>

          <div className="mobile-banner-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/conference-image-sm.png" alt="Triangle Concept" className="mobile-banner" />
          </div>

          <div className="feature-list feature-list-training">
            <div className="feature-item-training">
              <p className="dip-third">Elevate Engagement -<span>Transformation Connections into Impact</span></p>
            </div>
          </div>

          <div className="cta-container">
            <a href="#" className="btn-blue">
              Connect Us
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Bridging ideas and Opportunities */}
      <section className="show-conf-sec">
        <div className="conf-left-col">
          <div className="conf-img-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/webinar-con.png" alt="Conference Details" className="conf-img-desktop" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/upcoming-event-ad-sm.png" alt="Conference Details" className="conf-img-mobile" />
          </div>
        </div>

        <div className="conf-right-col">
          <h2 className="conf-heading">
            <span className="fw-light">Bridging ideas and</span>
            <span className="fw-bold text-dark-blue">Opportunities</span>
          </h2>

          <div className="conf-text-content">
            <p>Our dynamic platforms and conferences are spaces where thought leaders, innovators, and decision-makers converge, weaving the future through collaboration and dialogue.</p>
            <p className="text-highlight">When ideas illuminate like currents of transformation, sparking the new paradigms and possibilities.</p>
            <p>In this shared realm, visionaries unite, guiding the evolution of industries with collective wisdom. Together, we forge the path to a future where innovation is not just imagined, but realized in harmony.</p>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/con-poly.png" alt="" className="conf-poly-img" />
      </section>

      {/* Expertise That Drives Impact */}
      <section className="define-expertise">
        <div className="expertise-container">
          <h2 className="expertise-title">Expertise That Drives Impact</h2>

          <div className="expertise-grid">
            <div className="expertise-item">
              <h3>Connecting People</h3>
              <p>Facilitating meaningful interactions that strengthen partnerships and encourage collaboration across industries.</p>
            </div>

            <div className="expertise-item">
              <h3>Empowering Change<br />Management</h3>
              <p>We provide practical guidance and tools that help organizations embrace change and transform challenges into opportunities.</p>
            </div>

            <div className="expertise-item">
              <h3>Leveraging<br />Technology</h3>
              <p>Sharing expert knowledge on adopting innovative technologies to improve business performance and stay competitive.</p>
            </div>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/expertise_bottom_angle.png" alt="Decorative angle" className="mobile-bottom-angle" />
      </section>

      {/* Transforming through Innovation */}
      <section className="inovation-custom">
        <div className="inovation-header">
          <h2>Transforming through <span>Innovation</span></h2>
          <p>Our conferences are global platforms for thought leadership, collaboration and innovation. By bringing together industry leaders, visionaries and change-makers, we create opportunities for knowledge-sharing, networking and actionable insights.</p>
        </div>

        <div className="inovation-cards">
          {innovationCards.map((card) => (
            <div className={`inovation-card ${card.className}`} key={card.className}>
              <div className="card-image-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.imgDefault} alt={card.alt} className="img-default" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.imgHover} alt={`${card.alt} White`} className="img-hover" />
              </div>
              <div className="card-text-container">
                {card.mobileText ? (
                  <>
                    <h3 className="desktop-text">{card.desktopText}</h3>
                    <h3 className="mobile-text">{card.mobileText}</h3>
                  </>
                ) : (
                  <h3>{card.desktopText}</h3>
                )}
                <a href="#" className="explore-btn">Explore More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Events */}
      <section className="signature-events">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/sighature_right.png" className="se-corner-tr" alt="Decorative top right" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/con-poly.png" className="se-corner-br" alt="Decorative bottom right" />

        <div className="se-container">
          <div className="se-header">
            <h2>Join The Global Movement - <span>Signature Event</span></h2>
          </div>

          <SignatureEventsSlider />

          <div className="se-bottom-info">
            <p>Explore limitless opportunities with <strong>Blue Ocean Corporation</strong> where transformation meets innovation.</p>
            <a href="#" className="se-action-btn">Button &rarr;</a>
          </div>
        </div>
      </section>

      {/* Brand Visibility / Sponsorship */}
      <section className="brand-visibility">
        <div className="container-benefit">
          <div className="brand-head">Enhance Your Brand Visibility</div>
          <div className="brand-banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand-image.webp" alt="Brand" className="brand-main" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand-effect.webp" alt="Effect" className="brand-effect" />
          </div>
          <div className="clear"></div>

          <SponsorshipTabs />

          <div className="sponsorship-cta">
            <p>Partner with Us!</p>
            <a href="#" className="cta-btn">
              Enquiry Now
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-arroww" />
            </a>
          </div>
        </div>

        <div className="bowld-polygon">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/right_man-angel.png" alt="" />
        </div>
      </section>

      {/* Ready to Create an Impact */}
      <section className="mark-section">
        <div className="mark-triangle">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Concept Element.png" alt="" />
        </div>
        <div className="container-benefit">
          <div className="mark-video-head">
            Ready to Create an Impact?
            <span> Let&apos;s Turn Possibilities into Progress</span>
          </div>
          <div className="mark-video">
            <video autoPlay muted loop className="video-wrapper" controls height="" width="">
              <source src="https://blueoceancorporation.in/assets/frontend/images/ipsc-video/boc-hghlight.mp4" type="video/mp4" />
              <source src="https://blueoceancorporation.in/assets/frontend/images/about-video.ogg" type="video/ogg" />
            </video>
          </div>
        </div>
      </section>

      {/* Precision. Resilience. Visionary. */}
      <section className="presision">
        <div className="blue_trangle_text">
          <h2 className="triangle-headingg">Precision.<br />Resilience.<br />Visionary.</h2>
        </div>

        <div className="presision-content">
          <p className="content-top">More Conferences, More Impact -</p>
          <p className="content-bottom">Join Our Upcoming Global Events!</p>
          <a href="#" className="presision-btn">
            Join
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-arroww" />
          </a>
        </div>
      </section>

      {/* Rewards and Benefits */}
      <section className="wrap-award">
        <div className="awards-header">
          <h1>Rewards and Benefits</h1>
        </div>

        <div className="awards-columns">
          <div className="award-block">
            <h3>Individual Award Categories</h3>
            <p>Recognizing and celebrating exceptional talent and achievement by honoring outstanding contributions and excellence.</p>
          </div>

          <div className="award-block">
            <h3>Organization Award Categories</h3>
            <p>Honoring organizational excellence that drives impactful achievements through innovative programs and strategies.</p>
          </div>
        </div>
      </section>

      <section className="rewards-banner">
        <div className="rewards-container">
          <h2 className="rewards-heading">Rewards</h2>

          <div className="rewards-stripe">
            <ul className="rewards-list left-list">
              <li>Inspirational Leader of the Year</li>
              <li>Business Partner of the Year</li>
              <li>Rising Star of the Year</li>
            </ul>

            <div className="rewards-triangle-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/award_image.png" alt="Award Trophy" />
            </div>

            <ul className="rewards-list right-list">
              <li>Outstanding Talent Management Strategy</li>
              <li>Best Women Development & Leadership Programme</li>
              <li>Best Employee Support Strategy</li>
            </ul>
          </div>

          <div className="rewards-action">
            <a href="#" className="rewards-btn">
              Register Now
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-arroww" />
            </a>
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="global-footprint">
        <div className="gf-container">
          <div className="gf-header">
            <h2>
              <span className="gf-subtitle">Global Footprints Section-</span><br />
              <span className="gf-title">Conferences thats make an Impact.</span>
            </h2>
          </div>
        </div>

        <div className="gf-logo-slider">
          <div className="gf-logo-track">
            {[...logoMarquee, ...logoMarquee, ...logoMarquee, ...logoMarquee].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo.src} alt={logo.alt} key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* World Map */}
      <WorldMapSection />

      <Footer />
    </>
  );
}
