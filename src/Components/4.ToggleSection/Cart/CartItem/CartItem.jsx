import React from 'react';
import { toast } from 'react-toastify';
import EmptyCart from '../../../../assets/EmptyCart.png'

const CartItem = ({carts, setCarts}) => {
    const handleCheckOut = () =>{
        setCarts([])
        toast.success(`Your payment of $${totalPrice} was successful!`)
    }
    const handleRemove = (item) =>{
       const fitleredArray = carts.filter(c=>c.id !== item.id);
       setCarts(fitleredArray)
       toast.error("Item removed from cart")
    }

    const totalPrice = carts.reduce((sum, item)=> sum + item.price, 0)
    
    return (
        <>
            <div>
                <h3 className='text-xl font-bold'>Your Cart</h3>
            </div>
        <div className='mb-20 border border-gray-200 text-left rounded-xl px-2'>
            
            {
                carts.length===0 ?
                <div className='flex flex-col items-center justify-center p-5 text-center'>
                <img className='h-80' src={EmptyCart} alt="" />
                <p className='text-3xl font-bold'>Your cart is empty!</p> 
                </div>
                :
                <>
                        <div className='flex flex-col gap-5 mt-5'>
                            {
                                carts.map(item => <div key={item.id} className='bg-gray-200 rounded-xl p-2'>
                                    <div className='flex gap-5'>
                                        <div className='w-13 h-13 border border-gray-200 rounded-full flex justify-center items-center bg-white'><img src={item.icon} alt="" height={32} />
                                        </div>
                                        <div className='flex justify-between w-70 md:w-2xl lg:w-4xl items-center'>
                                            <div className='flex flex-col text-left'>
                                                <h5 className='font-bold'>{item.name}</h5>
                                                <p className='opacity-50'>${item.price}</p>
                                            </div>
                                            <div className=''>
                                                <button  onClick={()=>handleRemove(item)} className='text-red-400 btn btn-ghost'>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                        <div className='flex justify-between mt-7 mb-3'>
                            <p className='opacity-50'>Total:</p>
                            <p className='font-bold text-xl'>${totalPrice}</p>
                        </div>
                        <button onClick={() => handleCheckOut()} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-3xl mb-5'>Proceed to Checkout</button>
                </>
            }
        </div>
        </>
    );
};

export default CartItem;