/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

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
  function setPage(selectedPage: JSX.Element) {
    props.Page(selectedPage);
  }
  return (
    <div className={style.headerSize}>
      <div className={style.header}>
        <div className={style.headerText}>Båsheim Gjestegård</div>
        <div className={style.headerButtons}>
          <button className={style.headerButton} onClick={() => setPage(<Main />)}>
            Hjem
          </button>
          <button className={style.headerButton} onClick={() => setPage(<Overnatting />)}>
            Overnatting
          </button>
          <button
            className={style.headerButton}
            onClick={() => setPage(<Selskapslokale />)}>
            Selskapslokale
          </button>
          <button className={style.headerButton} onClick={() => setPage(<Groset />)}>
            Grøset
          </button>
        </div>
      </div>
    </div>
  );
}
