import React,{useEffect, useState} from 'react'
import src from '../images/vaishnodevi.jpg'
import './pages.css'
const api = {
    key: "50570ddeaca3e897fdc890e38eeca04e",
    base: "https://api.openweathermap.org/data/2.5/"
  }
function Vaishnodevi() {
    
  const[weather,setWeather]=useState('');

  useEffect(()=>{
      let ans='vaishno devi';
    fetch(`${api.base}weather?q=${ans}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            
            
            console.log(result.main.temp);
            setWeather(result.main.temp);
          });
        
        

  },[])
    return (
        <div>
            <img src={src}/>
            <h1 className='vaishnodevi'>Vaishno Devi {Math.round(weather)}°c</h1>
            
        </div>
    )
}

export default Vaishnodevi
