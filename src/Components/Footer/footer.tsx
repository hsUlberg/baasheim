import React from 'react';

import style from './footer.module.css';

// eslint-disable-next-line no-undef
export function Footer(): JSX.Element {
  return (
    <div className={style.footer}>
      <div className={style.footerText}>Kontakt oss</div>

      {/* {activefooter.map((active) => (
        <button onClick={() => activefooters(active)} key={active}>
          {active}
        </button>
      ))} */}
      <div>E-post: test@test.no</div>
      <div>Tlf: 999 99 999</div>
    </div>
  );
}
