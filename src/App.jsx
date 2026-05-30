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

// BASE_URL 为 '/' 时不能传给 BrowserRouter，否则路由匹配失败、页面空白
const routerBasename =
  import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
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
