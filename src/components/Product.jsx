import React, { useState } from 'react';
import { MdDone } from 'react-icons/md';
import { toast } from 'react-toastify';

const Product = ({product,cart,setCart}) => {
    const [buyNow,setBuyNow]=useState(false)
    const {features} = product
    const handleBuyBtn=(item)=>{
      const findDuplicateItem=cart.find(i=>i.id===item.id)
      if (findDuplicateItem) {
        toast.error(`${item.name} is already added to cart`)
      } else {
           setBuyNow(true)
        setCart([...cart,item])
        toast.success(`${item.name} is added to cart`)
      }
    }
    return (
        <div className=' border-gray-400 border shadow-md rounded-2xl p-5 space-y-5 relative'>
          <div className="badge absolute top-3 right-3 ">
            { product.tagType=='new' && <p className=' badge badge-soft badge-success'>New</p>}
            { product.tagType=='best' && <p className='badge badge-soft badge-warning'>Best Seller</p>}
            { product.tagType=='popular' && <p className='badge badge-soft badge-primary'>Popular</p>}
          </div>
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
          <button onClick={()=>handleBuyBtn(product)} className={`btn ${buyNow ? 'btn-success text-white' : 'btn-primary'} w-full`}>{buyNow && <MdDone className=' text-white' />}{buyNow ? 'Added to Cart' : 'Buy Now'}</button>
        </div>
    );
};

export default Product;