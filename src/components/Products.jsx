import React, { use } from 'react';
import Product from './Product';

const Products = ({dataPromise}) => {
    const productData=use(dataPromise)
    console.log(productData)
    return (
        <div>
            {
            productData.map(product=><Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;