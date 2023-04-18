import React from 'react';
import Btn from './Btn';


const ProductCard = ({product}) => {
    return (
        <div style={{ width: "18rem" }} className="m-1">
            <img width={250} 

            className='w-[15rem] rounded-t-lg'
            src={product.images}
            alt='product_image'
            
            />
            <h4 className='p-3 font-bold truncate'>{product.title}</h4>
            <div className='px-3  '>${product.price}</div>
			<p className='px-3 opacity-80 line-clamp-3'>{product.description}</p>
			{/* use moment js to formatte date */}
			

            <div className='btn-group space-x-3 m-3 relative bottom-0'>
                <Btn
                title={"Buy now"}
                btnStyle={"py-2 px-3 bg-green-400 rounded-lg "}
                />
                <Btn
                title={"add to card"}
                btnStyle={"py-2 px-3 border rounded-lg border-green-400"}
                />
            </div>
        </div>
    );
}

export default ProductCard;
