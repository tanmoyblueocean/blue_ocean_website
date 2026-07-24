import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MichaelProffittPage() {
  return (
    <>
      <Header />

      <section className="members-detaling-part">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Element" className="mdp-decor-left" />

        <div className="mdp-wrapper">
          <div className="mdp-col-left">
            <div className="mdp-header">
              <h1 className="mdp-name">Michael Proffitt</h1>
              <p className="mdp-designations">
                Former CEO<br />
                Dubai Logistics City<br />
                Advisor, Blue Ocean Corporation
              </p>
            </div>

            <div className="mdp-content">
              <h3>Global Logistics Visionary | Infrastructure Pioneer</h3>
              <p>
                Michael Proffitt is a globally respected logistics strategist and infrastructure pioneer, renowned
                for his transformational leadership as the founding CEO of Dubai Logistics City (DLC) and as a
                Management Board Member of Dubai World Central (DWC), shaping major global logistics hubs.
              </p>

              <h3>Global Leadership in Business Transformation</h3>
              <p>
                With over three decades of international experience, Michael has successfully led high-impact
                logistics and infrastructure initiatives across Europe, the Middle East, Asia, and Latin America. He
                has held senior executive roles at DHL (Deutsche Post World Net), Danzas, Hays plc, and McGregor
                Cory, where he managed complex transformations and provided strategic advice on large-scale
                logistics optimization and operational excellence.
              </p>
            </div>
          </div>

          <div className="mdp-col-right">
            <div className="mdp-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/advisory-bg-triangle-right.png" alt="Background" className="mdp-bg-shape" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/michael-proffitt.png" alt="Michael Proffitt" className="mdp-portrait" />
            </div>
          </div>
        </div>

        <div className="mdp-extended-layout">
          <h3 className="mdp-extended-title">Global Influence in Logistics, Strategy, and Development</h3>

          <div className="mdp-grid-3">
            <div className="mdp-light-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/element-2.png" alt="Notch" className="mdp-card-notch_below" />
              <h4>Founding CEO of Dubai Logistics City (DLC)</h4>
              <p>
                As the visionary behind the world&apos;s first fully integrated logistics platform, Michael played a
                critical role in positioning Dubai as a global logistics hub. Under his leadership, DLC became a
                benchmark for innovation in the supply chain and logistics sector.
              </p>
            </div>

            <div className="mdp-light-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/element-2.png" alt="Notch" className="mdp-card-notch_below" />
              <h4>Strategic Contributions Across Continents</h4>
              <p>
                Michael and his team have supported companies and projects across Europe, the UAE, Saudi Arabia,
                Turkey, Mexico, India, Kazakhstan, and Azerbaijan. Their work includes the development of Free Trade
                Zones in Dubai, Mexico, India, and Azerbaijan.
              </p>
            </div>

            <div className="mdp-light-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/element-2.png" alt="Notch" className="mdp-card-notch_below" />
              <h4>Pioneer in Economic Development</h4>
              <p>
                With deep expertise in emerging markets, he has contributed to national-level initiatives that have
                accelerated economic growth, trade facilitation, and investment opportunities.
              </p>
            </div>
          </div>

          <div className="mdp-dark-card">
            <h4>Chief Advisor &ndash; Blue Ocean Corporation</h4>
            <p>
              As the Advisor to Blue Ocean Corporation, a global leader in logistics and supply chain training, he
              plays a pivotal role in guiding the organization&apos;s strategic direction, prioritizing innovative
              training methodologies, infrastructure development, and impactful public-private partnerships.
            </p>
            <p>
              He drives strategic initiatives that equip professionals with practical skills, aligning with the
              dynamic needs of the global economy.
            </p>
          </div>

          <div className="mdp-grid-2">
            <div className="mdp-gray-card">
              <h4>A Thought Leader &amp; Global Speaker</h4>
              <p>
                Michael is a respected thought leader and keynote speaker at international conferences, sharing
                insights on <strong>business transformation, logistics innovation, leadership strategies, and
                economic development</strong>. His ability to bridge industry knowledge with real-world application
                makes him an influential mentor and guide for professionals worldwide.
              </p>
            </div>

            <div className="mdp-gray-card">
              <h4>Driving Excellence, Inspiring Change</h4>
              <p>
                With an unwavering dedication to strategic innovation, leadership excellence, and business
                transformation, Michael Proffitt continues to shape industries, empower leaders, and redefine
                success on a global scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
