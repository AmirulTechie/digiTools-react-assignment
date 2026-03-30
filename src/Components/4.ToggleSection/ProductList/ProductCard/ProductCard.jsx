import React from 'react';

const ProductCard = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
            //     "id": 1,
            // "name": "AI Writing Pro",
            // "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
            // "price": 29,
            // "period": "monthly",
            // "tag": "Best Seller",
            // "tagType": "best",
            // "features": [
            // "Unlimited AI generations",
            // "50+ writing templates",
            // "Grammar checker"
                products.map((product, index) => 
                    <div key={index} className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <span className="badge badge-sm badge-warning">{product.tag}</span>

                            <div className="flex flex-col gap-3 text-left">
                                <div className='w-15 h-15 border border-gray-200 rounded-full flex justify-center items-center'><img src={product.icon} alt="" height={32}/></div>
                                <h2 className="text-2xl font-bold">{product.name}</h2>
                                <p className='text-[#627382]'>{product.description}</p>
                                <span className="text-xl"><span className='font-bold'>${product.price}</span>/{product.period === 'monthly' ? "Mo" : "One-time"}</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2">
                                {product.features.map((feature, index)=>{
                                    return(
                                    <li key={index}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{feature}</span>
                                    </li>
                                    )
                                })}
                            </ul>
                            <div className="mt-6">
                                <button className="btn text-white btn-block  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ProductCard;