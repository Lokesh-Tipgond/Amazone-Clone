import React from "react";
import "./customerservice.css";

function Customerservice(){
   
        return(
            <div>
            <h1>Welcome to the Customer service page !</h1>
            <div className="Customerservice">
               <img className="customerImage" src="https://th.bing.com/th/id/OIP.g-DsxeeRVFfw4jDJpeYErgHaE7?w=240&h=180&c=7&r=0&o=5&pid=1.7"/>
               
                <div className="container">
                <div className="container-1"> <label className="Lebal-text" >  Customer Name:</label>
                    <input className="Input-box" placeholder="Enter Name" type="text"></input> </div>
                   <div className="container-1"> <label className="Lebal-text"> Contact Number:</label>
                    <input className="Input-box"  placeholder="Please Enter Contact Number" type="number"></input> </div>
                   <div className="container-1"> <label className="Lebal-text"> Customer Email Id:</label>
                    <input className="Input-box" placeholder="Enter Email id" type="text"></input></div>
                    <div className="container-1 Button"><button className=" Button">Call me</button></div>
                </div>
            </div>
            </div>
        )
    }


export default Customerservice;