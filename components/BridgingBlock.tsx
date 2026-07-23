'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const tabData: Record<string, { heading: string; cities: string; bgImage: string }> = {
  tab1: { heading: 'DUBAI',    cities: '',                                  bgImage: '/images/dubai vector.svg' },
  tab2: { heading: 'LONDON',   cities: '',                                  bgImage: '/images/london.svg' },
  tab3: { heading: 'RIYADH',   cities: '',                                  bgImage: '/images/riyadh 1.svg' },
  tab4: { heading: 'BRIGHTON', cities: '',                                  bgImage: '/images/london.svg' },
  tab5: { heading: 'CAIRO',    cities: '',                                  bgImage: '/images/Cairo.svg' },
  tab6: { heading: 'INDIA',    cities: 'DELHI | PUNE | HYDERABAD | KOCHI', bgImage: '/images/India location.svg' },
};

const tabLabels = [
  { key: 'tab1', label: 'Dubai' },
  { key: 'tab2', label: 'London' },
  { key: 'tab3', label: 'RIYADH' },
  { key: 'tab4', label: 'Brighton' },
  { key: 'tab5', label: 'Cairo' },
  { key: 'tab6', label: 'INDIA' },
];

const counters = [
  { value: '500000', label: 'ALUMNI Worldwide',      cls: 'counter-alumini' },
  { value: '75',     label: 'Nationalities Trained', cls: 'counter-trade' },
  { value: '2500',   label: 'CORPORATE CLIENTS',     cls: 'counter-client' },
  { value: '30',     label: 'International Awards',  cls: 'counter-award' },
];

export default function BridgingBlock() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [counterIdx, setCounterIdx] = useState(0);
  const data = tabData[activeTab];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterIdx((i) => (i + 1) % counters.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bridging_blocK relative">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="md:w-full lg:w-1/2">
            <div className="header_text bridge-left">
              <h2>
                <span className="block">A Global Network of</span>
                Future-Focused Professionals
              </h2>
              <p className="para_three mt-4">
                Our training programs deliver real-world value, having equipped over 500,000 professionals with in-demand skills and internationally recognized certifications. By focusing on global standards, we help individuals stay competitive in today&apos;s dynamic and fast-evolving environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mt-16 ml-6 mob-marging">
            <div className="tab-location-box">
              <div className="tab mt-1 items-center px-12 w-full">
                <div className="tab_inner_box relative tab-content-container">
                  <div className="relative">
                    <Image
                      src="/images/Subtract.jpg"
                      alt="banner image"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <img
                      id="tabBgImage"
                      src={data.bgImage}
                      alt="Overlay"
                      className={`absolute bottom-0 left-0 md:w-32 md:h-32 highlight-${activeTab} ${activeTab}`}
                    />
                    <div className="tab_inner absolute w-full -top-10">
                      <div className="container p-0">
                        <div className="flex flex-wrap">
                          <div className="w-full md:w-1/2">
                            <div className="tab_left">
                              <Image src="/images/company_logo_tab.png" alt="" width={140} height={40} />
                              <h2 className="text-white">{data.heading}</h2>
                              {activeTab === 'tab6' && (
                                <p className="text-white">{data.cities}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="counter-text-home">
              <div className="homecounter-slider">
                {counters.map((c, i) => (
                  <div
                    key={c.cls}
                    className={`counter-box ${c.cls}`}
                    style={{ display: counterIdx === i ? 'block' : 'none' }}
                  >
                    <div className="counter_text">
                      <div className="flex justify-start">
                        <h3 className="tab-counter">{c.value}</h3>
                        <span>+</span>
                      </div>
                      <p className="uppercase">{c.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="lg:mt-5 flex flex-row items-center px-12 justify-between location-row">
          {tabLabels.map((t) => (
            <div
              key={t.key}
              className={`tabbtn cursor-pointer px-2 py-1 ${
                activeTab === t.key
                  ? 'border-t-2 border-r-2 border-l-2 border-purple-600 text-purple-700 font-medium active'
                  : 'border-b-2 border-purple-600'
              }`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
