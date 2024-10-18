import './index.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import gsap from 'gsap';

import { KeyboardArrowLeft, KeyboardArrowRight, ShoppingCartSharp, Visibility } from '@mui/icons-material';
import { useEffect, useRef } from 'react';

const HeroSlider = () => {
    const slidesRef = useRef([]);

    const animateText = (index) => {
        // Reset all slide animations
        slidesRef.current.forEach((slide) => {
            const slideTexts = slide.querySelectorAll(".slide-text");
            gsap.to(slideTexts, {
                opacity: 0,
                y: 50, // Move down or add any effect you want for the exit
                duration: 0.5,
                ease: "power3.inOut",
            });
        });
        
        // Animate the current slide's text (enter animation)
        const slideTexts = slidesRef.current[index].querySelectorAll(".slide-text");
        gsap.fromTo(
        slideTexts,
        { opacity: 0, y: 50, duration: 0.5, ease: "power3.inOut" }, // Start position for enter animation
        {
            opacity: 1,
            y: 0, // End position
            duration: 1,
            stagger: 0.1, // Delay between text elements
            delay: 0.4,
            ease: "power3.out",
        }
        );
    };

    useEffect(()=>{
        animateText(0);
    }, []);
    return (
        <>
        <div className="container mx-auto relative group overflow-hidden">
            <Swiper slidesPerView={1} spaceBetween={50} loop={true} modules={[Navigation]} navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
                }} className='w-full'
                onSlideChange={(swiper) => {
                    animateText(swiper.activeIndex); // Animate text on slide change
                }}
                speed={1100}
                >
                <SwiperSlide>
                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-[350px] bg-gradient-to-tr from-blue-700 to-blue-900 p-3" ref={(el) => (slidesRef.current[0] = el)}>
                        <div className="col-span-1 lg:col-span-2 place-content-center lg:place-content-start relative z-10">
                            <h1 className='slide-text text-[32px] lg:text-[64px] font-bold text-white drop-shadow-sm'>Free Home Delivery</h1>
                            <h4 className='slide-text text-[16px] lg:text-[24px] font-bold text-gray-100 drop-shadow-sm'>upon Rs.2000 Shopping</h4>
                            <p className='slide-text text-gray-200 max-w-[500px] my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam consequuntur atque illo quam magni</p>
                            <button className='bg-transparent text-white mt-[20px] py-3 px-5 border-[1px] border-white shop-now-btn relative overflow-hidden hover:text-blue-700 inline-block duration-300'>Shop Now <ShoppingCartSharp /></button>
                        </div>
                        <div className="w-full relative">
                            <img src="/truck.png" alt="" className='md:translate-y-[10%] lg:translate-x-[-20%] drop-shadow-xl absolute bottom-0 translate-y-[25%] right-0' loading='lazy' />
                            {/* <img src="/hero-slide-delivery-boy.png" alt="hero slide delivery boy" className=' drop-shadow-2xl absolute bottom-0 translate-y-[25%]' /> */}
                            <img src="/hero-slide-delivery-boy.png" alt="hero slide delivery boy" className=' drop-shadow-2xl w-1/2 lg:w-auto absolute md:relative bottom-0 md:bottom-0 translate-y-[15%] md:translate-y-[50%] lg:translate-y-[25%] right-0' loading='lazy' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center lg:justify-start items-end w-full h-[350px] bg-[url('/pills-slide-hero-bg.jpg')] bg-cover p-3" ref={(el) => (slidesRef.current[1] = el)}>
                        <div className="">
                            <h1 className='slide-text text-[32px] lg:text-[64px] font-bold text-blue-700 bg-white px-5 drop-shadow-md'>100% Guarantee</h1>
                            <p className='slide-text text-white max-w-[500px] text-[16px] lg:text-[32px] font-bold my-5'>Non-expired products</p>
                            <p className='slide-text text-gray-200 max-w-[500px] my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam consequuntur atque illo quam magni</p>
                            <button className='bg-transparent text-white mt-[20px] py-3 px-5 border-[1px] border-white shop-now-btn relative overflow-hidden hover:text-blue-700 inline-block duration-300'>View Our Return Policy <Visibility /></button>
                        </div>
                        
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-[0%] group-hover:left-5 opacity-0 group-hover:opacity-100 duration-300 z-20">
                <button className="custom-prev bg-gray-200 hover:bg-white duration-300 p-2"><KeyboardArrowLeft /></button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-[0%] group-hover:right-5 opacity-0 group-hover:opacity-100 duration-300 z-20">
                <button className="custom-next bg-gray-200 hover:bg-white duration-300 p-2"><KeyboardArrowRight /></button>
            </div>
        </div>
        </>
    );
}

export default HeroSlider;