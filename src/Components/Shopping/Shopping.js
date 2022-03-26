import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shopping.css'
const Shopping = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className='shop_container'>
            <div className="shop_product">
               {
                   products.map(product=><Product key={product.id} product={product}></Product>)
               }
            </div>
            <div className="shop_side_bar">
                <Cart products={products}></Cart>
            </div>
        </div>

    );
};

export default Shopping;