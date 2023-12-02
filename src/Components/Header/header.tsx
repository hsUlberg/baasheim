import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

export function Header() {
  const [active, setActive] = useState<string>(window.location.hash.substring(2));

  return (
    <div className="w-full">
      <div className="font-[LoraRegular] text-4xl m-1 text-center">
        Båsheim Gjestegård
      </div>
      <div className="border-t-2 border-b-2 text-center py-1">
        <Link
          onClick={() => {
            setActive('');
          }}
          className={clsx([
            'cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded',
            active == '' && 'bg-gray-300',
          ])}
          to="/">
          Hjem
        </Link>
        <Link
          onClick={() => {
            setActive('overnatting');
          }}
          className={clsx([
            'cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded',
            active == 'overnatting' && 'bg-gray-300',
          ])}
          to="/overnatting">
          Overnatting
        </Link>
        <Link
          onClick={() => {
            setActive('selskapslokale');
          }}
          className={clsx([
            'cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded',
            active == 'selskapslokale' && 'bg-gray-300',
          ])}
          to="/selskapslokale">
          Selskapslokale
        </Link>
        <Link
          onClick={() => {
            setActive('groset');
          }}
          className={clsx([
            'cursor-pointer text-xl px-2 py-1 hover:bg-gray-400 rounded',
            active == 'groset' && 'bg-gray-300',
          ])}
          to="/groset">
          Grøset seter
        </Link>
      </div>
    </div>
  );
}
