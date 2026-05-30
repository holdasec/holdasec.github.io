import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './pages/Page.css';
import Scanline from './components/common/Scanline/Scanline';
import ClickRipple from './components/common/ClickRipple/ClickRipple';
import Navigation from './components/common/Navigation/Navigation';
import Footer from './components/common/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import WorksPage from './pages/Works/WorksPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app terminal-grid-bg">
        <Scanline />
        <ClickRipple />
        <Navigation />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
