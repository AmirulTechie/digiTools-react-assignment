import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //


const Card = ({product, carts, setCarts}) => {
    const isAdded = carts.some(item => item.id === product.id);
    const handleBuyNow = () => {
        if (isAdded) return;
        toast.info("Item added to cart");
        setCarts([...carts, product]);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <div
                    className={`badge badge-sm ${product.tagType === 'best' ? 'badge-warning'
                            : product.tagType === 'popular' ?
                                'badge-primary'
                                : product.tagType === 'new' ?
                                    'badge-success'
                                    : ""}  mb-2`}
                >
                    {product.tag}
                </div>

                <div className="flex flex-col gap-3 text-left">
                    <div className='w-15 h-15 border border-gray-200 rounded-full flex justify-center items-center'><img src={product.icon} alt="" height={32} /></div>
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className='text-[#627382]'>{product.description}</p>
                    <span className="text-xl"><span className='font-bold'>${product.price}</span>/{product.period === 'monthly' ? "Mo" : "One-time"}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2">
                    {product.features.map((feature, index) => {
                        return (
                            <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                        )
                    })}
                </ul>
                <div className="mt-6">
                    <button onClick={() => handleBuyNow()} className={`btn-block rounded-3xl ${isAdded ? 'btn text-black opacity-70' : 'btn btn-block  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}`}>{isAdded ? "Added to cart" : "Buy Now"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;