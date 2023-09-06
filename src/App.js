
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/layout/footer/Footer';
import AboutSection from './components/sections/aboutsection/AboutSection';
import ServicesSection from './components/sections/servicessection/ServicesSection';
import GallerySection from './components/sections/gallerysection/GallerySection';
import PriceSection from './components/sections/pricesection/PriceSection';
import BlogSection from './components/sections/blogsection/BlogSection';
import VeterinarianSection from './components/sections/veterinariansection/VeterinarianSection';
import ContactSection from './components/sections/contactsection/ContactSection';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutSection/>}/>
          <Route path='/veterinarian' element={<VeterinarianSection/>}/>
          <Route path='/services' element={<ServicesSection/>}/>
          <Route path='/gallery' element={<GallerySection/>}/>
          <Route path='/price' element={<PriceSection/>}/>
          <Route path='/blog' element={<BlogSection/>}/>
          <Route path='/contact' element={<ContactSection/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
