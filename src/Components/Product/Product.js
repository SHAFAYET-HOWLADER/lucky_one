import React from 'react';
import './Product.css'
import { FaStarOfDavid } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';

const Product = (props) => {
    const {img,name,price,ratings} = props.product;
    return (
        <div className='products'>
            <img src={img} alt="images" />
            <h3>Name : {name.slice(0,14)}</h3>
            <h3>Price : {price}</h3>
            <h4>Ratings : {ratings} &nbsp;
             <FaStarOfDavid className='star_icon'></FaStarOfDavid>
             <FaStarOfDavid className='star_icon'></FaStarOfDavid>
             <FaStarOfDavid className='star_icon'></FaStarOfDavid>
             </h4>
             <button type='button'>Add to cart
             &nbsp;
              <FaCartPlus className='cart_icon'></FaCartPlus>
             </button>
        </div>
    );
};

export default Product;