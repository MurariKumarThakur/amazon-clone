import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className='home'>
         <div className="home_container">
          <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TFM2/Launch/1500x600_Hero-Tall_JPN._CB667917551_.jpg" alt="" />
           <div className="home_row"> 
           <Product 
               id={1}
               title='CARE VIEW Non-Woven Fabric Reuseable N95 Mask (White, Without Valve, Pack of 10) for Unisex' 
               price={19}               
               rating={3}
               image='https://images-na.ssl-images-amazon.com/images/I/61yM%2BGQ8jPL._SX522_.jpg'
               
               />
            <Product 
               id={2}
               title='Realme narzo 30A (Laser Black, 3GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers' 
               price={199.99}               
               rating={4}
               image='https://images-na.ssl-images-amazon.com/images/I/71jG5HwkQQS._SX679_.jpg'
               
               /> 
           </div>
           <div className="home_row">
               <Product
                id={3} 
               title='JJ TEES Polyester Half Sleeve Jersey with Round Collar and Digital Print All Over for Men (Color: Dark Blue and Light Blue)' 
               price={100}               
               rating={5}
               image='https://images-na.ssl-images-amazon.com/images/I/61oLUXVeqKL._UX679_.jpg'
               
               />
              <Product 
               id={4}
               title='Yuwell 8F-5A Portable Oxygen Concentrator Machine (93% concentration at 5L)' 
               price={200}               
               rating={3}
               image='https://images-na.ssl-images-amazon.com/images/I/610nk4fp9MS._SX522_.jpg'
               
               />
             <Product 
              id={5}
               title='Pollogen oxygeneo 2 in 1 machine' 
               price={300}               
               rating={5}
               image='https://images-na.ssl-images-amazon.com/images/I/41FDXTmUMoL.jpg'
               
               />
               
               </div>
           <div className="home_row">
           <Product 
            id={6}
               title='Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black)' 
               price={1500}               
               rating={5}
               image='https://images-na.ssl-images-amazon.com/images/I/71qOOWyfc7L._SX679_.jpg'
               
               />
               </div>
         </div>
        </div>
    )
}

export default Home
