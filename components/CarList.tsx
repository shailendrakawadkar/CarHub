import React from 'react'
import Car from '@/models/Car';
import CarCard from './CarCard';

const CarList = async () => {
        let cars : Car[] = await getCars();
    return (
        <div className='grid grid-cols-4 gap-4'>
        {
            cars.map((car, index) => {
                return (
                    <CarCard car={car} key={index}/>
                )
            })
        }
        </div>
    )
}

export default CarList;


async function getCars() {
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=20';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const cars = await response.json();

    return cars;
}