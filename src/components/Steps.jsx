import React from 'react';
import Package from '../assets/package.png'
import Rocket from '../assets/rocket.png'
import User from '../assets/user.png'
const Steps = () => {
    return (
        <div className=' bg-[#F9FAFC] py-10 '>
           <div className="max-w-[85%] mx-auto">
             <div className="card-titl">
                <h2 className=' text-4xl font-bold text-center mb-5'>Get Started in 3 Steps</h2>
                <p className=' text-gray-500 text-center'>Start using premium digital tools in minutes, not hours.</p>
           </div>
           <div className="card-cont mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-250 mx-auto">

        <div className="card p-4 space-y-5  bg-white rounded-md shadow-md">
            <span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-[50%] text-center p-2 h-10 w-10 text-white  font-bold absolute right-5'>01</span>
         <div className="py-10 space-y-8 ">
               <div className=" flex items-center justify-center ">
                <img src={Package} alt=""  className='h-25 w-25 rounded-[50%] bg-purple-200 p-3'/>
            </div>
            <h3 className=' text-2xl text-center font-bold'>Create Account</h3>
            <p className=' text-gray-500 text-center'>Sign up for free in seconds. No credit card required to get started.</p>
         </div>
    </div>
        <div className="card p-4 space-y-5  bg-white rounded-md shadow-md">
             <span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-[50%] text-center p-2 h-10 w-10 text-white  font-bold absolute right-5'>01</span>
           <div className="py-10 space-y-8">
             <div className=" flex items-center justify-center ">
               <span className='rounded-[50%] bg-purple-200'><img src={Rocket} alt=""  className='h-25 w-25 p-3 '/></span> 
            </div>
            <h3 className=' text-2xl text-center font-bold'>Choose Products</h3>
            <p className=' text-gray-500 text-center'>Browse our catalog and select the toolsthat fit your needs.</p>
           </div>
    </div>
        <div className="card p-4   bg-white rounded-md shadow-md">
                <span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-[50%] text-center p-2 h-10 w-10 text-white  font-bold absolute right-5'>01</span>
          <div className="py-10 space-y-8">
              <div className=" flex items-center justify-center ">
                <img src={User} alt=""  className='h-25 w-25 rounded-[50%] bg-purple-200 p-3'/>
            </div>
            <h3 className=' text-2xl text-center font-bold'>Start Creating</h3>
            <p className=' text-gray-500 text-center'>Download and start using your premium tools immediately.</p>
          </div>
    </div>
           </div>
           </div>
        </div>
    );
};

export default Steps;