'use client';

import { useState } from 'react';

const tabs = [
  { id: 'branding', label: <>Exclusive<br />Branding Opportunities</>, className: 'spon1', content: 'Maximize your brand’s visibility and impact through event and site branding and exposure on digital platforms.' },
  { id: 'networking', label: <>Networking<br />Access</>, className: 'spon2', content: 'Gain access to key note sessions, panel discussions and workshops.' },
  { id: 'leadership', label: <>Thought<br />Leadership</>, className: 'spon3', content: 'Gain access to key note sessions, panel discussions and workshops.' },
  { id: 'custom', label: <>Custom<br />Packages</>, className: 'spon4', content: 'Benefit from customized sponsorship packages that align with your brand’s goals, ensuring maximum impact and targeted engagement.' },
];

export default function SponsorshipTabs() {
  const [activeButton, setActiveButton] = useState(tabs[0].id);
  const [activeContent, setActiveContent] = useState<string | null>(null);

  const selectTab = (id: string) => {
    setActiveButton(id);
    setActiveContent(id);
  };

  return (
    <div className="sponsorship-benefits">
      <h2>Sponsorship Benefits</h2>

      <div className="tabs-sponser">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`sponsortab ${tab.className}${tab.id === activeButton ? ' active' : ''}`}
            onClick={() => selectTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div className={`tab-contents${tab.id === activeContent ? ' active' : ''}`} id={tab.id} key={tab.id}>
          {tab.content}
        </div>
      ))}
    </div>
  );
}
