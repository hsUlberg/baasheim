import './App.css';

import React from 'react';

import { Footer } from './Components/Footer/footer';
import { Header } from './Components/Header/header';
import { Main } from './Components/Main/main';
import { Overnatting } from './Components/overnatting/overnatting';
import { Selskapslokale } from './Components/Selskapslokale/selskapslokale';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Overnatting />
      <Selskapslokale />
      <Footer />
    </div>
  );
}

export default App;
