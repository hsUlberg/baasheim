import React, { useState } from 'react';

import { Link } from 'react-router-dom';

export function Header(): JSX.Element {
  const [active, setActive] = useState<string>(window.location.pathname.substring(1));

  return (
    <div className="w-full">
      <div className="font-[LoraRegular] text-4xl m-1 text-center">
        Båsheim Gjestegård
      </div>
      <div className="border-t-2 border-b-2 text-center">
        <button
          className={
            active == ''
              ? 'bg-gray-300 cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded'
              : 'cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded'
          }
          onClick={() => {
            setActive('');
          }}>
          <Link to="/">Hjem</Link>
        </button>
        <button
          className={
            active == 'overnatting'
              ? 'bg-gray-300 cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded'
              : 'cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded'
          }
          onClick={() => {
            setActive('overnatting');
          }}>
          <Link to="/overnatting">Overnatting</Link>
        </button>
        <button
          className={
            active == 'selskapslokale'
              ? 'bg-gray-300 cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded'
              : 'cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded'
          }
          onClick={() => {
            setActive('selskapslokale');
          }}>
          <Link to="/selskapslokale">Selskapslokale</Link>
        </button>
        <button
          className={
            active == 'groset'
              ? 'bg-gray-300 cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded'
              : 'cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded'
          }
          onClick={() => {
            setActive('groset');
          }}>
          <Link to="/groset">Grøset seter</Link>
        </button>
      </div>
    </div>
  );
}
