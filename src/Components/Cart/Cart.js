import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const {name} = cart;
  
    return (
        <div className='cart'>
            <div className="add_cart">
                <h4>
                    {name}
                &nbsp;
                    </h4>
            </div>
        </div>
    );
};
export default Cart;
