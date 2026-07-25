'use client';

import { useRef, useState } from 'react';
import { affiliationItems } from '@/constants/affiliations';
import AffiliationAccItem from './AffiliationAccItem';

export default function AllAffiliationTabs() {
  const [activeId, setActiveId] = useState(affiliationItems[0].id);
  const [openId, setOpenId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0, dragged: false });

  const handleMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current.isDown = true;
    dragState.current.dragged = false;
    dragState.current.startX = e.pageX - track.offsetLeft;
    dragState.current.scrollLeft = track.scrollLeft;
    track.classList.add('grabbing');
  };

  const stopDrag = () => {
    dragState.current.isDown = false;
    trackRef.current?.classList.remove('grabbing');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track || !dragState.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.5;
    if (Math.abs(x - dragState.current.startX) > 6) dragState.current.dragged = true;
    track.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const handleTabClick = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (dragState.current.dragged) return;
    setActiveId(id);
    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <section className="all-affi">
      <div className="affi-wrapper">
        <div className="logo-scroller-frame">
          <div
            className="logo-track"
            id="affiLogoTrack"
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={stopDrag}
            onMouseUp={stopDrag}
            onMouseMove={handleMouseMove}
          >
            {affiliationItems.map((item) => (
              <button
                key={item.id}
                className={`logo-tab${item.id === activeId ? ' active' : ''}`}
                onClick={(e) => handleTabClick(item.id, e)}
              >
                <div className="tab-img-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.logo} alt={item.boxTitle} />
                </div>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </div>
        </div>

        <div className="affi-panel-stage">
          {affiliationItems.map((item) => (
            <div className={`affi-panel${item.id === activeId ? ' active' : ''}`} key={item.id}>
              <AffiliationAccItem
                item={item}
                isOpen={item.id === openId}
                onToggle={() => setOpenId(item.id === openId ? null : item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
