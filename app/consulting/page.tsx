import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConsultingPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero-section">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/home/home-banner.png" alt="Drive Transformation" className="hero-bg-img" />
        <div className="hero-content con-training con-conf">
          <p>Turning Insights into</p>
          <h1>Impactful Change</h1>
        </div>
      </section>

      {/* Igniting Opportunities — Desktop */}
      <section className="spectrum-section spec-con">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decoration" className="left-decor" />

        <div className="spectrum-container">
          <div className="spectrum-content less-padding">
            <div className="spectrum-header">
              <h2 className="sec-title only-consluting-title">
                <span className="font-light">Igniting Opportunities,</span><br />
                <strong>Driving Transformational Change</strong>
              </h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/28exc.png" alt="28 Years of Excellence" className="badge-28" />
            </div>

            <div className="divider-line"></div>

            <div className="intro-block intro-block-training p-consulting">
              <p className="dip">Our consulting expertise combines innovation, strategy, and leadership to uncover hidden potential. We offer insightful perspectives that guide organizations toward sustainable growth and a dynamic, multifaceted future.</p>

              <div className="stats-row">
                <div className="stat-box" style={{ borderLeft: 'none' }}>
                  <div className="stat-percent" style={{ color: '#37996b' }}>35%</div>
                  <div className="stat-title">Faster<span>Workflow</span></div>
                  <div className="stat-detail">by reducing<span>bottlenecks</span></div>
                </div>
                <div className="stat-box">
                  <div className="stat-percent" style={{ color: '#27a9e0' }}>25%</div>
                  <div className="stat-title">Higher resource<span>utilization</span></div>
                  <div className="stat-detail">Improving<span>output</span></div>
                </div>
                <div className="stat-box">
                  <div className="stat-percent" style={{ color: '#29ab83' }}>30%</div>
                  <div className="stat-title">Higher<span>Turnaround</span></div>
                  <div className="stat-detail">Faster Time to<span>Market projects</span></div>
                </div>
              </div>
            </div>

            <div className="feature-list feature-list-training">
              <div className="feature-item-training">
                <p className="consulting-client">Trusted by 1000+ Clients, Backed by Global Expertise</p>
                <p>With over 200 consultants worldwide and 300+ successful case studies, we bring deep industry knowledge and proven strategies to every engagement. Our client-first approach and global footprint ensure tailored solutions that deliver measurable impact across sectors.</p>
                <p className="dip-third-cons">Drive smarter decisions, improve<br />efficiency, and scale with confidence.</p>
                <a href="#" className="btn-blue">
                  Transform Your Business Today
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="spectrum-visual for-train">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Counslting-triangle.png" alt="Triangle Concept" className="overlap-triangle show-dek onlytrain" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/conference-image-sm.png" alt="Triangle Concept" className="overlap-triangle show-mob" />
          </div>
        </div>
      </section>

      {/* Igniting Opportunities — Mobile */}
      <section className="spectrum-section-mob" style={{ position: 'relative' }}>
        <div className="spectrum-container">
          <div className="spectrum-header">
            <h2 className="sec-title">
              <span className="font-light">Igniting Opportunities,</span><br />
              <strong>Driving Transformational Change</strong>
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/28exc.png" alt="28 Years of Excellence" className="badge-28" />
          </div>

          <div className="intro-block">
            <p>Our consulting expertise combines innovation, strategy, and leadership to uncover hidden potential. We offer insightful perspectives that guide organizations toward sustainable growth and a dynamic, multifaceted future.</p>
            <p>With over 200 consultants worldwide and 300+ successful case studies, we bring deep industry knowledge and proven strategies to every engagement. Our client-first approach and global footprint ensure tailored solutions that deliver measurable impact across sectors.</p>
          </div>

          <div className="mobile-banner-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/conference-image-sm.png" alt="Triangle Concept" className="mobile-banner" />
          </div>

          <div className="feature-list feature-list-training">
            <div className="feature-item-training">
              <p className="dip-third-cons">Drive smarter decisions, improve<br />efficiency, and scale with confidence.</p>
            </div>
          </div>

          <div className="cta-container">
            <a href="#" className="btn-blue">
              Transform Your Business Today
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Shaping Businesses Through Strategic Evolution */}
      <section className="strategic-evolution">
        <div className="evolution-container">
          <div className="evolution-content">
            <h2 className="evolution-title">
              Shaping Businesses <br />
              <span className="highlight">Through Strategic Evolution</span>
            </h2>
            <p className="evolution-description">
              We enable organizations to align their strategic goals with
            </p>
            <ul className="evolution-list">
              <li>Emerging opportunities</li>
              <li>Fostering sustainable</li>
              <li>Long-term growth and transformation.</li>
            </ul>
          </div>
          <div className="evolution-image-wrapper">
            <picture>
              <source media="(max-width: 767px)" srcSet="/images/shaping-business-image.png" />
              <source media="(min-width: 768px)" srcSet="/images/business.webp" />
              <img src="/images/business.webp" alt="Team building a wooden tower" className="evolution-img" />
            </picture>
          </div>
        </div>
      </section>

      {/* A Holistic Approach */}
      <section className="holistic-approach">
        <div className="holistic-container">
          <div className="holistic-image-wrapper">
            <picture>
              <source media="(max-width: 767px)" srcSet="/images/A-Holistic-Approach.png" />
              <source media="(min-width: 768px)" srcSet="/images/Holistic-Approach.png" />
              <img src="/images/Holistic-Approach.png" alt="Hand guiding wooden domino tiles" className="holistic-img" />
            </picture>
          </div>

          <div className="holistic-content">
            <div className="text-block">
              <h2 className="holistic-title">A Holistic Approach to Organizational Transformation</h2>
              <p className="holistic-description">
                We take a holistic approach, ensuring every aspect of your organization transforms in harmony for lasting success.
              </p>
            </div>

            <div className="stats-gradient-bar">
              <div className="stat-item">
                <span className="stat-number">25%</span>
                <p className="stat-text">Increase in revenue for a regional telecom services provider.</p>
              </div>
              <div className="stat-item">
                <span className="stat-number">15%</span>
                <p className="stat-text">Reduction in operating cost for a Leading Aviation Services Provider.</p>
              </div>
              <div className="stat-item">
                <span className="stat-number">40%</span>
                <p className="stat-text">increase in efficiency through Digital Transformation for a services leader.</p>
              </div>
              <div className="stat-item">
                <span className="stat-number">30%</span>
                <p className="stat-text">Higher Customer Retention for a Government Administration Entity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Experience and Insight — Desktop */}
      <section className="power-insight">
        <div className="pi-container">
          <div className="pi-content">
            <div className="metrics-stack">
              <div className="metric-item item-1">
                <span className="metric-num">50+</span>
                <span className="metric-text">Professional<br />Certifications</span>
              </div>
              <div className="metric-item item-2">
                <span className="metric-num">95%</span>
                <span className="metric-text">Client<br />Success Rate</span>
              </div>
              <div className="metric-item item-3">
                <span className="metric-num">1000+</span>
                <span className="metric-text">Successful<br />Engagements</span>
              </div>
            </div>

            <div className="challenges-wrapper">
              <h2 className="challenges-text">
                <span className="text-lightt">Transforming</span>
                <span className="text-boldd">Challenges</span>
                <span className="text-lightt">into</span>
                <span className="text-boldd">Opportunities</span>
              </h2>
            </div>
          </div>

          <div className="pitxt">
            <h1 className="hdn-two">
              <span>The Power of</span>
              Experience and Insight
            </h1>
            <h4 className="hdn-four">Decades of Expertise in Global Business Transformation</h4>
            <p>With extensive experience across industries and regions, we bring unmatched expertise to every project, tackling unique challenges with transformative solutions.</p>

            <h4 className="hdn-four">Insights that Guide Every Decision</h4>
            <p>We blend data-driven analysis with qualitative insights, empowering your business with actionable, future-focused strategies grounded in market trends and organizational behaviour.</p>

            <div className="btn-wrap">
              <a href="#" className="primary-bttn">Transform Your Business Today</a>
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Experience and Insight — Mobile */}
      <section className="power-insight-mob">
        <div className="pi-mob-container">
          <h2 className="mob-hdn-two">
            <span>The Power of</span>
            Experience and Insight
          </h2>

          <div className="mob-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/counsulting-power image.png" alt="Transforming Challenges Into Opportunities" />
          </div>

          <div className="mob-metrics-stack">
            <div className="mob-metric-item">
              <span className="mob-metric-num">50+</span>
              <span className="mob-metric-text">Professional<br />Certifications</span>
            </div>
            <div className="mob-metric-item">
              <span className="mob-metric-num">95%</span>
              <span className="mob-metric-text">Client<br />Success Rate</span>
            </div>
            <div className="mob-metric-item">
              <span className="mob-metric-num">1000+</span>
              <span className="mob-metric-text">Successful<br />Engagements</span>
            </div>
          </div>

          <div className="mob-text-content">
            <h4 className="mob-hdn-four">Decades of Expertise in Global Business Transformation</h4>
            <p>With extensive experience across industries and regions, we bring unmatched expertise to every project, tackling unique challenges with transformative solutions.</p>

            <h4 className="mob-hdn-four">Insights that Guide Every Decision</h4>
            <p>We blend data-driven analysis with qualitative insights, empowering your business with actionable, future-focused strategies grounded in market trends and organizational behaviour.</p>

            <a href="#" className="mob-primary-bttn">Transform Your Business Today &rarr;</a>
          </div>
        </div>
      </section>

      {/* Empowering Organisations Through The Power of Excellence */}
      <section className="drive-trust">
        <div className="dt-container">
          <div className="dt-content">
            <h2 className="dt-heading">
              <span className="dt-heading-light">Empowering Organisations Through:</span><br />
              <span className="dt-heading-bold">The Power of Excellence</span>
            </h2>

            <div className="dt-image-wrapper mobile-only">
              <div className="dt-image-bg" style={{ backgroundImage: "url('/images/counsulting-Drive-Trust.png')" }}></div>
              <div className="dt-image-text">
                Drive <strong>Trust</strong><br />
                and<br />
                <strong>Efficiency</strong><br />
                with <strong>Proven<br />Standards</strong>
              </div>
            </div>

            <p className="dt-para">We help you leverage the value of certifications and global standards to deliver transformative impact for your business.</p>
            <p className="dt-para-sub">Here&apos;s how we can help:</p>

            <ul className="list-flag">
              <li>
                <h4 className="dt-list-title">Enhance Credibility and Trust</h4>
                <p>We guide organizations in achieving globally recognized certifications to build trust with stakeholders and customers.</p>
              </li>
              <li>
                <h4 className="dt-list-title">Boost Market Competitiveness</h4>
                <p>Attract more clients, partners, and investors by showcasing your commitment to excellence.</p>
              </li>
            </ul>

            <div className="dt-stats-box">
              <div className="dt-stat-item">
                <div className="dt-stat-num">100%</div>
                <div className="dt-stat-desc">Regulatory Alignment of targeted standards</div>
              </div>
              <div className="dt-stat-item">
                <div className="dt-stat-num">25%</div>
                <div className="dt-stat-desc">Operational improvement through standardized procedures</div>
              </div>
              <div className="dt-stat-item">
                <div className="dt-stat-num">90%</div>
                <div className="dt-stat-desc">Improved client retention through improved security standards</div>
              </div>
            </div>
          </div>

          <div className="dt-image-wrapper desktop-only">
            <div className="dt-image-bg" style={{ backgroundImage: "url('/images/consulting-meeting.png')" }}></div>
            <div className="dt-image-text">
              Drive <strong>Trust</strong><br />
              and<br />
              <strong>Efficiency</strong><br />
              with <strong>Proven<br />Standards</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Ensure Compliance and Risk Management */}
      <section className="ensure-compliance">
        <div className="ec-container">
          <div className="ec-visuals">
            <div className="ec-image-wrapper desktop-only">
              <div className="ec-image" style={{ backgroundImage: "url('/images/trust-sec-two.webp')" }}></div>
            </div>

            <div className="ec-image-wrapper mobile-only">
              <div className="ec-image" style={{ backgroundImage: "url('/images/trust-sec-two-mobile.png')" }}></div>
            </div>

            <div className="ec-stats-box">
              <div className="ec-stat-item">
                <div className="ec-stat-num">30%</div>
                <div className="ec-stat-desc">Increase in new markets by fulfilling regulations</div>
              </div>
              <div className="ec-stat-item">
                <div className="ec-stat-num">80%</div>
                <div className="ec-stat-desc">Improvement in delivery timelines</div>
              </div>
              <div className="ec-stat-item">
                <div className="ec-stat-num">&nbsp;</div>
                <div className="ec-stat-desc">&nbsp;</div>
              </div>
            </div>
          </div>

          <div className="ec-content">
            <ul className="list-flag">
              <li>
                <h4 className="ec-list-title">Ensure Compliance and Risk Management</h4>
                <p>Build a resilient organization prepared for future challenges.</p>
              </li>
              <li>
                <h4 className="ec-list-title">Foster Continuous Improvement</h4>
                <p>We help embed a culture of continuous improvement by aligning your processes with global standards.</p>
              </li>
            </ul>

            <a href="#" className="ec-btn">Transform Your Business Today &rarr;</a>
          </div>
        </div>
      </section>

      {/* Driving Excellence in Strategy, Execution and Impact */}
      <section className="execution-impact">
        <div className="ei-container">
          <h2 className="ei-main-heading">
            <span className="ei-light">Driving Excellence in</span> <strong className="ei-bold">Strategy, Execution and Impact</strong>
          </h2>

          <div className="ei-grid-container">
            <div className="ei-card ei-card-1">
              <h3 className="ei-card-title">Operationalising your Strategic Vision and Mission</h3>
              <p className="ei-card-text">Operationalising your Strategic Vision and Mission – We work with you to translate your strategic vision and mission into pragmatic and measurable operation plans.</p>
            </div>

            <div className="ei-triangle-wrapper ei-down-wrapper">
              <div className="ei-triangle ei-down">
                <div className="ei-tri-content ei-content-top">
                  <span className="ei-tri-num">60%</span>
                  <span className="ei-tri-desc">Reduction in<br />Lead Times</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/arrow-down.png" alt="Down Arrow" className="ei-arrow" />
                </div>
              </div>
            </div>

            <div className="ei-card ei-card-2">
              <h3 className="ei-card-title">Organizational Transformation</h3>
              <p className="ei-card-text">We work with your leadership and operations teams, to redesign your operations across the people, process, technology dimensions ensuring alignment with your strategy, culture, and objectives.</p>
            </div>

            <div className="ei-card ei-card-3">
              <h3 className="ei-card-title">Innovative Technology Integration</h3>
              <p className="ei-card-text">We identify, implement, and optimize cutting-edge technologies to drive operational efficiency, productivity, and innovation across your business</p>
            </div>

            <div className="ei-triangle-wrapper ei-up-wrapper">
              <div className="ei-triangle ei-up">
                <div className="ei-tri-content ei-content-bottom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/arrow-up.png" alt="Up Arrow" className="ei-arrow" />
                  <span className="ei-tri-num">25%</span>
                  <span className="ei-tri-desc">Improved<br />Inventory turnover</span>
                </div>
              </div>
            </div>

            <div className="ei-card ei-card-4">
              <h3 className="ei-card-title">Cultural Alignment and Leadership Development</h3>
              <p className="ei-card-text">We build leadership capacity and foster a culture that embraces change, ensuring sustainable success as your transformation unfolds</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation Journey */}
      <section className="transform-journey">
        <div className="tj-hero">
          <div className="tj-container">
            <div className="tj-hero-content">
              <h2 className="tj-title">The Transformation Journey</h2>
              <h3 className="tj-subtitle">Navigating Complexity with Confidence</h3>
              <p className="tj-desc">We know transformation can be daunting. With us as your partner, you&apos;ll gain the confidence to navigate challenges and evolve into an agile, future-ready organization.</p>

              <h4 className="tj-drivers-title">Core Drivers of Our Approach...</h4>
              <div className="tj-drivers-grid">
                <div className="tj-driver tj-item-1">Precision Strategy</div>
                <div className="tj-driver tj-item-2">Innovation at the Core</div>
                <div className="tj-driver tj-item-3">Sustainable Change</div>
                <div className="tj-driver tj-item-4">Leadership for the Future</div>
              </div>
            </div>
          </div>
        </div>

        <div className="tj-bottom">
          <div className="tj-container">
            <div className="tj-stats">
              <div className="tj-stat">
                <div className="tj-stat-num">40%</div>
                <div className="tj-stat-text">Faster implementation<br />of new initiatives</div>
              </div>
              <div className="tj-stat">
                <div className="tj-stat-num">50%</div>
                <div className="tj-stat-text">Faster implementation<br />of sustainability measures</div>
              </div>
              <div className="tj-stat">
                <div className="tj-stat-num">500+</div>
                <div className="tj-stat-text">Global leaders<br />trained</div>
              </div>
            </div>

            <div className="tj-cta">
              <p className="tj-cta-text">Empower your business with strategy, innovation and execution</p>
              <p className="tj-cta-highlight">Let&apos;s transform together!</p>
              <a href="#" className="tj-btn">
                <span className="desktop-text">
                  Start Your Journey
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-icon" style={{ float: 'right' }} />
                </span>
                <span className="mobile-text">
                  Transform Your Business Today
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-icon" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="sustain-triangle">
          <div className="st-bg-image" style={{ backgroundImage: "url('/images/triangle-consulting.webp')" }}></div>

          <div className="st-blue-shape">
            <div className="st-content">
              <h2 className="st-title">
                Strategy<br />
                Innovation<br />
                Sustainability
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Unlocking Potential, Driving Performance */}
      <section className="neews">
        <div className="neews-bg-wrapper desktop-only">
          <div className="neews-bg-img" style={{ backgroundImage: "url('/images/neews.png')" }}></div>
        </div>

        <div className="neews-container">
          <div className="neews-content desktop-only">
            <h2 className="neews-heading">
              <span className="neews-font-light">Unlocking Potential,</span><br />
              <span className="neews-font-bold">Driving Performance</span>
            </h2>
            <p className="neews-paragraph">We unlock untapped potential and turn it into focused brilliance. We help your business evolve from ordinary to extraordinary, shaping the future with clarity and precision.</p>

            <div className="neews-explore">
              Explore the stories behind the impact<br />
              <strong>Unlock your potential today!</strong>
            </div>

            <a href="#" className="neews-btn-arrow">
              Begin the Journey of excellence
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-icon" />
            </a>

            <div className="neews-stats-desktop">
              <div className="neews-stat-item">
                <div className="neews-stat-num">15%</div>
                <div className="neews-stat-desc">Increase<br />Operating<br />income</div>
              </div>
              <div className="neews-stat-item">
                <div className="neews-stat-num">500+</div>
                <div className="neews-stat-desc">Organizations<br />improved<br />efficiency<br />levels</div>
              </div>
              <div className="neews-stat-item">
                <div className="neews-stat-num">6</div>
                <div className="neews-stat-desc">Times increase<br />of ROI with<br />improved<br />compliances</div>
              </div>
              <div className="neews-stat-item">
                <div className="neews-stat-num">80%</div>
                <div className="neews-stat-desc">Reduction<br />In Errors</div>
              </div>
            </div>
          </div>

          <div className="neews-content mobile-only">
            <h2 className="neews-heading">
              <span className="neews-font-bold">From Insight to Impact</span>
            </h2>
            <p className="neews-paragraph">We guide organizations in uncovering hidden strengths and converting them into strategic advantages. Our approach accelerates growth, builds capabilities, and drives meaningful, lasting change.</p>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/counsulting-newspaper.png" alt="Consulting Insights" className="neews-mobile-img" />

            <h3 className="neews-mobile-subtitle">Insights from our impactful<br />partnerships.</h3>

            <div className="neews-stats-mobile">
              <div className="neews-stat-item-mob">
                <div className="neews-stat-num-mob">15%</div>
                <div className="neews-stat-desc-mob">Increase in operating income</div>
              </div>
              <div className="neews-stat-item-mob">
                <div className="neews-stat-num-mob">500+</div>
                <div className="neews-stat-desc-mob">Organizations improved efficiency levels</div>
              </div>
              <div className="neews-stat-item-mob">
                <div className="neews-stat-num-mob">3X</div>
                <div className="neews-stat-desc-mob">Times increase of ROI with improved compliances</div>
              </div>
              <div className="neews-stat-item-mob">
                <div className="neews-stat-num-mob">80%</div>
                <div className="neews-stat-desc-mob">Reduction in errors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Change Through Strategic Collaboration */}
      <section className="strategic-collag">
        <div className="sc-main">
          <div className="sc-image-wrapper desktop-only">
            <div className="sc-image" style={{ backgroundImage: "url('/images/strategic.png')" }}></div>
          </div>

          <div className="sc-content-container">
            <div className="sc-content">
              <h2 className="sc-heading desktop-only">
                <span className="sc-light">Driving Change Through</span><br />
                <span className="sc-bold">Strategic Collaboration</span>
              </h2>

              <h2 className="sc-heading mobile-only">
                <span className="sc-light">Driving Change</span><br />
                <span className="sc-bold">Through Strategic Collaboration</span>
              </h2>

              <div className="sc-mobile-img-wrapper mobile-only">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/counsulting-footer-image.png" alt="Strategic Collaboration" className="sc-mobile-img" />
              </div>

              <p className="sc-paragraph desktop-only">
                We take pride in partnering with visionary businesses that dare to dream big. From startups to industry giants, our collaborations have driven transformative success, turning challenges into opportunities and goals into achievements. Together, we&apos;re shaping the future of business.
              </p>

              <p className="sc-paragraph mobile-only">
                We collaborate with forward-thinking organizations startups, enterprises, and government entities to deliver measurable transformation. Together, we navigate challenges, unlock potential, and drive strategic outcomes that reshape industries.
              </p>

              <div className="sc-mobile-cta mobile-only">
                <h3 className="sc-m-cta-title">Insightful Strategies.<br />Tangible Results</h3>
                <a href="#" className="sc-btn">
                  Transform Your Business Today
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sc-banner desktop-only">
          <div className="sc-banner-inner">
            <h3 className="sc-banner-text">Strategies That Work. Results That Transform</h3>
            <a href="#" className="sc-btn">
              Button
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Arrow right.png" alt="Arrow Right" className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
