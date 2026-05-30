import { Link } from 'react-router-dom';
import { BRAND, HERO_META, HERO_STATUS, HERO_CTA } from '../../../utils/constants';
import { useGlitchText } from '../../../hooks/useGlitchText';
import './Hero.css';

const Hero = () => {
  const triggerGlitch = useGlitchText(BRAND.fullName);

  return (
    <section className="hero">
      <div className="hero-box corner-decoration corner-decoration-bottom">
        <div className="hero-status text-label">
          <span>{HERO_STATUS}</span>
        </div>

        <h1
          className="hero-title font-headline glow-text"
          onMouseEnter={(e) => triggerGlitch(e.currentTarget)}
        >
          {BRAND.fullName}
        </h1>

        <p className="hero-subtitle">
          <span className="text-primary-container">$</span> {BRAND.title}
          <span className="cursor-blink" />
        </p>

        <div className="hero-cta">
          <Link to="/contact" className="btn-terminal">
            {HERO_CTA}
          </Link>
        </div>

        <div className="hero-meta">
          {HERO_META.map((item) => (
            <div key={item.label} className="hero-meta-item">
              <span className="hero-meta-label text-label text-outline">{item.label}</span>
              <span className="hero-meta-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
