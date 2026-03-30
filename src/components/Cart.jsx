import React from 'react';

const Cart = ({cart,setCart}) => {
    return (
      <div className=" py-5">
          <div className='py-10 p-5 max-w-[80%] mx-auto border border-gray-300 rounded-2xl'>
           <h3 className=" text-2xl font-bold mb-5">Your Cart</h3>
           <div className="cont flex flex-col gap-5">
            {
                cart.map(item=>
                    <div className=" bg-gray-100 rounded-md py-5 flex justify-between items-center px-10">
                    <div className=" flex justify-between gap-3">
                    <div className="">
                        <img src={item.icon} alt="" className='border bg-white rounded-[50%] p-2 border-gray-200'/>
                    </div>
                    <div className="flex flex-col">
                        <h4 className=''>{item.name}</h4>
                        <p className=" text-gray-500">${item.price}</p>
                    </div>
                    </div>
                    <div className="">
                    <p className=" text-red-700 font-bold">Remove</p>
                    </div>
                    </div>
                )
            }
           </div>
        </div>
      </div>
    );
};

export default Cart;