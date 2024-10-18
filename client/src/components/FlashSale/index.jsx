import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const FlashSale = () => {
    const [products, setProducts] = useState([
        {
            id: 5,
            name: "Cac-1000 Plus Orange Tablets",
            categories: ["Tablets"],
            image: "/cac-1000-plus-orange-tablets-product.png",
            rating: 4.5,
            price: 160,
            discount: {
                type: "percentage",
                value: 5
            },
            inStock: true,
            quantity: 12
        },
        {
            id: 7,
            name: "Lactogen 1",
            categories: ["Baby Care"],
            image: "/lactogen-product.png",
            rating: 4.5,
            price: 1200,
            discount: {
                type: "percentage",
                value: 33
            },
            inStock: true,
            quantity: 12
        },
        {
            id: 8,
            name: "Brufen Syrup Abbott",
            categories: ["Syrup"],
            image: "/brufen-syrup-product.png",
            rating: 4.5,
            price: 60,
            discount: {
                type: "percentage",
                value: 10
            },
            inStock: true,
            quantity: 12
        },
    ]);
    return (
        <>
        <div className="relative w-full h-[450px] py-24">
            <img src="/flash-sale-2.png" alt="Flash Sale" loading="lazy" className="absolute top-0 left-0 w-[100px]" />
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-5 text-center">
                    <h2 className="text-5xl font-bold text-blue-700">Hot Deals</h2>
                    <p className="text-gray-400 mb-16 mt-3">Get benefits from these deals</p>
                    <CountDown targetDate={"Jan 1, 2025 00:00:00"} />
                </div>
                <div className="col-span-12 lg:col-span-7 grid grid-cols-3 gap-3">
                    
                    {
                        products.length > 0 ?
                        products.map((product, i) => {
                            return <div className="col-span-1 bg-gray-50 rounded-lg flex flex-col justify-center" key={product.id}>
                                <FlashSaleProduct product={product} index={i} />
                            </div> 
                        })
                        : null
                    }
                  
                </div>
            </div>
        </div>
        </>
    );
}

const FlashSaleProduct = ({ product, index }) => {
    let discountedPrice = product.price;

    if(product.discount){
        if(product.discount.type === "percentage"){
            discountedPrice = product.price - ((product.discount.value * product.price) / 100);
        }
    }
    return (
        <Link to={"/product/" + product.id} key={product.id}>
            <div className="relative flex flex-col justify-center items-center gap-2 py-10">
                <img src={product.image} alt={product.name} loading="lazy" className="w-full h-[200px] object-contain" />
                <h6>{product.name}</h6>
                {
                    product.discount ? 
                    <p className="text-[var(--brand-primary)] font-semibold">Rs.{discountedPrice} <span className='text-red-600 line-through font-semibold'>Rs.{product.price}</span></p>
                    : <p className="text-[var(--brand-primary)] font-semibold">Rs.{product.price}</p>
                }
                {
                    product.discount ? product.discount.type === "percentage" ? <p className='absolute top-1 left-1 bg-blue-700 text-white p-2 text-sm'>-{product.discount.value}%</p> : null : null
                }
            </div>
        </Link>
    );
}

const CountDown = ({targetDate}) => {
    const [time, setTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const countdownDate = new Date(targetDate).getTime();
        const timer = setInterval(()=>{
            const now = new Date().getTime();

            const distance = countdownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(days < 10){
                days = "0" + days;
            }
            if(hours < 10){
                hours = "0" + hours;
            }
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            if(seconds < 10){
                seconds = "0" + seconds;
            }

            if(distance < 0){
                clearInterval(timer);
                setIsExpired(true);
                return;
            }

            setTime({days, hours, minutes, seconds});
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <>
        { !(isExpired) ? (<div className="flex justify-center items-center gap-2 my-3">
            <div className="box p-3 bg-gradient-to-tr from-gray-100 to-blue-100 rounded-md">
                <h6 className='text-blue-600 text-md lg:text-md text-center font-semibold'>{time.days}</h6>
                <p className='text-md'>Days</p>
            </div>
            :
            <div className="box p-3 bg-gradient-to-tr from-gray-100 to-blue-100 rounded-md">
                <h6 className='text-blue-600 text-md lg:text-md text-center font-semibold'>{time.hours}</h6>
                <p className='text-md'>Hours</p>
            </div>
            :
            <div className="box p-3 bg-gradient-to-tr from-gray-100 to-blue-100 rounded-md">
                <h6 className='text-blue-600 text-md lg:text-md text-center font-semibold'>{time.minutes}</h6>
                <p className='text-md'>Minutes</p>
            </div>
            :
            <div className="box p-3 bg-gradient-to-tr from-gray-100 to-blue-100 rounded-md">
                <h6 className='text-blue-600 text-md lg:text-md text-center font-semibold'>{time.seconds}</h6>
                <p className='text-md'>Seconds</p>
            </div>
        </div>) : <p className='text-red-600 font-bold text-center my-8 uppercase'>Expired</p>}
        </>
    );
}

export default FlashSale;