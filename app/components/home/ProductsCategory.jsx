import { useRouter } from 'next/navigation';
import React from 'react';
const categories = [
  {
    title: 'Fruits',
    imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.FxRpUZ1X5jvwyxjDJXeX4wHaGL&pid=Api&P=0&h=180',
  },
  {
    title: 'Snacks',
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.18LV04MqNP8W7r2OtTuxfQHaHa&pid=Api&P=0&h=180',
  },
  {
    title: 'Drinks',
    imgSrc: 'https://images.freekaamaal.com/post_images/1600942117.jpg',
  },
  {
    title: 'Fruits',
    imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.FxRpUZ1X5jvwyxjDJXeX4wHaGL&pid=Api&P=0&h=180',
  },
  {
    title: 'Snacks',
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.18LV04MqNP8W7r2OtTuxfQHaHa&pid=Api&P=0&h=180',
  },
  {
    title: 'Drinks',
    imgSrc: 'https://images.freekaamaal.com/post_images/1600942117.jpg',
  },
  {
    title: 'Fruits',
    imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.FxRpUZ1X5jvwyxjDJXeX4wHaGL&pid=Api&P=0&h=180',
  },
  {
    title: 'Snacks',
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.18LV04MqNP8W7r2OtTuxfQHaHa&pid=Api&P=0&h=180',
  },
  {
    title: 'Drinks',
    imgSrc: 'https://images.freekaamaal.com/post_images/1600942117.jpg',
  },
];

const ProductsCategory = () => {
  const router = useRouter()
  return (
    <div className=' flex justify-center'>
      <div className='grid grid-cols-3 gap-2 gap-y-6'>
        {categories.map((category, index) => (
          <div key={index} className='bg-white h-28 w-28 rounded-lg shadow-lg flex flex-col justify-center items-center' onClick={()=> router.push(`/Products/${category.title}`)}>
            <img
              src={category.imgSrc}
              className='h-20 w-20 mb-2 object-cover rounded-full'
              alt={category.title}
            />
            <h1 className='text-black text-center font-semibold text-sm'>{category.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;
