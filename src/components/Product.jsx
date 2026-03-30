import React from 'react';
import { MdDone } from 'react-icons/md';

const Product = ({product}) => {
    const {features} = product
    return (
        <div className=' shadow-md rounded-2xl p-5 space-y-5'>
          <div className="">
             <img src={product.icon} alt="" className='border rounded-[50%] p-2 border-gray-200' />
          </div>
          <div className="">
            <h3 className=" text-2xl font-bold mb-5">{product.name}</h3>
            <p className="">{product.description}</p>
          </div>
          <div className="">
            <span className=' text-3xl font-bold'>${product.price}</span>/{product.period}<span></span>
          </div>
          <div className="">
          <ul className="">
              {
            features.map(item=><li key={product.id}className=' flex items-center gap-2'><MdDone className=' text-green-500' />{item}</li>)
            }
          </ul>
          </div>
          <button className='btn btn-primary w-full'>Buy Now</button>
        </div>
    );
};

export default Product;