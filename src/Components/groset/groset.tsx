import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import style from './groset.module.css';

// eslint-disable-next-line no-undef
export function Groset(): JSX.Element {
  const url = new URL('./images/groset.JPG', import.meta.url).href;
  {
    /* linke til facebook side */
  }

  return (
    <div className={style.main}>
      <div className={style.floatChildText}>
        <div className={style.textElement}>
          <h2>Grøset Seter</h2>
          <div>
            Grøset seter ligger 15 minutter unna Båsheim Gjestegård. Om sommeren er det
            åpen seter hvor man kan besøke ulike dyr og få servert rømmegrøt og sveler.
            Passer perfekt for store og små som ønsker å oppleve seterlivet. Her kan du
            komme tett innpå blant annet kuer, kalver, kaniner, høner og sauer mm. Omgitt
            av idyllisk natur. Grøset Seter ligger også fint plassert som et utgangspunkt
            for en fottur i Trillemarka naturreservat.
          </div>
          <br />
          <div>
            Link til facebook:{' '}
            <a href="https://www.facebook.com/grosetseter/">Grøset seter</a>
          </div>
        </div>
      </div>
      <div className={style.imageDiv}>
        <LazyLoadImage effect="blur" alt="main" src={url} className={style.mainImage} />

        <div />
      </div>
    </div>
  );
}