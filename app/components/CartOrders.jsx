'use client'
import { ShoppingBag, ShoppingBasket } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const CartOrders = () => {
  const [isBottom, setIsBottom] = useState(false);
  const router = useRouter()
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
    <div>
      <div
        className={`bg-white w-full text-black flex justify-between px-2 py-4 rounded-t-xl shadow-white shadow-sm fixed bottom-0 ${isBottom && 'hidden'}`}
      >
        <div>
          <h1 className=' text-base font-bold'>2 items | 300RS</h1>
          <a href='#billing' className=' text-xs text-green-500 font-semibold'>90 ₹ saved more coming up</a>
        </div>
        <button className=' bg-gradient-to-r from-green-400 to-green-500 border-green-200 border-2 text-white px-5 py-2 rounded-lg font-bold shadow-green-200 shadow-lg flex items-center gap-2'>Go to Cart <ShoppingBasket size={20}/></button>
      </div>
      <div
        className={`bg-white w-full text-black flex justify-between px-2 py-4 rounded-t-xl shadow-white shadow-sm`}
      >
        <div>
          <h1 className=' text-base font-bold'>2 items | 300RS</h1>
          <a href='#billing' className=' text-xs text-green-500 font-semibold'>90 ₹ saved more coming up</a>
        </div>
        <button onClick={()=>router.push('Cart')} className=' bg-gradient-to-r from-green-400 to-green-500 border-green-200 border-2 text-white px-5 py-2 rounded-lg font-bold shadow-green-200 shadow-lg flex items-center gap-2'>Go to Cart <ShoppingBasket size={20}/></button>
      </div>
    </div>
  )
}

export default CartOrders