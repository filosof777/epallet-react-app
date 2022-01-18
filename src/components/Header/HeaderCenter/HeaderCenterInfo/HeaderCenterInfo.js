import React from 'react';
import './HeaderCenterInfo.css';

function HeaderCenterInfo() {
  return (
    <ul className="header-center__list">
      <li className="header-center__item">
        <a className="header-center__link" href="#">
          <i className="fal fa-shredder"></i>orders
        </a>
      </li>
      <li className="header-center__item">
        <a className="header-center__link" href="#">
          <i className="fal fa-shopping-cart"></i>cart
        </a>
      </li>
      <li className="header-center__item">
        <a className="header-center__link" href="#">
          <i className="fal fa-user-alt"></i>profile
        </a>
      </li>
    </ul>
  )
}

export default HeaderCenterInfo
