import React, { useState } from 'react';

import style from './overnatting.module.css';

// eslint-disable-next-line no-undef
export function Overnatting(): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const [activeHeader, setActiveHeader] = useState<string[]>([
    'overnatting',
    ' selskapsLokaler',
  ]);
  //   const url = new URL('./images/hovedBygning.JPG', import.meta.url).href;

  return (
    <div className={style.main}>
      {/* <img alt="test" src={url} className={style.mainImage} /> */}
      <h2>Overnatting</h2>
      <div>
        Gjestegården består av 8 soverom med nytt bad på hvert av rommene. Rommene er
        beholdt i gammel stil siden gjestegården fungerte som skysstasjon med nye bad til
        hvert rom.
      </div>
    </div>
  );
}
