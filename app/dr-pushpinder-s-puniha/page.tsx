import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DrPushpinderSPunihaPage() {
  return (
    <>
      <Header />

      <section className="members-detaling-part Puniha">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Element" className="mdp-decor-left" />

        <div className="mdp-wrapper">
          <div className="mdp-col-left">
            <div className="mdp-header">
              <h1 className="mdp-name">Dr. Pushpinder S. Puniha</h1>
              <p className="mdp-designations">
                Advisory Board Member,<br />
                Chairperson, Consultative Group on Tax Policy, NITI Aayog
              </p>
            </div>

            <div className="mdp-content">
              <p>
                Dr. Puniha brings unparalleled expertise in public finance and tax policy, combining rigorous
                academic research with decades of practical experience in shaping governance frameworks and tax
                reforms in India.
              </p>
              <p>
                Throughout his career, he has successfully led initiatives that enhance transparency, efficiency,
                and accountability in public institutions. His work in faceless tax assessments has transformed tax
                administration and set a global benchmark in innovation and compliance.
              </p>
              <p>
                At Blue Ocean Corporation, Dr. Puniha lends his strategic vision and insights to guide policy
                discussions, mentor future leaders, and ensure alignment of organizational goals with evolving
                global standards in governance, finance, and public administration.
              </p>
            </div>
          </div>

          <div className="mdp-col-right">
            <div className="mdp-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/advisory-bg-triangle-right.png" alt="Background" className="mdp-bg-shape" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/KSy5sUDeWghw9dUKiUK5LLJpgoCxxLoUBnrV90LI.png"
                alt="Dr. Pushpinder S. Puniha"
                className="mdp-portrait need1"
              />
            </div>
          </div>
        </div>

        <div className="mdp-extended-layout">
          <div className="mdp-info-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="mdp-gray-card">
              <h4>Professional Experience:</h4>
              <ul className="mdp-list">
                <li><strong>Chairperson, Tax Policy Consultative Group</strong> NITI Aayog, New Delhi</li>
                <li><strong>Fellow, Bharti Institute of Public Policy</strong> Indian School of Business, Hyderabad</li>
                <li><strong>Senior Advisor (Finance &amp; Taxation)</strong> Board of Control for Cricket in India, Mumbai</li>
                <li><strong>National Head, Faceless Assessment Scheme of Direct Taxes</strong> Ministry of Finance, New Delhi</li>
                <li><strong>Head, Income Tax Investigation Vertical</strong> Mumbai &amp; North-West India</li>
              </ul>
            </div>
            <div className="mdp-gray-card">
              <h4>Academic Qualifications:</h4>
              <ul className="mdp-list">
                <li><strong>PhD in Collaborative Governance in Finance</strong> University of Southern California, Los Angeles, USA (2015)</li>
                <li><strong>Master of Public Policy</strong> University of Southern California, Los Angeles, USA (2008)</li>
                <li><strong>M.A. in Economics</strong> Delhi School of Economics, Delhi University, India (1984)</li>
                <li><strong>B.A. (Hons.) in Economics</strong> St. Stephen&apos;s College, Delhi University, India (1982)</li>
              </ul>
            </div>
            <div className="mdp-gray-card">
              <h4>Publications:</h4>
              <ul className="mdp-list">
                <li>Subrahmanyam, BVR &amp; P.S. Puniha. Civil Service for Viksit Bharat in the Vision of Sardar Patel and Ambedkar, Business Standard, April 19, 2025</li>
                <li>Puniha, P.S. &amp; Aarushi Jain (Co-editors). Reimagining Institutions: Collaborative Pathways to Social Development in India, Routledge, 2025</li>
                <li>Puniha, P.S. Relational to Transactional Trust: A Bold Leap Through Faceless Tax Assessments, 127 Taxmann 312 (2021)</li>
                <li>Puniha, P.S. Curing the Fear of Paying Taxes, The Economic Times, Nov 20, 2020</li>
                <li>Puniha, P.S. &amp; Gerald Caiden (2011). Putting Public Governance Innovation into Perspective, in Innovation in Public Sector, IOS Press</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
