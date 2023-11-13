import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Home from './assets/pages/Home'
import Resources from './assets/pages/Resources.jsx';
import Concepts from './assets/pages/Concepts.jsx';
import Support from './assets/pages/Support.jsx';
import Preface from './assets/pages/Preface.jsx';
import Antiairs from './assets/pages/Antiairs.jsx';
import Bnbs from './assets/pages/Bnbs.jsx';
import NotFound from './assets/pages/NotFound.jsx';
import Confirms from './assets/pages/MeatiesAndConfirms.jsx';
import { Route, Routes } from "react-router-dom" //allows defining and grouping of all of our routes

function App() {
  return ( 
  <>
  <Navbar />
  <div className="container">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="resources" element={<Resources />} />
    <Route path="concepts" element={<Concepts />} />
    <Route path="support" element={<Support />} />
    <Route path="preface" element={<Preface />} />
    <Route path="antiairs" element={<Antiairs />} />
    <Route path="bnbs" element={<Bnbs />} />
    <Route path="meaties_and_confirms" element={<Confirms />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </div>
  </>
  )
}

export default App;