import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

import useWindowDimensions from '../../utils/useWindowDimensions';
import style from './selskapslokale.module.css';

// eslint-disable-next-line no-undef
export function Selskapslokale(): JSX.Element {
  const { width } = useWindowDimensions();
  const urlLoveIngang = new URL(`./images/love/loveingang.JPG`, import.meta.url).href;
  const urlIngang = new URL(`./images/love/ingang.JPG`, import.meta.url).href;
  const urlStartInne = new URL(`./images/love/startinne.JPG`, import.meta.url).href;
  const urlSluttInne = new URL(`./images/love/sluttinne.JPG`, import.meta.url).href;
  const urls = [
    { url: urlLoveIngang },
    { url: urlIngang },
    { url: urlStartInne },
    { url: urlSluttInne },
  ];

  {
    /* legge inn bilder av kjøkken */
  }

  return (
    <div className={style.main}>
      <div className={style.floatChildText}>
        <h2>Selskapslokale</h2>
        <div>
          Hovedhuset har en stor stue i gammel stil med plass til opp mot 30 personer.
          <div>
            For større selskaper sommerstid er den gamle låven innredet som festlokale.
          </div>
          <div>
            Her har du muligheten til å organisere og tilpasse selskapet du ønsker i det
            rimligere sjikt.
          </div>
          <div>
            Hovedhuset har også ett stort kjøkken, der du har mulighet til å lage maten
            selv om ønskelig.
          </div>
          <div>
            Kjøkkenet har også ett stort kjølerom der du har mulighet til å oppbevare
            maten.
          </div>
          <div>
            Vi har ett sammarbeid med AM katring for mat levering hvis det er ønskelig.
          </div>
          <div>Ta kontakt hvis du ønsker en befaring og tilbud.</div>
        </div>
      </div>
      <div className={style.imageDiv}>
        <div className={style.imageSlider}>
          {width >= 1100 ? (
            <SimpleImageSlider
              width={700}
              height={700}
              images={urls}
              showBullets={true}
              showNavs={true}
              autoPlay={false}
              loop={true}
            />
          ) : (
            <SimpleImageSlider
              width={300}
              height={300}
              images={urls}
              showBullets={true}
              showNavs={true}
              autoPlay={false}
              loop={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}
