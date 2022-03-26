import React from 'react';
import './Cart.css'
const Cart = ({carts}) => {
    let productName = [];
    for(const cart of carts){
          productName.push( cart.name.slice(0,12))
    }
    const selectOne = (cart)=>{
      return Math.floor(Math.random() * cart)
    }
    return (
        <div className='cart'>
        <h3>Selected watch</h3>
            <div className="add_cart">
                <h4>
                    {productName + "" }
                &nbsp;
                    </h4>
                    <button onClick={()=>selectOne(productName.length)} type='button'>Choose one for me</button>
            </div>
        </div>
    );
};
export default Cart;
