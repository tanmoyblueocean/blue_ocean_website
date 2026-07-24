import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SouravGangulyPage() {
  return (
    <>
      <Header />

      <section className="members-detaling-part">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Element" className="mdp-decor-left" />

        <div className="mdp-wrapper">
          <div className="mdp-col-left">
            <div className="mdp-header">
              <h1 className="mdp-name">Sourav Ganguly</h1>
              <p className="mdp-designations">
                Member of Board, Blue Ocean Corporation<br />
                Chairman - ICC Cricket Committee<br />
                Former President<br />
                Board of Control for Cricket in India (BCCI)
              </p>
            </div>

            <div className="mdp-content">
              <h3>Visionary Leader | Iconic Cricketer | Strategic Advisor</h3>
              <p>
                Sourav Ganguly, widely known as Dada, is a legendary figure in international cricket and one of
                India&apos;s most influential leaders in sports and strategy. Recognized as the Maharaja of Indian
                Cricket, he redefined leadership through his bold decisions, transformative vision, and ability to
                inspire performance under pressure.
              </p>
              <p>
                As one of the most successful captains in Indian cricket history, Ganguly led the national team
                during a pivotal era, instilling confidence, resilience, and a fearless spirit that continues to
                influence leadership culture in India and beyond.
              </p>

              <h3>A Legacy of Leadership &amp; Excellence</h3>
              <p>
                Sourav Ganguly, fondly known as Dada, is an iconic figure in the world of cricket and a distinguished
                leader whose impact transcends the sporting arena. Renowned for his fearless leadership, exceptional
                strategic mindset, and ability to inspire transformation, Ganguly is celebrated as one of the greatest
                captains in Indian cricket history.
              </p>

              <h3>From Cricket Legend to Strategic Visionary</h3>
              <p>
                After his illustrious playing career, Ganguly served as the President of the Board of Control for
                Cricket in India (BCCI), where he brought strategic reforms, modernized infrastructure, and
                reinforced governance practices that shaped the future of Indian cricket. Currently, he serves as
                the Chairman of the ICC Men&apos;s Cricket Committee, where he continues to shape the global
                cricketing landscape with his deep knowledge and visionary leadership.
              </p>
              <p>
                As an Advisory Board Member at Blue Ocean Corporation, Sourav Ganguly brings unparalleled experience
                in high-performance leadership, strategic planning, and decision-making under pressure. His insights
                contribute to Blue Ocean&apos;s mission of empowering professionals with the mindset and skills
                needed to succeed in today&apos;s dynamic business environment.
              </p>

              <h3>Association with Blue Ocean Corporation</h3>
              <p>
                As an <strong>Advisory Board Member at Blue Ocean Corporation</strong>, Sourav Ganguly brings his
                wealth of experience in leadership, strategy, and high-performance management. His association with
                Blue Ocean reinforces our commitment to fostering innovation, resilience, and transformative learning
                for professionals worldwide.
              </p>
              <p>
                With his expertise in managing teams, navigating challenges, and driving success in high-pressure
                environments, Ganguly serves as an inspiration for professionals seeking to develop leadership
                skills, strategic thinking, and a winning mindset. His insights and guidance align with Blue
                Ocean&apos;s mission of empowering businesses and individuals to thrive in a competitive world.
              </p>

              <h3>A Global Inspiration</h3>
              <p>
                Beyond cricket and corporate leadership, Ganguly&apos;s influence extends to motivational speaking,
                mentoring, and youth empowerment. His journey from a young cricketer to a world-renowned leader is a
                testament to the power of perseverance, adaptability, and visionary thinking.
              </p>
              <p>
                At Blue Ocean Corporation, his expertise and guidance inspire the creation of world-class learning
                experiences and leadership solutions that empower professionals to excel and drive meaningful change.
              </p>
            </div>
          </div>

          <div className="mdp-col-right">
            <div className="mdp-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/advisory-bg-triangle-right.png" alt="Background" className="mdp-bg-shape" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/sourav-ganguly.png" alt="Sourav Ganguly" className="mdp-portrait need1" />
            </div>

            <div className="mdp-quote">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/element-2.png" alt="Quote Element" className="quote-notch-icon" />

              <blockquote>
                &quot;In every game and every business challenge, it is the skills you build over time that define
                how far you go.&quot;
                <br />
                <strong>&ndash; Sourav Ganguly</strong>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
