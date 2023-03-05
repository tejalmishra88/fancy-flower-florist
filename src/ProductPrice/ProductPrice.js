

import React from 'react';
import './ProductPrice.css';

const ProductPrice = (props) => {
    console.log('props....', props)
  return (
    <>
    <div className="product">
    <div>Product Name-{props.name}</div>
{ props.sale &&
    <label >On Sale</label>
}
    <div>Product Description-{props.description}</div>
    <div>Product Price-${props.price}</div>
    <img src={props.img} alt="flower"/><br></br>
    <button>Buy Now</button>
    </div>
    </>
  )
}

export default ProductPrice;