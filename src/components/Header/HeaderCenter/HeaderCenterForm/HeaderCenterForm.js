import React from 'react';
import './HeaderCenterForm.css';

function HeaderCenterForm() {
  return (
    <form className="header-center__form" action='#'>
      <button className="header-center__btn" type='submit'><i class="fal fa-search"></i></button>
      <input className="header-center__search" type="search" placeholder='Type to search' />
      <button className="header-center__category" type='button'>All Categories <i class="fal fa-chevron-down"></i></button>
  </form>
  )
}

export default HeaderCenterForm
