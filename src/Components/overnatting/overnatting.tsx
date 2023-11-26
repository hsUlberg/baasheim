import { ImageCarousel } from '../../utils/imageCarousel';

import React from 'react';

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
    <div className="flex justify-center">
      <div className="w-[75rem] mx-4">
        <div className="mt-6 gap-2 space-y-2 md:flex ">
          <div className="w-full">
            <p className="text-4xl font-semibold ">Overnatting</p>
            <hr className="w-20 h-1 my-3 bg-current border-0" />
            <div>
              Gjestegården består av 8 soverom med nytt bad på hvert av rommene. Her kan
              du både få dobbelt rom eller enkelt rom. I felles arealene er den
              opprinnelige stilen godt bevart. Her kan du lene deg tilbake og nyte
              inntrykk fra 100 år tilbake. Fasiliteter som kjøkken og TV stue kan du finne
              i felles arealene. Tråløst internett finnes i hele huset. Priser fra 800 kr
              per dobbelt rom.
            </div>
            <div>
              For bestilling av rom eller ved andre henvendelser, ta kontakt på telefon
              eller E-post.
              <br />
              E-post: bku@broadpark.no
              <br />
              Tlf: +47 976 10 989
            </div>
          </div>
          <div className="relative w-full">
            <ImageCarousel urls={urls} />
          </div>
        </div>
      </div>
    </div>
  );
}
