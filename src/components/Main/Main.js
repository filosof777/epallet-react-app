import React from 'react';
import ProductList from './Product/ProductList/ProductList';
import './Main.css';


function Main() {
  return (
    <main className='main'>
      <div className='main__container container'>
        {/* main path */}
        <div className='main__path path'>
          <ul className='path__list'>
            <li className='path__item'>
              <a className='path__link' href="#">frozen<i className="fal fa-chevron-right"></i></a>
            </li>
            <li className='path__item'>
              <a className='path__link' href="#">juice<i className="fal fa-chevron-right"></i></a>
            </li>
            <li className='path__item'>
              <a className='path__link' href="#">mott's unsweetend applesauce</a>
            </li>
          </ul>
          <button className='path__btn'><i className="fal fa-long-arrow-left"></i>back</button>
        </div>
        {/* main product */}
        <div className='main__product product'>
          {/* product list */}
            <ProductList />
          {/* product info */}
          <div className='product__info info'>
            <p className='info__subtext'>mott's</p>
            <h2 className='info__title'>mott's unsweetened applsaurce</h2>
            <p className='info__text'>pack size: <span className='info__bold-text'>24/16.90 oz</span></p>
            <p className='info__text'>Chef Maxwell Applesauce is a delicious classic and part of a healthy diet low in saturated fat with 40% Vitamin C.</p>
            <button className='info__download-btn'>download spec sheet</button>
            <div className='info__price price'>
              <p className='price__title'>$32<sup>80</sup>/Cs
                <p className='price__text'>($0.21/oz)</p>
              </p>
              <p className='price__title'>$730<sup>30</sup>/Pit</p>
            </div>
            <p className='info__text'>Approx Lead Time: <b>12 days</b></p>
            <p className='info__samll-text'>Information about products was provided by manufacturer</p>

          </div>
          {/* product sale */}
          <div className='product__sale sale'></div>
        </div>
      </div>
    </main>
  )
}

export default Main;
