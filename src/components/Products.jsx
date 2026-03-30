import React, { use } from 'react';
import Product from './Product';

const Products = ({dataPromise,cart,setCart}) => {
    const productData=use(dataPromise)
    console.log(productData)
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[85%] mx-auto'>
            {
            productData.map(product=><Product setCart={setCart} cart={cart} key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;