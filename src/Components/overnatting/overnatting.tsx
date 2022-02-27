import './slider.css';

import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

import style from './overnatting.module.css';
// eslint-disable-next-line no-undef
export function Overnatting(): JSX.Element {
  const rom1Rom1 = new URL(`./images/rom1/rom1.JPG`, import.meta.url).href;
  const rom1Bad1 = new URL(`./images/rom1/bad1.JPG`, import.meta.url).href;
  const rom1Bad2 = new URL(`./images/rom1/bad2.JPG`, import.meta.url).href;
  const rom2Rom1 = new URL(`./images/rom2/rom1.JPG`, import.meta.url).href;
  const rom2Bad1 = new URL(`./images/rom2/bad1.JPG`, import.meta.url).href;
  const rom3Rom1 = new URL(`./images/rom3/romEn.JPG`, import.meta.url).href;
  const rom3Bad1 = new URL(`./images/rom3/badEn.JPG`, import.meta.url).href;
  const rom3Bad2 = new URL(`./images/rom3/badTo.JPG`, import.meta.url).href;
  const rom4Rom1 = new URL(`./images/rom4/rom1.JPG`, import.meta.url).href;
  const rom4Bad1 = new URL(`./images/rom4/bad1.JPG`, import.meta.url).href;
  const rom5Rom1 = new URL(`./images/rom5/rom1.JPG`, import.meta.url).href;
  const rom5Bad1 = new URL(`./images/rom5/bad1.JPG`, import.meta.url).href;
  const rom6Rom1 = new URL(`./images/rom6/rom1.JPG`, import.meta.url).href;
  const rom6Bad1 = new URL(`./images/rom6/bad1.JPG`, import.meta.url).href;
  const rom7Rom1 = new URL(`./images/rom7/rom1.JPG`, import.meta.url).href;
  const rom8Rom1 = new URL(`./images/rom8/rom1.JPG`, import.meta.url).href;
  const rom8Bad1 = new URL(`./images/rom8/bad1.JPG`, import.meta.url).href;
  const rom9Rom1 = new URL(`./images/rom9/rom1.JPG`, import.meta.url).href;
  const rom9Rom2 = new URL(`./images/rom9/rom2.JPG`, import.meta.url).href;
  const rom9Bad1 = new URL(`./images/rom9/bad1.JPG`, import.meta.url).href;
  const rom10Rom1 = new URL(`./images/rom10/rom1.JPG`, import.meta.url).href;
  const rom10Rom2 = new URL(`./images/rom10/rom2.JPG`, import.meta.url).href;
  const rom10Bad1 = new URL(`./images/rom10/bad1.JPG`, import.meta.url).href;

  const urls = [
    { url: rom1Rom1 },
    { url: rom1Bad1 },
    { url: rom1Bad2 },
    { url: rom2Rom1 },
    { url: rom2Bad1 },
    { url: rom3Rom1 },
    { url: rom3Bad1 },
    { url: rom3Bad2 },
    { url: rom4Rom1 },
    { url: rom4Bad1 },
    { url: rom5Rom1 },
    { url: rom5Bad1 },
    { url: rom6Rom1 },
    { url: rom6Bad1 },
    { url: rom7Rom1 },
    { url: rom8Rom1 },
    { url: rom8Bad1 },
    { url: rom9Rom1 },
    { url: rom9Rom2 },
    { url: rom9Bad1 },
    { url: rom10Rom1 },
    { url: rom10Rom2 },
    { url: rom10Bad1 },
  ];

  return (
    <div className={style.main}>
      <div className={style.floatChildText}>
        <div className={style.textElement}>
          <h2>Overnatting</h2>
          <div>
            Gjestegården består av 8 soverom med nytt bad på hvert av rommene. Her kan du
            både få dobbelt rom eller enkelt rom I felles arealene er stilen godt bevart.
            Her kan du leve deg tilbake som om du var en reisende 100 år tilbake i tid.
            fasiliteter som internett og TV kan du finne i felles arealene. priser fra 800
            kr per rom.
          </div>
        </div>
      </div>
      <div className={style.imageDiv}>
        <div className={style.imageSlider}>
          <SimpleImageSlider
            width={700}
            height={700}
            images={urls}
            showBullets={true}
            showNavs={true}
            autoPlay={false}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}
