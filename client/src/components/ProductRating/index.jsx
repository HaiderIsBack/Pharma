import { StarBorderOutlined, StarHalf, Star } from '@mui/icons-material';

const ProductRating = ({ rating }) => {
    let isFloat = false;
    const absoluteRating = Math.floor(rating);
    if(rating - absoluteRating != 0){
        isFloat = true;
    }

    const stars = Array(5).fill(0);
    return (
        <>
        <div className="flex justify-start">
            {
                stars.map((_, i) => {
                    if(i+1 <= absoluteRating){
                        return <Star className="text-yellow-400" style={{fontSize: "1rem"}} />
                    }else if(isFloat){
                        isFloat = false;
                        return <StarHalf className="text-yellow-400" style={{fontSize: "1rem"}} />
                    }else{
                        return <StarBorderOutlined className="text-black" style={{fontSize: "1rem"}} />
                    }
                })
            }
        </div>
        </>
    );
}

export default ProductRating;