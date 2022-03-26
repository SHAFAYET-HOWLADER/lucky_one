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
        if(carts.length > 3){
            alert("error");
            return;
        }
        else{
            const newCart = [...carts,product];
            setCarts(newCart);
        }
    }

    const randomItems = ()=>{
       if(carts.length === 0){
         alert("please select one product");
         return;
       }
       else{
        let rand = [];
        const mathRan = Math.floor(Math.random() * carts.length);
        rand.push(carts[mathRan] )
        setCarts(rand);
       }
    }
    const remove = ()=>{
        if(carts.length === 0){
         alert("You did not select any product")
        }
        else{
        setCarts([]);
        }
    }
    return (
        <div className='shop_container'>
            <div className="shop_product">
               {
                   products.map(product=><Product key={product.id} handler={handler} product={product}></Product>)
               }
            </div>
            <div className="shop_side_bar">
            <h3>Selected watch appear here</h3>
                {
                    carts.map(cart=> <Cart cart={cart} key={cart.index}></Cart>)
                }
             <div className="flex">
               <button onClick={()=>randomItems()}>Select one</button>
                <button onClick={()=>remove()}>Clear Cart</button>
             </div>
            </div>
        </div>

    );
};

export default Shopping;