import './Experience.css';
import { EXPERIENCES } from '../../../utils/constants';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">工作经历</h2>
        <div className="timeline">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="timeline-item" data-index={index}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
