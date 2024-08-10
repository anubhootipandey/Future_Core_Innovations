import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/AboutUS/About';
import Service from './components/Services/Service';
import Features from './components/Features/Features';
import Blog from './components/Blog/Blog';




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/feature' element={<Features />} />
          <Route exact path='/blog' element={<Blog/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;