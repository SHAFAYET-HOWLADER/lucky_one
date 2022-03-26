import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const {img,name} = cart;
    return (
        <div className='cart'>
            <div className="add_cart">
             <h4>
              <img src={img} alt="" />
               &nbsp;
                {name.slice(0, 13)}
                &nbsp;
                </h4>
            </div>
        </div>
    );
};
export default Cart;
