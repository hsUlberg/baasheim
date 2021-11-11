/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import style from './footer.module.css';

// eslint-disable-next-line no-undef
export function Footer(): JSX.Element {
  const url = new URL('./Images/map-min.PNG', import.meta.url).href;
  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/60%C2%B005'15.8%22N+9%C2%B027'44.2%22E/@60.086398,9.4471501,14z/data=!4m5!3m4!1s0x0:0x0!8m2!3d60.087719!4d9.462266",
    );
  };

  return (
    <div className={style.footer}>
      <div className={style.floatChildText}>
        <div className={style.footerHeaderText}>Kontakt oss</div>
        <div className={style.footerText}>Addresse: trengerAddresse, 3350 Prestfoss</div>
        <div className={style.footerText}>E-post: test@test.no</div>
        <div className={style.footerText}>Tlf: 999 99 999</div>
      </div>
      <div className={style.imageDiv}>
        <img
          className={style.floatChildImage}
          onKeyPress={handleClick}
          alt="map"
          src={url}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
