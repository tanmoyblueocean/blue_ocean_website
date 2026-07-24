import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VSRamachandranPage() {
  return (
    <>
      <Header />

      <section className="members-detaling-part ram-sir-div">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Element" className="mdp-decor-left" />

        <div className="mdp-wrapper">
          <div className="mdp-col-left">
            <div className="mdp-header">
              <h1 className="mdp-name">VS Ramachandran</h1>
              <p className="mdp-designations">
                Chief Financial Officer<br />
                Blue Ocean Corporation
              </p>
            </div>

            <div className="mdp-content">
              <p>
                VS Ramachandran is an accomplished <strong>Chartered Accountant</strong> with over <strong>32 years
                of extensive experience</strong> in <strong>finance, auditing, corporate planning, and quality
                management</strong> across diverse industries, including <strong>Oil &amp; Gas, Aviation, Ferro
                Alloys, Education, and Public Accounting</strong>. His expertise extends to <strong>internal
                audits, computer audits, fraud examination, and cost management</strong>, making him a versatile
                leader in financial strategy and governance.
              </p>
              <p>
                A key advocate for organizational excellence, Ramachandran has played a <strong>pivotal role as a
                Team Leader for the prestigious Dubai Quality Award Program</strong> for over <strong>12
                years</strong>. His contributions have significantly enhanced process improvements and helped
                multiple organizations achieve <strong>ISO certifications</strong> and operational excellence.
              </p>
              <p>
                As a <strong>seasoned public speaker</strong>, he has delivered over <strong>1,000 hours of
                training</strong> and addressed prestigious conferences and seminars in <strong>Barcelona,
                Singapore, Kuala Lumpur, Bangkok, Bengaluru, and Dubai</strong>. His ability to merge financial
                acumen with quality management principles has made him a sought-after expert in his field.
              </p>
            </div>
          </div>

          <div className="mdp-col-right">
            <div className="mdp-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/advisory-bg-triangle-right.png" alt="Background" className="mdp-bg-shape" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/ramachandran.png" alt="VS Ramachandran" className="mdp-portrait" />
            </div>
          </div>
        </div>

        <div className="mdp-extended-layout">
          <div className="mdp-info-grid">
            <div className="mdp-gray-card">
              <h4>Professional Experience:</h4>
              <ul className="mdp-list">
                <li><strong>Chief Financial Officer</strong> Blue Ocean Corporation</li>
                <li><strong>Executive Director</strong> TUF Commodities DMCC</li>
                <li><strong>Head of Corporate Planning &amp; Quality</strong> Emarat</li>
                <li><strong>Senior Internal Auditor</strong> Bahrain Petroleum Company</li>
              </ul>
            </div>
            <div className="mdp-gray-card">
              <h4>Professional Certifications:</h4>
              <ul className="mdp-list">
                <li><strong>Certified Fraud Examiner (CFE)</strong> Association of Certified Fraud Examiners, USA</li>
                <li><strong>Certified Information Systems Auditor (CISA)</strong> ISACA, Illinois, USA</li>
                <li><strong>Certified Internal Auditor (CIA)</strong> Institute of Internal Auditors, USA</li>
                <li><strong>Management Accountant (CMA)</strong> (Institute of Cost Accountants of India)</li>
              </ul>
            </div>
          </div>
          <div className="mdp-info-grid" style={{ gridTemplateColumns: '1fr' }}>
            <div className="mdp-gray-card">
              <h4>Academic Qualifications:</h4>
              <ul className="mdp-list">
                <li><strong>ACA, Audit and Accounts</strong> Institute of Chartered Accountants of India</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: 20, fontSize: '1.25rem', lineHeight: 1.7 }}>
            With his deep expertise in financial strategy, risk assessment, and quality assurance, VS Ramachandran
            continues to drive excellence and innovation in financial management, ensuring sustainable growth and
            governance at Blue Ocean Corporation.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
