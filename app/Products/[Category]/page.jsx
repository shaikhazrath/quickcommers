import CartOrders from '@/app/components/CartOrders'
import NavBar from '@/app/components/NavBar'
import Card from '@/app/components/products/Card'
import Filterbar from '@/app/components/products/Filterbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavBar />
      <div className='flex gap-2 pt-2'>
        <Filterbar />
        <div className='grid grid-cols-2 pb-2 grid-col gap-2 h-screen overflow-y-scroll  scrollbar-hide '>
            <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <CartOrders/>

    </div>
  )
}

export default page