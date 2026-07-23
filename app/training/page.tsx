import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeminarSlider from '@/components/SeminarSlider';
import KeyOfferingsSlider from '@/components/KeyOfferingsSlider';
import TrainingTabs from '@/components/TrainingTabs';
import FeaturedCoursesSlider from '@/components/FeaturedCoursesSlider';
import ExcellenceSlider from '@/components/ExcellenceSlider';
import VoiceSection from '@/components/VoiceSection';

const scrollerLogos = [
  { src: '/images/cmi-flow.png', alt: 'CMI' },
  { src: '/images/iata-flow.svg', alt: 'IATA' },
  { src: '/images/hrci-flow.png', alt: 'HRCI' },
  { src: '/images/just-flow.png', alt: 'Just Flow' },
  { src: '/images/cilt-flow.svg', alt: 'CILT' },
  { src: '/images/pmi-flow.svg', alt: 'PMI' },
  { src: '/images/ascm-flow.png', alt: 'ASCM' },
];

export default function TrainingPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero-section">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/home/home-banner.png" alt="Drive Transformation" className="hero-bg-img" />
        <div className="hero-content">
          <p>elevate your expertise,</p>
          <h1>Energize your impact</h1>
          <p>Learn the new paradigms</p>
        </div>
      </section>

      {/* Empowering Professionals — Desktop */}
      <section className="spectrum-section">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decoration" className="left-decor" />

        <div className="spectrum-container">
          <div className="spectrum-content less-padding">
            <div className="spectrum-header">
              <h2 className="sec-title">
                <span className="font-light">Empowering Professionals,</span><br />
                <strong>Redefining Possibilities</strong>
              </h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/28exc.png" alt="28 Years of Excellence" className="badge-28" />
            </div>

            <div className="divider-line"></div>

            <div className="intro-block intro-block-training">
              <p className="dip">With 28 years of excellence, we are committed to transforming professionals into leaders.</p>
              <p>At Blue Ocean Academy, we believe that training is not just about acquiring knowledge - it&apos;s about transforming potential into extraordinary results. Inspired by the &quot;Prism of Growth&quot; philosophy, we tailor our programs to act as the prism that refracts raw talent into a spectrum of expertise, leadership, and innovation.</p>
              <p className="dip-second">Together, we unlock potential and transform skills into success.</p>
              <p className="dip-third">From Knowledge to Mastery,<span>We Transform Professionals.</span></p>
            </div>

            <div className="feature-list feature-list-training">
              <div className="feature-item-training">
                <p>Our training approach integrates international certifications, real-world expertise, and industry-specific insights to deliver practical, measurable outcomes. Led by global experts, each program is designed to elevate professional capability and build leadership that drives meaningful change.</p>
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
            <img src="/images/training-triangle.png" alt="Triangle Concept" className="overlap-triangle show-dek onlytrain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/training-mob.png" alt="Triangle Concept" className="overlap-triangle show-mob" />
          </div>
        </div>
      </section>

      {/* Empowering Professionals — Mobile */}
      <section className="spectrum-section-mob">
        <div className="spectrum-container">
          <div className="spectrum-header">
            <h2 className="sec-title">
              <span className="font-light">Empowering Professionals,</span><br />
              <strong>A Spectrum Of Opportunities</strong>
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/28exc.png" alt="28 Years of Excellence" className="badge-28" />
          </div>

          <div className="intro-block">
            <p>With 28 years of expertise, we are a leading global conglomerate committed to transforming challenges into progress. Our strategic approach aligns business goals with changing landscapes, enabling organizations and professionals to achieve meaningful and measurable growth.</p>
            <p>At Blue Ocean Corporation, training is a catalyst for growth. Our programs are thoughtfully designed to sharpen strategic thinking, strengthen leadership acumen, and build technical expertise, equipping individuals to excel in today&apos;s competitive and evolving landscape.</p>
            <p>Together, we unlock potential and transform skills into success.</p>
          </div>

          <div className="mobile-banner-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/training-mob.png" alt="Triangle Concept" className="mobile-banner" />
          </div>

          <div className="feature-list feature-list-training">
            <div className="feature-item-training">
              <p className="dip-third">From Knowledge to Mastery,<span>We Transform Professionals.</span></p>
              <p>Our training approach integrates international certifications, real-world expertise, and industry-specific insights to deliver practical, measurable outcomes. Led by global experts, each program is designed to elevate professional capability and build leadership that drives meaningful change.</p>
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

      {/* Key Offerings */}
      <section className="key-offerings">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/right-design.png" alt="" className="bg-shape-right" aria-hidden="true" />
        <div className="containers">
          <h2 className="section-title">Key Offerings</h2>
          <KeyOfferingsSlider />
        </div>
      </section>

      {/* Prism of Growth */}
      <section className="prisam-unlock">
        <div className="contains">
          <div className="concept-graphic">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Concept Element.png" alt="" aria-hidden="true" />
          </div>
          <div className="brand-logos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/final BOC logo.png" alt="Blue Ocean Corporation" />
          </div>
          <div className="unlock-text">
            <span className="text-dark">Unlock the prism of growth hue and</span>
            <span className="text-light">illuminate your path to success.</span>
          </div>
        </div>
      </section>

      {/* Organizational Goals / Course Tabs */}
      <section className="organizational-goals">
        <TrainingTabs />
      </section>

      {/* Global Summary Stats */}
      <section className="global-sum">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/right-sign.png" alt="" aria-hidden="true" className="global-sum__right-sign" />

        <div className="global-sum__container">
          <div className="global-sum__header">
            <h3 className="global-sum__subtitle">Empowering Global Leaders with</h3>
            <h2 className="global-sum__title">
              <span className="global-sum__highlight">28 Years of Excellence</span> in Training and Certification.
            </h2>
          </div>

          <div className="global-sum__banner">
            <div className="global-sum__stats">
              <div className="global-sum__stat-item">
                <span className="global-sum__stat-number">500,000+</span>
                <p className="global-sum__stat-label">A community of alumni<br />worldwide</p>
              </div>
              <div className="global-sum__stat-item">
                <span className="global-sum__stat-number">2,500+</span>
                <p className="global-sum__stat-label">Corporate<br />Clients</p>
              </div>
              <div className="global-sum__stat-item">
                <span className="global-sum__stat-number">800+</span>
                <p className="global-sum__stat-label">Training<br />Programs</p>
              </div>
              <div className="global-sum__stat-item">
                <span className="global-sum__stat-number">18+</span>
                <p className="global-sum__stat-label">Operations Across<br />Countries</p>
              </div>
            </div>

            <div className="global-sum__footer">
              <p className="global-sum__footer-text">Blue Ocean Academy sets the benchmark for professional development on a global scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses + Certification Slider */}
      <FeaturedCoursesSlider />

      {/* Endorsed */}
      <section className="endorsed">
        <div className="endorsed-container">
          <div className="endorsed-header">
            <h2>Trusted by Professionals, <strong>Endorsed Worldwide.</strong></h2>
            <p>
              Learn why <strong>Blue Ocean Academy</strong> is the trusted choice for thousands of alumni and corporate clients worldwide, offering world-class training and certifications.
              Together, we&apos;re fostering global leadership and fueling business excellence.
            </p>
          </div>

          <div className="endorsed-banner">
            <div className="banner-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/maskgroup.webp" alt="Professionals in a meeting" className="zoom-image" />
            </div>
            <div className="banner-overlay">
              <h3>Unveil your genius redefine possibility</h3>
            </div>
          </div>
        </div>
      </section>
      <div className="decorative-spacer"></div>

      {/* Excellence / Affiliations */}
      <section className="excellence-section">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="" className="concept-element" aria-hidden="true" />
        <div className="excellence-container">
          <h2 className="main-headingg">Elevating Procurement & <strong>Supply Chain Excellence</strong></h2>
          <ExcellenceSlider />
        </div>
      </section>

      {/* Voices of Success */}
      <VoiceSection />

      {/* Upcoming Training Webinar */}
      <section className="event-sec event-sec-training">
        <div className="event-container">
          <div className="event-grid">
            <div className="event-left-training">
              <h2 className="training-section-title">Upcoming Training Webinar</h2>

              <div className="training-banner-wrapper">
                <div className="training-border-top"></div>
                <div className="training-border-right-slant"></div>

                <div className="training-image-col">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Polygon 35.png" alt="" className="training-polygon-bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/seminar-bg-2.png" alt="Seminar Speakers" className="training-people-img" />
                  <a href="#" className="btn-training-register mobile-btn">
                    Register Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="btn-arrow"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>

                <div className="training-content-col">
                  <div className="training-logo-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/ipsc-bo-logo.png" alt="Blue Ocean Corporation" className="training-logo" />
                  </div>

                  <div className="training-text-block">
                    <h3 className="training-badge">Seminar</h3>
                    <h4 className="training-main-title">Incoterms<br />2020<br />in Practice</h4>
                    <p className="training-date">on 13th Jun&apos;26</p>
                  </div>

                  <a href="#" className="btn-training-register desktop-btn">
                    Register Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="btn-arrow"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="event-right">
              <div className="event-right-header">
                <h3>Building Procurement Strategy in Healthcare</h3>
              </div>
              <div className="event-cards-wrapper">
                <SeminarSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Logo Scroller */}
      <section className="training-scroller">
        <div className="training-scroller-track">
          {[...scrollerLogos, ...scrollerLogos].map((logo, i) => (
            <div className="scroller-item" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
