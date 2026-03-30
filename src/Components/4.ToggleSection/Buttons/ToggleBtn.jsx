import React, { use } from 'react';
import ProductCard from '../ProductList/ProductCard/ProductCard';
import CartItem from '../Cart/CartItem/CartItem';

const ToggleBtn = ({ productPromise }) => {
    const productData = use(productPromise);
    const products = productData;
    return (
        <div className='flex flex-col justify-center items-center space-y-6 mt-40 min-h-screen'>
            <h2 className='text-5xl font-bold text-center'>Premium Digital Tools</h2>
            <p className='text-[#627382] text-center'>
                Choose from our curated collection of premium digital products designed to <br className='hidden md:block' /> boost your productivity and creativity.
            </p>
            <div>
                <button className='btn rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Products</button>
                <button className='btn rounded-3xl'>Cart (2)</button>
            </div>
            <div>
                <ProductCard products={products}></ProductCard>
                <CartItem></CartItem>
            </div>
        </div>
    );
};

export default ToggleBtn;