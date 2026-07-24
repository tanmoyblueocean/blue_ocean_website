import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JohnEllisPage() {
  return (
    <>
      <Header />

      <section className="members-detaling-part">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Element" className="mdp-decor-left" />

        <div className="mdp-wrapper">
          <div className="mdp-col-left">
            <div className="mdp-header">
              <h1 className="mdp-name">John Ellis</h1>
              <p className="mdp-designations">
                Chief Operating Officer<br />
                Blue Ocean Corporation
              </p>
            </div>

            <div className="mdp-content">
              <p>
                John Ellis is a senior leader in aviation, possessing specialized knowledge in investment for the
                development of the airline, aerospace, and hospitality sectors. As the Chief Operating Officer at
                Blue Ocean Corporation, he brings a wealth of expertise in investment, operational excellence, and
                strategic growth, positioning the organization at the forefront of global business solutions.
              </p>
              <p>
                With a career dedicated to empowering professionals and businesses, John has delivered motivational
                talks, seminars, and training programs to over 40,000 individuals worldwide. His extensive list of
                engagements includes prestigious organizations such as Abu Dhabi Travel Agents Association, Aramco
                Saudi Arabia, British Airways, Disney, Emirates Airlines, Farnborough Aerospace, Cleveland Clinic,
                Housing.com-India, Honda, Kia Motors, Mercedes, and Qatar Airways.
              </p>
              <p>
                A qualified business coach and executive mentor, he has successfully guided numerous organizations
                and individuals to achieve sustainable growth and excellence in the business world. His strategic
                insights and leadership expertise have earned him Board Advisor roles at several prominent
                companies, including ARC AeroSystems, Aviation Jobsearch, Blue Ocean Corporation (UAE), FlyBig
                (India), Small World Airlines, Supreme Jets, UK Capital Investments, UK Aerospace Investments, UK
                Energy Investments, and UK Health and Leisure Investments.
              </p>
              <p>
                In addition to his advisory roles, he is a published author of several books that explore key
                aspects of business and leadership. He has also been a featured guest on major television networks
                such as BBC and Sky TV, where he has shared expert commentary on a wide range of business and
                economic issues.
              </p>
            </div>
          </div>

          <div className="mdp-col-right">
            <div className="mdp-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/advisory-bg-triangle-right.png" alt="Background" className="mdp-bg-shape" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/john-ellis.png" alt="John Ellis" className="mdp-portrait" />
            </div>
          </div>
        </div>

        <div className="mdp-extended-layout">
          <div className="mdp-info-grid">
            <div className="mdp-gray-card">
              <h4>Professional Experience:</h4>
              <ul className="mdp-list">
                <li><strong>Chief Operating Officer</strong> Blue Ocean Corporation</li>
                <li><strong>Chief Operating Officer</strong> Small World Airlines</li>
                <li><strong>Chief Executive Officer</strong> Ellis Capital Partners</li>
                <li><strong>Chief Operating Officer</strong> ARC AeroSystems</li>
                <li><strong>Founder</strong> UK Aerospace Investments</li>
                <li><strong>Chief Executive Officer</strong> Middle East Aerospace</li>
                <li><strong>Commercial Director</strong> Fujairah International Airport</li>
                <li><strong>Business Development Director</strong> Farnborough Aerospace Consortium</li>
              </ul>
              <h4 style={{ marginTop: 25 }}>Certifications:</h4>
              <ul className="mdp-list">
                <li><strong>Airline In-Flight Firefighting Instructor</strong> UK Civil Aviation Authority</li>
                <li><strong>NLP Life and Business Coach</strong> Bournemouth University Training</li>
              </ul>
            </div>

            <div className="mdp-gray-col-right">
              <div className="mdp-gray-card" style={{ marginBottom: 20 }}>
                <h4>Qualifications:</h4>
                <ul className="mdp-list">
                  <li><strong>Aviation Economics and Finance</strong> London School of Economics and Finance</li>
                  <li><strong>HR Management</strong> American Certification Institute</li>
                </ul>
              </div>
              <div className="mdp-gray-card">
                <h4>Published Works:</h4>
                <ul className="mdp-list">
                  <li>The 28 Golden Rules of Personal and Business Success</li>
                  <li>NLP Techniques for Incredible Success</li>
                  <li>Understanding UK Export Finance</li>
                  <li>Problem Solving with GROW Techniques</li>
                </ul>
              </div>
            </div>
          </div>
          <p style={{ marginTop: 20, fontSize: '1.125rem', lineHeight: 1.7 }}>
            With his extensive expertise, visionary leadership, and commitment to excellence, John Ellis, as COO of
            Blue Ocean Corporation, continues to drive transformative growth and innovation in the professional
            training and consulting sector.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
