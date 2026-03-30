import React, {use, useState } from 'react';
import ProductCard from '../ProductList/Products';
import CartItem from '../Cart/CartItem/CartItem';


const ToggleBtn = ({ productPromise }) => {
    const productData = use(productPromise);
    const products = productData;
    const [activeTab, setActiveTab] = useState("product");
    console.log(activeTab);
    return (
        <div className='flex flex-col justify-center items-center space-y-6 mt-40'>
            <h2 className='text-5xl font-bold text-center'>Premium Digital Tools</h2>
            <p className='text-[#627382] text-center'>
                Choose from our curated collection of premium digital products designed to <br className='hidden md:block' /> boost your productivity and creativity.
            </p>
            <div className='mb-20'>
                <button onClick={() => setActiveTab('product')} className={`btn rounded-3xl ${activeTab === 'product' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white " : ""}`}>Products</button>
                <button onClick={() => setActiveTab("cart")} className={`btn rounded-3xl ${activeTab === 'cart' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}>Cart (2)</button>
            </div>
            <div>
                {activeTab === 'cart' ? <CartItem></CartItem> :
                <ProductCard products={products}></ProductCard>}
            </div>
        </div>
    );
};

export default ToggleBtn;