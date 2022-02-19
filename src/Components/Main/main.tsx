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
      <div className={style.floatChildText}>
        <h2>Båsheim Gjestegård</h2>
        <h2>Historie:</h2>
        <div>
          Båsheim Gjestegård har vært drevet som en gjestegård siden 1994. Hovedhuset ble
          oppgradert i 2021 med nye bad.
          <div>
            Hovedhuset ble satt opp i 1923 og formålet den gang var også overnatting, men
            da for handelsreisende.
          </div>
          <div>I dag blir gjestegården brukt til overnatting og arrangemanger</div>
        </div>
        <h2>Gjestegården består av:</h2>
        <div>8 soverom med nye bad med dusj og toalett på hvert rom.</div>
        <div>2 kjøkken.</div>
        <div>En stor og en litt mindre stue.</div>
        <div>Låve som brukes til blandt annet selskapslokale</div>
        <div>Plassering og muligheter i nærområdet</div>
        <div>
          Gjestegården ligger i foten av Andersnatten, litt i underkant av 2 timer fra
          Oslo.
        </div>
        <div></div>
        <br></br>
        <h2>Ypperlige plassering for frilufts liv og turer.</h2>
        <h3>Sommer: </h3>
        <div> - fotturer</div>
        <div> - fisking</div>
        <div> - jakt</div>
        <div> - rafting</div>
        <div> - Grøset seter</div>
        <div> - Gokart</div>
        <h3>Vinter:</h3>
        <div> - Iskjøring</div>
        <div> - Randone</div>
        <div> - Langrenn</div>
        <div> - Alpint bakke (Norefjell 30 min kjøretur)</div>
      </div>
      <div className={style.imageDiv}>
        <LazyLoadImage effect="blur" alt="main" src={url} className={style.mainImage} />
      </div>
    </div>
  );
}
