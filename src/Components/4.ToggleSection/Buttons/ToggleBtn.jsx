import React, {use} from 'react';
import ProductCard from '../ProductList/Products';
import CartItem from '../Cart/CartItem/CartItem';


const ToggleBtn = ({ productPromise, carts, setCarts, activeTab, setActiveTab }) => {
    const productData = use(productPromise);
    const products = productData;
    
    return (
        <div className='flex flex-col justify-center items-center space-y-6 mt-40 max-w-11/12 mx-auto'>
            <h2 className='text-5xl font-bold text-center'>Premium Digital Tools</h2>
            <p className='text-[#627382] text-center'>
                Choose from our curated collection of premium digital products designed to <br className='hidden md:block' /> boost your productivity and creativity.
            </p>
            <div className='mb-10'>
                <button onClick={() => setActiveTab('product')} className={`btn rounded-3xl ${activeTab === 'product' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white " : ""}`}>Products</button>
                <button onClick={() => setActiveTab("cart")} className={`btn rounded-3xl ${activeTab === 'cart' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}>Cart ({carts.length})</button>
            </div>
            <div>
                {activeTab === 'cart' ? <CartItem carts={carts} setCarts={setCarts}></CartItem> :
                <ProductCard products={products} carts={carts} setCarts={setCarts}></ProductCard>}
            </div>
        </div>
    );
};

export default ToggleBtn;