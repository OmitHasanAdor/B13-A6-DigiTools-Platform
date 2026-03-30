import React from 'react';
import bannerPng from '../assets/banner.png'
import Play from '../assets/play.png'
import { VscRunAll } from 'react-icons/vsc';
import { FaRegDotCircle } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className=' p-10 flex flex-col md:flex-row items-center max-w-[85%] mx-auto gap-10'>
           <div className="banner-left flex-1 space-y-8">
           <div className='badge bg-purple-200 rounded-2xl text-purple-700 p-5 font-bold flex items-center'><FaRegDotCircle className=' text-purple-700'/> New: AI-Powered Tools Available</div> 
       <div>
             <h3 className=' text-5xl font-extrabold mb-8'>Supercharge Your Digital Workflow</h3>
            <p className=' text-gray-500 '>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
</p>
       </div>
       <div className=" flex items-center gap-2">
        <button className='btn btn-outline btn-primary rounded-2xl  text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>Explore Products</button>
        <button className='btn btn-outline btn-primary rounded-2xl flex items-center  bg-linear-to-r  from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent font-bold'><img src={Play} alt="play"/> Watch Demo</button>
       </div>

           </div>
           <div className="banner-right">
        <img src={bannerPng} alt="bannerPng" className=' shadow-2xl rounded-2xl' />
           </div>
        </div>
    );
};

export default Banner;