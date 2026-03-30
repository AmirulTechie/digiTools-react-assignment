import React from 'react';

const Cta = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex flex-col gap-5 justify-center items-center p-10 md:p-32 text-center'>
            <h2 className='text-4xl font-bold '>Ready to Transform Your Workflow?</h2>
            <p className='text-center opacity-70 text-sm w-65 md:w-lg'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            <div className='flex gap-4'>
                <button className='btn bg-white border-white text-violet-600 rounded-3xl btn-md'>Explore Products</button>
                <button className='btn btn-outline border-white text-white rounded-3xl btn-md'>View Pricing</button>
            </div>
            <p className='text-center opacity-70 text-sm w-65 md:w-lg'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Cta;