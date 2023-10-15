"use client"

import React from 'react'
import CarList from './CarList'

const Catalogue = () => {
    return (
        <>
            <div className='py-4'>
                <h1 className='text-2xl font-semibold'>Car Catalogue</h1>
                <h3 className='tracking-wide'>Explore out cars you might like</h3>
            </div>

            <CarList />
        </>
    )
}

export default Catalogue