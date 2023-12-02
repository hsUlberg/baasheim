import React from 'react';

import { ImageCarousel } from '../../utils/imageCarousel';

export function Selskapslokale(): JSX.Element {
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

  return (
    <div className="flex justify-center">
      <div className="w-[75rem] mx-4">
        <div className="mt-6 gap-2 space-y-2 md:flex ">
          <div className="w-full">
            <p className="text-4xl font-semibold ">Selskapslokale</p>
            <hr className="w-20 h-1 my-3 bg-current border-0" />
            <div>
              Hovedhuset har en stor stue i gammel stil med plass til opp mot 30 personer.
              For større selskaper sommerstid er den gamle låven innredet som festlokale.
              Her har du muligheten til å organisere og tilpasse selskapet du ønsker i det
              rimligere sjikt. Hovedhuset har også ett stort kjøkken, der du har mulighet
              til å lage maten selv om ønskelig.
              <div>
                Kjøkkenet har også ett stort kjølerom der du har mulighet til å oppbevare
                maten.
              </div>
              Vi har ett sammarbeid med AM katring for mat levering hvis det er ønskelig.
              Ta kontakt hvis du ønsker en befaring og tilbud.
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
