import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
const Header = () => {
  const [{basket,user} ,dispatch]=useStateValue();
  const handleAuthentication=()=>{
     if(user){
        auth.signOut();
     }
  }
    return (
        <div className='header'>
         <Link to="/">
         <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
         </Link>
            <div className='header_search'>
            <input className='header_searchInput' type="text"  />
             <SearchIcon className='header_searchIcon'/>
            </div>
            <div className="header_nav">

            <div className="header_option">
            <span className="header_optionLineOne">Hello, {user ? user.email :'Guest'}</span>
            <Link to={!user && '/login'}> 
            <span onClick={handleAuthentication} className="header_optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
            </Link>
          
            </div>
            <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
            </div>
            <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
            </div>
             <Link to='/checkout'>
             <div className="header_optionBasket">
              <ShoppingCartSharpIcon/>
              <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>

             </div>
             </Link>
            </div>
        </div>
    )
}

export default Header
