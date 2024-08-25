'use client'
import NavBar from '@/app/components/NavBar'
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import CartOrders from '@/app/components/CartOrders'
const page = () => {
  const router = useRouter()
  return (
    <div>
      <NavBar />
      <div className=' flex p-2 text-white flex-col gap-6'>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71dGEc6n2ML._SL1500_.jpg" alt="" srcset="" />
        <p className='text-2xl font-medium '>
          Cadbury Dairy Milk Chocolate Home Treats <br />
          <span className='font-light text-base'>  1 pc (Approx. 500g - 700g)</span>
        </p>
        <div className='flex  items-center gap-3'>
          <h1 className='text-2xl font-bold'>₹ 123</h1>
          <del className='text-base font-light'>₹149</del>
          <div className=' bg-gradient-to-tr from-blue-500 to-blue-300 px-1.5 text-sm py-1 rounded-md'>
            30% off
          </div>
        </div>
        <button onClick={()=>router.push('/Cart')} className=" flex justify-center gap-2 text-xl font-bold bg-blue-400 rounded-md py-2 mx-2 hover:bg-black hover:border-2 hover:border-blue-400 ">
            <h1>  
            Add to Cart
            </h1>
            <ShoppingCart size={25} />
        </button>
        <div className='h-0.5 w-full bg-gray-600'></div>
        <h1 className=' text-lg font-medium'>About Product</h1>
        <ul className="list-disc pl-5">
          <li>
            Description: Cabbage is high in nutrients such as vitamin C, fiber, and vitamin K. Furthermore, some studies indicate that it may aid digestion, improve heart health, and reduce inflammation. Despite its high nutritious value, cabbage is sometimes disregarded.
          </li>
          <li>
            Description: Cabbage is high in nutrients such as vitamin C, fiber, and vitamin K. Furthermore, some studies indicate that it may aid digestion, improve heart health, and reduce inflammation. Despite its high nutritious value, cabbage is sometimes disregarded.
          </li>
           <li>
            Description: Cabbage is high in nutrients such as vitamin C, fiber, and vitamin K. Furthermore, some studies indicate that it may aid digestion, improve heart health, and reduce inflammation. Despite its high nutritious value, cabbage is sometimes disregarded.
          </li>
        </ul>
      </div>
      <CartOrders/>

    </div>
  )
}

export default page