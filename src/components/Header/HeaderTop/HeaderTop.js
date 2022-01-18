import React from 'react';
import './HeaderTop.css';
import HeaderTopLeft from './HeaderTopLeft/HeaderTopLeft';
import HeaderTopRight from './HeaderTopRight/HeaderTopRight';

function HeaderTop() {
  return (
    <div className='header-top'>
      <div className='header-top__container container'>
        <div className='header-top__content'>
          <HeaderTopLeft />
          <HeaderTopRight />
        </div>
      </div>      
    </div>
  )
}

export default HeaderTop;
