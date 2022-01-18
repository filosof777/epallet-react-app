import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import './ProductList.css';
import ProductObj from './ProductObj';


function ProductList() {
  return (
    <div className='product__content'>
      <div className='product__content'>
        <div className='product__box'>
          <ul className='product__list'>

            {ProductObj.map(item => {
              return (
                <React.Fragment key={item}>
                  <li className='product__item'>
                    <img className='product__img' src={item} alt="" key={item.src} />
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
        </div>
        <ul className='product__small-list'>
          <ProductItem />
        </ul>
      </div>
    </div>
  )
}

export default ProductList;
