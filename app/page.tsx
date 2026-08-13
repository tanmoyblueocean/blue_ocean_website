import Image from 'next/image';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConGallery from '@/components/ConGallery';
import LegacySection from '@/components/LegacySection';
import BridgingBlock from '@/components/BridgingBlock';
import SeminarSlider from '@/components/SeminarSlider';

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/home-banner.png"
          alt="Drive Transformation"
          className="hero-bg-img"
        />
        <div className="hero-content">
          <p>Crystallizing insights to</p>
          <h1>Drive Transformation</h1>
        </div>
      </section>

      {/* Spectrum Section – Desktop */}
      <section className="spectrum-section">
        <Image src="/images/Concept Element.png" alt="Decoration" width={120} height={120} className="left-decor" />
        <div className="spectrum-container">
          <div className="spectrum-content less-padding">
            <div className="spectrum-header">
              <h2 className="sec-title">
                <span className="font-light">Refracting Challenges Into</span><br />
                <strong>A Spectrum of Opportunities.</strong>
              </h2>
              <Image src="/images/28exc.png" alt="28 Years of Excellence" width={100} height={100} className="badge-28" />
            </div>
            <div className="divider-line"></div>
            <div className="intro-block">
              <p>With 28 years of experience, we partner with organizations globally to drive transformative change. We believe in aligning strategy, operations, and goals to unlock your business&apos;s full potential. Our proven frameworks and tailored solutions navigate complexities, delivering measurable outcomes and fostering sustainable growth.</p>
              <p className="text-blue-highlight">By delivering tailored solutions backed by proven frameworks, we help shape resilient organizations that adapt, lead, and thrive in dynamic environment.</p>
            </div>
            <div className="feature-list">
              {[
                { title: 'Transforming Businesses', desc: 'We deliver strategic solutions that transform businesses, optimize operations, and drive sustainable growth. Turning complex challenges into opportunities, we empower you to achieve lasting success.' },
                { title: 'Empowering Professionals', desc: 'Elevate your workforce and empower your organization with our comprehensive programs, delivering cutting-edge knowledge and practical expertise for lasting impact.' },
                { title: 'Connecting Visionaries', desc: 'We create dynamic platforms where thought leaders, innovators, and decision-makers collaborate and engage in dialogue to shape the future.' },
              ].map((item) => (
                <div key={item.title} className="feature-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <div className="play-arrow"></div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ clear: 'both' }}></div>
          <div className="spectrum-visual">
            <Image src="/images/triangle-design.png" alt="Triangle Concept" width={600} height={500} className="overlap-triangle show-dek" />
            <Image src="/images/sq-banner.webp" alt="Triangle Concept" width={400} height={400} className="overlap-triangle show-mob" />
            <div className="triangle-text-layer">
              <div className="msg-block block-transforming">
                <span className="msg-light">Transforming</span>
                <strong className="msg-bold">Businesses</strong>
              </div>
              <div className="msg-block block-empowering">
                <span className="msg-light">Empowering</span>
                <strong className="msg-bold">Professionals</strong>
              </div>
              <div className="msg-block block-connecting">
                <span className="msg-light">Connecting</span>
                <strong className="msg-bold">Visionaries</strong>
              </div>
            </div>
            <div className="cta-content">
              <p className="cta-small">Step into the realm of possibilities -</p>
              <h3 className="cta-heading">Discover Insights, Elevate Skills,<br />And Connect With Brilliance.</h3>
              <p className="cta-sub">Explore more to illuminate your path to success.</p>
              <a href="#" className="btn-blue">
                Get in Touch{' '}
                <Image src="/images/Arrow right.png" alt="Arrow Right" width={16} height={16} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spectrum Section – Mobile */}
      <section className="spectrum-section-mob">
        <div className="spectrum-container">
          <div className="spectrum-header">
            <h2 className="sec-title">
              <span className="font-light">Refracting Challenges Into</span><br />
              <strong>A Spectrum Of Opportunities</strong>
            </h2>
            <Image src="/images/28exc.png" alt="28 Years of Excellence" width={100} height={100} className="badge-28" />
          </div>
          <div className="intro-block">
            <p>With 28 years of expertise, we are a leading global conglomerate committed to transforming challenges into progress. Our strategic approach aligns business goals with changing landscapes, enabling organizations and professionals to achieve meaningful and measurable growth.</p>
            <p className="text-blue-highlight">By delivering tailored solutions backed by proven frameworks, we help shape resilient organizations that adapt, lead, and thrive in dynamic environment.</p>
          </div>
          <div className="mobile-banner-wrapper">
            <Image src="/images/sq-banner.webp" alt="Triangle Concept" width={400} height={400} className="mobile-banner" />
          </div>
          <div className="feature-list">
            {[
              { title: 'Transforming Businesses', desc: 'Delivering strategic solutions that reshape organizations, optimize performance, and enable sustainable growth.' },
              { title: 'Empowering Professionals', desc: 'Equipping individuals and organizations with innovative programs that blend cutting-edge insights and practical application.' },
              { title: 'Connecting Visionaries', desc: 'Fostering impactful platforms where leaders, innovators, and decision-makers engage in meaningful dialogue.' },
            ].map((item) => (
              <div key={item.title} className="feature-item">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="read-more-wrapper">
                  <div className="play-arrow"></div>
                  <div className="read-more-line"></div>
                  <a href="#" className="read-more-text">Read More</a>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-container">
            <p className="cta-small">Step into the realm of possibilities -</p>
            <h3 className="cta-heading">Discover Insights, Elevate Skills,<br />And Connect With Brilliance.</h3>
            <p className="cta-sub">Explore more to illuminate your path to success.</p>
            <a href="#" className="btn-blue">
              Connect Us{' '}
              <Image src="/images/Arrow right.png" alt="Arrow Right" width={16} height={16} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Conference Gallery Slider */}
      <ConGallery />

      {/* About Angle */}
      <section className="about-angle">
        <div className="about-angle-content">
          <h2 className="years-heading">28+ Years</h2>
          <p className="years-subheading">of Global Leadership and Innovation</p>
        </div>
        <Image src="/images/about_angle.png" alt="Decorative Angle" width={400} height={200} className="angle-decoration" />
      </section>

      {/* Vision Banner */}
      <section className="vision-banner">
        <div className="vision-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/vission_banner.png" alt="Vision Handshake" />
        </div>
        <div className="vision-content">
          <p>
            With a legacy spanning nearly three decades, we have consistently
            championed professional growth and transformative business
            solutions. Our continued journey reflects a deep commitment to
            advancing industries and empowering careers across diverse sectors
            worldwide.
          </p>
        </div>
      </section>

      {/* Trust Influence */}
      <section className="trust-influence">
        <div className="shape-wrapper">
          <div className="shape-text">
            <h2>Excellence.<br />Trust.<br />Influence.</h2>
          </div>
        </div>
        <div className="content-wrapper">
          <p className="main-text">
            Explore our legacy and vision for the future.
          </p>
          <a href="#" className="btn-story">
            Our Story{' '}
            <Image src="/images/Arrow right.png" alt="Arrow Right" width={16} height={16} className="btn-icon" />
          </a>
        </div>
      </section>

      {/* Legacy / Awards Section */}
      <LegacySection />

      {/* Bridging Block */}
      <BridgingBlock />

      {/* B2B Section */}
      <section className="b-two-b">
        <div className="b-two-b-content">
          <Image src="/images/final BOC logo.png" alt="Blue Ocean Corporation" width={160} height={50} className="boc-logo" style={{ height: 'auto' }} />
          <h3 className="sub-heading">Trusted Partner For</h3>
          <h1 className="main-heading">B2B <span className="pipe">|</span> B2C</h1>
          <p className="description">
            From corporate giants to aspiring professionals, we deliver tailored solutions that drive measurable impact. Whether enhancing business strategies, upskilling employees, or fostering industry leadership, we are the trusted partner committed to unlocking potential and delivering success.
          </p>
          <div className="impact-section">
            <span className="impact-text">Impacting</span><br />
            <span className="innovation-text">the future of innovation</span>
          </div>
          <a href="#" className="btn-know-more">
            Know More{' '}
            <Image src="/images/Arrow right.png" alt="Right Arrow" width={16} height={16} className="btn-icon" />
          </a>
        </div>
        <div className="b-two-b-image">
          <Image src="/images/girl-help_image2.webp" alt="Professional Woman" width={500} height={600} style={{ height: 'auto' }} />
        </div>
      </section>

      {/* News & Insights Scroller */}
      <div className="double-scroll">
        <Image src="/images/Concept Element.png" alt="Concept Element" width={60} height={60} className="double-scroll-icon" />
        <h2 className="double-scroll-title">News And Insights</h2>
      </div>

      <div className="making-waves">
        <div className="mv-head">
          <div className="scroll-wrap">
            <div className="mv-image-galry">
              <div className="scroller scroller01">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="mv-image-single-galry">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/making-waves/mw-${(i % 4) + 1}.webp`} alt={`Making waves ${(i % 4) + 1}`} />
                  </div>
                ))}
              </div>
              <div className="scroller scroller02">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="mv-image-single-galry">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/making-waves/mw-${(i % 4) + 5}.webp`} alt={`Making waves ${(i % 4) + 5}`} />
                  </div>
                ))}
              </div>
              <div className="rect-full">Breaking Waves of Innovation<b>News &amp; Trends that Matter</b></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="event-sec">
          <div className="event-container">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="event-grid">
              <div className="event-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/ipsc-bo-logo.png" alt="Logos" className="event-logo" />
                <div className="event-left-wrapper">
                  <div className="event-left-image">
                    <Image src="/images/web-image.png" alt="Speaker Image" width={250} height={300} style={{ height: 'auto' }} />
                  </div>
                  <div className="event-left-content">
                    <h3 className="event-main-title">Redefining Global Trade:<br />UAE Shaping Sustainable Supply<br />Chains for Future</h3>
                    <p className="event-subtitle">Digital Driven Sustainably Committed</p>
                    <div className="event-guest">
                      <span className="guest-label">Chief Guest and Patron</span><br />
                      <strong className="guest-name">His Excellency<br />SHEIKH NAHAYAN BIN<br />MABARAK AL NAHYAN</strong>
                    </div>
                    <a href="#" className="btn-register">
                      Register Now{' '}
                      <Image src="/images/Arrow right.png" alt="Arrow" width={16} height={16} className="btn-icon" />
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
      </div>

      {/* Clientele */}
      <section className="clientel">
        <div className="clientel-container">
          <div className="clientel-header">
            <h4 className="clientel-subtitle">Our Clientele</h4>
            <h2 className="clientel-title">Transforming Businesses, Together</h2>
            <p className="clientel-desc">
              We take pride in partnering with visionary businesses that dare to dream big. From startups to industry giants, our collaborations have driven transformative success, turning challenges into opportunities and goals into achievements. Together, we&apos;re shaping the future of business.
            </p>
          </div>
          <div className="clientel-grid">
            {['etihad-logo', 'neom-logo', 'adnoc-logo', 'sabic-logo'].map((logo) => (
              <div key={logo} className="clientel-card">
                <div className="clientel-card-inner">
                  <Image src={`/images/${logo}.png`} alt={logo} width={150} height={80} style={{ height: 'auto' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Path */}
      <section className="discover-path">
        <div className="discover-container">
          <h2 className="discover-text">Discover new pathways to growth, innovation, and leadership.</h2>
          <a href="#" className="btn-connect">Let&apos;s Connect</a>
        </div>
      </section>

      <Footer />

      <Script id="scroller-script" strategy="afterInteractive">{`
        document.querySelectorAll('.scroller').forEach(function(s) {
          s.addEventListener('mouseover', function() { s.style.animationPlayState = 'paused'; });
          s.addEventListener('mouseout', function() { s.style.animationPlayState = 'running'; });
        });
      `}</Script>
    </>
  );
}
