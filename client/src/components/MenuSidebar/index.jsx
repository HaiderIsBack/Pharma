import { FavoriteBorderOutlined, KeyboardArrowRight, Search, Shuffle } from "@mui/icons-material";
import { useState } from "react";

import { dummyCategories } from "../../assets/categories";
import { Link } from 'react-router-dom';


const MenuSidebar = () => {
    const [selectedMenu, setSelectedMenu] = useState('menu');

    const handleMenuSelect = (menu) => {
        if(menu === selectedMenu){
            return;
        }
        setSelectedMenu(menu);
    }

    return (
        <>
        <div className="menu-sidebar fixed top-0 left-[-100%] w-[300px] h-screen z-[56] duration-300 bg-white px-5">
            <div className="flex flex-col">
                <div className="flex">
                    <form action="" className="relative w-full">
                        <input type="text" className="border-none outline-none w-full py-5 pr-10" placeholder="Search Product" required />
                        <button type="submit" className="absolute top-1/2 translate-y-[-50%] right-0"><Search /></button>
                    </form>
                </div>
                <div className="flex">
                    <h3 className={selectedMenu === 'menu' ? "flex-1 text-center bg-gray-200 hover:bg-gray-200 duration-300 py-5 cursor-pointer border-b-2 border-blue-700" : "flex-1 text-center bg-gray-100 hover:bg-gray-200 border-b-2 border-gray-300 duration-300 py-5 cursor-pointer"} onClick={() => handleMenuSelect('menu')}>Menu</h3>
                    <h3 className={selectedMenu === 'categories' ? "flex-1 text-center bg-gray-200 hover:bg-gray-200 duration-300 py-5 cursor-pointer border-b-2 border-blue-700" : "flex-1 text-center bg-gray-100 hover:bg-gray-200 border-b-2 border-gray-300 duration-300 py-5 cursor-pointer"} onClick={() => handleMenuSelect('categories')}>Categories</h3>
                </div>
                <div className="selected-menu max-h-full overflow-auto">
                    {
                        selectedMenu === 'menu' ?
                        <PagesMenu /> : 
                        <CategoriesMenu />
                    }
                </div>
            </div>
        </div>
        </>
    );
}

const PagesMenu = () => {
    return (
        <div className="flex flex-col">
            <Link to={"/"} className="flex items-center py-5 px-2 cursor-pointer hover:bg-gray-200 border-b-[1px] border-gray-400">
                <h5>Home</h5>
            </Link>
            <Link to={"/about-us"} className="flex items-center py-5 px-2 cursor-pointer hover:bg-gray-200 border-b-[1px] border-gray-400">
                <h5>About Us</h5>
            </Link>
            <Link to={"/shop"} className="flex items-center py-5 px-2 cursor-pointer hover:bg-gray-200 border-b-[1px] border-gray-400">
                <h5>Shop</h5>
            </Link>
            <Link to={"/compare"} className="flex items-center gap-2 py-5 px-2 cursor-pointer hover:bg-gray-200 border-b-[1px] border-gray-400">
                <Shuffle />
                <h5>Compare</h5>
            </Link>
            <Link to={"/favourite"} className="flex items-center gap-2 py-5 px-2 cursor-pointer hover:bg-gray-200 border-b-[1px] border-gray-400">
                <FavoriteBorderOutlined />
                <h5>Favourite</h5>
            </Link>
        </div>
    );
}

const CategoriesMenu = () => {
    const [categories, setCategories] = useState(dummyCategories);

    return (
        <div className="flex flex-col">
            {
                categories.length > 0 ? categories.map(category => {
                    return <Link to={"/category/" + category.id} className="flex items-center justify-between py-5 px-2 cursor-pointer hover:bg-gray-200 border-b-[1px] border-gray-400" key={category.id}>
                        <h5>{category.name}</h5>
                        <KeyboardArrowRight fontSize="small" />
                    </Link>
                }) : null
            }
        </div>
    );
}

export default MenuSidebar;