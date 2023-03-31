import React from 'react';
 
import { Link } from "react-router-dom";
import './test.css';
import { Wave } from 'react-animated-text';
 

export default function Intropage() {
    const ExampleOne = () => (
        <Wave text="EXAMPLE TEXT" />
      );

    return (
        // <div  style={{backgroundImage: 'url(' + Image + ')',backgroundSize:'auto'}}>,
        <div className='container maint-cnt'>
            <div className="header-nav">
                <span className="mytext1"> SmartPark </span>
            </div>
            
            <div className="">
            </div>

            <div className="container">
                <div className="slogan">
                    <h1>
                        <span>always park</span>
                        <div className="message">
                            <div className="word1">Uniquely</div>
                            <div className="word2">Safely</div>
                            <div className="word3">With A Smile</div>
                        </div>
                    </h1>
                </div>

                <a href="/#"   className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="#FF8282" />
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span >Continue!</span>
                </a>
                <span style={{fontWeight:"bolder",fontSize:"1.2rem"}}>Trusted</span>
            <Wave text="Handyman" effect="stretch" effectChange={2.2} color="red" style={{color:"red"}} />
            <span>Services</span>
            </div>
        </div>
        // </div>
    )
}