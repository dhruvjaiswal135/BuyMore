import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#f3f6fa]'>
            <div className='w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6'>
                <div className='w-3/12 lg:w-4/12 sm:w-full'>
                <div className='flex flex-col gap-4'>
                    <img className='w-[190px] h-[70px]' src="http://localhost:3000/images/Logo.png" alt="" />
                    <ul className='flex flex-col gap-2 text-slate-600'>
                        <li className='text-sm'>Address: 1234 Street Name, City, State, 12345</li>
                        <li className='text-sm'>Phone: (123) 456-7890</li>
                        <li className='text-sm'>Email: info@example.com</li>

                    </ul>
                </div>

                </div>

                <div className='w-5/12 lg:w-8/12 sm:w-full'>
                    <div className='flex justify-center sm:justify-start sm:mt-6 w-full '>
                        <div>
                        <h4 className='text-lg font-semibold mb-2'>Customer Service</h4>
                        <div className='flex justify-between gap-[80px] lg:gap-[40px]'>
                            
                        <ul className='flex flex-col gap-2 text-slate-600'>
                            <Link className='text-sm'>FAQ</Link>
                            <Link className='text-sm'>Shipping Information</Link>
                            <Link className='text-sm'>Returns & Exchanges</Link>
                        </ul>
                        <ul className='flex flex-col gap-2 text-slate-600'>
                            <Link className='text-sm'>FAQ</Link>
                            <Link className='text-sm'>Shipping Information</Link>
                            <Link className='text-sm'>Returns & Exchanges</Link>
                        </ul>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='w-4/12 lg:w-full lg:mt-6'>
                <div className='w-full flex flex-col justify-start gap-5'>
                    <h2 className='font-bold text-lg mb-2'>Join Our shop</h2>
                    <span>Get email updates about our latest shop special offers.</span>
                    <div>
                        <form className='flex flex-col gap-2'>
                            <input type="email" placeholder='Enter your email' className='w-full p-2 border border-slate-300 rounded-md' />
                            <button type='submit' className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300'>Subscribe</button>
                        </form>
                    </div>
                </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;