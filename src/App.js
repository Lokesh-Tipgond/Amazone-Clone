import React from 'react';
import Header from "./header";
import Home from './home';
import Checkout from "./checkout";
import Menubar from "./menubar";
import Mobile from "./mobile";
import Electronics from "./electronics";
import Fashion from "./fashion";
import Kitchen from "./kitchen";
import Computers from "./computers";
import Bestsellers from './bestsellers';
import Customerservice from './customerservice';
import  List  from './list';
import SignIn from './signinpage';
import Footer from "./footer";
import  { BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() { 
   return(
      <Router>
<div className="app"> 

<Header/>
<Menubar/>

<Switch>
<Route path="/customerservice"><Customerservice/> </Route>
<Route path="/bestsellers"><Bestsellers/> </Route>
<Route path="/list"><List/> </Route>
<Route path="/signinpage"><SignIn/> </Route>
<Route path="/computers"><Computers/> </Route>
<Route path="/kitchen"><Kitchen/> </Route>
<Route path="/fashion"><Fashion/> </Route>
<Route path="/electronics"><Electronics/> </Route>
<Route path="/mobile"><Mobile/> </Route>
<Route path="/checkout"><Checkout/></Route>
<Route path="/"><Home/> </Route>


</Switch>
<Footer/>
</div>
</Router>
 ) 
}
 
 
export default App;
