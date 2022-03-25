import React from 'react';
import './Product.css'
import { FaStarOfDavid } from 'react-icons/fa';

const Product = (props) => {
    const {img,name,price,ratings} = props.product;
    return (
        <div className='products'>
            <img src={img} alt="images" />
            <h2>Name : {name.slice(0,14)}</h2>
            <h3>Price : {price}</h3>
            <h4>Ratings : {ratings} &nbsp;
             <FaStarOfDavid className='star_icon'></FaStarOfDavid>
             <FaStarOfDavid className='star_icon'></FaStarOfDavid>
             <FaStarOfDavid className='star_icon'></FaStarOfDavid>
             </h4>
        </div>
    );
};

export default Product;