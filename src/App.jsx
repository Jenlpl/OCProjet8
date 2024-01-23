import './main.scss'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Gallery from './components/Gallery';
import Banner from './components/Banner';

function App() {

  return (
    <HashRouter>
    <Header />
    <Banner />
    <Gallery />
    </HashRouter>
  )
}

export default App
