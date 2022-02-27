import './App.css';

import React, { useState } from 'react';

import { Footer } from './Components/Footer/footer';
import { Header } from './Components/Header/header';
import { Main } from './Components/Main/main';

function App() {
  // eslint-disable-next-line no-undef
  const [activePage, setActivePage] = useState<JSX.Element>(<Main />);

  return (
    <div className="App">
      <Header Page={(e) => setActivePage(e)} />
      {activePage}
      <Footer />
    </div>
  );
}

export default App;
