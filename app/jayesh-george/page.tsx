import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JayeshGeorgePage() {
  return (
    <>
      <Header />

      <section className="members-detaling-part jayassh">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Element" className="mdp-decor-left" />

        <div className="mdp-wrapper">
          <div className="mdp-col-left">
            <div className="mdp-header">
              <h1 className="mdp-name">Jayesh George</h1>
              <p className="mdp-designations">
                Director – Corporate Relations<br />
                Blue Ocean Corporation
              </p>
            </div>

            <div className="mdp-content">
              <h3>Leadership in Cricket Governance</h3>
              <p>
                Jayesh George brings unmatched experience in cricket administration and governance, combining his
                leadership in state cricket with national-level responsibilities at the BCCI. His career
                demonstrates a commitment to strengthening institutional frameworks and advancing the reach of
                cricket across India.
              </p>

              <h3>Championing Women&apos;s Cricket</h3>
              <p>
                As the first Chairman of the Women&apos;s Premier League, he has taken on the responsibility of
                expanding opportunities for women cricketers, ensuring that the league grows beyond metropolitan
                centers to reach India&apos;s hinterlands. His vision emphasizes inclusivity, transparency, and
                professional excellence in sports administration.
              </p>

              <h3>Strategic Role at Blue Ocean Corporation</h3>
              <p>
                At Blue Ocean Corporation, Jayesh George contributes his strategic leadership, insights on
                governance, and mentoring approach to foster institutional innovation, support organizational
                growth, and align corporate initiatives with global standards in leadership and administration.
              </p>
            </div>
          </div>

          <div className="mdp-col-right">
            <div className="mdp-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/advisory-bg-triangle-right.png" alt="Background" className="mdp-bg-shape" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/8tXqvj9r1nzgkGJYSDPD8iY87YsZb4V75PUEhCma.png"
                alt="Jayesh George"
                className="mdp-portrait need1"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mdp-extended-layout">
        <div className="mdp-info-grid">
          <div className="mdp-gray-card">
            <h4>Professional Experience</h4>
            <ul className="mdp-list">
              <li>Appointed first-ever Chairman of the Women&apos;s Premier League, leading its growth as a global platform for women&apos;s cricket.</li>
              <li>Spearheaded the Kerala Cricket League (KCL), boosting competitive cricket in the state.</li>
              <li>Oversaw Kerala&apos;s journey to its first Ranji Trophy final, a milestone in the state&apos;s cricket history.</li>
              <li>Played a key role in modernizing cricket governance structures within KCA and BCCI.</li>
            </ul>
          </div>

          <div className="mdp-gray-card">
            <h4>Major Achievements</h4>
            <ul className="mdp-list">
              <li>Chairman, Women&apos;s Premier League (WPL), BCCI (2025 - Present)</li>
              <li>President, Kerala Cricket Association (2022 - Present)</li>
              <li>Joint Secretary, Board of Control for Cricket in India (2019)</li>
              <li>Secretary / Treasurer / Joint Secretary, Kerala Cricket Association (Various terms)</li>
              <li>Secretary, Ernakulam District Cricket Association</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
