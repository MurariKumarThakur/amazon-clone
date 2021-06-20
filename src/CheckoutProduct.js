import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id,image,title,price,rating}) => { 
    const [{basket},dispatch]=useStateValue();
    const checkIdExist=(id)=>{
       basket.filter(item=> item.id ==id) ;
    }
    const removeFromBasket=()=>{
        //dispath the item into the data layer
          dispatch({
             type:'REMOVE_FROM_BASKET',
              id:id
          });
      };
    return ( 
          
       <>
       
       
      
        <div className='checkoutProduct'>
         <img className='checkoutProduct_image' src={image} alt="" /> 
         <div className="checkoutProduct_info">
           <p className='checkoutProduct_title'>{title}</p>
           <p className="checkoutProduct_price">
               <small>$</small>
               <strong>{price}</strong>
           </p>
            <div className="checkoutproduct_rating">
            
              {Array(rating).fill().map(()=>(
                    <p >*</p>  
              ))}  

            </div>
           
              <button onClick={removeFromBasket}>Remove from Basket</button>
         </div>

        </div>



      
       </>
    )
}

export default CheckoutProduct
