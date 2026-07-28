'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const courses = [
  {
    category: 'Logistics & Supply Chain Management',
    image: '/images/tabimage1.png',
    logo: '/images/IPSCMI-logo.png',
    logoAlt: 'IPSCMI',
    code: 'CISCP-CISCM',
    title: 'Certified International Supply Chain Professional / Manager',
  },
  {
    category: 'Logistics & Supply Chain Management',
    image: '/images/tabimage1.png',
    logo: '/images/IPSCMI-logo.png',
    logoAlt: 'IPSCMI',
    code: 'CIVM',
    title: 'Certified International Vendor Management Professional',
  },
  {
    category: 'Logistics & Supply Chain Management',
    image: '/images/ciscp.png',
    logo: '/images/IPSCMI-logo.png',
    logoAlt: 'IPSCMI',
    code: 'CISCP',
    title: 'Certified International Supply Chain Professional',
  },
  {
    category: 'Logistics & Supply Chain Management',
    image: '/images/ciscm.webp',
    logo: '/images/IPSCMI-logo.png',
    logoAlt: 'IPSCMI',
    code: 'CISCM',
    title: 'Certified International Supply Chain Manager',
  },
];

export default function CertificationProgramsPage() {
  const [activeTab, setActiveTab] = useState<'programs' | 'calendar'>('programs');

  return (
    <>
      <Header />

      <section className="certi-programe">
        <div className="cp-wrapper">
          <div className="cp-left">
            <h2 className="cp-title">
              Advance Your Career with<br />
              <strong>Globally Recognized Certifications</strong>
            </h2>
          </div>

          <div className="cp-right">
            <p className="cp-desc">
              Our certification programs are designed to equip professionals with practical skills,
              strategic insights, and international credentials. Whether in supply chain, HR, leadership,
              or quality management, each course is aligned with industry demands to help you stay relevant,
              competitive, and future-ready.
            </p>
          </div>
        </div>
      </section>

      <section className="course-tab">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Concept Element.png" alt="Decorative Element" className="ct-decor-left" />

        <div className="ct-wrapper">
          <div className="ct-tab-header">
            <button
              className={`tab-btn${activeTab === 'programs' ? ' active' : ''}`}
              onClick={() => setActiveTab('programs')}
            >
              Certification Programs
            </button>
            <button
              className={`tab-btn${activeTab === 'calendar' ? ' active' : ''}`}
              onClick={() => setActiveTab('calendar')}
            >
              Course Training Calendar
            </button>
          </div>

          <hr className="ct-top-divider" />

          <div className={`ct-panel${activeTab === 'programs' ? ' active' : ''}`}>
            <div className="ct-stage-grid">
              <aside className="ct-sidebar-filters">
                <div className="filter-group">
                  <div className="search-input-box">
                    <input type="text" placeholder="Search Courses" />
                    <span className="search-icon">&#128269;</span>
                  </div>
                </div>

                <div className="filter-group">
                  <label>Training Month</label>
                  <div className="date-input-box">
                    <input
                      type="text"
                      placeholder="--------- ----"
                      onFocus={(e) => (e.currentTarget.type = 'month')}
                      onBlur={(e) => (e.currentTarget.type = 'text')}
                    />
                    <span className="calendar-icon">&#128197;</span>
                  </div>
                </div>

                <div className="filter-group">
                  <label>Course Category</label>
                  <select className="filter-select" defaultValue="Select options">
                    <option>Select options</option>
                    <option>Logistics &amp; Supply Chain</option>
                    <option>HR &amp; Leadership</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label>Certification</label>
                  <select className="filter-select" defaultValue="Select options">
                    <option>Select options</option>
                    <option>IPSCMI</option>
                    <option>CIPS</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label>Language</label>
                  <select className="filter-select" defaultValue="Select options">
                    <option>Select options</option>
                    <option>English</option>
                    <option>Arabic</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label>Format</label>
                  <select className="filter-select" defaultValue="Select options">
                    <option>Select options</option>
                    <option>Online</option>
                    <option>In-Person</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label>Location</label>
                  <select className="filter-select" defaultValue="Select options">
                    <option>Select options</option>
                    <option>London</option>
                    <option>Dubai</option>
                  </select>
                </div>

                <button type="reset" className="btn-filter-reset">
                  Reset{' '}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Arrow right.png" alt="Right Arrow" className="btn-iconssc" />
                </button>
              </aside>

              <main className="ct-results-area">
                <h2 className="results-quote">&quot;Learn today, lead tomorrow - the journey starts here.&quot;</h2>

                <div className="course-scroll-viewport">
                  <ul className="course-list-container">
                    {courses.map((course, i) => (
                      <li className="course-card-item" key={i}>
                        <div className="card-outer-box">
                          <div className="card-category-strip"><span>{course.category}</span></div>
                          <div className="card-main-body">
                            <div className="card-img-zone">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={course.image} alt="Course Training" />
                            </div>
                            <div className="card-info-wrapper">
                              <div className="card-content-zone">
                                <div className="c-logo-box">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={course.logo} alt={course.logoAlt} />
                                </div>
                                <h3 className="c-title"><strong>{course.code}</strong> | {course.title}</h3>
                              </div>
                              <div className="card-actions-zone">
                                <a href="#" className="btn-view-details">View Course Details</a>
                                <a href="#" className="btn-register-course">
                                  Register Now{' '}
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src="/images/Arrow right.png" alt="" className="btn-iconssc" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <nav className="ct-pagination">
                  <a href="#" className="page-nav prev disabled">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/arrow-left-black.svg" alt="" /> Previous
                  </a>
                  <div className="page-numbers">
                    <a href="#" className="page-num active">1</a>
                    <a href="#" className="page-num">2</a>
                    <a href="#" className="page-num">3</a>
                    <a href="#" className="page-num">4</a>
                  </div>
                  <a href="#" className="page-nav next">
                    Next{' '}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/arrow-right-black.svg" alt="" />
                  </a>
                </nav>
              </main>
            </div>
          </div>

          <div className={`ct-panel${activeTab === 'calendar' ? ' active' : ''}`}>
            <div className="ct-stage-grid">
              <aside className="ct-sidebar-filters">
                <div className="active-filter-tags">
                  <span className="filter-chip">IPSCMI <button className="chip-close">&times;</button></span>
                </div>

                <div className="filter-group">
                  <div className="search-input-box">
                    <input type="text" placeholder="Search Courses" />
                    <span className="search-icon">&#128269;</span>
                  </div>
                </div>

                <div className="filter-group">
                  <label>Course Category</label>
                  <select className="filter-select" defaultValue="Select options">
                    <option>Select options</option>
                  </select>
                </div>

                <button type="reset" className="btn-filter-reset">
                  Reset{' '}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Arrow right.png" alt="" className="btn-iconssc" />
                </button>
              </aside>

              <main className="ct-results-area">
                <div className="calendar-header-row">
                  <h2 className="results-quote">&quot;Learn today, lead tomorrow - the journey starts here.&quot;</h2>
                  <div className="schedule-range-toggle">
                    <label className="radio-label"><input type="radio" name="range" defaultChecked /> <span>6 Month</span></label>
                    <label className="radio-label"><input type="radio" name="range" /> <span>12 Month</span></label>
                  </div>
                </div>

                <div className="calendar-scroll-viewport">
                  <div className="schedule-month-group">
                    <div className="month-title-banner"><span>June | 2026</span></div>

                    <div className="schedule-table-headers">
                      <div className="col-name">Course Name</div>
                      <div className="col-start">Start Date</div>
                      <div className="col-end">End Date</div>
                      <div className="col-time">Time (Dubai)</div>
                      <div className="col-days">Training Days</div>
                      <div className="col-mode">Mode of Delivery</div>
                      <div className="col-action"></div>
                    </div>

                    <ul className="schedule-rows-container">
                      <li className="schedule-row-item">
                        <div className="col-name">
                          <span className="row-inst-tag">IPSCMI</span>
                          <h4 className="row-course-title">Certified International Supply Chain Manager | <strong>CISCM</strong></h4>
                        </div>
                        <div className="col-start">26 Jun&apos;2026</div>
                        <div className="col-end">27 Jun&apos;2026</div>
                        <div className="col-time">11:00 AM - 17:00 PM</div>
                        <div className="col-days">Fri, Sat</div>
                        <div className="col-mode"><span className="badge online">&bull; Online</span></div>
                        <div className="col-action">
                          <a href="#" className="btn-row-arrow">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/Arrow right.png" alt="Right Arrow" className="btn-iconssc" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
