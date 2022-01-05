import React from "react";
import "./menubar.css";
import ListIcon from '@mui/icons-material/List';
import { NavLink } from "react-router-dom";

function Menubar(){
   
        return( 
            <div className="menu-bar">
              <NavLink to="/list" activeClassName="active-btn" className="links"><ListIcon/></NavLink>
              <NavLink to="/home" activeClassName="active-btn" className="links">Home</NavLink>
              <NavLink to="/mobile" activeClassName="active-btn" className="links">Mobiles</NavLink>
              <NavLink to="/electronics" activeClassName="active-btn" className="links">Electronics</NavLink>
              <NavLink  to="/fashion" activeClassName="active-btn" className="links">Fashion</NavLink>
              <NavLink to="/kitchen" activeClassName="active-btn" className="links">Home & Kitchen</NavLink>
              <NavLink to="/computers" activeClassName="active-btn" className="links">Computers</NavLink>
              <NavLink to="/customerservice" activeClassName="active-btn" className="links">Customer service</NavLink>
              <NavLink to="/bestsellers" activeClassName="active-btn" className="links">Best Sellers</NavLink>
            </div>
        )
    }


export default Menubar;
