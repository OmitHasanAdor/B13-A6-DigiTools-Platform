import React from 'react';
import instagram from '../assets/Instagram.png'
import facebook from '../assets/Facebook.png'
import twitter from '../assets/Twitter.png'

const Footer = () => {
    return (
        <div className=' bg-black '>
            <div className="foot grid grid-cols-2 md:grid-cols-6 gap-5 max-w-[85%] mx-auto py-10 md:py-20">
        <div className=" col-span-2 space-y-5">
            <h3 className=' text-2xl text-white font-bold'>DigiTools</h3>
            <p className=" text-white">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <div className=" text-white">
            <ul className=" space-y-3">
            <li className=' text-xl font-semibold'>Product</li>
            <li className=""><a href="">Features</a></li>
            <li className=""><a href="">Pricing</a></li>
            <li className=""><a href="">Templates</a></li>
            <li className=""><a href="">Integrations</a></li>
            </ul>
        </div>
        <div className=" text-white">
            <ul className=" space-y-3">
            <li className=' text-xl font-semibold'>Company</li>
            <li className=""><a href="">About</a></li>
            <li className=""><a href="">Blog</a></li>
            <li className=""><a href="">Careers</a></li>
            <li className=""><a href="">Press</a></li>
            </ul>
        </div>
        <div className=" text-white">
            <ul className=" space-y-3">
            <li className=' text-xl font-semibold'>Resources</li>
            <li className=""><a href="">Documentation</a></li>
            <li className=""><a href="">Help Center</a></li>
            <li className=""><a href="">Community</a></li>
            <li className=""><a href="">Contact</a></li>
            </ul>
        </div>
        <div className=" text-white space-y-5">
        <p className=" text-xl font-semibold">Social Links</p>
        <div className=" flex gap-5">
    <span className=""><img src={instagram} alt="" /></span>
    <span className=""><img src={facebook} alt="" /></span>
    <span className=""><img src={twitter} alt="" /></span>
        </div>
        </div>
            </div>
            <div className="copy-right flex flex-col-reverse md:flex-row justify-around items-center border border-gray-500">
        <div className="left flex">
        <p className=" text-gray-500 mb-3 md:m-0">© 2026 Digitools. All rights reserved.</p>
        </div>
        <div className="">
            <ul className='flex justify-between gap-5 py-6  text-gray-500'>
        <li className=''><a href="">Privacy Policy</a></li>
        <li className=''><a href="">Terms of Service</a></li>
        <li className=''><a href="">Cookies</a></li>
            </ul>
        </div>
            </div>
        </div>
    );
};

export default Footer;