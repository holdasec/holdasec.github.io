import { useEffect } from 'react';
import Projects from '../../components/sections/Projects/Projects';

const WorksPage = () => {
  useEffect(() => {
    document.body.classList.add('works-page');
    return () => document.body.classList.remove('works-page');
  }, []);

  return (
    <div className="page-content works-page-content">
      <Projects />
    </div>
  );
};

export default WorksPage;
