import { useParams } from "react-router-dom";
import { dummyProducts } from "../../assets/products";
import { useState, useEffect } from "react";
import { Add, Facebook, FavoriteBorderOutlined, Pinterest, Remove, Shuffle, Twitter } from "@mui/icons-material";
import ProductRating from "../../components/ProductRating";

const ProductPage = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState(() => {
        return dummyProducts.find((prod) => prod.id === Number(productId));
    });
    let discountedPrice = product.price

    if(product.discount){
        if(product.discount.type === "percentage"){
            discountedPrice = product.price - ((product.discount.value * product.price) / 100);
        }
    }

    useEffect(() => {
        const imgBoxes = document.querySelectorAll(".special-img-box");

        imgBoxes.forEach((imgBox) => {
            imgBox.addEventListener("mousemove", (event) => {
                const img = imgBox.getElementsByTagName("img")[0];
                const rect = imgBox.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width * 100;
                const y = (event.clientY - rect.top) / rect.height * 100;
                
                img.style.transformOrigin = `${x}% ${y}%`; // Changes the zoom origin based on mouse position
                img.style.transform = "scale(1.5)"; // Maintains the zoom effect
            });
            imgBox.addEventListener('mouseleave', () => {
                const img = imgBox.getElementsByTagName("img")[0];
                img.style.transformOrigin = "center"; // Resets the origin to center
                img.style.transform = "scale(1)"; // Resets the zoom
            });
        });

        return () => {
            imgBoxes.forEach((imgBox) => {
                imgBox.removeEventListener("mousemove", (event) => {
                    const rect = imgBox.getBoundingClientRect();
                    const x = (event.clientX - rect.left) / rect.width * 100;
                    const y = (event.clientY - rect.top) / rect.height * 100;
                    
                    img.style.transformOrigin = `${x}% ${y}%`; // Changes the zoom origin based on mouse position
                    img.style.transform = "scale(1.5)"; // Maintains the zoom effect
                });
                imgBox.removeEventListener('mouseleave', () => {
                    img.style.transformOrigin = "center"; // Resets the origin to center
                    img.style.transform = "scale(1)"; // Resets the zoom
                });
            });
        }
    }, []);
    
    return (
        <>
        <div className="flex flex-col my-16">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 flex justify-center">
                    <div className="max-h-[400px] max-w-[400px] object-contain flex justify-center items-center p-10 special-img-box cursor-zoom-in overflow-hidden border-[1px] border-gray-200">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 p-5">
                    {
                        product.discount ? product.discount.type === "percentage" ? <p className='inline-block bg-blue-700 text-white p-2 my-2 text-sm'>-{product.discount.value}%</p> : null : null
                    }
                    <h2 className="text-4xl text-black font-bold">{product.name}</h2>
                    <h3 className="text-gray-400 my-1">{product.categories.map(category => {
                        return <span>{category}</span>
                    })}</h3>
                    <ProductRating rating={product.rating} />
                    {
                        product.discount ? 
                        <h6 className="text-2xl text-blue-700 my-2">Rs.{discountedPrice} <span className='text-red-600 line-through'>Rs.{product.price}</span></h6>
                        : <h6 className="text-2xl text-blue-700 my-2">Rs.{product.price}</h6>
                    }
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique repellat eius dolorem ab neque exercitationem quae earum quas maxime, quod assumenda accusantium provident inventore officia totam voluptate molestias perferendis!</p>
                    <AddToCartBtn product={product} />
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 border-[1px] border-black px-2 py-1 cursor-pointer action-btn relative overflow-hidden hover:text-white duration-200">
                            <Shuffle />
                            Compare
                        </button>
                        <button className="flex items-center gap-2 border-[1px] border-black px-2 py-1 action-btn relative overflow-hidden hover:text-white duration-200">
                            <FavoriteBorderOutlined />
                            Add to Favourites
                        </button>
                    </div>
                    <div className="flex gap-3 my-5 text-gray-400">
                        <p className="inline-block text-gray-800">Share:</p>
                        <Facebook className="hover:text-blue-700 cursor-pointer" />
                        <Twitter className="hover:text-blue-700 cursor-pointer" />
                        <Pinterest className="hover:text-red-700 cursor-pointer" />
                    </div>
                </div>
            </div>
            <ProductTabs />
        </div>
        </>
    );
}

const ProductTabs = () => {
    const [selectedTab, setSelectedTab] = useState('desc');
    return (
        <div className="w-full container mx-auto">
            <div className="flex justify-center">
                <button className={selectedTab === 'desc' ? "bg-gray-100 text-blue-700 px-10 py-5 border-b-2 border-blue-700  hover:bg-gray-200 duration-300" : "bg-gray-50 text-black px-10 py-5 border-b-2 border-gray-400  hover:bg-gray-200 duration-300"} onClick={() => setSelectedTab('desc')}>Description</button>
                <button className={selectedTab === 'reviews' ? "bg-gray-100 text-blue-700 px-10 py-5 border-b-2 border-blue-700  hover:bg-gray-200 duration-300" : "bg-gray-50 text-black px-10 py-5 border-b-2 border-gray-400  hover:bg-gray-200 duration-300"} onClick={() => setSelectedTab('reviews')}>Reviews</button>
            </div>
            <div className="bg-gray-100 w-full px-3 md:px-5 py-10">
                {
                    selectedTab === 'desc' ? 
                    <DescriptionTab /> : 
                    <p>Reviews</p>
                }
            </div>
        </div>
    );
}

const DescriptionTab = () => {
    return (
        <>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit molestias dolor voluptatibus cumque, soluta laborum esse! Sint nisi quos placeat?</p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, veniam reprehenderit ab tempora labore reiciendis quibusdam. Accusantium, nesciunt? Nostrum, nisi illo? Itaque ad magni cumque autem, ut nemo eos ex?</p>
        <br />
        <ul className="list-disc pl-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, illum!</li>
            <li>Impedit molestias sed tempora in vel atque maxime assumenda repellendus!</li>
            <li>Porro impedit nemo perspiciatis sunt quo praesentium necessitatibus reiciendis odio!</li>
            <li>Aspernatur fugiat ratione a accusamus, voluptatem odio iure eaque sapiente?</li>
            <li>Sit ipsa saepe nam molestias eos. Earum neque eos cum.</li>
        </ul>
        </>
    );
}

const AddToCartBtn = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (type) => {
        if(type === 'increase'){
            setQuantity(prev => Math.min(prev + 1, product.quantity));
        }else if(type === 'decrease'){
            setQuantity(prev => Math.max(prev - 1, 1));
        }
    }
    return (
        <div className="grid grid-cols-2 my-10">
            <div className="flex justify-start items-center">
                <span className="bg-blue-700 text-white p-1 select-none active:scale-105 cursor-pointer" onClick={() => changeQuantity('decrease')}><Remove /></span>
                <span className="px-5">{quantity}</span>
                <span className="bg-blue-700 text-white p-1 select-none active:scale-105 cursor-pointer" onClick={() => changeQuantity('increase')}><Add /></span>
            </div>
            <button className="add-to-cart-btn bg-blue-700 hover:bg-transparent duration-300 overflow-hidden text-white relative border-[1px] border-blue-700 py-3">Add to Cart</button>
        </div>
    );
}

export default ProductPage;