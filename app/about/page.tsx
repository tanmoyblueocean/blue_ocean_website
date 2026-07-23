import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutConGallery from '@/components/AboutConGallery';
import AchievementTimeline from '@/components/AchievementTimeline';
import RecognitionSlider from '@/components/RecognitionSlider';

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Banner */}
      <section className="banner-about" role="banner" aria-label="Site banner">
        <video autoPlay muted loop className="video-wrapper" height="" width="">
          <source src="https://blueoceancorporation.com/ar/storage/website-content/page-settings/vgxWe2onueZBxhOsSndnMH2s09ZuaV3ZnWG1Eirq.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-about-content">
          <div className="logo-banner-wrap">
            <a href="#" aria-label="Company home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="logo-banner" src="/images/about-us-typo.svg" alt="Company logo - 28 Years" />
            </a>
          </div>
        </div>
      </section>

      {/* Where Innovation Meets Impact — Desktop */}
      <section className="spectrum-section spectrum-about">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decoration" className="left-decor" />
        <div className="spectrum-container">
          <div className="spectrum-content less-padding">
            <div className="spectrum-header">
              <h2 className="sec-title">
                <span className="font-light">Where Innovation</span><br />
                <strong>Meets Impact</strong>
              </h2>
            </div>
            <div className="divider-line"></div>
            <div className="intro-block about-block">
              <p>Blue Ocean Corporation, founded in 1998 and headquartered in London, stands as a global conglomerate driving sustainable growth and transformation across diverse industries. With a strong presence in the Middle East, Africa, South Asia, and Europe, the organization leads in Business Transformation, Training, and Conferences delivering innovative, client-centric solutions that create measurable global impact.</p>
            </div>
          </div>
          <div style={{ clear: 'both' }}></div>
          <div className="image-absolute">
            <div className="movideo">
              <video className="movideo-player" autoPlay loop muted playsInline>
                <source src="https://blueoceancorporation.in/assets/frontend/images/about-video.mp4" type="video/mp4" />
                <source src="https://blueoceancorporation.in/assets/frontend/images/about-video.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Where Innovation Meets Impact — Mobile */}
      <section className="spectrum-section-mob spectrum-about-mobile">
        <div className="spectrum-container">
          <div className="spectrum-header">
            <h2 className="sec-title">
              <span className="font-light">Where Innovation</span><br />
              <strong>Meets Impact</strong>
            </h2>
          </div>
          <div className="intro-block">
            <p>Blue Ocean Corporation, founded in 1998 and headquartered in London, stands as a global conglomerate driving sustainable growth and transformation across diverse industries. With a strong presence in the Middle East, Africa, South Asia, and Europe, the organization leads in Business Transformation, Training, and Conferences delivering innovative, client-centric solutions that create measurable global impact.</p>
          </div>
          <div className="mobile-banner-wrapper">
            <div className="movideo">
              <video className="movideo-player" autoPlay loop muted playsInline>
                <source src="https://blueoceancorporation.in/assets/frontend/images/about-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="about-expertise">
        <div className="expertise-containerr">
          <h2 className="expertise-title">Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card card-vibrant-blue">
              <h3 className="card-title">Transforming<br /><strong>Businesses</strong></h3>
              <p className="card-desc">Driving operational excellence and business growth through expert guidance.</p>
              <span className="card-watermark">Consulting</span>
            </div>
            <div className="expertise-card card-mid-blue">
              <h3 className="card-title">Empowering<br /><strong>Professionals</strong></h3>
              <p className="card-desc">Equipping professionals with globally recognized qualifications.</p>
              <span className="card-watermark">Training</span>
            </div>
            <div className="expertise-card card-navy-blue">
              <h3 className="card-title">Connecting<br /><strong>Visionaries</strong></h3>
              <p className="card-desc">Bridging the gap between thought leaders and businesses to shape the future.</p>
              <span className="card-watermark">Conferences</span>
            </div>
          </div>
          <div className="expertise-footer">
            <p className="footer-lead">With a commitment to innovation, quality, and impact, we have transformed thousands of careers and businesses worldwide.</p>
            <p className="footer-highlightt">At Blue Ocean Corporation, we don&apos;t just create opportunities - We shape futures.</p>
            <a href="#" className="btn-corporate-vision">
              Experience Our Corporate Vision{' '}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Vision / Gallery Slider */}
      <AboutConGallery />

      {/* Core Values */}
      <section className="core-values-section">
        <div className="cv-header">
          <h2 className="cv-title">Our Core Values</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/coreValue-icon.png" alt="" className="cv-corner-icon" aria-hidden="true" />
        </div>
        <div className="cv-banner">
          <div className="cv-banner-text">
            <h3>Guided by Excellence and Integrity</h3>
            <p>we Innovate and Collaborate to create lasting Impact. These values drive everything we do, ensuring trust, growth and measurable success.</p>
          </div>
        </div>
        <div className="cv-strip-wrapper">
          <div className="clip-corner">
            <div className="cv-values-grid">
              {[
                { h: 'Impact',        p: 'Delivering measurable value to individuals and businesses' },
                { h: 'Integrity',     p: 'Upholding trust, ethics, and transparency in all our interactions.' },
                { h: 'Excellence',    p: 'Striving for the highest standards in everything we do.' },
                { h: 'Innovation',    p: 'Embracing new ideas and transformative solutions.' },
                { h: 'Collaboration', p: 'Fostering strong partnerships for mutual success.' },
              ].map((v) => (
                <div key={v.h} className="value-card">
                  <h4>{v.h}</h4>
                  <p>{v.p}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="cv-strip-accent"></div>
        </div>
      </section>

      {/* Journey Heading */}
      <section className="logo-journey-section">
        <div className="lj-container">
          <div className="lj-logo-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/boc-final-logo.png" alt="Blue Ocean Corporation" className="lj-logo" />
          </div>
          <div className="lj-titles">
            <h2 className="lj-heading">Waves of Our Journey, Year After Year</h2>
            <p className="lj-subheading">Charting our course through milestones, innovation and excellence</p>
          </div>
        </div>
      </section>

      {/* Achievement Timeline */}
      <AchievementTimeline />

      {/* Objectives */}
      <section className="about-objective">
        <div className="obj-wrap">
          <h2 className="obj-heading">Our Objectives</h2>
          <div className="obj-card">
            <div className="obj-icon-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/objectivesIcon.png" alt="Blue Ocean Objectives" className="obj-icon" />
            </div>
            <div className="obj-list-col">
              <ul className="obj-list">
                <li>To provide best-in-class professional training tailored to industry needs.</li>
                <li>To bridge the skills gap and enhance workforce capabilities.</li>
                <li>To assist businesses in achieving strategic growth through expert consulting.</li>
                <li>To organize world-class conferences that drive meaningful industry conversations.</li>
                <li>To expand our global footprint while maintaining excellence in service delivery.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <RecognitionSlider />

      {/* Success Journey CTA */}
      <section className="success-journey">
        <div className="sj-wrap">
          <div className="sj-top-row">
            <h2 className="sj-title">Begin Your Journey to Success</h2>
          </div>
          <div className="sj-middle-band">
            <div className="sj-graphic">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/red-triangle.png" alt="Success Mark" className="sj-triangle" />
            </div>
            <div className="sj-lead-text">
              <p>Connect with us today and explore solutions tailored to enhance your business</p>
            </div>
          </div>
          <div className="sj-bottom-row">
            <h3 className="sj-subtext">Your Success Starts Here – Let&apos;s Build Something Great!</h3>
            <a href="#" className="sj-cta-btn">Let&apos;s Talk</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
