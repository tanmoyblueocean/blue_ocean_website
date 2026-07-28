'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { affiliationItems } from '@/constants/affiliations';

const certificationBodies = affiliationItems.map((item) => item.boxTitle);

const subLinks: Record<string, string> = {
  'Precision Strategy': '/precision-strategy',
  'Strategic Impact': '/strategic-impact',
  'Affiliations': '/affiliation',
  'All Affiliations': '/all-affiliation',
  'Certification Programs': '/certification-programs',
  'IPSC': '/conference-ipsc',
  'IHRC': '/conference-ihrc',
  'CXO': '/conference-cxo',
  'BOWLD': '/conference-bowld',
  'Advisory Board': '/advisory-board',
  'Webinar / Seminar': '/webinar-seminar',
  'Blogs': '/blog',
  'News': '/news',
  ...Object.fromEntries(affiliationItems.map((item) => [item.boxTitle, `/all-affiliation?tab=${item.id}`])),
};

type NavChild = string | { label: string; children: string[] };

function isItemActive(item: { href?: string; children?: NavChild[] }, pathname: string) {
  if (item.href && item.href === pathname) return true;
  if (item.children) {
    return item.children.some((child) =>
      typeof child === 'string'
        ? subLinks[child] === pathname
        : child.children.some((sub) => subLinks[sub] === pathname)
    );
  }
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSidebarOpen(false);
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Consulting',
      href: '/consulting',
      children: ['Precision Strategy', 'Strategic Impact'],
    },
    {
      label: 'University Programs',
      children: [
        'Supply Chain Management Fundamentals',
        'Certified International Supply Chain Associate',
        'Foundations of Supply Chain Management',
      ],
    },
    {
      label: 'Training',
      href: '/training',
      children: [
        'Corporate Training',
        { label: 'Certification Programs', children: certificationBodies },
        'Webinar / Seminar',
        { label: 'Affiliations', children: ['All Affiliations'] },
        'Scholarship Program',
      ] as NavChild[],
    },
    {
      label: 'Conferences',
      href: '/conference',
      children: ['IPSC', 'IHRC', 'CXO', 'BOWLD'],
    },
    {
      label: 'About Us',
      href: '/about',
      children: [
        'Our Company', 'Advisory Board', 'Making Waves',
        'News', 'Blogs', 'Awards', 'Life @ Blue Ocean',
      ],
    },
    { label: 'Careers', href: '#' },
  ];

  return (
    <>
      <header className="site-header">
        <div className="header-left">
          <button
            className="menu-toggle-btn"
            aria-label="Open Menu"
            onClick={() => setSidebarOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link href="/" className="brand-logo">
            <Image src="/images/boc-final-logo.png" alt="Blue Ocean Corporation" width={160} height={50} style={{ height: 'auto' }} />
          </Link>
        </div>

        <nav className="desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`${isItemActive(item, pathname) ? 'active' : ''} ${item.children ? 'has-dropdown' : ''}`}
                style={item.label === 'University Programs' ? { display: 'none' } : undefined}
              >
                {item.children ? (
                  <>
                    <a href={item.href || '#'}>
                      {item.label}{' '}
                      <Image src="/images/Chevron down.png" alt="Dropdown" width={12} height={12} className="dropdown-icon" />
                    </a>
                    <ul className="dropdown-menu">
                      {item.children.map((child) =>
                        typeof child === 'string' ? (
                          <li key={child}><a href={subLinks[child] || '#'}>{child}</a></li>
                        ) : (
                          <li key={child.label} className="has-sub-dropdown">
                            <a href={subLinks[child.label] || '#'}>
                              {child.label} <span className="arrow-right">&rsaquo;</span>
                            </a>
                            <ul className="sub-menu">
                              {child.children.map((sub) => (
                                <li key={sub}><a href={subLinks[sub] || '#'}>{sub}</a></li>
                              ))}
                            </ul>
                          </li>
                        )
                      )}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href || '#'}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <button
            className="icon-btn search-trigger"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <div className="lang-selector" ref={langRef}>
            <button
              className="lang-trigger"
              aria-haspopup="true"
              aria-expanded={langOpen}
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>EN &#709;</span>
            </button>
            <ul
              className="lang-dropdown"
              style={{
                visibility: langOpen ? 'visible' : 'hidden',
                opacity: langOpen ? 1 : 0,
                transform: langOpen ? 'translateY(0)' : 'translateY(-10px)',
              }}
            >
              <li><a href="#" className="active">EN - English</a></li>
              <li><a href="#">AR - العربية</a></li>
            </ul>
          </div>

          <div className="life-badge">Life @ Blue Ocean</div>
        </div>
      </header>

      {/* Search Overlay */}
      <div
        className={`search-overlay${searchOpen ? ' active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}
      >
        <div className="search-container">
          <button className="close-search" aria-label="Close search" onClick={() => setSearchOpen(false)}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <form action="#" className="search-form">
            <input type="text" placeholder="What are you looking for?" className="search-input" />
            <button type="submit" className="submit-search-btn">Search</button>
          </form>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`overlay${sidebarOpen ? ' show' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="sidebar-header">
          <Image src="/images/brand-logo-white.svg" alt="Blue Ocean" width={120} height={40} style={{ maxHeight: 40 }} />
          <button className="close-btn" aria-label="Close Menu" onClick={() => setSidebarOpen(false)}>&times;</button>
        </div>
        <SidebarNav />
      </aside>
    </>
  );
}

function SidebarNav() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const items = [
    { label: 'Home', href: '/' },
    { label: 'Consulting', href: '/consulting', children: ['Precision Strategy', 'Strategic Impact'] },
    { label: 'University Programs', children: ['Overview', 'Supply Chain Management Fundamentals', 'Certified International Supply Chain Associate', 'Foundations of Supply Chain Management'] },
    { label: 'Training', href: '/training', children: ['Corporate Training', 'Certification Programs', ...certificationBodies, 'Webinar / Seminar', 'Affiliations', 'All Affiliations', 'Scholarship Program'] },
    { label: 'Conferences', href: '/conference', children: ['IPSC', 'IHRC', 'CXO', 'BOWLD'] },
    { label: 'About Us', href: '/about', children: ['Our Company', 'Advisory Board', 'Making Waves', 'News', 'Blogs', 'Awards', 'Life @ Blue Ocean'] },
    { label: 'Careers', href: '#' },
    { label: 'LMS Login', href: '#' },
  ];

  return (
    <ul className="sidebar-nav">
      {items.map((item) => (
        <li
          key={item.label}
          className={item.children ? `sidebar-dropdown${openItem === item.label ? ' open' : ''}` : ''}
          style={item.label === 'University Programs' ? { display: 'none' } : undefined}
        >
          {item.children ? (
            <>
              <a
                href={item.href || '#'}
                className="dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenItem(openItem === item.label ? null : item.label);
                }}
              >
                {item.label}{' '}
                <Image src="/images/Icon Button.png" alt="Arrow" width={20} height={20} className="arrow-icon" />
              </a>
              <ul
                className="sidebar-submenu"
                style={{ maxHeight: openItem === item.label ? '2000px' : '0' }}
              >
                {item.children.map((child) => (
                  <li key={child}><a href={subLinks[child] || '#'}>{child}</a></li>
                ))}
              </ul>
            </>
          ) : (
            <Link href={item.href || '#'}>{item.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
