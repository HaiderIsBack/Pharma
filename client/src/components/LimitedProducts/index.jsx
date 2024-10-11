import './index.css';

import { useEffect, useRef, useState } from "react";
import { dummyProducts } from "../../assets/products";

import { StarBorderOutlined, StarHalf, Star, SpaRounded, Shuffle, FavoriteBorderOutlined } from '@mui/icons-material';
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
            clipPath: "inset(0% 0% 100% 0%)",
            y: 10,
        },{
            clipPath: "inset(0% 0% -10% 0%)",
            y: 0,
            duration: 2,
            ease: "power3.inOut",
            scrollTrigger: productRef.current
        })
    }, []);
    return (
        <>
        <div ref={productRef} className="product-card bg-white border-[1px] p-3 text-center border-gray-300 hover:border-black duration-300 relative group">
            <div className="w-full h-[100px] lg:h-[200px] p-3 cursor-pointer">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain hover:scale-90 duration-300" loading="lazy" />
            </div>
            <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center gap-3">
                <div className="border-[1px] border-gray-400 cursor-pointer p-2 pt-[-5px] bg-white">
                    <Shuffle fontSize="small" className='hover:text-blue-700 duration-150 mt-[-3px]' />
                </div>
                <div className="border-[1px] border-gray-400 cursor-pointer p-2 pt-[-5px] bg-white">
                    <FavoriteBorderOutlined fontSize="small" className='hover:text-blue-700 duration-150 mt-[-3px]' />
                </div>
            </div>
            <h2 className='text-ellipsis whitespace-nowrap overflow-hidden'>{product.name}</h2>
            <p className="text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden">{product.categories.map((category, index)=> {
                return <span key={index}>{category}</span>
            })}</p>
            <ProductCardRating rating={product.rating} />
            {
                product.discount ? 
                <p className="text-[var(--brand-primary)]">Rs.{discountedPrice} <span className='text-red-600 line-through'>Rs.{product.price}</span></p>
                : <p className="text-[var(--brand-primary)]">Rs.{product.price}</p>
            }
            {
                product.discount ? product.discount.type === "percentage" ? <p className='absolute top-1 left-1 bg-blue-700 text-white p-2 text-sm'>-{product.discount.value}%</p> : null : null
            }
            <button className="add-to-cart-btn relative duration-300 bg-blue-700 text-white w-full text-sm translate-y-[75%] overflow-hidden py-3">Add to Cart</button>
        </div>
        </>
    );
}

const ProductCardRating = ({ rating }) => {
    let isFloat = false;
    const absoluteRating = Math.floor(rating);
    if(rating - absoluteRating != 0){
        isFloat = true;
    }

    const stars = Array(5).fill(0);
    return (
        <>
        <div className="flex justify-center">
            {
                stars.map((_, i) => {
                    if(i+1 <= absoluteRating){
                        return <Star className="text-yellow-400" fontSize="small" />
                    }else if(isFloat){
                        isFloat = false;
                        return <StarHalf className="text-yellow-400" fontSize="small" />
                    }else{
                        return <StarBorderOutlined className="text-gray-500" fontSize="small" />
                    }
                })
            }
        </div>
        </>
    );
}

export default LimitedProducts;