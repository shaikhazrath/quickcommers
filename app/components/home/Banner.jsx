import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'
const Banner = () => {
  const [counter, setCounter] = useState(0);
  const totalImages = 6; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % totalImages);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCounter((prevCounter) => (prevCounter - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setCounter((prevCounter) => (prevCounter + 1) % totalImages);
  };

  return (
    <div className="relative w-screen">
      <div className="flex gap-4 overflow-hidden justify-center">
        <img src={`banner${(counter % totalImages) + 1}.png`} alt="Banner" />
        <img src={`banner${((counter + 1) % totalImages) + 1}.png`} alt="Banner" />
        <img src={`banner${((counter + 2) % totalImages) + 1}.png`} alt="Banner" />
      </div>

      <div className='text-white flex justify-between items-center absolute top-1/3 w-full '>
        <button
          onClick={handlePrev}
          className="bg-black bg-opacity-50 text-white p-1 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-black bg-opacity-50 text-white p-1 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
