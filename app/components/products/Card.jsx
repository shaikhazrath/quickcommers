'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
const Card = () => {
    const router = useRouter()
    const handleAddtocart=()=>{
        console.log('hii')
    }
    return (
        <div className='flex flex-col h-[280px] gap-2  rounded-md p-2 bg-white text-black shadow-md'>
          <Link href={`/ProductDeatils/Id`}>
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/71dGEc6n2ML._SL1500_.jpg"
                alt="Cadbury Dairy Milk Chocolate Home Treats"
                className='w-[150px] h-[150px] object-cover '
            />
            <p className='text-xs font-medium '>
                Cadbury Dairy Milk Chocolate Home Treats <span className='font-light'>500g</span>
            </p>
            <div className='flex  items-center'>
                <h1 className='text-sm font-bold'>₹ 123</h1>
                <del className='text-xs font-light'>₹149</del>
            </div>
            </Link>

            <button className='border-2 border-blue-400 rounded-md py-1.5 text-sm text-blue-400 hover:bg-blue-400 hover:text-white transition-all' onClick={handleAddtocart}>
                Add Cart
            </button>
        </div>
    )
}

export default Card
