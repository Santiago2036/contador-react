import React from "react";
import './contador.css';


function Contador({numClics}){

  return(

    <div className="contador-principal">
      <div className="contador">
        {numClics}
      </div>
    </div>
  );

}

export default Contador;