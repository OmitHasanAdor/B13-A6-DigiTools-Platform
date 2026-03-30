import React from 'react';
import { MdDone } from 'react-icons/md';

const Pricing = () => {
    return (
        <div className='py-10 '>
            <div className="pricing-cont gap-5 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="price-card h-full flex flex-col space-y-8 bg-[#F2F2F2] rounded-2xl p-8 border border-gray-400">
                  <div className="card-titl">
                      <h3 className=' text-2xl font-bold '>Starter</h3>
                    <p className=' text-gray-500'>Perfect for getting started</p>
                  </div>
                  <div className="">
                    <span className=' text-4xl font-bold'>$0</span>
                    <span className=' text-gray-500'>/month</span>
                  </div>
                  <div className=" flex-1 grow">
                    <ul className='flex-1 grow'>
                        <li className=" text-gray-500 flex items-center gap-3"><MdDone className=' text-green-500' /> Access to 10 free tools</li>
                        <li className=" text-gray-500 flex items-center gap-3"><MdDone className=' text-green-500' /> Basic templates</li>
                        <li className=" text-gray-500 flex items-center gap-3"><MdDone className=' text-green-500' /> Community support</li>
                        <li className=" text-gray-500 flex items-center gap-3"><MdDone className=' text-green-500' /> 1 project per month</li>
                    </ul>
                  </div>
                  <div className="">
                    <button className='btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-full text-lg font-bold text-white p-4'>Get Started Free</button>
                  </div>
                </div>
                <div className="price-card relative space-y-8 bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-2xl p-8 border border-gray-400">
                    <div className="badge absolute bg-amber-100 text-amber-500 font-bold p-3 text-center mx-auto right-[33%] -top-3">Most Popular</div>
                  <div className="card-titl">
                      <h3 className=' text-2xl font-bold text-white'>Pro</h3>
                    <p className=' text-gray-300'>Best for professionals</p>
                  </div>
                  <div className="">
                    <span className=' text-4xl font-bold text-white'>$29</span>
                    <span className=' text-white'>/month</span>
                  </div>
                  <div className="">
                    <ul className=' '>
                        <li className=" text-white flex items-center gap-3"><MdDone className=' text-white' /> Access to all premium tools</li>
                        <li className=" text-white flex items-center gap-3"><MdDone className=' text-white' /> Unlimited templates</li>
                        <li className=" text-white flex items-center gap-3"><MdDone className=' text-white' /> Priority support</li>
                        <li className=" text-white flex items-center gap-3"><MdDone className=' text-white' /> Unlimited projects</li>
                        <li className=" text-white flex items-center gap-3"><MdDone className=' text-white' /> Cloud sync</li>
                        <li className=" text-white flex items-center gap-3"><MdDone className=' text-white' /> Advanced analytics</li>
                    </ul>
                  </div>
                  <div className="">
                    <button className='btn bg-white rounded-full w-full text-lg font-bold p-4'><span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">Get Started Free</span></button>
                  </div>
                </div>
                <div className="price-card h-full flex flex-col space-y-8 bg-[#F2F2F2] rounded-2xl p-8 border border-gray-400">
                  <div className="card-titl">
                      <h3 className=' text-2xl font-bold '>Starter</h3>
                    <p className=' text-gray-500'>Perfect for getting started</p>
                  </div>
                  <div className="">
                    <span className=' text-4xl font-bold'>$0</span>
                    <span className=' text-gray-500'>/month</span>
                  </div>
                  <div className="flex-1 grow">
                    <ul>
                        <li className=" text-gray-500 flex items-center gap-3"><MdDone className=' text-green-500' /> Access to 10 free tools</li>
                        <li className=" text-gray-500 flex items-center gap-3"><MdDone className=' text-green-500' /> Basic templates</li>
                        <li className=" text-gray-500 flex items-center gap-3"><MdDone className=' text-green-500' /> Community support</li>
                        <li className=" text-gray-500 flex items-center gap-3"><MdDone className=' text-green-500' /> 1 project per month</li>
                    </ul>
                  </div>
                  <div className="">
                    <button className='btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-full text-lg font-bold text-white p-4'>Get Started Free</button>
                  </div>
                </div>
            </div>
            
        </div>
    );
};

export default Pricing;