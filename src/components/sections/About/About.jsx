import { BRAND, BIO, SKILL_BLOCKS, INTERESTS, ABOUT_PAGE } from '../../../utils/constants';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="about-tag text-label text-primary-container">
          <span className="material-symbols-outlined">terminal</span>
          <span>{ABOUT_PAGE.profileTag} // {BRAND.name}</span>
        </div>
        <h1 className="about-title font-headline text-primary">{ABOUT_PAGE.title}</h1>
        <div className="about-title-bar" />
      </header>

      <div className="about-grid">
        <section className="about-bio">
          <div className="about-bio-header">
            <span className="text-label text-primary">{ABOUT_PAGE.descriptionFile}</span>
            <span className="material-symbols-outlined text-primary">info</span>
          </div>
          <div className="about-bio-content">
            <p className="text-primary-container">{BIO.command}</p>
            {BIO.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}
            <div className="about-bio-action">
              <button type="button" className="btn-terminal btn-terminal-sm">
                {BIO.downloadLabel}
              </button>
            </div>
          </div>
        </section>

        <aside className="about-sidebar">
          <div className="profile-box">
            <div className="profile-image wireframe-cross">
              <span className="profile-placeholder text-label text-primary">
                {BIO.profilePlaceholder}
              </span>
            </div>
            <div className="profile-meta">
              <div className="profile-meta-item">
                <div className="text-label text-primary-container">位置：</div>
                <div className="text-label text-outline">{BIO.profileMeta.location}</div>
              </div>
              <div className="profile-meta-item">
                <div className="text-label text-primary-container">状态：</div>
                <div className="text-label text-outline">{BIO.profileMeta.status}</div>
              </div>
            </div>
          </div>
        </aside>

        <section className="about-skills">
          <div className="section-header">
            <h2 className="font-headline text-primary">{ABOUT_PAGE.skillsTitle}</h2>
            <div className="section-divider" />
          </div>
          <div className="skills-grid">
            {SKILL_BLOCKS.map((block) => (
              <div
                key={block.id}
                className={`skill-block ${block.id === 'BLOCK_03' ? 'skill-block-highlight' : ''}`}
              >
                <span className="block-id text-label text-primary-container">{block.id}</span>
                <h3 className="skill-block-title text-label text-primary-container">
                  {block.title}
                </h3>
                {block.isTimeline ? (
                  <div className="timeline-list">
                    {block.items.map((item) => (
                      <div
                        key={item.period}
                        className={`timeline-entry ${item.active ? 'active' : ''}`}
                      >
                        <div className="timeline-period text-label">{item.period}</div>
                        <div className="timeline-role">{item.role}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="skill-list">
                    {block.items.map((item, index) => (
                      <li key={item}>
                        <span className="text-primary-container">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="about-interests">
          <div className="interests-main">
            <h2 className="font-headline text-primary">{INTERESTS.title}</h2>
            <p>{INTERESTS.description}</p>
          </div>
          {INTERESTS.items.map((item) => (
            <div key={item.label} className="interest-card">
              <span className="material-symbols-outlined text-primary-container interest-icon">
                {item.icon}
              </span>
              <span className="text-label">{item.label}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default About;
