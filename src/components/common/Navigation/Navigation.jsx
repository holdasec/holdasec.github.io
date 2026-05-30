import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BRAND, NAV_ITEMS } from '../../../utils/constants';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navigation">
      <nav className="nav-container">
        <NavLink to="/" className="nav-logo font-headline" onClick={() => setIsOpen(false)}>
          {BRAND.logo}
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
