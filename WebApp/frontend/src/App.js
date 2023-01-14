import React from 'react'
import Ai from "./Images/ai-lab.png"
function App() {
  return (
    <div className="h-screen w-screen" style={{backgroundImage:`url(${Ai})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",objectFit:"cover"}}>
      <div>
        
      </div>
    </div>
  );
}

export default App;
