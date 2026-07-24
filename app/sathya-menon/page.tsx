import Header from '@/components/Header';
import Footer from '@/components/Footer';

const certifications = {
  left: [
    { code: 'CPM', text: 'Certified Purchase Manager from Institute of Supply Chain Management (ISM), USA' },
    {
      code: 'CISCM',
      text: 'Certified International Supply Chain Manager from International Purchasing and Supply Chain Management Institute (IPSCMI), USA',
    },
    {
      code: 'CICCM',
      text: 'Certified International Commercial Contracts Manager from International Purchasing and Supply Chain Management Institute (IPSCMI), USA',
    },
    {
      code: 'CIPTC',
      text: 'Certified International Professional Training Consultant from American Certification Institute (ACI), USA',
    },
    { code: 'CPPM', text: 'Certified Professional Purchasing Manager from American Purchasing Society (APS), USA' },
    { code: 'CPP', text: 'Certified Purchasing Professional from American Purchasing Society (APS), USA' },
  ],
  right: [
    { code: 'CILT', text: 'Certification in Supply Chain Leadership from Chartered Institute of Logistics and Transport, UK' },
    { code: 'CILT', text: 'Certification in Distribution & Transportation from Chartered Institute of Logistics and Transport, UK' },
    {
      code: 'CILT',
      text: 'Certification in Quality Management & Risk Assessment from Chartered Institute of Logistics and Transport, UK',
    },
    { code: 'CILT', text: 'Certification in Shipping & Freight Forwarding from Chartered Institute of Logistics and Transport, UK' },
    {
      code: 'ABNLP',
      text: 'Certified Associate Leadership & Executive Coach (Neuro-Linguistic Programming) from The American Board of Neuro-Linguistic Programming',
    },
    { code: 'ABNLP', text: 'Certified Organizational Development Coach from The American Board of Neuro-Linguistic Programming' },
    { code: 'ABNLP', text: 'Certified Life Coach from The American Board of Neuro-Linguistic Programming' },
  ],
};

export default function SathyaMenonPage() {
  return (
    <>
      <Header />

      <section className="members-detaling-part">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Element" className="mdp-decor-left" />

        <div className="mdp-wrapper">
          <div className="mdp-col-left">
            <div className="mdp-header">
              <h1 className="mdp-name">Dr. Sathya Menon</h1>
              <p className="mdp-designations">
                Chairman &amp; Managing Director<br />
                Blue Ocean Corporation<br />
                Vice Chairman, CILT UAE Chapter<br />
                FCIPS, FCLIT, FCMI, CPM, CICCM, CISCM,<br />
                CERTIFIED SAP CONSULTANT &ndash; SCM
              </p>
            </div>

            <div className="mdp-content">
              <h3>
                Visionary Educator | Industry Thought Leader
                <br />
                CEO, Blue Ocean Corporation
              </h3>
              <p>
                With an expertise spanning nearly three decades, Dr Sathya Menon has played a pivotal role in
                shaping a skilled and advanced workforce landscape across the world. His leadership has been
                instrumental in creating an environment that promotes professional growth and innovation,
                significantly enhancing the collective expertise within the region.
              </p>
              <p>
                A renowned Supply Chain training and consulting expert, Dr Menon has a remarkable track record of
                training over 30,000 professionals in Logistics and Supply Chain Management and developing tailored
                solutions that help numerous organizations to enhance operational efficiency and drive practices to
                advance the organization&apos;s business development. From forging strategic partnerships with
                global training institutions and re-modelling business structure to effectively address the
                pandemic challenges to strengthening the infrastructure by revamping courses and enhancing digital
                channels, his commitment to advancing the organization is unequivocal.
              </p>
            </div>
          </div>

          <div className="mdp-col-right">
            <div className="mdp-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/advisory-bg-triangle-right.png" alt="Background" className="mdp-bg-shape" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/dr-menon-adv3.png" alt="Dr. Sathya Menon" className="mdp-portrait" />
            </div>
          </div>
        </div>

        <div className="mdp-extended-layout">
          <h3 className="mdp-extended-title">A Visionary Leader in Learning &amp; Development</h3>
          <p className="mdp-extended-desc">
            Dr. Sathya Menon&apos;s leadership journey highlights the transformative power of dedication,
            resilience, and true commitment to excellence. As a visionary leader, educator, and mentor, Dr. Menon
            has not only shaped the landscape of his profession but has also inspired thousands of individuals to
            attain the highest standards of achievement in life.
          </p>

          <div className="mdp-grid-4">
            <div className="mdp-light-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/element-2.png" alt="Notch" className="mdp-card-notch" />
              <h4>CEO &amp; Strategic Architect of Blue Ocean Corporation</h4>
              <p>
                Under his leadership, Blue Ocean has delivered <strong>exceptional corporate training, leadership
                development programs</strong> and international certifications, transforming careers and businesses.
              </p>
            </div>

            <div className="mdp-light-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/element-2.png" alt="Notch" className="mdp-card-notch" />
              <h4>Champion of Workforce Empowerment</h4>
              <p>
                Having mentored and trained thousands of professionals, Dr. Menon has played a crucial role in
                <strong> bridging global skill gaps</strong> and fostering innovation-driven economies.
              </p>
            </div>

            <div className="mdp-light-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/element-2.png" alt="Notch" className="mdp-card-notch" />
              <h4>Thought Leader &amp; Keynote Speaker</h4>
              <p>
                A sought-after speaker at global forums, conferences, and summits, Dr Menon has shared insights on
                business transformation, leadership, professional development, and the future of work.
              </p>
            </div>

            <div className="mdp-light-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/element-2.png" alt="Notch" className="mdp-card-notch" />
              <h4>Global Recognition &amp; Influence</h4>
              <p>
                He has been instrumental in shaping <strong>high-impact leadership programs</strong> for
                professionals, corporate executives, and government entities, driving sustainable business
                excellence.
              </p>
            </div>
          </div>

          <div className="mdp-awards-section">
            <div className="mdp-awards-content">
              <h3 className="mdp-extended-title">Awards &amp; Honors</h3>
              <p className="mdp-extended-desc">
                Dr. Menon&apos;s groundbreaking contributions to education, leadership, and corporate training have
                earned him prestigious accolades and global recognition, including:
              </p>
              <ul className="mdp-list">
                <li>GMBF Business Excellence Award at GMBF Global&apos;s MahaBiz, Dubai, 2022</li>
                <li>Top 100 Leaders in Education&apos; Award by Global Forum for Education and Learning (GFEL), Dubai, 2019</li>
                <li>CEO of the Year Award by the prestigious Middle East Training and Development Leadership Conference, Dubai, 2019</li>
                <li>Best Training Initiative in Logistics and Supply Chain Management in Asia, Malaysia, 2018</li>
                <li>Outstanding Contribution to Global Learning, Dubai at the World HRD Congress, Dubai, 2018</li>
                <li>Global Training and Development Leadership Award, Mumbai, 2017</li>
              </ul>
            </div>
            <div className="mdp-awards-placeholder"></div>
          </div>

          <div className="mdp-grid-2 mdp-mb-30">
            <div className="mdp-gray-card">
              <h4>Fellowships</h4>
              <ul className="mdp-list">
                <li>Fellow of the Chartered Institute of Logistics and Transport (FCILT)</li>
                <li>Fellow of the Chartered Institute of Procurement &amp; Supply (FCIPS)</li>
                <li>Fellow of the Chartered Management Institute (FCMI)</li>
              </ul>
            </div>

            <div className="mdp-gray-card">
              <h4>Academic Qualifications</h4>
              <ul className="mdp-list">
                <li>Doctorate in Business Management</li>
                <li>Master&apos;s Degree in Business Administration (MBA)</li>
                <li>Bachelor&apos;s Degree in Business Management</li>
              </ul>
            </div>
          </div>

          <div className="mdp-dark-card">
            <h4>Driving Global Impact &amp; Transforming Industries</h4>
            <p>
              Dr Menon&apos;s influence extends beyond the business realm, as he is a prominent figure within the
              sports community. An ardent fan of cricket, Dr. Sathya Menon himself is a former Kerala state
              cricketer. He has been honoured with the Arjuna Award from the Hindustan Arts Society for his
              contribution to the sport. Beyond sports, his intellectual curiosity is evident in his deep-rooted
              passion for emerging technologies, notably the Metaverse and Artificial Intelligence, areas where he
              continually seeks to expand his knowledge and understanding.
            </p>
          </div>
        </div>
      </section>

      <section className="more-qualifi">
        <div className="mq-wrapper">
          <h2 className="mq-header-style">Professional Certifications</h2>

          <div className="mq-cert-grid">
            <div className="mq-cert-col">
              {certifications.left.map((cert, i) => (
                <div className="mq-cert-item" key={`left-${i}`}>
                  <span className="mq-badge">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/ribbon-secondary.svg" alt="Ribbon" /> {cert.code}
                  </span>
                  <p>{cert.text}</p>
                </div>
              ))}
            </div>

            <div className="mq-cert-col">
              {certifications.right.map((cert, i) => (
                <div className="mq-cert-item" key={`right-${i}`}>
                  <span className="mq-badge">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/ribbon-secondary.svg" alt="Ribbon" /> {cert.code}
                  </span>
                  <p>{cert.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mq-geo-staircase">
          <div className="mq-stair-top">
            <div className="mq-cyan-strip"></div>
          </div>

          <div className="mq-stair-bottom">
            <div className="mq-text-left">
              <h2 className="mq-header-style">
                Shaping the Future of<br />
                Professional Learning
              </h2>
            </div>

            <div className="mq-navy-strip">
              <p className="mq-para-style">
                With a relentless commitment to excellence, innovation, and empowerment, Dr. Sathya Menon continues
                to lead Blue Ocean Corporation toward greater global impact. His mission is to equip professionals
                and organizations with the skills, knowledge, and leadership mindset required to thrive in an
                ever-evolving business world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
