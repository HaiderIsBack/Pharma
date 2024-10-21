import './index.css';

import { Link } from 'react-router-dom';

import { SearchOutlined, FavoriteBorderOutlined, Menu, ReceiptLongOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Nav = () => {

    const openCart = () => {
        const cartSidebar = document.querySelector(".cart");
        const overlay = document.querySelector(".overlay");

        cartSidebar.classList.add("open");
        overlay.classList.add("open");
    }

    const openSidebarMenu = () => {
        const menuSidebar = document.querySelector(".menu-sidebar");
        const overlay = document.querySelector(".overlay");

        menuSidebar.classList.add("open");
        overlay.classList.add("open");
    }

    return (
        <>
        <marquee className="border-b-[1px] border-gray-300">
            Get <span className='text-blue-700'>10%</span> discount on Debit/Credit Card Checkouts
        </marquee>
        <div className="border-b-[1px] border-gray-300 sticky top-0 left-0 bg-white z-30">
            <div className="container mx-auto grid grid-cols-12 gap-2 py-5">
                <div className="col-span-2 h-full flex items-center justify-center lg:hidden">
                    <span onClick={openSidebarMenu}><Menu /></span>
                </div>
                <div className="col-span-8 lg:col-span-3 h-full flex items-center justify-center">
                    <Link to={"/"}>
                        <h1 className='text-blue-700 text-5xl font-bold'>Dawaiwala</h1>
                    </Link>
                </div>
                <div className="col-span-6 hidden lg:block">
                    <div className="w-full bg-gray-50 flex border-[1px] border-gray-300 rounded-xl">
                        <select name="" id="" className='outline-none bg-transparent p-3 px-3 cursor-pointer'>
                            <option value="all-categories">All Categories</option>
                            <option value="all-categories">Syrups</option>
                            <option value="all-categories">Baby Care</option>
                            <option value="all-categories">Powders</option>
                        </select>
                        <input type="text" name="" id="" className='outline-none bg-transparent flex-1 border-l-[1px] border-gray-300 p-3 pl-5 ml-5' placeholder='Search Medicines' />
                        <button className='bg-blue-700 p-3 rounded-lg'><SearchOutlined className='text-white' /></button>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-3">
                    <div className="flex h-full justify-start lg:justify-end items-center gap-3">
                        <Link to={"/prescription-order"} className='text-blue-700 hover:text-blue-800'><ReceiptLongOutlined /> Prescription Order</Link>
                        <span className='hidden lg:block'>
                            <FavoriteBorderOutlined className='text-gray-400 hover:text-gray-600 duration-200 cursor-pointer' />
                        </span>
                        <span onClick={openCart}><ShoppingCartOutlined className='text-gray-400 hover:text-gray-600 duration-200 cursor-pointer' /></span>
                        <div className="hidden lg:block rounded-full w-[40px] h-[40px] overflow-hidden border-[1px] border-gray-400 hover:border-gray-600 cursor-pointer">
                            <img src="/xeno.png" alt="Xeno" loading='lazy' className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LowerNav />
        </>
    );
}

const LowerNav = () => {
    return (
        <div className='border-b-[1px] border-gray-300 hidden lg:block'>
            <div className="container mx-auto py-3">
                <menu className='flex justify-between text-sm'>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Pain Reliefs</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Ointments</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Syrups</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Antibiotics</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Wheelchairs</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Gauges</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Anxiety Reliefs</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Baby Care</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Wheelchairs</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Gauges</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Anxiety Reliefs</li>
                    <li className='hover:text-[var(--brand-primary)] cursor-pointer'>Baby Care</li>
                </menu>
            </div>
        </div>
    );
}

export default Nav;