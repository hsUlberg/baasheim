import React from 'react';
import { MyImageComponent } from '../../utils/lazy';

export function Main() {
  const url = new URL('./images/hovedBygning-min.JPG', import.meta.url).href;
  const MainPicture = new URL('./images/hovedBygning-air - Copy.JPG', import.meta.url)
    .href;

  return (
    <div>
      <MyImageComponent src={MainPicture} alt="asd" className="pt-1 m-auto w-max" />
      <div className="flex justify-center">
        <div className="w-[75rem] mx-4">
          <div className="mt-6 gap-2 space-y-2 md:flex ">
            <div className="w-full">
              <p className="text-4xl font-semibold ">Velkommen til Båsheim Gjestegård</p>
              <hr className="w-20 h-1 my-3 bg-current border-0" />
              <p className="text-lg text-[#2b2b2b] font-semibold my-4">Historie</p>
              <div>
                Båsheim Gjestegård har vært drevet som en gjestegård siden 1994.
                Hovedhuset ble oppgradert i 2021 med nye bad. Hovedhuset ble satt opp i
                1923 og formålet den gang var også overnatting, men da for
                handelsreisende. I dag blir gjestegården brukt til overnatting og
                arrangementer
              </div>
              <p className="text-lg text-[#2b2b2b] font-semibold my-4">
                Gjestegården består av
              </p>
              <div>
                8 soverom med nye bad med dusj og toalett på hvert rom. 2 kjøkken. En stor
                og en litt mindre stue. Låve som brukes til blandt annet selskapslokale
                Plassering og muligheter i nærområdet Gjestegården ligger i foten av
                Andersnatten, litt i underkant av 2 timer fra Oslo.
              </div>

              <p className="text-lg text-[#2b2b2b] font-semibold my-4">
                Ypperlige plassering for frilufts liv og turer.
              </p>
              <p className="text-base text-[#2b2b2b] font-semibold my-4">Sommer: </p>
              <ul className="list-disc list-inside list px-4">
                <li>Fotturer</li>
                <li>Fisking</li>
                <li>Jakt</li>
                <li>Rafting</li>
                <li>Grøset seter</li>
                <li>Gokart</li>
              </ul>
              <p className="text-base text-[#2b2b2b] font-semibold my-4">Vinter:</p>
              <ul className="list-disc list-inside list px-4">
                <li>Iskjøring</li>
                <li>Randone</li>
                <li>Langrenn</li>
                <li>Alpintbakke (Norefjell 30 min kjøretur)</li>
              </ul>
            </div>
            <div className="w-full">
              <MyImageComponent src={url} alt="second main" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
