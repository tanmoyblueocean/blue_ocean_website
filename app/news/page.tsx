import Header from '@/components/Header';
import Footer from '@/components/Footer';

const featuredNewsLeft = [1, 2, 3, 4, 5];
const featuredNewsRight = [6, 7, 8, 9, 10];

export default function NewsPage() {
  return (
    <>
      <Header />

      <section className="hero-section">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/news-banner.png" alt="Drive Transformation" className="hero-bg-img" />

        <div className="hero-content">
          <p>Blue Ocean</p>
          <h1>in the Spotlight</h1>
        </div>
      </section>

      <section className="around-globe">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Concept Graphic" className="globe-decor-left" />

        <div className="globe-wrapper">
          <div className="globe-header">
            <h2 className="globe-title">
              <span className="title-light">Making Headlines</span>
              <br />
              <span className="title-bold">Around the Globe</span>
            </h2>
          </div>

          <div className="globe-split-layout">
            <div className="globe-text-col">
              <p className="globe-lead">
                Our journey of impact is featured across leading global media showcasing visionary
                leadership, transformative events, and a lasting legacy of innovation.
              </p>
            </div>

            <div className="globe-card-col">
              <div className="media-link-card">
                <div className="mlc-header">
                  <span className="mlc-title">Digital Media Link</span>
                  <span className="mlc-icon">&#8599;</span>
                </div>

                <div className="mlc-body">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7287440074768613376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mlc-link"
                  >
                    https://www.linkedin.com/feed/update/urn:li:activity:7287440074768613376
                  </a>
                  <hr className="mlc-divider" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-news-section">
        <div className="fn-wrapper">
          <div className="fn-grid">
            <div className="fn-column">
              {featuredNewsLeft.map((n) => (
                <div className="fn-item-card" key={n}>
                  <div className="fn-header">Featured News {n}</div>
                  <div className="fn-image-wrapper">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/fn${n}.png`} alt={`Featured News ${n}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="fn-column">
              {featuredNewsRight.map((n) => (
                <div className="fn-item-card" key={n}>
                  <div className="fn-header">Featured News {n}</div>
                  <div className="fn-image-wrapper">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/fn${n}.png`} alt={`Featured News ${n}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
