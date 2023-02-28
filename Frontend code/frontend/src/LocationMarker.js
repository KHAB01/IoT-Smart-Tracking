import { useState } from 'react';
import { Icon } from "@iconify/react"


const LocationMarker = ()=> {
    const [point, setPoint] = useState({ x: 50, y: 0 });
    return (
       

        <Icon icon="material-symbols:directions-run" className="location-icon" />
       
    )
}

export default LocationMarker