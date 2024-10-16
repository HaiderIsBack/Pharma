import './index.css';

import { useEffect } from "react";

import { ArrowRightAlt } from "@mui/icons-material";
import { SlideDown } from "../../components/Animations";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import LimitedProducts from "../../components/LimitedProducts";
import LimitedCategories from '../../components/LimitedCategories';
import HeroSlider from "../../components/HeroSlider";
import Brands from "../../components/Brands";
import ContactUs from "../../components/Contact Us";

import Tilt from "react-parallax-tilt";

const Home = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".hero-pill", {
            y: "-25%",
            scale: 1,
            opacity: 1,
            ease: "power4.out",
            delay: 7,
            duration: 2
        });

        gsap.to(".hero-pill", {
            y: -200,
            scale: 1.5,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "-100px bottom",
                end: "bottom top",
                scrub: true,
            }
        });
    }, []);
    return (
        <>
        <div className="hero hidden lg:block w-full h-screen">
            <div className="container mx-auto flex justify-center items-center">
                <h1 className="text-[15vw] lg:text-[200px] font-bold uppercase"><SlideDown delay={5.5}>Pharmacy</SlideDown></h1>
                <img src="/pills-opened.png" alt="" className="hero-pill absolute top-2/3 left-1/2 translate-x-[-50%] translate-y-0 opacity-0 scale-50 w-32 lg:w-96 drop-shadow-sm" loading='lazy' />
            </div>
        </div>

        <div className="my-10 lg:my-24">
            <HeroSlider />
        </div>

        <div className="container mx-auto hidden mb-24">
            <Swiper slidesPerView={window.innerWidth < 1020 ? 1 : 3} spaceBetween={20} loop={false} className='pt-36'>
                <SwiperSlide>
                    <Tilt perspective={1000} tiltMaxAngleX={10} tiltMaxAngleY={10} glareColor='white' glareEnable={true}>
                        <div className="bg-gradient-to-tr from-blue-700 to-blue-800 text-white p-5 rounded-lg">
                            <div className="flex items-center justify-center flex-col relative border-b-[1px] border-blue-900 py-3 mb-3 gap-3">
                                <img src="/dollar.gif" alt="" className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-90%] w-36" />
                                <h5 className="cursor-default font-semibold">Wholesale Deals</h5>
                            </div>
                            <p className="cursor-default text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet, culpa corrupti consequatur vel non veritatis nulla itaque cumque recusandae.</p>
                            <div className="flex justify-center items-center w-full mt-3">
                                <a href="#" className="px-5 py-3 border-[1px] border-white hover:text-blue-700 shop-now-btn relative overflow-hidden duration-300">Learn More <ArrowRightAlt /></a>
                            </div>
                        </div>
                    </Tilt>
                </SwiperSlide>
                <SwiperSlide>
                    <Tilt perspective={1000} tiltMaxAngleX={10} tiltMaxAngleY={10} glareColor='white' glareEnable={true}>
                    <div className="bg-gradient-to-tr from-blue-700 to-blue-800 text-white p-5 rounded-lg">
                        <div className="flex items-center justify-center relative border-b-[1px] border-blue-900 py-3 mb-3 gap-3">
                            <img src="/heartbeat.gif" alt="" className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-90%] w-36" />
                            <h5 className="cursor-default font-semibold">Health Checks</h5>
                        </div>
                        <p className="cursor-default text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet, culpa corrupti consequatur vel non veritatis nulla itaque cumque recusandae.</p>
                        <div className="flex justify-center items-center w-full mt-3">
                            <a href="#" className="px-5 py-3 border-[1px] border-white shop-now-btn relative overflow-hidden hover:text-blue-700 duration-300">Learn More <ArrowRightAlt /></a>
                        </div>
                    </div>
                    </Tilt>
                </SwiperSlide>
                <SwiperSlide>
                    <Tilt perspective={1000} tiltMaxAngleX={10} tiltMaxAngleY={10} glareColor='white' glareEnable={true}>
                    <div className="bg-gradient-to-tr from-blue-700 to-blue-800 text-white p-5 rounded-lg">
                        <div className="flex items-center justify-center relative border-b-[1px] border-blue-900 py-3 mb-3 gap-3">
                            <img src="/delivery-truck.gif" alt="" className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-90%] w-36" />
                            <h5 className="cursor-default font-semibold">24/7 Availability</h5>
                        </div>
                        <p className="cursor-default text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet, culpa corrupti consequatur vel non veritatis nulla itaque cumque recusandae.</p>
                        <div className="flex justify-center items-center w-full mt-3">
                            <a href="#" className="px-5 py-3 border-[1px] border-white hover:text-blue-700 shop-now-btn relative overflow-hidden duration-300">Learn More <ArrowRightAlt /></a>
                        </div>
                    </div>
                    </Tilt>
                </SwiperSlide>
            </Swiper>
        </div>

        <div className="container mx-auto my-52">
            <LimitedCategories />
        </div>

        <div className="container mx-auto my-52">
            <h1 className="text-2xl lg:text-5xl font-bold my-5 pl-5 border-l-[10px] hover:border-l-[20px] duration-300 border-blue-700 cursor-default inline-block">FEATURED</h1>
            <LimitedProducts />
        </div>

        <div className="bg-gradient-to-tr from-blue-700 to-blue-900">
            <div className="container mx-auto my-24">
                <MembershipBanner />
            </div>
        </div>

        <div className="container mx-auto mt-52 mb-24">
            <ContactUs />
        </div>

        <div className="container mx-auto mt-16">
            <Brands />
        </div>
        </>
    );
}

const MembershipBanner = () => {
    return (
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3 flex flex-col justify-center">
                <h5 className='text-white text-3xl font-bold'>Get our Membership</h5>
                <p className='text-gray-300'>and enjoy discounts on all orders</p>
            </div>
            <div className="col-span-6 flex flex-col items-center justify-center gap-3">
                <p className='text-white'>Save 5% on medicines & get free home delivery with Premium Membership.</p>
                <button className='shop-now-btn hover:text-blue-700 duration-300 relative overflow-hidden text-white px-5 py-3 border-[1px] border-white'>Explore Now</button>
            </div>
            <div className="col-span-3">
                <img src="/family.png" alt="Family Photo" loading='lazy' />
            </div>
        </div>
    );
}

export default Home;