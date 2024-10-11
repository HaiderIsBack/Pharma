import { Close } from "@mui/icons-material";
import { useState } from "react";


const Cart = () => {
    const [products, setProducts] = useState([]);

    const closeCart = () => {
        const cartSidebar = document.querySelector(".cart");
        const overlay = document.querySelector(".overlay");

        cartSidebar.classList.remove("open");
        overlay.classList.remove("open");
    }

    return (
        <>
        <div className="cart fixed top-0 right-[-100%] w-[300px] md:w-[350px] h-screen bg-white duration-300 z-[56]">
            <div className="flex justify-between items-center py-5 px-3 border-b-[1px] border-gray-400">
                <h2 className="font-bold">Cart</h2>
                <p className="cursor-pointer hover:text-red-600" onClick={closeCart}><Close fontSize="small" className="mt-[-3px]" />Close</p>
            </div>
            {
                products.length ? <p>Products</p>
                : <div className="flex flex-col justify-center items-center gap-3 w-full h-full">
                    <h6>No products added to cart.</h6>
                    <button className="bg-transparent border-[1px] border-blue-700 text-blue-700 px-7 py-3">Return to Shop</button>
                </div> 
            }
        </div>
        </>
    );
}

export default Cart;