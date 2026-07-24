import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WebinarSeminarPage() {
  return (
    <>
      <Header />

      <section className="affiliation-headings">
        <div className="aff-wrapper">
          <div className="aff-left">
            <h2 className="aff-title">
              Elevate Expertise,<br />
              <strong>Ignite Innovation</strong>
            </h2>
          </div>

          <div className="aff-right">
            <p className="aff-desc">
              Our webinars and seminars are designed to inspire excellence through meaningful engagement. Focused on
              industry-specific challenges, they offer relevant insights and actionable strategies. By bringing
              together thought leaders and domain experts, we provide a dynamic platform for knowledge exchange,
              enabling professionals to stay ahead, adapt to change and excel in their fields.
            </p>
          </div>
        </div>
      </section>

      <section className="webinair-top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Design Element" className="concept-icon" />

        <div className="webinair-header">
          <p className="sub-headingg">Insightful Dialogues,</p>
          <h2 className="main-headingg">Tangible Outcomes</h2>
        </div>

        <div className="webinair-banner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/webinar-home.png" alt="Industry-Focused Seminars" className="banner-imagee" />
          <div className="banner-overlayy">
            <h3>Industry-Focused Seminars &amp; Webinars for Real-World Impact</h3>
          </div>
        </div>

        <div className="webinair-content-wrapper">
          <div className="webinair-left-panel">
            <div className="triangle-bgg" style={{ backgroundImage: "url('/images/bg-trg-lft.webp')" }}>
              <h2>
                Learn.<br />
                Connect.<br />
                Lead.
              </h2>
            </div>
          </div>

          <div className="webinair-right-panel">
            <h3 className="distinguish-heading">What distinguishes our webinars and seminars</h3>

            <div className="features-gridd">
              <div className="feature-cardd">
                <p>Focus on real-world applicability and measurable outcomes</p>
              </div>
              <div className="feature-cardd">
                <p>Designed to bridge the gap between theory and practice</p>
              </div>
              <div className="feature-cardd">
                <p>Equip participants with practical tools for immediate use</p>
              </div>
              <div className="feature-cardd">
                <p>Connect you to a global network and industry insights</p>
              </div>
            </div>

            <p className="webinair-description">
              Blue Ocean Webinars help you to connect with a global network of professionals, gain industry-specific
              insights, and unlock the potential to transform your organization and career.
            </p>
          </div>
        </div>
      </section>

      <section className="up-webinar">
        <div className="up-container">
          <div className="up-header-row">
            <h2 className="up-left-heading">Upcoming Seminar / Webinar</h2>
          </div>

          <div className="up-banner-area">
            <div className="more-up-banner">
              <div className="up-html-layer up-left-gradient-bg"></div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/webinar-upcoming.png" alt="Seminar Setup" className="up-bg-left" />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/seminar-subtract.png" alt="Blue Angled Separator" className="up-html-layer up-bg-arrow" />

              <div className="up-white-layer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/webner-logo-top.png" alt="Blue Ocean Logo" className="up-logo" />
                <h3 className="up-type">Webinar</h3>
                <h1 className="up-title">
                  The<br />
                  Future<br />
                  of Procurement<br />
                  with AI
                </h1>
                <p className="up-date">on 25th Jul&apos;26</p>
              </div>
            </div>

            <div className="up-gradient-layer">
              <h2 className="up-right-heading">The Future of Procurement with AI</h2>

              <div className="up-feature">
                <h4>Learn from Industry Experts</h4>
                <p>Get insights and practical advice from seasoned professionals.</p>
              </div>
              <div className="up-feature">
                <h4>Live Q&amp;A Interaction</h4>
                <p>Ask questions and engage with speakers in real time.</p>
              </div>
              <div className="up-feature">
                <h4>Stay Ahead of Industry Trends</h4>
                <p>Learn about current developments shaping the future of your field.</p>
              </div>
              <a href="#" className="up-register-btn">
                Register Now{' '}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
