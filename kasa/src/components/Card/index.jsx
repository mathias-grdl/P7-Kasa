
import { useState, useEffect } from 'react';
import './index.css';


function Card() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className='cards'>
     {
       data && data.length>0 && data.map((card, i)=>
            <div className='card' key={i}>
            <img src={card.cover} alt={card.title} />
            <h2>{card.title}</h2>
            </div>
       )
     }
    </div>
  );
}

export default Card;