import Image from 'next/image'
import React from 'react'
import Car from '@/models/Car'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export const generateCarImageUrl = (car: Car, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGE_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 

const CarCard = ({car} : {car : Car}) => {
  let isHovered = false;
  return (
    <div className='rounded-xl shadow-md bg-blue-50 p-5 hover:bg-white'>
        <h2 className='font-semibold text-lg'>{car.make.charAt(0).toUpperCase() + car.make.slice(1)} {car.model.charAt(0).toUpperCase() + car.model.slice(1)} {car.drive.charAt(0).toUpperCase() + car.drive.slice(1)}</h2>
        <p className='my-2'><sup>$</sup>52<sub>/day</sub></p>
        <img src={generateCarImageUrl(car)} alt='Honda Odyssey' width={300} height={200} />

        <div className='flex justify-around'>
            <p className='text-sm'> <Image src='/steering-wheel.svg' className='inline' width={20} height={20} alt='shteering wheel'/>  Automatic</p>
            <p className='text-sm'> <Image src='/tire.svg' className='inline' width={20} height={20} alt='shteering wheel'/> {car.drive.toUpperCase()}</p>
            <p className='text-sm'> <Image src='/gas.svg' className='inline' width={20} height={20} alt='shteering wheel'/>{car.highway_mpg} MPG</p>
        </div>
    </div>
  )
}

export default CarCard