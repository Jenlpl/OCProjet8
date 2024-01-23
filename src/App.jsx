import './main.scss'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {

  return (
    <HashRouter>
    <Header />
    <Banner />
    <Gallery />
    <Footer />
    </HashRouter>
  )
}

export default App
