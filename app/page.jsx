'use client'
import React from 'react'
import NavBar from './components/home/NavBar'
import ProductsCategory from './components/home/ProductsCategory'
import Banner from './components/home/Banner'
import CartOrder from './components/CartOrders'
const page = () => {
  return (
    <div className=' flex flex-col gap-2 '>
      <NavBar/>
      <div className=' flex items-center justify-center gap-2'>
        <h1 className='text-white font-semibold '>Delivery In <span className=' bg-gradient-to-tr from-blue-700 to-blue-500 px-2 py-1 font-bold rounded-md'>10 Mins</span> </h1>
        <img src="delivery.gif" alt="My cool gif" className=' w-10 h-10 rounded-full'/>
      </div>
      <Banner/>
      <div>
        <h1 className='text-white px-5 py-3 font-semibold'>Explore By Categories</h1>
      </div>
      <ProductsCategory/>
      <CartOrder/>
    </div>
  )
}

export default page