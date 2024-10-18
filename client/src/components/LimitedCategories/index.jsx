import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import React from 'react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
 
const LimitedCategories = () => {
  return (
    <div className="relative text-white bg-gradient-to-tr from-blue-700 to-blue-900 p-5">
        <div className="flex justify-between items-center mb-16">
            <h5>Explore Categories</h5>
            <div className="flex gap-2">
                <KeyboardArrowLeft className='text-blue-500' />
                <KeyboardArrowRight className='text-blue-500' />
            </div>
        </div>
        <div className="absolute -bottom-0 left-0 translate-y-1/2 w-full px-5">
            <div className="relative w-full">
                <Swiper slidesPerView={ window.innerWidth < 1024 ? 3 : 5} spaceBetween={20} loop={false} className='pb-32 mt-44'>
                    <SwiperSlide>
                        <div className="rounded-t-md rounded-b-3xl bg-gradient-to-tr from-gray-100 to-blue-300 shadow-lg flex-col items-center justify-center relative pt-3 pb-16 md:pb-32">
                            <h5 className='text-blue-700 text-sm md:text-md text-sm md:text-md text-center font-bold uppercase'>Pain Killers</h5>
                            <center>
                                <img src="/panadol-product.png" alt="" className='h-[75px] md:h-[150px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 drop-shadow-2xl' loading='lazy' />
                            </center>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-t-md rounded-b-3xl bg-gradient-to-tr from-gray-100 to-blue-300 shadow-lg flex-col items-center justify-center relative pt-3 pb-16 md:pb-32">
                            <h5 className='text-blue-700 text-sm md:text-md text-center font-bold uppercase'>Shampoos</h5>
                            <center>
                                <img src="/head-and-shoulders.png" alt="" className='h-[75px] md:h-[150px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 drop-shadow-2xl' loading='lazy' />
                            </center>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-t-md rounded-b-3xl bg-gradient-to-tr from-gray-100 to-red-300 shadow-lg flex-col items-center justify-center relative pt-3 pb-16 md:pb-32">
                            <h5 className='text-red-700 text-sm md:text-md text-center font-bold uppercase'>Body Cares</h5>
                            <center>
                                <img src="/ponds-lotion.png" alt="" className='h-[75px] md:h-[150px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 drop-shadow-2xl' loading='lazy' />
                            </center>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-t-md rounded-b-3xl bg-gradient-to-tr from-gray-100 to-blue-300 shadow-lg flex-col items-center justify-center relative pt-3 pb-16 md:pb-32">
                            <h5 className='text-blue-700 text-sm md:text-md text-center font-bold uppercase'>Baby Cares</h5>
                            <center>
                                <img src="/nangrow-milk.png" alt="" className='h-[75px] md:h-[150px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 drop-shadow-2xl' loading='lazy' />
                            </center>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-t-md rounded-b-3xl bg-gradient-to-tr from-gray-100 to-amber-600 shadow-lg flex-col items-center justify-center relative pt-3 pb-16 md:pb-32">
                            <h5 className='text-amber-700 text-sm md:text-md text-center font-bold uppercase'>Pain Killers</h5>
                            <center>
                                <img src="/nescafe-coffee.png" alt="" className='h-[75px] md:h-[150px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 drop-shadow-2xl' loading='lazy' />
                            </center>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-t-md rounded-b-3xl bg-gradient-to-tr from-gray-100 to-gray-300 shadow-lg flex-col items-center justify-center relative pt-3 pb-16 md:pb-32">
                            <h5 className='text-blue-700 text-sm md:text-md text-center font-bold uppercase'>Pain Killers</h5>
                            <center>
                                <img src="/panadol-product.png" alt="" className='h-[75px] md:h-[150px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 drop-shadow-2xl' loading='lazy' />
                            </center>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-t-md rounded-b-3xl bg-gradient-to-tr from-gray-100 to-gray-300 shadow-lg flex-col items-center justify-center relative pt-3 pb-16 md:pb-32">
                            <h5 className='text-blue-700 text-sm md:text-md text-center font-bold uppercase'>Pain Killers</h5>
                            <center>
                                <img src="/panadol-product.png" alt="" className='h-[75px] md:h-[150px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 drop-shadow-2xl' loading='lazy' />
                            </center>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default LimitedCategories
