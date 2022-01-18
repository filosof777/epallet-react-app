import React from 'react';
import ProductObj from '../ProductObj';

         
let elProductItem = document.querySelectorAll('.product__small-item');
console.log(564564);

function removeClass(elItemProduct){
  elItemProduct.forEach(item => {
    item.classList.remove('product__item--active')
  })
}

function RemoveClass() {
  elProductItem.forEach(item => {
    item.classList.remove('product__small-item--active')   
  })
}

let width = 300;
let elList = document.querySelector('.product__list');

elProductItem.forEach(item => {
  item.addEventListener('click', (e) => {
    RemoveClass()
    e.target.classList.add('product__small-item--active')
    elList.style.transform = `translate(${width - item.value * width}px)`;
  })  
})



function ProductItem() {
  let active = true;
  let count = 1;
  return (
    ProductObj.map(item => {
      return active == true ? (        
        <li className='product__small-item product__small-item--active' key={item} value={count++}>
          <button className='product__small-btn'>
            <img src={item} alt="" />
          </button>
          {active = false}
        </li>
        ) : (       
      <li className='product__small-item' key={item} value={count++}>
        <button className='product__small-btn'>
          <img src={item} alt="" />
        </button>
      </li>
      )
    })
  )
}

export default ProductItem;
