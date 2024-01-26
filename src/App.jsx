import './main.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error from './pages/Error/Error';

function App() {
  

  return (
    <>
    <Header />
    
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
