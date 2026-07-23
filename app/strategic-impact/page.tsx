import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MeasurableResultsAccordion from '@/components/MeasurableResultsAccordion';
import SuccessStoriesSlider from '@/components/SuccessStoriesSlider';

const caseStudies = [
  { image: '/images/industry.webp', alt: 'Aviation Operations', title: 'Elevating Efficiency- Transforming Aviation Operations Through Innovation.' },
  { image: '/images/industry.webp', alt: 'Semiconductor Manufacturing', title: 'Operational Excellence in Semiconductor Manufacturing' },
  { image: '/images/industry.webp', alt: 'Specialty Chemicals Giant', title: 'Consolidating a declining market position for specialty chemicals giant' },
];

export default function StrategicImpactPage() {
  return (
    <>
      <Header />

      {/* Strategic Solutions, Proven Results */}
      <section className="strategic-banner">
        <div className="sb-bg-photo"></div>

        <div className="sb-content-stage">
          <div className="sb-limit-wrap">
            <h2 className="sb-headline">
              Strategic Solutions, Proven<br className="sb-mobile-break" /> Results
            </h2>
          </div>
        </div>
      </section>

      {/* Case Studies of Transformative Change */}
      <section className="transportive-sec">
        <div className="ts-container">
          <div className="ts-title-col">
            <h2 className="ts-heading">
              <span className="ts-thin">Case Studies of</span>
              <span className="ts-bold">Transformative Change</span>
            </h2>
          </div>

          <div className="ts-logos-col">
            <div className="ts-logo-grid">
              <div className="ts-logo-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/etihad-logo.png" alt="Etihad Aviation Group" />
              </div>
              <div className="ts-logo-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/neom-logo.png" alt="NEOM" />
              </div>
              <div className="ts-logo-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/adnoc-logo.png" alt="ADNOC" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivering Precision, Excellence, and Measurable Results */}
      <section className="measurable-results">
        <div className="mr-container">
          <h2 className="mr-section-title">Delivering Precision, Excellence, and Measurable Results .</h2>
          <MeasurableResultsAccordion />
        </div>
      </section>

      {/* Other Case studies */}
      <section className="case-strategic-sec">
        <div className="cs-container">
          <h2 className="cs-section-title">Other Case studies</h2>

          <div className="cs-grid">
            {caseStudies.map((cs) => (
              <div className="cs-card" key={cs.title}>
                <div className="cs-side-badge">
                  <span>Case Study</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/arrow-sm.webp" alt="" />
                </div>

                <div className="cs-bg-layer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cs.image} alt={cs.alt} />
                </div>

                <div className="cs-content">
                  <h3 className="cs-card-title">{cs.title}</h3>
                </div>

                <div className="cs-corner-wedge">
                  <a href="#" className="cs-arrow-btn" aria-label="Explore Case Study">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/arrow-right.svg" alt="" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Strategy Meets Success Stories */}
      <SuccessStoriesSlider />

      <Footer />
    </>
  );
}
