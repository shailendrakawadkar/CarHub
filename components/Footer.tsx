import { FooterLinks } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <>
            <hr className='border-gray-300 my-12' />
            <div className='flex justify-between items-center'>
                <div>
                    <Image src='/logo.svg' alt='Logo' width={118} height={18} />
                </div>

                <div className='flex justify-around gap-24 leading-loose'>
                    {
                        FooterLinks.map((section) => {
                            return (
                                <div key={section.title}>
                                    <h3 className='font-bold mb-5'>{section.title}</h3>
                                    <ul className='mt-2'>
                                        {
                                            section.links.map((link) => {
                                                return (
                                                    <li className='my-1' title={link.name} key={link.name}>
                                                        <a href={link.url}>{link.name}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <hr className='border-gray-300 mt-12' />
            <div className='flex justify-between items-center py-8'>
                <div>
                    <p>@2023 CarHub. All Rights Reversed</p>
                </div>
                <div>
                    <ul className='flex'>
                        <li className='mx-2'>
                            <a href='/'>Privacy Policy</a>
                        </li>
                        <li className='mx-2'>
                            <a href='/'>Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer