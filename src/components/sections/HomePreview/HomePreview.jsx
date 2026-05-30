import { Link } from 'react-router-dom';
import { FEATURED_WORK, SERVICES, HOME_SERVICES_TITLE } from '../../../utils/constants';
import './HomePreview.css';

const HomePreview = () => {
  return (
    <section className="home-preview">
      <div className="home-preview-grid">
        <Link to="/works" className="preview-featured">
          <div>
            <h3 className="preview-title font-headline">{FEATURED_WORK.title}</h3>
            <div className="preview-wireframe">
              <span className="text-label text-outline">{FEATURED_WORK.placeholder}</span>
            </div>
          </div>
          <div className="preview-featured-footer">
            <p className="preview-desc">{FEATURED_WORK.description}</p>
            <span className="material-symbols-outlined text-primary-container">arrow_forward</span>
          </div>
        </Link>

        <div className="preview-services">
          <h3 className="preview-title font-headline">{HOME_SERVICES_TITLE}</h3>
          <ul className="services-list">
            {SERVICES.map((service, index) => (
              <li key={service} className={index > 0 ? 'services-item-border' : ''}>
                <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomePreview;
