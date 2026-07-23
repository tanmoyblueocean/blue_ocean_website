import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrecisionStrategyPage() {
  return (
    <>
      <Header />

      {/* Shaping the path of progress */}
      <section className="shaping-path">
        <div className="sp-desktop-bg"></div>
        <div className="sp-desktop-blue-img"></div>

        <div className="sp-main-container">
          <div className="sp-content-grid">
            <div className="sp-col-left">
              <h2 className="sp-quote">...Shaping the<br />path of<br />progress.</h2>
            </div>

            <div className="sp-col-right">
              <div className="sp-precision-group">
                <span className="sp-thin">Precision</span>
                <span className="sp-bold">Strategy</span>
              </div>

              <p className="sp-desc">
                Every successful transformation begins with a clear, actionable strategy. We provide bespoke strategies tailored to your unique business needs.
              </p>
            </div>
          </div>

          <div className="sp-slogan-strip">
            <div className="sp-slogan-inner">
              <div className="sp-slogan-phrase">
                <span className="sp-slogan-blue">Innovate. Strategize.</span>
                <span className="sp-slogan-white">Elevate.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation at the Core */}
      <section className="accelerate-more">
        <div className="am-master-bg"></div>
        <div className="am-blue-slant"></div>
        <div className="am-gray-slant"></div>

        <div className="am-container">
          <div className="am-top-grid">
            <div className="am-mission-box">
              <p className="am-mission-text">
                We integrate innovative practices that are impactful and sustainable to drive your business forward.
              </p>
            </div>

            <div className="am-headline-box">
              <h2 className="am-headline">
                <span className="am-thin">Innovation</span>
                <span className="am-bold">at the Core</span>
              </h2>
            </div>
          </div>

          <div className="am-slogan-box">
            <p className="am-giant-slogan">Innovate. Integrate. Accelerate.</p>
          </div>

          <div className="am-caret"></div>
        </div>
      </section>

      {/* Sustainable Change */}
      <section className="sustainable-change">
        <div className="sc-container">
          <div className="sc-graphic-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/sustainable.png" alt="Sustainable Change Infrastructure" className="sc-triangle-img" />
          </div>

          <div className="sc-content-col">
            <div className="sc-title-area">
              <h2 className="sc-heading">
                <span className="sc-thin">Sustainable</span>
                <span className="sc-bold">Change</span>
              </h2>
            </div>

            <div className="sc-desc-area">
              <p className="sc-paragraph">
                Transformation is a journey, not a one-time event. We ensure that the changes we implement are designed for long-term success and continuous improvement.
              </p>

              <a href="#" className="sc-cta-link">Explore Sustainable Choice <span className="sc-arrow">&rarr;</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Evolve. Sustain. Thrive. */}
      <section className="thrieve-sustain">
        <div className="ts-top-bar">
          <h2 className="ts-main-slogan">Evolve. Sustain. Thrive.</h2>
        </div>

        <div className="ts-hero-stage">
          <div className="ts-hero-bg"></div>

          <div className="ts-hero-content">
            <div className="ts-text-wrapper">
              <h3 className="ts-headline">
                <span className="ts-thin">Leadership for</span>
                <span className="ts-bold">the Future</span>
              </h3>
              <p className="ts-desc">
                Empowering your leadership team to steer the organization through transformative periods with clarity, resilience, and purpose.
              </p>
            </div>
          </div>

          <div className="ts-desktop-slogan">
            <p>Empower. Navigate. Inspire.</p>
          </div>
        </div>

        <div className="ts-bottom-stage">
          <div className="ts-bottom-inner">
            <p className="ts-mobile-slogan">Empower. Navigate.<br />Inspire.</p>

            <p className="ts-lead-text">Empower your vision, innovate with precision<br />and sustain transformative success</p>
            <h4 className="ts-action-title">Let&apos;s build a future that thrives together.</h4>

            <a href="#" className="ts-cta-btn">
              <span>Initiate The Impact</span>
              <span className="ts-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
