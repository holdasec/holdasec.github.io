import Hero from '../../components/sections/Hero/Hero';
import HomePreview from '../../components/sections/HomePreview/HomePreview';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page terminal-grid-bg">
      <Hero />
      <HomePreview />
    </div>
  );
};

export default HomePage;
