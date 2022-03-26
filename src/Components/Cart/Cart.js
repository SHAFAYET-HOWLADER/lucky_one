import React from 'react';
import './Cart.css'
import { FaRegTrashAlt } from 'react-icons/fa';
const Cart = ({cart}) => {
    const {img, name} = cart;
    return (
        <div className='cart'>
            <div className="add_cart">
             <h4>
              <img src={img} alt="" />
               &nbsp;
                {name.slice(0, 13)}
                &nbsp;
            <FaRegTrashAlt className='delete_icon'></FaRegTrashAlt>
                </h4>
            </div>
        </div>
    );
};
export default Cart;
