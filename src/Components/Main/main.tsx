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
  const MainPicture = new URL('./images/hovedBygning-stor.JPG', import.meta.url).href;

  return (
    <div>
      <LazyLoadImage
        effect="blur"
        alt="main"
        src={MainPicture}
        className={style.mainImageTop}
      />
      <div className={style.wrapper}>
        <div className={style.main}>
          <div className={style.floatChildText}>
            <div className={style.textElement}>
              <h2>Båsheim Gjestegård</h2>
              <h3>Historie</h3>
              <div>
                Båsheim Gjestegård har vært drevet som en gjestegård siden 1994.
                Hovedhuset ble oppgradert i 2021 med nye bad. Hovedhuset ble satt opp i
                1923 og formålet den gang var også overnatting, men da for
                handelsreisende. I dag blir gjestegården brukt til overnatting og
                arrangemanger
              </div>
              <h3>Gjestegården består av</h3>
              <div>
                8 soverom med nye bad med dusj og toalett på hvert rom. 2 kjøkken. En stor
                og en litt mindre stue. Låve som brukes til blandt annet selskapslokale
                Plassering og muligheter i nærområdet Gjestegården ligger i foten av
                Andersnatten, litt i underkant av 2 timer fra Oslo.
              </div>
              <br></br>
              <h3>Ypperlige plassering for frilufts liv og turer.</h3>
              <h4>Sommer: </h4>
              <ul>
                <li>fotturer</li>
                <li>fisking</li>
                <li>jakt</li>
                <li>rafting</li>
                <li>Grøset seter</li>
                <li>Gokart</li>
              </ul>
              <h4>Vinter:</h4>
              <ul>
                <li>Iskjøring</li>
                <li>Randone</li>
                <li>Langrenn</li>
                <li>Alpintbakke (Norefjell 30 min kjøretur)</li>
              </ul>
            </div>
          </div>
          <div className={style.imageDiv}>
            <LazyLoadImage
              effect="blur"
              alt="main"
              src={url}
              className={style.mainImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
