import React from "react";
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  {Link} from "react-router-dom";




function Header () {
    
        return(
            <div className="header">
               <Link to="/"> <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /></Link>

                <div className="header-search" >
                 <input className="header-search-input" type="text"/>
                 <SearchIcon className="header-searchIcon"/>
                </div>
                <div className="header-nav">
              <div className="header-option">
                  <span className="header-optionlineone"> Hello Guest</span>
                  <Link to="/signinpage"><span className="header-optionlinetwo" > Sign In</span></Link>
                   </div>
              <div className="header-option">
              <span className="header-optionlineone"> Return </span>
                  <span className="header-optionlinetwo"> & Orders</span>
                   </div>
              <div className="header-option">
              <span className="header-optionlineone"> Your</span>
                  <span className="header-optionlinetwo">Prime</span>
                   </div>
                   <div className="header-option-basket"> 
                  <Link className="basket" to="/checkout"> <ShoppingCartIcon/></Link>
                   <span className="header-optionlinetwo header-basket-count"> 0</span>
                   </div>
            </div>
            </div>
            
        )
    }


export default Header;
