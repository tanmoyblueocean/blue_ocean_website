'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const offices = [
  { id: 'london', city: 'LONDON', address: 'B2505, Latifa Towers, Sheikh Zayed Road,\nDubai, P.O. Box 116687, Dubai, UAE.', phone: '+971 4 314 8500', img: '/images/london.png' },
  { id: 'dubai', city: 'DUBAI', address: 'B2505, Latifa Towers, Sheikh Zayed Road,\nDubai, P.O. Box 116687, Dubai, UAE.', phone: '+971 4 314 8500', img: '/images/dubai.png' },
  { id: 'riyadh', city: 'RIYADH', address: 'B2505, Latifa Towers, Sheikh Zayed Road,\nDubai, P.O. Box 116687, Dubai, UAE.', phone: '+971 4 314 8500', img: '/images/riyadh.png' },
  { id: 'brighton', city: 'BRIGHTON', address: 'B2505, Latifa Towers, Sheikh Zayed Road,\nDubai, P.O. Box 116687, Dubai, UAE.', phone: '+971 4 314 8500', img: '/images/brighton.png' },
  { id: 'cairo', city: 'CAIRO', address: 'B2505, Latifa Towers, Sheikh Zayed Road,\nDubai, P.O. Box 116687, Dubai, UAE.', phone: '+971 4 314 8500', img: '/images/cairo.png' },
  { id: 'delhi', city: 'DELHI', address: 'B2505, Latifa Towers, Sheikh Zayed Road,\nDubai, P.O. Box 116687, Dubai, UAE.', phone: '+971 4 314 8500', img: '/images/delhi.png' },
  { id: 'pune', city: 'PUNE', address: 'B2505, Latifa Towers, Sheikh Zayed Road,\nDubai, P.O. Box 116687, Dubai, UAE.', phone: '+971 4 314 8500', img: '/images/pune.png' },
  { id: 'hyderabad', city: 'HYDERABAD', address: 'B2505, Latifa Towers, Sheikh Zayed Road,\nDubai, P.O. Box 116687, Dubai, UAE.', phone: '+971 4 314 8500', img: '/images/hydrabad.png' },
  { id: 'kochi', city: 'KOCHI', address: 'B2505, Latifa Towers, Sheikh Zayed Road,\nDubai, P.O. Box 116687, Dubai, UAE.', phone: '+971 4 314 8500', img: '/images/kochi.png' },
  { id: 'noida', city: 'NOIDA', address: 'Ground Floor FC 10 & 11, Film City, Sector 16A, Noida - 201301', phone: '+91120-6521000', img: '/images/noida.png' },
];

const footerCols = [
  { heading: 'About Us', links: ['Our Company', 'Board of Directors', 'Awards', 'Success Stories', 'Making Waves'] },
  { heading: 'Explore Gallery', links: ['Certification Courses', 'Corporate Training', 'Consulting', 'Events & Conferences', 'Webinar / Seminar'] },
  { heading: 'Blue Ocean Corporation', links: ['Careers', 'News', 'Life @ Blue Ocean', 'Site Map'] },
];

export default function Footer() {
  const [activeTab, setActiveTab] = useState('london');
  const [openCol, setOpenCol] = useState<string | null>(null);

  const activeOffice = offices.find((o) => o.id === activeTab)!;

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {footerCols.map((col) => (
            <div key={col.heading} className={`footer-col${openCol === col.heading ? ' active' : ''}`}>
              <h3
                className="footer-heading"
                onClick={() => setOpenCol(openCol === col.heading ? null : col.heading)}
              >
                {col.heading} <span className="toggle-icon">▼</span>
              </h3>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col">
            <h3 className="footer-heading">Recent Post <span className="toggle-icon">▼</span></h3>
            <ul className="footer-posts">
              <li><a href="#">Supply Chain Management Course in India: The Ultimate Guide</a></li>
              <li><a href="#">How to Prepare for a Cabin Crew Interview – Complete Guide</a></li>
              <li><a href="#">India's Supply Chain Revolution: Connecting India to the World Through Supply Chain Excellence</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-container-mid">
            <div className="footer-col logo-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/white-logo.png" alt="Blue Ocean Corporation" className="footer-logo" />
            </div>
            <div className="footer-col enquire-col">
              <h3>Enquire</h3>
              <a href="mailto:info@blueoceancorporation.in">info@blueoceancorporation.in</a>
            </div>
            <div className="footer-col payments-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/payments.png" alt="Payment processing partners" className="payments-img" />
            </div>
            <div className="footer-col social-col">
              <h3>Stay Connected</h3>
              <div className="social-icons">
                {['facebook', 'twitter', 'youtube', 'linkedin', 'instagram', 'watsup'].map((icon) => (
                  <a key={icon} href="#">
                    <Image src={`/images/${icon}.png`} alt={icon} width={28} height={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <h2 className="contact-heading">Contact Us</h2>

            <div className="tab-nav">
              {offices.map((o) => (
                <button
                  key={o.id}
                  className={`tab-btnn${activeTab === o.id ? ' active' : ''}`}
                  onClick={() => setActiveTab(o.id)}
                >
                  {o.city.charAt(0) + o.city.slice(1).toLowerCase()}
                </button>
              ))}
            </div>

            <div className="tab-content-wrapper">
              <div className="tab-pane active">
                <div className="pane-text">
                  <h3 className="city-title">{activeOffice.city}</h3>
                  <div className="city-details">
                    <h4>Sheikh Zayed Road</h4>
                    <p>{activeOffice.address}</p>
                    <p className="phone"><strong>Ph: {activeOffice.phone}</strong></p>
                  </div>
                  <a href="#" className="location-btn">
                    Location Map{' '}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
                <div className="pane-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={activeOffice.img} alt={`${activeOffice.city} Office`} />
                </div>
              </div>
            </div>

            <div className="footer-legal">
              <div className="legal-links">
                <a href="#">Site Map</a> <span className="divider">|</span>
                <a href="#">FAQ</a> <span className="divider">|</span>
                <a href="#">Terms & Conditions</a> <span className="divider">|</span>
                <a href="#">Privacy Policy</a>
              </div>
              <div className="copyright">
                Blue Ocean Corporation Private Limited © All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-footer">
        <div className="fixed-footer-container">
          {['About Us', 'Explore', 'Blue Ocean Corporation', 'News / Blogs', 'Recent Post', 'Careers', 'Contact'].map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
