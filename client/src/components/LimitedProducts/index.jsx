import './index.css';

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { dummyProducts } from "../../assets/products";

import { Shuffle, FavoriteBorderOutlined, Add, Remove } from '@mui/icons-material';

import ProductRating from '../ProductRating';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const LimitedProducts = ({ productColumns, maxProducts }) => {
    const productCols = productColumns || 4;
    const maximumProducts = maxProducts || 8;

    const [products, setProducts] = useState(dummyProducts);

    return (
        <>
        <div>
            <div className={productCols === 4 ? "container mx-auto grid grid-cols-2 lg:grid-cols-4 px-3 lg:px-0 gap-3 gap-y-10" : productCols === 3 ? "container mx-auto grid grid-cols-2 lg:grid-cols-3 px-3 lg:px-0" : ""}>
                {
                    products.length > 0 ? products.map((product)=>{
                        return <ProductCard key={product.id} product={product} />
                    }) : null
                }
            </div>
        </div>
        </>
    );
}

const ProductCard = ({ product }) => {
    const productRef = useRef(null);
    let discountedPrice = product.price

    if(product.discount){
        if(product.discount.type === "percentage"){
            discountedPrice = product.price - ((product.discount.value * product.price) / 100);
        }
    }

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(productRef.current, {
            // clipPath: "inset(0% 0% 100% 0%)",
            opacity: 0,
            y: 10,
        },{
            // clipPath: "inset(0% 0% -10% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.inOut",
            scrollTrigger: productRef.current
        })
    }, []);
    return (
        <>
        <div ref={productRef} className="product-card bg-white border-[1px] border-gray-300 hover:border-black duration-300 p-3 relative group rounded-lg">
            <div className="">
                <div className="w-full h-[100px] lg:h-[200px] p-5 bg-gradient-to-tr from-gray-50 to-blue-50 relative overflow-hidden cursor-pointer rounded-lg mb-1">
                    <Link to={"/product/" + product.id}>
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain hover:scale-90 duration-300 relative z-10" loading="lazy" />
                    </Link>
                </div>
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center gap-3">
                    <div className="border-[1px] border-gray-400 cursor-pointer p-2 pt-[-5px] bg-white rounded-md">
                        <Shuffle fontSize="small" className='hover:text-blue-700 duration-150 mt-[-3px]' />
                    </div>
                    <div className="border-[1px] border-gray-400 cursor-pointer p-2 pt-[-5px] bg-white rounded-md">
                        <FavoriteBorderOutlined fontSize="small" className='hover:text-blue-700 duration-150 mt-[-3px]' />
                    </div>
                </div>
                <h2 className='text-ellipsis whitespace-nowrap overflow-hidden'>{product.name}</h2>
                <p className="text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden">{product.categories.map((category, index)=> {
                    return <span key={index}>{category}</span>
                })}</p>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <ProductRating rating={product.rating} />
                    {
                        product.discount ? 
                        <p className="text-[var(--brand-primary)] font-semibold text-sm sm:text-md">Rs.{discountedPrice} <span className='text-red-600 line-through font-semibold text-sm sm:text-md'>Rs.{product.price}</span></p>
                        : <p className="text-[var(--brand-primary)] font-semibold text-sm sm:text-md">Rs.{product.price}</p>
                    }
                </div>
                
                {
                    product.discount ? product.discount.type === "percentage" ? <p className='absolute top-1 left-1 bg-blue-700 text-white p-2 text-sm'>-{product.discount.value}%</p> : null : null
                }
            </div>
            {/* <div className="flex justify-between items-center my-3">
                <button className='bg-gray-100 text-blue-700 py-2 px-5 rounded-lg'><Remove fontSize='small' /></button>
                <span>0</span>
                <button className='bg-gray-100 text-blue-700 py-2 px-5 rounded-lg'><Add fontSize='small' /></button>
            </div> */}
            {/* <button className="add-to-cart-btn relative duration-300 bg-gradient-to-tr from-blue-500 to-blue-700 text-white w-full text-sm overflow-hidden translate-y-[50%] py-3 mt-3 rounded-lg" onClick={()=>navigate("/product/" + product.id)}>Add to Cart</button> */}
        </div>
        </>
    );
}

export default LimitedProducts;