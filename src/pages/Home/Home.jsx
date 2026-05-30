import Hero from '../../components/sections/Hero/Hero';
import About from '../../components/sections/About/About';
import Skills from '../../components/sections/Skills/Skills';
import Projects from '../../components/sections/Projects/Projects';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
