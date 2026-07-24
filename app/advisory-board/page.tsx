import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Member = {
  name: string;
  profileHref?: string;
  designations: string[];
  expertise: string;
  contributions: string;
  bio: string;
  portrait: string;
};

const boardMembers: Member[] = [
  {
    name: 'Sourav Ganguly',
    profileHref: '/sourav-ganguly',
    designations: [
      'Member of Board, Blue Ocean Corporation',
      'Chairman - ICC Cricket Committee',
      'Former President',
      'Board of Control for Cricket in India (BCCI)',
    ],
    expertise: 'Leadership, Team Building, Strategic Decision-Making',
    contributions:
      'Offers insights into leadership, resilience, and strategy, bringing a high-performance mindset to Blue Ocean Corporation.',
    bio:
      "Sourav Ganguly, former captain of the Indian cricket team and current Chairman of the ICC Men's Cricket Committee, is a legendary leader known for transforming Indian cricket. His leadership on and off the field is an inspiration in team building, strategy, and perseverance - qualities he brings to Blue Ocean Corporation as a strategic advisor.",
    portrait: '/images/sourav-ganguly.png',
  },
  {
    name: 'Michael Proffitt',
    profileHref: '/michael-proffitt',
    designations: [
      'Member of Board, Blue Ocean Corporation',
      'Former CEO - Dubai Logistics City',
      'Renowned International Logistics & Supply Chain Expert',
    ],
    expertise: 'Global Logistics Strategy, Supply Chain Transformation, Infrastructure Development',
    contributions:
      'Provides high-level strategic guidance on expanding global supply chain training frameworks and building international industry partnerships.',
    bio:
      "Michael Proffitt is a globally recognized leader in the logistics and supply chain industry. As the former CEO of Dubai Logistics City, he played a pivotal role in establishing Dubai as a premier global logistics hub. With decades of executive experience across major international markets, he brings invaluable strategic oversight to Blue Ocean Corporation's global growth initiatives.",
    portrait: '/images/michael-proffitt.png',
  },
  {
    name: 'Dr. Sathya Menon',
    profileHref: '/sathya-menon',
    designations: ['Chairman & Managing Director', 'Blue Ocean Corporation', 'Vice Chairman of CILT – UAE Chapter'],
    expertise: 'Leadership • Supply Chain Training & Consulting. Strategic Development',
    contributions:
      "Leads Blue Ocean Corporation's strategic growth and global expansion by driving innovation across professional training, business transformation, and global conferences.",
    bio:
      "With over 30 years of industry expertise, Dr. Sathya Menon has transformed supply chain practices across continents, guiding over 30,000 professionals and driving operational excellence in leading organizations. As the Group CEO of Blue Ocean Corporation, he leads the organization's global strategy, spearheads innovation across professional training and consulting, and builds strategic alliances that position Blue Ocean as a pioneer in industry-relevant education and business transformation.",
    portrait: '/images/dr-menon-adv3.png',
  },
  {
    name: 'Abdul Azeez',
    profileHref: '/abdul-azeez',
    designations: ['Vice Chairman', 'Blue Ocean Corporation'],
    expertise: 'Corporate Strategy, Business Development, Executive Leadership',
    contributions: "Provides vision, governance, and strategic direction to Blue Ocean Corporation's global initiatives.",
    bio:
      "As the Chairman, Abdul Azeez has been instrumental in Blue Ocean Corporation's rise as a global leader. His business acumen and leadership ensure that the company remains at the forefront of industry excellence.",
    portrait: '/images/abdul-azeez.png',
  },
  {
    name: 'John Ellis',
    profileHref: '/john-ellis',
    designations: ['Chief Operating Officer', 'Blue Ocean Corporation'],
    expertise: 'Aerospace, Operations Management, Business Growth',
    contributions: 'Optimizes operational efficiency and service delivery at Blue Ocean Corporation.',
    bio:
      'Having held leadership roles in aerospace and airport management, John Ellis brings invaluable experience in optimizing large-scale operations. His expertise ensures seamless execution of training and consulting projects at Blue Ocean.',
    portrait: '/images/john-ellis.png',
  },
  {
    name: 'VS Ramachandran',
    profileHref: '/vs-ramachandran',
    designations: ['Chief Financial Officer', 'Blue Ocean Corporation'],
    expertise: 'Financial Planning, Risk Management, Corporate Strategy',
    contributions: 'Oversees financial health, risk management, and strategic financial planning at Blue Ocean.',
    bio:
      'A seasoned finance leader with decades of experience in corporate planning and financial strategy, VS Ramachandran plays a crucial role in ensuring fiscal responsibility and sustainable growth for Blue Ocean Corporation.',
    portrait: '/images/ramachandran.png',
  },
  {
    name: 'Dr. Pushpinder S. Puniha',
    profileHref: '/dr-pushpinder-s-puniha',
    designations: ['Advisory Board Member,', 'Chairperson, Consultative Group on Tax Policy', 'NITI Aayog'],
    expertise: 'Public finance, tax policy, collaborative governance, development finance, institutional innovation, administrative reform.',
    contributions: 'Provides strategic guidance supporting governance, policy, and institutional initiatives.',
    bio: 'Provides strategic guidance supporting governance, policy, and institutional initiatives.',
    portrait: '/images/KSy5sUDeWghw9dUKiUK5LLJpgoCxxLoUBnrV90LI.png',
  },
  {
    name: 'Jayesh George',
    profileHref: '/jayesh-george',
    designations: ['Director – Corporate Relations', 'Blue Ocean Corporation'],
    expertise:
      'Sports administration • Strategic leadership • Cricket governance • Institutional building • Event management • Policy reform in sports',
    contributions:
      'At Blue Ocean Corporation, he drives leadership development, fosters institutional innovation, supports organizational growth, and builds strategic partnerships aligned with global governance standards.',
    bio:
      'At Blue Ocean Corporation, he drives leadership development, fosters institutional innovation, supports organizational growth, and builds strategic partnerships aligned with global governance standards.',
    portrait: '/images/8tXqvj9r1nzgkGJYSDPD8iY87YsZb4V75PUEhCma.png',
  },
];

const roleCards = [
  {
    title: 'Strategic Direction',
    desc: 'Providing high-level guidance on industry trends, business growth, and global expansion.',
  },
  {
    title: 'Innovation & Excellence',
    desc: 'Ensuring Blue Ocean Corporation remains a leader in professional training, consulting, and conferences.',
  },
  {
    title: 'Global Partnerships',
    desc: 'Strengthening relationships with business leaders, policymakers, and academic institutions',
  },
  {
    title: 'Industry Thought Leadership',
    desc: 'Sharing insights that shape the future of leadership, supply chain, and corporate training.',
  },
];

export default function AdvisoryBoardPage() {
  return (
    <>
      <Header />

      {/* Banner */}
      <section className="advisory-head">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Element" className="ah-decor-left" />

        <div className="ah-wrapper">
          <div className="ah-content">
            <h2 className="ah-title">
              Guiding Excellence,<br />
              <strong>Shaping the Future</strong>
            </h2>

            <p className="ah-desc">
              At Blue Ocean Corporation, our Advisory Board is composed of industry pioneers, thought leaders, and
              visionaries who bring a wealth of experience in business strategy, leadership, innovation, and industry
              transformation. Their insights and expertise steer our organization toward global excellence, ensuring
              we remain at the forefront of professional training, consulting, and industry conferences.
            </p>

            <p className="ah-desc">
              With decades of collective experience, our advisors play a crucial role in shaping our strategic
              direction, fostering innovation, and strengthening global partnerships.
            </p>
          </div>

          <div className="ah-board-header">
            <h3 className="ah-subtitle">
              Meet Our Esteemed<br />
              <strong>Advisory Board</strong>
            </h3>
          </div>
        </div>
      </section>

      {/* Board Members */}
      {boardMembers.map((member, i) => {
        const isRightVisual = i % 2 === 0;
        const infoCol = (
          <div className={isRightVisual ? 'ss-info-col' : 'ps-info-col'}>
            <h2 className={isRightVisual ? 'ss-name' : 'ps-name'}>{member.name}</h2>
            <div className={isRightVisual ? 'ss-designations' : 'ps-designations'}>
              {member.designations.map((d) => (
                <p key={d}>{d}</p>
              ))}
            </div>

            <div className={isRightVisual ? 'ss-bio-body' : 'ps-bio-body'}>
              <p>
                <strong>Expertise:</strong>
                <br />
                {member.expertise}
              </p>

              <p>
                <strong>Contributions:</strong>
                <br />
                {member.contributions}
              </p>

              <p>
                <strong>Brief Bio:</strong>
                <br />
                {member.bio}
              </p>
            </div>

            <div className={isRightVisual ? 'ss-action-row' : 'ps-action-row'}>
              <Link href={member.profileHref || '#'} className={isRightVisual ? 'btn-ss-arrow' : 'btn-ps-arrow'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={isRightVisual ? '/images/Arrow right.png' : '/images/Arrow left.png'}
                  alt={isRightVisual ? 'Right Arrow' : 'left Arrow'}
                  className="btn-iconssc"
                />
              </Link>
            </div>
          </div>
        );

        const visualCol = (
          <div className={isRightVisual ? 'ss-visual-col' : 'ps-visual-col'}>
            <div className={isRightVisual ? 'ss-visual-stage' : 'ps-visual-stage'}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={isRightVisual ? '/images/advisory-bg-triangle-right.png' : '/images/advisory-bg-triangle-left.png'}
                alt="Geometric Background"
                className={isRightVisual ? 'ss-bg-shape' : 'ps-bg-shape'}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={member.portrait} alt={`${member.name} Portrait`} className={isRightVisual ? 'ss-portrait' : 'ps-portrait'} />
            </div>
          </div>
        );

        return (
          <section key={member.name} className={isRightVisual ? 'sourav-sec' : 'profitt-sec'}>
            <div className={isRightVisual ? 'ss-wrapper' : 'ps-wrapper'}>
              {isRightVisual ? (
                <>
                  {infoCol}
                  {visualCol}
                </>
              ) : (
                <>
                  {visualCol}
                  {infoCol}
                </>
              )}
            </div>
          </section>
        );
      })}

      {/* Role of the Advisory Board */}
      <section className="advisory-role">
        <div className="ar-wrapper">
          <h2 className="ar-main-title">The Role of Our Advisory Board</h2>

          <div className="ar-grid">
            {roleCards.map((card) => (
              <article key={card.title} className="ar-card">
                <h3 className="ar-card-title">{card.title}</h3>
                <p className="ar-card-desc">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="join-advisory">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/element.png" alt="Decorative Graphic" className="ja-decor-left" />

        <div className="ja-wrapper">
          <div className="ja-row-top">
            <div className="ja-cyan-strip">
              <h2>Join Us in Shaping the Future.</h2>
            </div>

            <div className="ja-intro-text">
              <p>Our Advisory Board helps us drive impactful change, empowering professionals and organizations worldwide.</p>
            </div>
          </div>

          <div className="ja-row-mid">
            <div className="ja-navy-strip">
              <p>Blue Ocean Corporation remains committed to excellence, leadership, and global impact - Guided by our esteemed advisors.</p>
            </div>
          </div>

          <div className="ja-row-bottom">
            <h3 className="ja-cta-text">Reach out to us today and let&apos;s create impact together!</h3>
            <a href="#" className="btn-ja-connect">
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
