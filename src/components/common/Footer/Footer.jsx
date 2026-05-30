import { Link } from 'react-router-dom';
import { BRAND, FOOTER_LINKS, FOOTER_COPYRIGHT } from '../../../utils/constants';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo font-headline">
          {BRAND.logo}
        </Link>

        <p className="footer-copyright text-label">
          © {new Date().getFullYear()} {BRAND.systemName}. {FOOTER_COPYRIGHT}.
        </p>

        <div className="footer-links">
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="footer-link text-label">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
