import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import style from './main.module.css';

// eslint-disable-next-line no-undef
export function Main(): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const [activeHeader, setActiveHeader] = useState<string[]>([
    'overnatting',
    ' selskapsLokaler',
  ]);
  const url = new URL('./images/hovedBygning-min.JPG', import.meta.url).href;

  return (
    <div className={style.main}>
      <LazyLoadImage effect="blur" alt="main" src={url} className={style.mainImage} />
      <h2>Grøset Seter</h2>
      <div>Grøset seter ligger 15 minutter unna Båsheim Gjestegård.</div>
      <div>
        Om sommeren er det åpen seter hvor man kan besøke ulike dyr og bli servert
        rømmegrøt og sveler.
      </div>
      <div>Passer perfekt for store og små som ønsker å oppleve seterlivet</div>
      <div>
        Her kan du komme tett oppom blandt annet kuer og kalver, kaniner og sauer mm.
      </div>
      <div>Omgitt av idyllisk natur og ligger i foten av tryllemarka.</div>
      {/* linke til facebook side */}
    </div>
  );
}
