import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AffiliationAccordion from '@/components/AffiliationAccordion';

export default function AffiliationPage() {
  return (
    <>
      <Header />

      {/* Elevate Your Skills */}
      <section className="affiliation-heading">
        <div className="aff-wrapper">
          <div className="aff-left">
            <h2 className="aff-title">Elevate Your <strong>Skills</strong></h2>
          </div>

          <div className="aff-right">
            <p className="aff-desc">We collaborate with leading industry bodies and global institutions to offer accredited certification programs that meet the highest standards. Our affiliations ensure credibility, career growth, and worldwide recognition for our learners. Gain an edge with certifications that matter.</p>
          </div>
        </div>
      </section>

      {/* Empowering Excellence, Globally Recognized */}
      <section className="empowering-excellence">
        <div className="emp-wrapper">
          <h2 className="emp-title">
            Empowering Excellence,<br />
            Globally Recognized
          </h2>

          <a href="#" className="emp-back-btn">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/arrow-left-blue.svg" alt="Back Arrow" className="back-icon" />
            Back
          </a>
        </div>
      </section>

      {/* Affiliation Accordions */}
      <section className="affiliation-accordions">
        <AffiliationAccordion />
      </section>

      {/* Explore All Courses */}
      <section className="explore-affiliation">
        <div className="ea-wrapper">
          <a href="#" className="btn-explore-all">
            Explore All Courses
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/arrow-right.svg" alt="Right Arrow" className="ea-arrow-iconnn" />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
