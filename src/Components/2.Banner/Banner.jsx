import React from 'react';
import BannerImg from '../../assets/banner.png'
import { FaPlay } from 'react-icons/fa';
import Ping from '../../assets/ping.png'

const Banner = () => {
    return (
            <div className="mx-auto max-w-11/12 md:mt-50 mb-20 md:mb-0">
            <div className="flex flex-col justify-center items-center md:flex-row-reverse gap-10 text-left">
                    <img
                    src={BannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <div className='flex gap-2 items-center text-left bg-[#E1E7FF] rounded-3xl px-4 py-2 text-[#9514FA] w-72.5 my-5'>
                            <img src={Ping} alt="" />
                            <p>New: AI-Powered Tools Available</p>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold md:leading-20">Supercharge Your <br className='hidden md:block' />Digital Workflow</h1>
                        <p className="py-6 text-[#627382] leading-5">
                            Access premium AI tools, design assets, templates, and productivity software <br />—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>
                        <div className='flex gap-2'>
                        <button className='btn btn-ghost rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '>Explore Products</button>
                        <button className="btn btn-outline rounded-3xl border-violet-600"><FaPlay></FaPlay>Watch Demo</button>
                        </div>
                    </div>
                    
                </div>
            </div>
    );
};

export default Banner;