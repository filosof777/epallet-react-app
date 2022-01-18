import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <ul className="navbar__list">
      <li className="navbar__item">
        <a className="navbar__link" href="#">food service</a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="#">health & beauty</a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="#">industrial ingredients</a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="#">beverages</a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="#">pet supplies</a>
      </li>
      <li className="navbar__item navbar__item--active">
        <a className="navbar__link" href="#">frozen</a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="#">claning products</a>
      </li>
    </ul>
  )
}

export default Navbar
