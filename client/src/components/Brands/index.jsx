import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Brands = () => {
    return (
        <div className="w-full flex justify-between items-center py-10">
            <Swiper slidesPerView={4} loop={false} modules={[Autoplay]} autoplay={{delay: 3000, disableOnInteraction: false}}>
                <SwiperSlide className='flex justify-center items-center'>
                    <img src="/brands/gsk-brand.png" alt="" className="h-[50px] md:h-[100px] object-contain saturate-0 hover:saturate-100 duration-300" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img src="/brands/nestle-brand.png" alt="" className="h-[50px] md:h-[100px] object-contain saturate-0 hover:saturate-100 duration-300" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img src="/brands/abbott-brand.png" alt="" className="h-[50px] md:h-[100px] object-contain saturate-0 hover:saturate-100 duration-300" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img src="/brands/pfizer-brand.svg" alt="" className="h-[50px] md:h-[100px] object-contain saturate-0 hover:saturate-100 duration-300" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img src="/brands/searle-brand.png" alt="" className="h-[50px] md:h-[100px] object-contain saturate-0 hover:saturate-100 duration-300" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img src="/brands/ferozsons-brand.png" alt="" className="h-[50px] md:h-[100px] object-contain saturate-0 hover:saturate-100 duration-300" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img src="/brands/searle-brand.png" alt="" className="h-[50px] md:h-[100px] object-contain saturate-0 hover:saturate-100 duration-300" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img src="/brands/ferozsons-brand.png" alt="" className="h-[50px] md:h-[100px] object-contain saturate-0 hover:saturate-100 duration-300" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Brands;