import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/AboutUS/About';
import Service from './components/Services/Service';




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/service' element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;