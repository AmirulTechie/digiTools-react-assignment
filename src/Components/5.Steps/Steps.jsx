import React from 'react';
import User from '../../assets/user.png'
import Package from '../../assets/package.png'
import Rocket from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC] text-center p-20 space-y-4'>
            <h2 className='font-bold text-3xl md:text-5xl'>Get Started in 3 Steps</h2>
            <p className='mb-10 text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            <div className='flex justify-center items-center gap-10 flex-wrap'>
                <div className='bg-white p-5 border border-[#F1F1F1] rounded-xl  shadow-sm hover:shadow-lg w-90'>
                    <div className='flex justify-end'>
                    <div className='w-9 h-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-center items-center'>01</div>
                    </div>
                    <div className='flex flex-col justify-center items-center py-10 space-y-3'>
                    <div className='bg-[#f4e8fe] w-20 h-20 rounded-full flex justify-center items-center'>
                    <img src={User} alt="" />
                    </div>
                    <div>
                        <h3 className='font-bold text-3xl'>Create Account</h3>
                    </div>
                    <div>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    </div>
                </div>
                <div className='bg-white p-5 border border-[#F1F1F1] rounded-xl  shadow-sm hover:shadow-lg w-90'>
                    <div className='flex justify-end'>
                    <div className='w-9 h-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-center items-center'>02</div>
                    </div>
                    <div className='flex flex-col justify-center items-center py-10 space-y-3'>
                    <div className='bg-[#f4e8fe] w-20 h-20 rounded-full flex justify-center items-center'>
                    <img src={Package} alt="" />
                    </div>
                    <div>
                            <h3 className='font-bold text-3xl'>Choose Products</h3>
                    </div>
                    <div>
                            <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    </div>
                </div>
                <div className='bg-white p-5 border border-[#F1F1F1] rounded-xl  shadow-sm hover:shadow-lg w-90'>
                    <div className='flex justify-end'>
                    <div className='w-9 h-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-center items-center'>03</div>
                    </div>
                    <div className='flex flex-col justify-center items-center py-10 space-y-3'>
                    <div className='bg-[#f4e8fe] w-20 h-20 rounded-full flex justify-center items-center'>
                    <img src={Rocket} alt="" />
                    </div>
                    <div>
                            <h3 className='font-bold text-3xl'>Start Creating</h3>
                    </div>
                    <div>
                            <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;