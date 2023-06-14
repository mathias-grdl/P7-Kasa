// import React from "react";
import { useState, useEffect } from 'react';
import './index.css';
import Card from '../../components/Card';

function Cards() {
  const [data,setData]=useState([]);
  const getData = () => {
    fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{getData()},[])
  
  return (
    <div className='cards'>
     {
       data && data.length>0 && data.map((x, i)=>
       <Card card={x} key={i}/>
       )
     }
    </div>
  );
}

export default Cards;