import React, { useEffect, useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

import style from './selskapslokale.module.css';

// eslint-disable-next-line no-undef
export function Selskapslokale(): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const [activeHeader, setActiveHeader] = useState<string[]>([
    'overnatting',
    ' selskapsLokaler',
  ]);
  const [activeUrls, setActiveUrls] = useState<{ url: string }[]>();

  const imagePaths = {
    love: ['loveIngang1', 'loveIngang2', 'loveInne1', 'loveInne1'],
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
      <h2>Selskapslokale</h2>
      <div>
        Hovedhuset har en stor stue i gammel stil med plass til cs. 20 personer. For
        større selskaper sommerstid er den gamle låven innredet som festlokale.
      </div>
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
          />{' '}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
