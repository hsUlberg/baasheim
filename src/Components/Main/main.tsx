import React, { useState } from 'react';

import style from './main.module.css';

// eslint-disable-next-line no-undef
export function Main(): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const [activeHeader, setActiveHeader] = useState<string[]>([
    'overnatting',
    ' selskapsLokaler',
  ]);
  const url = new URL('./images/hovedBygning.JPG', import.meta.url).href;

  return (
    <div className={style.main}>
      <img alt="test" src={url} className={style.mainImage} />
      <h2>Om båsheim Gjestegård</h2>
      <h2>Historie:</h2>
      <div>
        Båsheim Gjestegård har vært drevet som en gjestegår siden 1994. Hovedhuset ble
        satt opp i 1923 og formålet den gang var også overnatting, men da for
        handelsreisende.
      </div>
      <h2>Gjestegården består av:</h2>
      <div>8 soverom med do dusj på hvert rom.</div>
      <div>2 kjøkken.</div>
      <div>En stor og en litt mindre stue.</div>
      <div>Låve med som kan brukes til selskapslokale</div>
      <div>Plassering og muligheter i nærområdet</div>
    </div>
  );
}
