import React from "react";
import './boton.css'


function Boton({texto, tipoClic , funcionClic}){

    return(
      <button 
        className = {tipoClic ? 'boton-clic' : 'boton-reiniciar'} 
        onClick={funcionClic}>
        {texto}
      </button>

    );
}

export default Boton;