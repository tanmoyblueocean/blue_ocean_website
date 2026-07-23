'use client';

import { useEffect, useRef, useState } from 'react';

const testimonial = {
  text: [
    'knowledgeable and provide in-depth insights into the subject matter. The course materials were well-structured, and the training sessions were interactive and engaging.',
    'The support team was always available to assist with any queries, making the learning process smooth and enjoyable. Thank you, Blue Ocean Academy, for an enriching learning experience!',
  ],
  author: 'DILSHAD AHMED',
  role: 'Export Executive',
};

const cardVariants: Array<'teal' | 'blue'> = ['teal', 'blue', 'teal', 'blue'];

const videoIds = ['H_QbTMSqE_8', 'U-TKsWGUiMM', 'OYRWQB5IDws', 'sxBIgeVfiKM', 'WtEP7Cxwfpc'];

const GAP = 20;

function ChevronLeft() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>;
}
function ChevronRight() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
}

export default function VoiceSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const cardsPerView = () => (typeof window !== 'undefined' && window.innerWidth <= 992 ? 1 : 2);

  useEffect(() => {
    function updatePosition() {
      const track = trackRef.current;
      if (!track || !track.firstElementChild) return;
      const cardWidth = (track.firstElementChild as HTMLElement).offsetWidth;
      setOffset(cardIndex * (cardWidth + GAP));
    }
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [cardIndex]);

  useEffect(() => {
    function handleResize() {
      const maxIndex = cardVariants.length - cardsPerView();
      setCardIndex((i) => Math.min(i, maxIndex));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const moveCards = (dir: number) => {
    setCardIndex((i) => {
      const maxIndex = cardVariants.length - cardsPerView();
      const next = i + dir;
      if (next < 0) return 0;
      if (next > maxIndex) return maxIndex;
      return next;
    });
  };

  const moveVideo = (dir: number) => {
    setVideoIndex((i) => (i + dir + videoIds.length) % videoIds.length);
  };

  return (
    <section className="voice-section">
      <div className="voice-container">
        <div className="voice-header">
          <h2>Voices of <strong>Success</strong></h2>
          <p>We believe that the true measure of our impact lies in the stories of our clients. Explore their testimonials and discover how our innovative strategies have fostered growth and driven success.</p>
        </div>

        <div className="voice-content">
          <div className="voice-testimonials-wrapper">
            <div className="voice-slider-viewport">
              <div
                className="voice-testimonials-track"
                id="voice-track"
                ref={trackRef}
                style={{ transform: `translateX(-${offset}px)` }}
              >
                {cardVariants.map((variant, i) => (
                  <div className={`voice-card voice-card-${variant}`} key={i}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/voice-triange.png" alt="Decorative Triangle" className="voice-triangle" />
                    <div className="voice-card-body">
                      <div className="voice-text-scroll">
                        {testimonial.text.map((p) => <p key={p}>{p}</p>)}
                      </div>
                      <div className="voice-author">
                        <strong>{testimonial.author}</strong>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="voice-controls">
              <button className="voice-btn voice-prev" aria-label="Previous Testimonial" onClick={() => moveCards(-1)}>
                <ChevronLeft />
              </button>
              <button className="voice-btn voice-next" aria-label="Next Testimonial" onClick={() => moveCards(1)}>
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="voice-video-wrapper">
            <div className="voice-video-frame">
              <iframe
                id="youtube-player"
                src={`https://www.youtube.com/embed/${videoIds[videoIndex]}?rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="voice-controls">
              <button className="voice-btn voice-prev" aria-label="Previous Video" onClick={() => moveVideo(-1)}>
                <ChevronLeft />
              </button>
              <button className="voice-btn voice-next" aria-label="Next Video" onClick={() => moveVideo(1)}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
