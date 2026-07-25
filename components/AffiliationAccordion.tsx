'use client';

import { useState } from 'react';
import { affiliationItems } from '@/constants/affiliations';
import AffiliationAccItem from './AffiliationAccItem';

export default function AffiliationAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="acc-wrapper">
      {affiliationItems.map((item) => (
        <AffiliationAccItem
          key={item.id}
          item={item}
          isOpen={item.id === openId}
          onToggle={() => setOpenId(item.id === openId ? null : item.id)}
        />
      ))}
    </div>
  );
}
