'use client'
import React from 'react'
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react';

const Cart = () => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            if (scrollPosition + windowHeight+1 >= fullHeight-2) {
                setIsBottom(true);
                console.log(true)
            } else {
                setIsBottom(false);
                console.log(false)

            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup
        };
    }, []);
    return (
        <div className=' text-white'>
            <NavBar />
            <div className=' bg-gradient-to-l from-green-200 to-green-50 border-2 border-white px-2 mx-2 rounded-md font-normal my-2 shadow-md shadow-green-400 sha text-sm py-3   '>
                <h1 className=' text-green-800'>Rs200 saved! FREE DELIVERY applied on this order</h1>
            </div>
            <div className=''>
                <h1 className=' p-2'>Review items</h1>

                <div className='space-y-3 bg-neutral-900 p-2 mx-1  rounded-md'>
                    <div className=' flex bg-white text-black gap-1 items-center justify-between px-1 mx-1 rounded-md shadow-sm shadow-neutral-400'>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/71dGEc6n2ML._SL1500_.jpg" alt="" srcset="" className=' w-16 h-16 rounded-full' />
                        <div className='w-38'>
                            <h1 className=' text-sm'>Lorem ipsum dolor sit</h1>
                            <p className=' text-xs text-light'>10kg</p>
                        </div>
                        <div className=' flex gap-2 border px-1 rounded-md items-center'>
                            <button className=' text-2xl'>-</button>
                            <p>1</p>
                            <button className='text-2xl'>+</button>
                        </div>
                        <div >
                            <del className=' text-xs '>₹ 200</del>
                            <h1 className=' text-sm font-semibold text-green-500'>₹ 100</h1>
                        </div>
                    </div>
                    <div className=' flex bg-white text-black gap-1 items-center justify-between px-1 mx-1 rounded-md shadow-sm shadow-neutral-400'>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/71dGEc6n2ML._SL1500_.jpg" alt="" srcset="" className=' w-16 h-16 rounded-full' />
                        <div className='w-38'>
                            <h1 className=' text-sm'>Lorem ipsum dolor sit</h1>
                            <p className=' text-xs text-light'>10kg</p>
                        </div>
                        <div className=' flex gap-2 border px-1 rounded-md items-center'>
                            <button className=' text-2xl'>-</button>
                            <p>1</p>
                            <button className='text-2xl'>+</button>
                        </div>
                        <div >
                            <del className=' text-xs '>₹ 200</del>
                            <h1 className=' text-sm font-semibold text-green-500'>₹ 100</h1>
                        </div>
                    </div>
                    <div className=' flex bg-white text-black gap-1 items-center justify-between px-1 mx-1 rounded-md shadow-sm shadow-neutral-400'>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/71dGEc6n2ML._SL1500_.jpg" alt="" srcset="" className=' w-16 h-16 rounded-full' />
                        <div className='w-38'>
                            <h1 className=' text-sm'>Lorem ipsum dolor sit</h1>
                            <p className=' text-xs text-light'>10kg</p>
                        </div>
                        <div className=' flex gap-2 border px-1 rounded-md items-center'>
                            <button className=' text-2xl'>-</button>
                            <p>1</p>
                            <button className='text-2xl'>+</button>
                        </div>
                        <div >
                            <del className=' text-xs '>₹ 200</del>
                            <h1 className=' text-sm font-semibold text-green-500'>₹ 100</h1>
                        </div>
                    </div>
                    <div className=' flex bg-white text-black gap-1 items-center justify-between px-1 mx-1 rounded-md shadow-sm shadow-neutral-400'>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/71dGEc6n2ML._SL1500_.jpg" alt="" srcset="" className=' w-16 h-16 rounded-full' />
                        <div className='w-38'>
                            <h1 className=' text-sm'>Lorem ipsum dolor sit</h1>
                            <p className=' text-xs text-light'>10kg</p>
                        </div>
                        <div className=' flex gap-2 border px-1 rounded-md items-center'>
                            <button className=' text-2xl'>-</button>
                            <p>1</p>
                            <button className='text-2xl'>+</button>
                        </div>
                        <div >
                            <del className=' text-xs '>₹ 200</del>
                            <h1 className=' text-sm font-semibold text-green-500'>₹ 100</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='' id='billing'>
                <h1 className='p-2'>Bill Details</h1>
                <div className=' bg-neutral-900 border-neutral-800 border-2 text-black rounded-md p-2 m-2'>

                    <div className='flex flex-col gap-4 m-1 p-2 text-sm shadow-sm shadow-neutral-400  bg-white rounded-md font-medium  '>
                        <div className=' flex justify-between'>
                            <h1>MRP Total</h1>
                            <h1>₹ 1209</h1>
                        </div>
                        <div className=' flex justify-between'>
                            <h1>Item Saving</h1>
                            <h1 className=' text-green-500'>-₹ 179</h1>
                        </div>
                        <div className=' flex justify-between'>
                            <h1 className=' border-b border-dotted'>Handling Fee(incl 18% GST)</h1>
                            <h1>₹ 5</h1>
                        </div>
                        <hr />
                        <div className=' flex justify-between'>
                            <h1>Delivery Partner Fee</h1>
                            <div className='flex gap-1'>
                                <del> 25Rs  </del><h1 className=' text-green-500'>Free</h1>

                            </div>
                        </div>
                        <hr />
                        <div className=' flex justify-between'>
                            <h1>To Pay</h1>
                            <div className='flex gap-1'>
                                <del> ₹ 1241  </del><h1 className=' text-green-500'>₹ 1037</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='' >
                <h1 className=' p-2'>Review your order to avoid cancellation</h1>
                <div className=' bg-neutral-900 border-neutral-800 border-2 text-black rounded-md p-2 m-2'>

                    <div className='p-2 bg-white text-black rounded-md text-sm '>
                        <h1> <span className=' text-red-500'>NOTE:</span> order cannot be cancelled and are non-redundable once packed for delivery
                        </h1>
                    </div>
                </div>
            </div>
            <div
                className={`bg-white w-full text-black flex justify-between px-4 py-4 rounded-t-xl shadow-white shadow-sm fixed bottom-0 ${isBottom && 'hidden'}`}
            >
                <div>
                    <h1 className=' text-lg font-semibold'>₹ 3000/-</h1>
                    <a href='#billing' className=' text-sm text-green-500 font-semibold'>View Deatils Bill</a>
                </div>
                <button className=' bg-green-500 text-white px-5 rounded-lg font-bold shadow-netural-200 shadow-lg'>Place Order</button>
            </div>
            <div
                className={`bg-white w-full text-black flex justify-between px-4 py-4 rounded-t-xl shadow-white shadow-sm`}
            >
                <div>
                    <h1 className=' text-lg font-semibold'>₹ 3000/-</h1>
                    <a href='#billing' className=' text-sm text-green-500 font-semibold'>View Deatils Bill</a>
                </div>
                <button className=' bg-green-500 text-white px-5 rounded-lg font-bold shadow-netural-200 shadow-lg'>Place Order</button>
            </div>

        </div>
    )
}

export default Cart