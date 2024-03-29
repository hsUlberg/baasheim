import React from 'react';

export function Footer() {
  return (
    <div className="bg-[#373737] w-full mt-4 ">
      <div className="flex justify-center">
        <div className="w-[75rem] gap-2 mx-4">
          <div className="w-full text-center">
            <div className="font-[LoraRegular] text-3xl text-white my-4">Kontakt oss</div>
            <a
              className="font-medium text-white  hover:text-blue-500 underline"
              href="https://www.google.com/maps/place/60%C2%B005'15.8%22N+9%C2%B027'44.2%22E/@60.086398,9.4471501,14z/data=!4m5!3m4!1s0x0:0x0!8m2!3d60.087719!4d9.462266">
              Addresse: sigdalsveien 3632, 3350 Prestfoss
            </a>
            <div className="text-white my-2">
              E-post: <span>bk</span>
              <span>u@</span>
              <span>bro</span>
              <span>ad</span>
              <span>park</span>
              <span>.</span>
              <span>no</span>
            </div>
            <div className="text-white my-2">
              Tlf: <span>+47 </span>
              <span>976 </span>
              <span>10 9</span>
              <span>89</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
