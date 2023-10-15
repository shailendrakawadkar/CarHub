import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <nav className='container mx-auto flex justify-between items-center py-4 px-2 fixed'>
            <a href='/'>
                <Image src='/logo.svg' alt='Logo' width={118} height={18} />
            </a>
            <ul>
                <li>
                    <button className='bg-blue-400 text-white px-4 py-2 rounded-3xl'>
                        Sign In
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Header