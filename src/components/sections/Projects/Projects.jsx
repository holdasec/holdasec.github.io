import { PROJECTS, TERMINAL_LOG, WORKS_PAGE } from '../../../utils/constants';
import './Projects.css';

const Projects = () => {
  return (
    <div className="works-page">
      <header className="works-header">
        <h1 className="works-title font-headline text-primary crt-flicker">{WORKS_PAGE.title}</h1>
        <div className="works-status text-label text-on-surface-variant">
          <span className="status-dot">●</span>
          <span>{WORKS_PAGE.status}</span>
          <span className="status-sep">|</span>
          <span>{WORKS_PAGE.catalogVersion}</span>
        </div>
      </header>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-thumbnail wireframe-thumbnail diagonal-stripes">
              <span className="text-label project-thumbnail-label">{project.placeholder}</span>
            </div>
            <div className="project-content">
              <h3 className="project-title font-headline">{project.title}</h3>
              <div className="project-desc-box">
                <p className="project-description">[ {project.description} ]</p>
              </div>
            </div>
            <div className="project-action">
              <a href="#" className="btn-terminal btn-terminal-sm project-link">
                {WORKS_PAGE.viewDetails}
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="terminal-log">
        <div className="terminal-log-header">
          <span className="text-label">{WORKS_PAGE.logTitle}</span>
          <span className="text-label">{WORKS_PAGE.logTerminal}</span>
        </div>
        <div className="terminal-log-body">
          {TERMINAL_LOG.map((line) => (
            <p key={line}>&gt; {line}</p>
          ))}
          <div className="terminal-cursor-line">
            <span>&gt; _</span>
            <span className="terminal-cursor-block" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
