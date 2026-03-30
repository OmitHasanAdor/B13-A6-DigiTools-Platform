import React from 'react';

const Rating = () => {
    return (
         <div className=' bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-15'>
           <div className='flex flex-col items-center md:flex-row justify-center gap-20'>
            <div className=''>
            <h3 className=" text-6xl  font-bold text-white">50K+</h3>
            <p className=" text-2xl text-white">Active Users</p>
            </div>
            <div className=' border-x-2 border-gray-400 px-15'>
            <h3 className=" text-6xl  font-bold text-white">200+</h3>
            <p className=" text-2xl text-white">Premium Tools</p>
            </div>
            <div className=''>
            <h3 className=" text-6xl  font-bold text-white">4.9</h3>
            <p className=" text-2xl text-white">Rating</p>
            </div>
           </div>
        </div>
    );
};

export default Rating;