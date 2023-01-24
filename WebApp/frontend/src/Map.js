
import Ai from "./Images/ai-lab.png"
import { useEffect, useState } from 'react';

import { Icon } from "@iconify/react"
import { useRef } from 'react';




const Map = () => {





  const [coords, setCoords] = useState({x: 0, y: 0});
  const [point1State, setPoint1State] = useState("default");
  const [point2State, setPoint2State] = useState("default");
  const [point3State, setPoint3State] = useState("default");
  const [point4State, setPoint4State] = useState("default");
  const [point5State, setPoint5State] = useState("default");
  const [point6State, setPoint6State] = useState("default");
  const [point7State, setPoint7State] = useState("default");
  const [point8State, setPoint8State] = useState("default");
  const [point9State, setPoint9State] = useState("default");
  const [point10State, setPoint10State] = useState("default");
  

  



  
  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
    const range = 300;
    const point1 = document.querySelector(".capteur-1");
    const point1Position = point1.getBoundingClientRect();
    if (event.clientX > (point1Position.left - 80) && event.clientX < (point1Position.right + 100) && event.clientY > (point1Position.top - range) && event.clientY < (point1Position.bottom + range)) {
      setPoint1State("highlighted");
    } else {
      setPoint1State("default");
    }

    const point2 = document.querySelector(".capteur-2");
    const point2Position = point2.getBoundingClientRect();
    if (event.clientX > (point2Position.left +10)  && event.clientY > (point2Position.top - 70) && event.clientY < (point2Position.bottom + 70)) {
      setPoint2State("highlighted");
    } else {
      setPoint2State("default");
    }

    const point3 = document.querySelector(".capteur-3");
    const point3Position = point3.getBoundingClientRect();
    if (event.clientX > (point3Position.left - 120) && event.clientX < (point3Position.right + 5) && event.clientY > (point3Position.top -10) && event.clientY < (point3Position.bottom +range )) {
      setPoint3State("highlighted");
    } else {
      setPoint3State("default");
    }

    const point4 = document.querySelector(".capteur-4");
    const point4Position = point4.getBoundingClientRect();
    if (event.clientX > (point4Position.left - 140) && event.clientX < (point4Position.right + 0) && event.clientY > (point4Position.top - 300) && event.clientY < (point4Position.bottom + range)) {
      setPoint4State("highlighted");
    } else {
      setPoint4State("default");
    }

    const point5 = document.querySelector(".capteur-5");
    const point5Position = point5.getBoundingClientRect();
    if (event.clientX > (point5Position.left - 80) && event.clientX < (point5Position.right + 100) && event.clientY > (point5Position.top - range) && event.clientY < (point5Position.bottom + range)) {
      setPoint5State("highlighted");
    } else {
      setPoint5State("default");
    }

    const point6 = document.querySelector(".capteur-6");
    const point6Position = point6.getBoundingClientRect();
    if (event.clientX > (point6Position.left)  && event.clientX < (point6Position.right+  350) && event.clientY > (point6Position.top - 70) && event.clientY < (point6Position.bottom + 70)) {
      setPoint6State("highlighted");
    } else {
      setPoint6State("default");
    }

    const point7 = document.querySelector(".capteur-7");
    const point7Position = point7.getBoundingClientRect();
    if (event.clientX > (point7Position.left - 210) && event.clientX < (point7Position.right +160) && event.clientY > (point7Position.top - 100) && event.clientY < (point7Position.bottom + 10)) {
      setPoint7State("highlighted");
    } else {
      setPoint7State("default");
    }

    const point8 = document.querySelector(".capteur-8");
    const point8Position = point8.getBoundingClientRect();
    if (event.clientX > (point8Position.left - 270) && event.clientX < (point8Position.right + 65) && event.clientY > (point8Position.top - 80) && event.clientY < (point8Position.bottom + 100)) {
      setPoint8State("highlighted");
    } else {
      setPoint8State("default");
    }

    const point9 = document.querySelector(".capteur-9");
    const point9Position = point9.getBoundingClientRect();
    if (event.clientX > (point9Position.left+60) && event.clientX < (point9Position.right +200) && event.clientY < (point9Position.top +900) && event.clientY < (point9Position.bottom + 80)) {
      setPoint9State("highlighted");
    } else {
      setPoint9State("default");
    }

    const point10 = document.querySelector(".capteur-10");
    const point10Position = point10.getBoundingClientRect();
    if (event.clientX > (point10Position.left-10) && event.clientX < (point10Position.right +210) && event.clientY > (point10Position.top -30) && event.clientY < (point10Position.bottom + 190)) {
      setPoint10State("highlighted");
    } else {
      setPoint10State("default");
    }

  };

    return(

        
         
    <div  onMouseMove={handleMouseMove} className="map" style={{backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",objectFit:"cover"}}>
      <p style={{position:'absolute'}}>({coords.x} {coords.y})</p>
      
      <img className="imageback" src={Ai}></img>
      <div className={`capteur-1 ${point1State}`}></div>
      <div className={`capteur-2 ${point2State}`}></div>
      <div className={`capteur-3 ${point3State}`}></div>
      <div className={`capteur-4 ${point4State}`}></div>
      <div className={`capteur-5 ${point5State}`}></div>
      <div className={`capteur-6 ${point6State}`}></div>
      <div className={`capteur-7 ${point7State}`}></div>
      <div className={`capteur-8 ${point8State}`}></div>
      <div className={`capteur-9 ${point9State}`}></div>
      <div className={`capteur-10 ${point10State}`}></div>
 
      <Icon  icon="material-symbols:location-on" className="location-icon"  />
      
      </div>
      
    

    )
       
    
}


 



export default Map;