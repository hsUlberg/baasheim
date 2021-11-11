import './slider.css';

import React, { useEffect, useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

import style from './overnatting.module.css';
// eslint-disable-next-line no-undef
export function Overnatting(): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const [activeHeader, setActiveHeader] = useState<string[]>([
    'overnatting',
    ' selskapsLokaler',
  ]);
  const [activeUrls, setActiveUrls] = useState<{ url: string }[]>();
  const imagePaths = {
    rom1: ['rom1', 'bad1', 'bad2'],
    rom2: ['rom1', 'bad1'],
    rom3: ['romEn', 'badEn', 'badTo'],
    rom4: ['rom1', 'bad1'],
    rom5: ['rom1', 'bad1'],
    rom6: ['rom1', 'bad1'],
    rom7: ['rom1'],
    rom8: ['rom1', 'bad1'],
    rom9: ['rom1', 'rom2', 'bad1'],
    rom10: ['rom1', 'rom2', 'bad1'],
  };
  //   const url = new URL('./images/hovedBygning.JPG', import.meta.url).href;
  const getUrls = async function () {
    const urls = Object.entries(imagePaths)
      .map(([roomFolder, array]) =>
        array.map((image) => {
          const url = new URL(`./images/${roomFolder}/${image}.JPG`, import.meta.url)
            .href;
          return { url: url };
        }),
      )
      .flat(2);
    console.log(urls);
    setActiveUrls(urls);
  };
  useEffect(() => {
    getUrls();
  }, []);

  return (
    <div className={style.main}>
      {/* <img alt="test" src={url} className={style.mainImage} /> */}
      <h2>Overnatting</h2>
      <div>
        Gjestegården består av 8 soverom med nytt bad på hvert av rommene. Rommene er
        beholdt i gammel stil siden gjestegården fungerte som skysstasjon med nye bad til
        hvert rom.
      </div>
      {/* <button onClick={test}>test</button> */}
      {activeUrls ? (
        <div className={style.imageSlider}>
          <SimpleImageSlider
            width={700}
            height={700}
            images={activeUrls}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            loop={true}
            autoPlayDelay={5}
          />
        </div>
      ) : (
        ''
      )}{' '}
    </div>
  );
}
