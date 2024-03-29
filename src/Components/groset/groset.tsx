import React from 'react';
import { MyImageComponent } from '../../utils/lazy';

export function Groset() {
  const url = new URL('./images/groset.JPG', import.meta.url).href;

  return (
    <div className="flex justify-center">
      <div className="w-[75rem] mx-4">
        <div className="mt-6 gap-2 space-y-2 md:flex ">
          <div className="w-full">
            <p className="text-4xl font-semibold ">Grøset Seter</p>
            <hr className="w-20 h-1 my-3 bg-current border-0" />
            <div>
              Grøset seter ligger 15 minutter unna Båsheim Gjestegård med bil. Om sommeren
              er det åpen seter hvor man kan besøke ulike dyr og få servert rømmegrøt og
              sveler. Passer perfekt for store og små som ønsker å oppleve seterlivet. Her
              kan du komme tett innpå blant annet kuer, kalver, kaniner, høner og sauer
              mm. Omgitt av idyllisk natur. Grøset Seter ligger også fint plassert som et
              utgangspunkt for en fottur i Trillemarka naturreservat.
            </div>
            <br />
            <div className="flex gap-2">
              <p>Link til Facebook: </p>
              <a
                className="font-medium  hover:text-blue-500 underline"
                href="https://www.facebook.com/grosetseter/">
                Grøset seter
              </a>
            </div>
          </div>
          <div className="w-full">
            <MyImageComponent alt="groset" src={url} className="" />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
