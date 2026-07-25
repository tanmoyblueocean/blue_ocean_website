'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const insideBlueOceanSlides = [
  {
    image: '/images/gMx5EmmucLk16GGJJEKLtGQcYdBgXg9uTZrGQWe3.jpg',
    alt: 'NCC Cadets Image Collage',
    title: 'NCC Cadets and the Foundations of a Resilient India',
  },
  {
    image: '/images/5cwMsVCLsNngJKYmTZVD5cpMxGtHfi4F0fW9UzDS.jpg',
    alt: 'NITI Aayog Event',
    title: "At NITI Aayog | Strengthening India's Supply Chain Capability",
  },
];

const expertEdgeSlides = [
  {
    image: '/images/dk4jtKxZ1FCZxLQYYqZycTKRXiaiBOUXpsWNICgc.png',
    alt: 'NCC Cadets Image Collage',
    title: 'NCC Cadets and the Foundations of a Resilient India',
  },
  {
    image: '/images/pZNdBsQV37QloNoep3one4DxEnY8xrlG712smkRu.png',
    alt: 'NITI Aayog Event',
    title: "At NITI Aayog | Strengthening India's Supply Chain Capability",
  },
];

const blogCards = [
  {
    image: '/images/byaEDC7Fb5B7yMqzH5fkvufbcdIkMoGg2iH8hE3G.png',
    alt: 'PMI Mission',
    title: 'PMI’s Mission: Educating, Connecting and Guiding the Future of Project Management',
  },
  {
    image: '/images/ejzIfMHOqyVNmUopPdwR7QFc7X5GHKgbKHXGhRV5.png',
    alt: 'Supply Chain Trade-Offs',
    title: 'Strategic Supply Chain Trade-Offs: Optimizing Cost, Service, and Resilience',
  },
  {
    image: '/images/8MWq8cPuy4NWoAAAyO57EZUuOJGILilAwBnrB293.png',
    alt: 'IATA Certification',
    title: 'IATA Certification Benefits for Aviation Careers in 2026',
  },
];

function ImpactSlider({ slides }: { slides: typeof insideBlueOceanSlides }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="impact-slider-container">
      <div className="impact-slider-track" style={{ transform: `translateX(${index * -100}%)` }}>
        {slides.map((slide) => (
          <div className="impact-slide" key={slide.title}>
            <div className="slide-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.image} alt={slide.alt} />
            </div>
            <div className="slide-content-area">
              <h4 className="slide-title">{slide.title}</h4>
              <a href="#" className="slide-btn">
                Explore {slide.title}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Arrow right.png" alt="Arrow Right" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button
          className="slider-arrow prev-arrow"
          onClick={() => setIndex((i) => (i > 0 ? i - 1 : slides.length - 1))}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Arrow left.png" alt="Right Arrow" className="btn-icon" />
        </button>
        <button
          className="slider-arrow next-arrow"
          onClick={() => setIndex((i) => (i < slides.length - 1 ? i + 1 : 0))}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Arrow right.png" alt="Right Arrow" className="btn-icon" />
        </button>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'inside-blue-ocean' | 'expert-edge'>('inside-blue-ocean');

  return (
    <>
      <Header />

      <section id="blog_main">
        <div className="blog-banner-top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/blogHome-banner.jpg" alt="Blue Ocean Blog Hub" className="html-bg-image" />

          <div className="banner-content">
            <h1>
              <span className="font-light">Welcome to</span>
              <br />
              <span className="font-bold">
                The Blue Ocean
                <br />
                Blog Hub!
              </span>
            </h1>
          </div>
        </div>

        <div className="blog-intro-section">
          <div className="decorative-triangles">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hrLine-before.png" alt="Decorative Triangles" className="triangle-imgg" />
          </div>

          <div className="intro-container">
            <div className="intro-heading">
              <h2>
                <span className="font-light">Blue Ocean Insights</span>
                <br />
                <span className="font-bold">Explore, Learn &amp; Grow!</span>
              </h2>
            </div>
            <div className="intro-text">
              <p>
                Stay ahead with the latest industry trends, expert insights, and company updates. Whether
                you&apos;re looking to explore{' '}
                <strong>Blue Ocean Corporation&rsquo;s journey or gain valuable industry knowledge</strong>, we&rsquo;ve
                got you covered!
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-banner-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/whyHere-banner.jpg" alt="What You'll Find Here" className="banner-bg-img" />

          <div className="banner-content-center">
            <h2>
              <span className="font-light">What You&apos;ll</span>
              <br />
              <span className="font-bold">Find Here</span>
            </h2>
          </div>
        </div>
      </section>

      <section id="blog-tab">
        <div className="blog-tab-container">
          <div className="tab-header">
            <button
              className={`tabb-btn${activeTab === 'inside-blue-ocean' ? ' active' : ''}`}
              onClick={() => setActiveTab('inside-blue-ocean')}
            >
              Inside Blue Ocean
            </button>
            <button
              className={`tabb-btn${activeTab === 'expert-edge' ? ' active' : ''}`}
              onClick={() => setActiveTab('expert-edge')}
            >
              Expert Edge Insights
            </button>
          </div>

          <div className={`tabb-content${activeTab === 'inside-blue-ocean' ? ' active' : ''}`}>
            <h2 className="tab-title">Our Story, Our Impact</h2>
            <h3 className="tab-subtitle">Discover the heartbeat of Blue Ocean Corporation!</h3>
            <p className="tab-text">
              From our achievements and milestones to behind-the-scenes stories, this category gives you a
              deeper look into who we are, what we do, and how we continue to shape industries with innovation
              and excellence.
            </p>
            <ul className="tab-list">
              <li>Get company news, success stories &amp; event highlights</li>
              <li>See how Blue Ocean is making an impact globally</li>
              <li>Learn about our latest programs &amp; initiatives</li>
            </ul>

            <ImpactSlider slides={insideBlueOceanSlides} />
          </div>

          <div className={`tabb-content${activeTab === 'expert-edge' ? ' active' : ''}`}>
            <h2 className="tab-title">Lets&apos;s Elevate You</h2>
            <h3 className="tab-subtitle">Gain industry knowledge from thought leaders!</h3>
            <p className="tab-text">
              Our experts break down complex topics into valuable insights, helping you stay informed and ahead
              in your career. From career guidance to industry innovations, this section is your gateway to
              professional growth.
            </p>
            <ul className="tab-list">
              <li>Insights from top industry experts &amp; trainers</li>
              <li>Tips, strategies &amp; best practices for professionals</li>
              <li>Stay updated with the latest market trends &amp; research</li>
            </ul>

            <ImpactSlider slides={expertEdgeSlides} />
          </div>
        </div>
      </section>

      <section id="blog-grid-section">
        <div className="blog-grid-container">
          {blogCards.map((card) => (
            <div className="blog-card" key={card.title}>
              <div className="blog-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.image} alt={card.alt} />
              </div>
              <div className="blog-card-content">
                <h3>{card.title}</h3>
                <a href="#" className="blog-arrow-btn">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Arrow right.png" alt="Arrow Right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="every-wave">
        <div className="wave-decoration">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hrLine-before.png" alt="Decorative Triangles" />
        </div>

        <div className="wave-top-container">
          <div className="wave-pagination">
            <a href="#" className="page-nav">&larr; Previous</a>
            <a href="#" className="page-num active">1</a>
            <a href="#" className="page-num">2</a>
            <a href="#" className="page-num">3</a>
            <span className="page-dots">...</span>
            <a href="#" className="page-num">5</a>
            <a href="#" className="page-num">6</a>
            <a href="#" className="page-nav">
              Next{' '}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/color-arrow.png" alt="Arrow Right" />
            </a>
          </div>
        </div>

        <div className="newsletter-container">
          <div className="newsletter-box">
            <div className="newsletter-text">
              <h2 className="wave-heading">
                <strong>Catch Every Wave!</strong>
                <br />
                <span className="font-regular">Stay Connected to Blue Ocean News.</span>
              </h2>
            </div>

            <div className="newsletter-form">
              <input type="email" placeholder="Email address" className="newsletter-input" required />
              <button type="submit" className="newsletter-submit">Submit</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
