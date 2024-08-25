'use client'
import { X, ChevronLeft } from 'lucide-react'
import React, { useRef, useEffect } from 'react'

const Page = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <div className='m-2'>
            <div className="relative w-full">
                <ChevronLeft className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder='search'
                    className='w-full pl-10 pr-10 py-2 text-lg border-2 rounded-md border-blue-100'
                />
                <X className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
            </div>
        </div>
    )
}

export default Page
