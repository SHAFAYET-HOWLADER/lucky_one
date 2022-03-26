import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shopping.css'
const Shopping = () => {
    const [products,setProducts] = useState([]);
    const [carts,setCarts] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    const handler = (product)=>{
         const newCart = [...carts,product];
         setCarts(newCart);
    }
    return (
        <div className='shop_container'>
            <div className="shop_product">
               {
                   products.map(product=><Product key={product.id} handler={handler} product={product}></Product>)
               }
            </div>
            <div className="shop_side_bar">
                <Cart carts={carts}></Cart>
            </div>
        </div>

    );
};

export default Shopping;