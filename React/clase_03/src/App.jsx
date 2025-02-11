import AppWrapper from "./components/AppWrapper/AppWrapper"
import AcordionMaterial from "./components/EjemploMaterial/Acordion"
import MaterialComponets from "./components/EjemploMaterial/MaterialComponets"
import EjemploModules from "./components/EjemploModules/EjemploModules"
import EjemploModules2 from "./components/EjemploModules2/EjemploModules2"
import EjemploObjeto from "./components/EjemploObjeto/EjemploObjeto"
import EjemploEnLinea from "./components/EjemplosEnLinea/EjemploEnLinea"
import EjemploStyled from "./components/EjemploStyled/EjemploStyled"
import { GlobalStyle } from "./styles/GlobalStyles"

function App() {

  return (
    <>
    <AppWrapper>
      <h1>Hola!!</h1>
      <EjemploEnLinea/>
      <EjemploObjeto/>
      <EjemploModules/>
      <EjemploModules2/>
      <EjemploStyled/>

      <MaterialComponets/>
      <AcordionMaterial/>
    </AppWrapper>

    <GlobalStyle/>
    </>
  )
}

export default App
