import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer } from './Components/Footer/footer';
import { Groset } from './Components/groset/groset';
import { Header } from './Components/Header/header';
import { Main } from './Components/Main/main';
import { Overnatting } from './Components/overnatting/overnatting';
import { Selskapslokale } from './Components/Selskapslokale/selskapslokale';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/overnatting" element={<Overnatting />} />
            <Route path="/selskapslokale" element={<Selskapslokale />} />
            <Route path="/groset" element={<Groset />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
