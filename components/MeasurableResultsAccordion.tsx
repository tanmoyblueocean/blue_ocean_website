'use client';

import { useState } from 'react';

const items = [
  {
    id: 'supply-chain',
    image: '/images/showimage.webp',
    imageAlt: 'Supply Chain Complexity to Precision',
    title: 'Redefining Efficiency- Supply Chains- From Complexity to Seamless Precision.',
    challenge: 'A leading boutique hotel chain in the leisure and hospitality sector was facing sharp performance declines that threatened its market position, despite its strong brand equity and loyal customer base.',
    solution: 'By restructuring the regional vendor matrix and automating inventory thresholds, the client achieved a 28% reduction in overhead logistics costs within the first six months of deployment.',
  },
  {
    id: 'digital-cloud',
    image: '/images/showimage.webp',
    imageAlt: 'Scaling Digital Cloud Ecosystems',
    title: 'Scaling Digital Infrastructure- From Legacy Silos to Agile Cloud Ecosystems.',
    challenge: 'An international retail conglomerate struggled with real-time data synchronization across 400+ storefronts, resulting in fragmented customer experiences and delayed reporting.',
    solution: 'Migrated core ERP modules to a customized hybrid cloud environment, establishing 99.99% uptime and accelerating checkout transaction speeds globally by 1.8 seconds.',
  },
];

export default function MeasurableResultsAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mr-accordion-group">
      {items.map((item) => {
        const isOpen = item.id === openId;
        return (
          <div className={`mr-acc-item${isOpen ? ' active' : ''}`} key={item.id}>
            <div className="mr-side-badge">
              <span>Case Study</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/arrow-sm.webp" alt="Case Study Arrow" />
            </div>

            <div
              className="mr-acc-header"
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <div className="mr-bg-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.imageAlt} />
              </div>

              <div className="mr-header-grid">
                <div className="mr-col-left">
                  <h3 className="mr-item-title">{item.title}</h3>
                </div>

                <div className="mr-col-right">
                  <div className="mr-info-block">
                    <h4 className="mr-label">Challenge</h4>
                    <p className="mr-excerpt">{item.challenge}</p>
                    <div className="mr-arrow-box">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/dropdown-arrow.png" alt="Toggle" className="mr-dd-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mr-acc-body" style={{ maxHeight: isOpen ? '500px' : undefined }}>
              <div className="mr-body-inner">
                <h4>The Solution &amp; Impact</h4>
                <p>{item.solution}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
