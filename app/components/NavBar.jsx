import { User, Search, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className=' text-white py-3 px-2 flex flex-col space-y-2 bg-[#161616] rounded-b-xl' >
            <div className='flex  justify-between items-center mx-2'>
                <div className='flex flex-col'>
                    <h1 className="font-bold text-2xl bg-gradient-to-r from-cyan-600 to-white text-transparent bg-clip-text">
                        QuickDev
                    </h1>
                    <Link href={'/location'} className='text-base font-semibold flex items-center py-2'>
                        <h1 >anits hostel tagarapuvalsa</h1>
                        <ChevronDown />
                    </Link>
                </div>
                <div className=' bg-gradient-to-r from-cyan-600 to-cyan-100 border border-cyan-300 p-1.5 rounded-full'>
                <Search size={25} className=' text-black ' />
                </div>
            </div>
        </div>
    )
}

export default NavBar