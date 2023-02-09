import logo from './logo.svg';
import './App.css';
import Contador from './componentes/contador';
import Boton from './componentes/boton';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { useState} from 'react';


function App() {

  const [numClics,setnumClics] = useState(0);

  const funcionClic = () =>{
    
    setnumClics(numClics + 1);
  }

  const reiniciar = () =>{
    setnumClics(0);
  }


  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img
          className="imagen-contador"
          src={require('./imagenes/freecode.png')}
          alt="Logo-contador" 
        />
      </div>
      <div className='body'>
        <Contador
          numClics= {numClics} 
        />
        <Boton
          funcionClic={funcionClic}
          tipoClic = {true}
          texto = 'clic'
        />
        <Boton
          funcionClic={reiniciar}
          tipoClic = {false}
          texto = 'reiniciar'
        />
      </div>



    </div>
  );
}

export default App;
