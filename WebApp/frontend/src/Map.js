
import Ai from "./Images/ai-lab.png"
import { useEffect, useState } from 'react';

import { Icon } from "@iconify/react"




const Map = () => {
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
  
  const [data, setdata] = useState({
    x: 0,
    y:0

});

// Using useEffect for single rendering
useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setdata({
                x: data.x,
                y: data.y,
                
            });

            const range = 300;
            const point1 = document.querySelector(".capteur-1");
            const point1Position = point1.getBoundingClientRect();
            if (data.x > (point1Position.left - 80) && data.x < (point1Position.right + 100) && data.y > (point1Position.top - range) && data.y < (point1Position.bottom + range)) {
              setPoint1State("highlighted");
            } else {
              setPoint1State("default");
            }
        
            const point2 = document.querySelector(".capteur-2");
            const point2Position = point2.getBoundingClientRect();
            if (data.x > (point2Position.left +10)  && data.y > (point2Position.top - 70) && data.y < (point2Position.bottom + 70)) {
              setPoint2State("highlighted");
            } else {
              setPoint2State("default");
            }
        
            const point3 = document.querySelector(".capteur-3");
            const point3Position = point3.getBoundingClientRect();
            if (data.x > (point3Position.left - 120) && data.x < (point3Position.right + 5) && data.y > (point3Position.top -10) && data.y < (point3Position.bottom +range )) {
              setPoint3State("highlighted");
            } else {
              setPoint3State("default");
            }
        
            const point4 = document.querySelector(".capteur-4");
            const point4Position = point4.getBoundingClientRect();
            if (data.x > (point4Position.left - 140) && data.x < (point4Position.right + 0) && data.y > (point4Position.top - 300) && data.y < (point4Position.bottom + range)) {
              setPoint4State("highlighted");
            } else {
              setPoint4State("default");
            }
        
            const point5 = document.querySelector(".capteur-5");
            const point5Position = point5.getBoundingClientRect();
            if (data.x > (point5Position.left - 80) && data.x < (point5Position.right + 100) && data.y > (point5Position.top - range) && data.y < (point5Position.bottom + range)) {
              setPoint5State("highlighted");
            } else {
              setPoint5State("default");
            }
        
            const point6 = document.querySelector(".capteur-6");
            const point6Position = point6.getBoundingClientRect();
            if (data.x > (point6Position.left)  && data.x < (point6Position.right+  350) && data.y > (point6Position.top - 70) && data.y < (point6Position.bottom + 70)) {
              setPoint6State("highlighted");
            } else {
              setPoint6State("default");
            }
        
            const point7 = document.querySelector(".capteur-7");
            const point7Position = point7.getBoundingClientRect();
            if (data.x > (point7Position.left - 210) && data.x < (point7Position.right +160) && data.y > (point7Position.top - 100) && data.y < (point7Position.bottom + 10)) {
              setPoint7State("highlighted");
            } else {
              setPoint7State("default");
            }
        
            const point8 = document.querySelector(".capteur-8");
            const point8Position = point8.getBoundingClientRect();
            if (data.x > (point8Position.left - 270) && data.x < (point8Position.right + 65) && data.y > (point8Position.top - 80) && data.y < (point8Position.bottom + 100)) {
              setPoint8State("highlighted");
            } else {
              setPoint8State("default");
            }
        
            const point9 = document.querySelector(".capteur-9");
            const point9Position = point9.getBoundingClientRect();
            if (data.x > (point9Position.left+60) && data.x < (point9Position.right +200) && data.y < (point9Position.top +900) && data.y < (point9Position.bottom + 80)) {
              setPoint9State("highlighted");
            } else {
              setPoint9State("default");
            }
        
            const point10 = document.querySelector(".capteur-10");
            const point10Position = point10.getBoundingClientRect();
            if (data.x > (point10Position.left-10) && data.x < (point10Position.right +210) && data.y > (point10Position.top -30) && data.y < (point10Position.bottom + 190)) {
              setPoint10State("highlighted");
            } else {
              setPoint10State("default");
            }
        

            
        })
    );
}, []);
    return(
    <div  className="map" style={{backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",objectFit:"cover"}}>
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

      <Icon  style={{ position: 'absolute', left:data.x, top: data.y}} icon="material-symbols:location-on" className="location-icon"  />

      </div>
      
    

    )
    
}


 



export default Map;