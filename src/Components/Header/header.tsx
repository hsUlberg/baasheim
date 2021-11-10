import React from 'react';

import style from './header.module.css';

// eslint-disable-next-line no-undef
export function Header(): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  // const [activeHeader, setActiveHeader] = useState<string[]>([
  //   'overnatting',
  //   ' selskapsLokaler',
  // ]);
  // const activeHeaders = (active: string) => {
  //   console.log('hei');
  //   console.log(active);
  //   return 'hei';
  // };
  return (
    <div className={style.header}>
      <div className={style.headerText}>Båsheim gjestegård</div>

      {/* {activeHeader.map((active) => (
        <button onClick={() => activeHeaders(active)} key={active}>
          {active}
        </button>
      ))} */}
    </div>
  );
}
