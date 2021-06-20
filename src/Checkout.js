import './Checkout.css'

import React from 'react'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
const Checkout = () => {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
         <div className="checkout_left">
          <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" alt="" />
           <div className="checkout_title">
               <h5>Hello, { user ?.email}</h5>
               <h2 >Your shopping Basket</h2>
               </div>
               { basket.map(item=>(
                 <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                 />
                ))}
          
         </div>
          <div className="checkout_right">
            
               <Subtotal/>
              {/* Subtotal 
                  Subtotal
              */}
          </div>
        </div>
    )
}

export default Checkout
