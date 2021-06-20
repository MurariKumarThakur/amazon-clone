import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider';
const Product = ({id,title,price,rating,image}) => {

  const [{basket},dispatch]=useStateValue();
   
   console.log('this is basket ',basket)
   
  const addToBasket=()=>{
    //dispath the item into the data layer
      dispatch({
         type:'ADD_TO_BASKET',
          item:{
           id:id,
           title:title,
           image:image,
           price:price,
           rating:rating,
         },
      });
  };
    return (
        
           <div className="product">
             <div className="product_info">
                <p className='product_title'>{title}</p> 
                <p className='Product_price'>
                 <small>$</small>
                  <strong>{price}</strong>
                 </p>
                 <div className="product_rating">
                   {Array(rating).fill().map(()=>(
                    <p >*</p>  
                   ))}  
                   
                  
                 </div>
                 </div>  
                 <img src={image} alt="" />
                  <button onClick={addToBasket}>Add To Basket</button>
           </div> 
       
    )
}

export default Product
