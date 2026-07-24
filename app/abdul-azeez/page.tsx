import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AbdulAzeezPage() {
  return (
    <>
      <Header />

      <section className="members-detaling-part">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Element" className="mdp-decor-left" />

        <div className="mdp-wrapper">
          <div className="mdp-col-left">
            <div className="mdp-header">
              <h1 className="azeez-header">Abdul Azeez</h1>
              <p className="mdp-designations">
                Vice Chairman<br />
                Blue Ocean Corporation
              </p>
            </div>

            <div className="mdp-content">
              <h3>
                Visionary Entrepreneur | Motivational Speaker | Group Chairman, Blue Ocean Corporation
                <br />
                Transforming People, Inspiring Progress
              </h3>
              <p className="azeez-para">
                Abdul Azeez is a distinguished writer, motivational speaker, entrepreneur, and the Group Chairman of
                Blue Ocean Corporation. With over 26 years of experience, he has profoundly shaped the professional
                development landscape across the Middle East and Asia. His unwavering commitment to quality
                education, mentorship, and career transformation has empowered thousands of professionals to unlock
                their potential and succeed in a dynamic world.
              </p>
              <p className="azeez-para">
                A passionate advocate for lifelong learning, Abdul Azeez has inspired a generation of young
                professionals through his guidance and leadership. His dedication to nurturing talent and instilling
                purpose-driven growth has left a lasting mark on both individuals and organizations.
              </p>

              <h3 style={{ marginTop: 40 }}>A Legacy of Leadership and Impact</h3>
              <p className="azeez-para">
                As an entrepreneur and leader, he has built high-performance teams, fostered strategic partnerships,
                and driven organizational expansion. His people-centric approach emphasizes innovation,
                collaboration, and the creation of thriving work environments where each member is encouraged to
                contribute meaningfully. Abdul Azeez&apos;s visionary leadership continues to guide Blue Ocean
                Corporation&apos;s mission to elevate professionals and inspire sustainable success.
              </p>
              <p className="azeez-para">
                His dedication lies in promoting quality learning and supporting young professionals aiming to make
                their mark in their respective fields.
              </p>
            </div>
          </div>

          <div className="mdp-col-right">
            <div className="mdp-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/advisory-bg-triangle-right.png" alt="Background" className="mdp-bg-shape" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/abdul-azeez.png" alt="Abdul Azeez" className="mdp-portrait need1" />
            </div>
          </div>
        </div>
      </section>

      <section className="footer-brand-banner">
        <div className="fbb-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand-logo-white.svg" alt="Blue Ocean Logo" className="fbb-logo" />
          <p>
            Under his leadership, Blue Ocean has grown into a globally respected institution for professional
            development and strategic innovation.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
