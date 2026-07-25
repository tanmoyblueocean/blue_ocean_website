import type { AffiliationItem } from '@/constants/affiliations';

export default function AffiliationAccItem({
  item,
  isOpen,
  onToggle,
}: {
  item: AffiliationItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`acc-item${isOpen ? ' active' : ''}`}>
      <div className="acc-header" onClick={onToggle}>
        <div className="acc-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.logo} alt={item.logoAlt} />
        </div>

        <div className="acc-info">
          <h3 className="acc-main-title">{item.title}</h3>

          <div className="acc-blue-box">
            <h4>{item.boxTitle}</h4>
            <p>{item.description}</p>

            <div className="acc-toggle-btn">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/dropdown-arrow.png" alt="Toggle" className="arrow-iconnn" />
            </div>
          </div>
        </div>
      </div>

      <div className="acc-content">
        <div className="acc-content-inner">
          <div className="course-tags">
            {item.tags.map((tag, i) => (
              <span className="c-tag" key={`${item.id}-${i}`}>{tag}</span>
            ))}
          </div>

          <a href="#" className="btn-explore">Explore {item.boxTitle} Courses</a>
        </div>
      </div>
    </div>
  );
}
