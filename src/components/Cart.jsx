import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Cart = ({cart,setCart}) => {
    const totalPrice= cart.reduce((sum,item)=>sum + item.price,0)
    const handleDeletebtn=(item)=>{
        const itemFiltered=cart.filter(items=>items.id!==item.id)
        setCart(itemFiltered)
    }
    const handleProceed=()=>{
        setCart([])
    }
    return (
      <div className=" py-5">
          <div className='py-10 p-5 max-w-[80%] mx-auto border border-gray-300 rounded-2xl'>
           <h3 className=" text-2xl font-bold mb-5">Your Cart</h3>
{cart.length!==0 ? <div className="">
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
                    <p onClick={()=>handleDeletebtn(item)} className=" text-red-700 font-bold cursor-pointer">Remove</p>
                    </div>
                    </div>
                )
            }
           </div>
           {cart.length!==0 && <div className=" flex justify-between py-3 my-5">
            <p className="">Total</p>
            <p className=" text-2xl font-bold">${totalPrice}</p>
           </div>}
           <button onClick={()=>handleProceed()} className='btn w-full bg-linear-to-r  from-[#4f39f6] to-[#9514fa] rounded-full text-white font-bold'>Proceed to Checkout</button>
</div> : <div className=' flex flex-col justify-center items-center'>
    <CiShoppingCart className=' h-30 w-30 text-gray-300' />
    <p className=" text-center text-gray-500 font-semibold">Your cart is empty</p></div>}
        </div>
      </div>
    );
};

export default Cart;