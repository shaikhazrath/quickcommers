import { ShoppingCart, Search, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiUser } from "react-icons/ci";

const NavBar = () => {
    const [location, setLocation] = useState('');

    useEffect(() => {
      const storedLocation = localStorage.getItem('selectedLocation');
      setLocation(storedLocation || 'Default Location'); 
    }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(' ')}…`;
    }
    return text;
  };
    return (
        <div className=' text-white py-5 px-2 flex flex-col space-y-2 bg-[#161616] rounded-b-xl' >
            <div className='flex  justify-between items-center mx-2'>
                <div className='flex flex-col'>
                    <h1 className="font-bold text-2xl bg-gradient-to-r from-cyan-600 to-white text-transparent bg-clip-text">
                        QuickDev
                    </h1>
                    <Link href={'/location'} className='text-base font-semibold flex items-center py-2'>
                        <h1 cla>      {truncateText(location, 5)}
                        </h1>
                        <ChevronDown />
                    </Link>
                </div>
                <div className=' bg-gradient-to-r from-cyan-600 to-cyan-100 border border-cyan-300 p-1.5 rounded-full'>
                <CiUser size={30} className=' text-black ' />
                </div>
            </div>
            <div className='h-10 mx-2 rounded-md text-gray-700 flex bg-[#ffffff] items-center px-5 gap-4'>
                <Search size={20} />
                <h1>search</h1>
            </div>
        </div>
    )
}

export default NavBar