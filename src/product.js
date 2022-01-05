import React from "react";
import  "./product.css";

 

function Product({title,image,price,rating}){
    
        return(
            <div className="product">
            <div className=" product-info">
            <p className="description">{title}</p>
            <p className="product-price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product-rating">
                <p>Ratings</p>
            {Array(rating)
            .fill()
            .map((_,i)=>(
                 <p className="star">*</p>
            ))}

            </div>
            </div> 
            <img className="product-image" src={image} alt=""/> 
            <button className="addtocart-btn"> Add to cart</button>
             </div>
        );
    }


export default Product;
