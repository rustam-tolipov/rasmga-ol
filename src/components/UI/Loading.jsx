import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import logo from '../../assets/waiting.gif';
import spinner from '../../assets/spinner.svg';

function Loading(loading) {
  return (
    <div className='loading'>
      <img src={logo} alt='RasmgaOl logo' />
    </div>
  );
}

export function Spinner() {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.fromTo(
      '.create-overlay__icon',
      { rotate: 0 },
      { rotate: 360, duration: 1, repeat: -1 }
    );

    return () => {
      tl.kill();
    };
  }, [tl]);

  return (
    <div className='create-overlay__icon'>
      <img src={spinner} alt='spinner' />
    </div>
  );
}

export default Loading;
