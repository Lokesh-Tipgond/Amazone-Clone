import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";
 

function SignIn(){
    function getData(val){
      console.log(val.target.value);
    } 
        return(
            <div className="Customer-service">
                <div className="Icon"> 
                  <img className="Image" src="https://www.bing.com/th?id=OIP.o-I-KZy0OcN_-4pJH7OgSQHaC4&w=275&h=105&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
                  <div className="Content-Box">
                      <div className="content">
                      <h3 className ="Text-label sign" >Sign-In</h3>
                     
                      <input className ="Text-label" type="text" placeholder="Enter Email or Phone number" name="Email" onChange= {getData} ></input><br/>
                      <input className ="Text-label" type="password" placeholder="Enter password" name="password" ></input><br/>

                      <button className ="Text-label btn" >Sign-In</button>
                     <p className="paragraph">By continuing, you agree to Amazon's </p>
                     <Link  className="paragraph"> Conditions of Use and Privacy Notice.</Link>
                     </div>
                  </div>
                   <h4>NEW to Amazon ?</h4>
                  <button className="Create">Create Your Amazone Acount</button>
                  
                </div>
            </div>

        )
    }


export default SignIn;
    
