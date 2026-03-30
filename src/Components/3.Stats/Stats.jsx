import React from 'react';

const Stats = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row text-white justify-center items-center gap-5 md:gap-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-16'>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-6xl font-bold'>50K+</h3>
                    <p className='text-2xl opacity-80'>Active Users</p>
                </div>
                <div className='text-6xl hidden md:block'>
                    <p className=''>|</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-6xl font-bold'>200+</h3>
                    <p className='text-2xl opacity-80'>Premium Tools</p>
                </div>
                <div className='text-6xl hidden md:block'>
                    <p>|</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-6xl font-bold'>4.9</h3>
                    <p className='text-2xl opacity-80'>Rating</p>
                </div>
            </div>
        </>
    );
};

export default Stats;