//import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Footer } from './Components/Footer/footer';
import { Header } from './Components/Header/header';
import { Main } from './Components/Main/main';
import { Overnatting } from './Components/overnatting/overnatting';
import { Selskapslokale } from './Components/Selskapslokale/selskapslokale';
import { Groset } from './Components/groset/groset';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/overnatting" element={<Overnatting />} />
        <Route path="/selskapslokale" element={<Selskapslokale />} />
        <Route path="/groset" element={<Groset />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
