import './main.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error from './pages/Error';

function App() {
  const currentPage = window.location.pathname;

  return (
    <>
    <Header />
    <Banner page={currentPage} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
