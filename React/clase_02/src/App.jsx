import {EjemploConJSX, EjemploSinJSX} from './components/EjemplosJSX'
import './App.css'
import { EjemploClase, EjemploFuncional } from './components/EjemplosTiposComponentes'
import SaludoPorProps from './components/EjemplosProps'
import { EjemplosCondicional } from './components/EjemplosCondicional'
import { EjemplosRenderDinamico } from './components/EjemplosRenderDinamico'



function App() {

  return(
    <> 
      <EjemploSinJSX />
      <EjemploConJSX />
      <EjemploClase/>
      <EjemploFuncional/>
      <SaludoPorProps
        nombre='Pepe'
        edad={35}
      />
      <EjemplosCondicional/>
      <EjemplosRenderDinamico/>
    </>
    )
}

export default App
