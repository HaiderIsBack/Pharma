import { useParams } from "react-router-dom";
import { dummyProducts } from "../../assets/products";
import { useState, useEffect } from "react";
import { Add, Remove } from "@mui/icons-material";

const ProductPage = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState(() => {
        return dummyProducts.find((prod) => prod.id === Number(productId));
    });

    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (type) => {
        if(type === 'increase'){
            setQuantity(prev => Math.min(prev + 1, product.quantity));
        }else if(type === 'decrease'){
            setQuantity(prev => Math.max(prev - 1, 1));
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
                <div className="col-span-6 flex justify-center items-center">
                    <div className="max-h-[400px] max-w-[400px] object-contain flex justify-center items-center p-10 special-img-box cursor-zoom-in overflow-hidden border-[1px] border-gray-200">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
                <div className="col-span-6 p-5">
                    <h2 className="text-4xl text-black font-bold">{product.name}</h2>
                    <h3 className="text-gray-400 my-1">{product.categories.map(category => {
                        return <span>{category}</span>
                    })}</h3>
                    <h6 className="text-2xl text-blue-700 my-2">Rs.{product.price}</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique repellat eius dolorem ab neque exercitationem quae earum quas maxime, quod assumenda accusantium provident inventore officia totam voluptate molestias perferendis!</p>
                    <div className="grid grid-cols-2 my-10">
                        <div className="flex justify-center items-center">
                            <span className="bg-blue-700 text-white p-1 select-none active:scale-105 cursor-pointer" onClick={() => changeQuantity('decrease')}><Remove /></span>
                            <span className="px-5">{quantity}</span>
                            <span className="bg-blue-700 text-white p-1 select-none active:scale-105 cursor-pointer" onClick={() => changeQuantity('increase')}><Add /></span>
                        </div>
                        <button className="add-to-cart-btn bg-blue-700 hover:bg-transparent duration-300 overflow-hidden text-white relative border-[1px] border-blue-700 py-3">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProductPage;