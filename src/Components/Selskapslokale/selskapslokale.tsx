import React, { useState } from 'react';

import style from './selskapslokale.module.css';

// eslint-disable-next-line no-undef
export function Selskapslokale(): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const [activeHeader, setActiveHeader] = useState<string[]>([
    'overnatting',
    ' selskapsLokaler',
  ]);
  //   const url = new URL('./images/hovedBygning.JPG', import.meta.url).href;

  return (
    <div className={style.main}>
      {/* <img alt="test" src={url} className={style.mainImage} /> */}
      <h2>Selskapslokale</h2>
      <div>
        Hovedhuset har en stor stue i gammel stil med plass til cs. 20 personer. For
        større selskaper sommerstid er den gamle låven innredet som festlokale.
      </div>
    </div>
  );
}
