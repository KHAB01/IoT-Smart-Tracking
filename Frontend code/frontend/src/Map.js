
import Ai from "./Images/ai-lab.png"
import { useEffect, useState } from 'react';

import { Icon } from "@iconify/react"




const Map = () => {

  
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

// Using useEffect for single rendering
useEffect(() => {
  const intervalId = setInterval(() => {
  fetch("/data")
  .then(res => res.json())
  .then(data => {
  setData(data);
  })
  .catch(error => console.error("Error:", error));
  }, 1000);
  
  return () => clearInterval(intervalId);
  }, []);
  
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
  const [point11State, setPoint11State] = useState("default");
  const [point12State, setPoint12State] = useState("default");
  
  useEffect(() => {
  data.forEach(d => {
  switch (d.name) {
  case "capteur_1":
  setPoint1State("highlighted");
  break;
  case "capteur_2":
  setPoint2State("highlighted");
  break;
  case "capteur_3":
  setPoint3State("highlighted");
  break;
  case "capteur_4":
  setPoint4State("highlighted");
  break;
  case "capteur_5":
  setPoint5State("highlighted");
  break;
  case "capteur_6":
  setPoint6State("highlighted");
  break;
  case "capteur_7":
  setPoint7State("highlighted");
  break;
  case "capteur_8":
  setPoint8State("highlighted");
  break;
  case "capteur_9":
  setPoint9State("highlighted");
  break;
  case "capteur_10":
    setPoint10State("highlighted");
    break;
    case "capteur_11":
  setPoint11State("highlighted");
  break;
  case "capteur_12":
    setPoint12State("highlighted");
  break;

  default:
  break;
  }
  setTimeout(() => {
    setPoint1State("default");
    setPoint2State("default");
    setPoint3State("default");
    setPoint4State("default");
    setPoint5State("default");
    setPoint6State("default");
    setPoint7State("default");
    setPoint8State("default");
    setPoint9State("default");
    setPoint10State("default");
    setPoint11State("default");
    setPoint12State("default");
    // ... and so on for other points
  }, 1000);
  });
  }, [data]);

    return(
    <div  className="map" style={{backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",objectFit:"cover"}}>
      <img className="imageback" src={Ai} alt=""></img>
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
      <div className={`capteur-11 ${point11State}`}></div>
      <div className={`capteur-12 ${point12State}`}></div>
      
      {data.map((d, i) => (
          
              <Icon  key={i} style={{ left: d.x, top: d.y }} icon="material-symbols:directions-run" className="location-icon"  />
              
      ))}



      

      </div>
      
    

    )
    
}


 



export default Map;