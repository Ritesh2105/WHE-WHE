import React from 'react' 

import Header from "./Header";
import Footer from "./Footer";
import Numbers from './Numbers'
import Amount from './Amount';
import NumberSelectedSection from './NumberSelectedSection'

import "../css/App.css";

import {useState,useEffect} from "react";
import DisplaySection from './DisplaySection';


const App =()=> {
 
  useEffect(()=>{
    localStorage.setItem("total",0);
    localStorage.setItem("selectedNumber",JSON.stringify([]))
    localStorage.setItem("count",0);
    localStorage.setItem("clear","false");
  },[])
  
  return (
    <div  className="root">
            <Header/>
            <div className = "App">
            <Amount/>
            <Numbers/>
            <NumberSelectedSection/>
            <DisplaySection/>
            </div>
            <Footer/>
        </div>
  ); 
}

export default App;

