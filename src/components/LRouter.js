import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

export const LRouter = () => {
  return (
    <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
       </Routes>
  </BrowserRouter>
  )
}
