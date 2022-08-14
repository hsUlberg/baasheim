/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';

import { Groset } from '../groset/groset';
import { Main } from '../Main/main';
import { Overnatting } from '../overnatting/overnatting';
import { Selskapslokale } from '../Selskapslokale/selskapslokale';
import style from './header.module.css';

interface Props {
  Page: (page: JSX.Element) => void;
}
// eslint-disable-next-line no-undef
export function Header(props: Props): JSX.Element {
  const [active, setActive] = useState<string>('hjem');
  function setPage(selectedPage: JSX.Element) {
    props.Page(selectedPage);
  }
  return (
    <div className={style.headerSize}>
      <div className={style.header}>
        <div className={style.headerText}>Båsheim Gjestegård</div>
        <div className={style.headerButtons}>
          <button
            className={active == 'hjem' ? style.active : style.headerButton}
            onClick={() => {
              setPage(<Main />);
              setActive('hjem');
              return;
            }}>
            Hjem
          </button>
          <button
            className={active == 'overnatting' ? style.active : style.headerButton}
            onClick={() => {
              setPage(<Overnatting />);
              setActive('overnatting');
              return;
            }}>
            Overnatting
          </button>
          <button
            className={active == 'selskap' ? style.active : style.headerButton}
            onClick={() => {
              setPage(<Selskapslokale />);
              setActive('selskap');
              return;
            }}>
            Selskapslokale
          </button>
          <button
            className={active == 'groset' ? style.active : style.headerButton}
            onClick={() => {
              setPage(<Groset />);
              setActive('groset');
              return;
            }}>
            Grøset seter
          </button>
        </div>
      </div>
    </div>
  );
}
