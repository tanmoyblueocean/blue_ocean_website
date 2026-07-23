'use client';

import { useState } from 'react';

type EventKey = 'IPSC' | 'IHRC' | 'BOWLD' | 'COX';

const tabs: EventKey[] = ['IPSC', 'IHRC', 'BOWLD', 'COX'];

const mobileEventData: Record<EventKey, { hasSlider: boolean; images: string[] }> = {
  IPSC: {
    hasSlider: true,
    images: [
      '/images/ipsc-dubai.png',
      '/images/ipsc-qatab-map.png',
      '/images/ipsc-mumbai.png',
      '/images/ipsc-riyadh.png',
      '/images/ipsc-abu-dhabi.png',
    ],
  },
  IHRC: { hasSlider: false, images: ['/images/ipsc-dubai.png'] },
  BOWLD: { hasSlider: false, images: ['/images/ipsc-mumbai.png'] },
  COX: { hasSlider: false, images: ['/images/ipsc-riyadh.png'] },
};

const markers: Array<{ event: EventKey; img: string; alt: string; top: string; left: string }> = [
  { event: 'IPSC', img: '/images/map_marker.png', alt: 'IPSC marker', top: '29%', left: '64%' },
  { event: 'IHRC', img: '/images/IHRC.png', alt: 'IHRC marker', top: '45%', left: '60%' },
  { event: 'BOWLD', img: '/images/BOWLD.png', alt: 'BOWLD marker', top: '35%', left: '50%' },
  { event: 'COX', img: '/images/CXO.png', alt: 'CXO marker', top: '50%', left: '70%' },
];

export default function WorldMapSection() {
  const [activeEvent, setActiveEvent] = useState<EventKey>('IPSC');
  const [ipscIndex, setIpscIndex] = useState(0);

  const config = mobileEventData[activeEvent];
  const heroImg = config.hasSlider ? config.images[ipscIndex] : config.images[0];

  const selectTab = (event: EventKey) => {
    setActiveEvent(event);
    if (event === 'IPSC') setIpscIndex(0);
  };

  const moveIpsc = (dir: number) => {
    const images = mobileEventData.IPSC.images;
    setIpscIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <section className="worldmap">
      <div className="maptabs">
        {tabs.map((event) => (
          <div
            key={event}
            className={`maptab${event === activeEvent ? ' active' : ''}`}
            data-event={event}
            onClick={() => selectTab(event)}
          >
            {event}
          </div>
        ))}
      </div>

      <div className="mobile-event-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={heroImg} alt="Event Preview" className="event-hero-img" />

        <div className="slider-controls" id="sliderControls" style={{ display: config.hasSlider ? 'flex' : 'none' }}>
          <button className="nav-btn prev" onClick={() => moveIpsc(-1)} aria-label="Previous">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://blueoceancorporation.in/assets/frontend/images/icons/arrow-left.svg" alt="Previous" />
          </button>
          <button className="nav-btn next" onClick={() => moveIpsc(1)} aria-label="Next">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://blueoceancorporation.in/assets/frontend/images/icons/arrow-right.svg" alt="Next" />
          </button>
        </div>
      </div>

      <div className="map-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Map.png" alt="World Map" className="base-map" />
        {markers.map((marker) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={marker.event}
            src={marker.img}
            className="marker"
            alt={marker.alt}
            style={{ top: marker.top, left: marker.left, display: marker.event === activeEvent ? 'block' : 'none' }}
          />
        ))}
      </div>

      <div className="map-tagline">
        <h2>Where Leaders Meet.<strong>Where Industries Evolve.</strong></h2>
      </div>
    </section>
  );
}
