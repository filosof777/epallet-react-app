import React from 'react';
import './HeaderTopLeft.css';

function HeaderTopLeft() {
  return (
    <div className='header-top__left'>
      <button className='header-top__btn'>En</button>
      <i className="header-top__icon fas fa-map-marked-alt"></i>
      <input className='header-top__input' list="countries" placeholder='Austin, TX' />
      <datalist id='countries'>
        <option value="Asia"></option>
        <option value="Europe"></option>
        <option value="America"></option>
        <option value="France"></option>
        <option value="Brasil"></option>
      </datalist>
    </div>
  )
}

export default HeaderTopLeft;
