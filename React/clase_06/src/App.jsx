import React from 'react'
import GeneralWrapper from './components/GeneralWrapper/GeneralWrapper'
import EjemploUseReducer from './components/EjemploUseReducer/ejemploUseReducer'
import EjemploContexto from './components/EjemploContexto/EjemploContexto'
import EjemploReducerContexto from './components/EjemploReducerContexto/EjemploReducerContexto'

const App = () => {
  return (
    <GeneralWrapper>
      {/* <EjemploUseReducer/> */}
      {/* <EjemploContexto/> */}
      <EjemploReducerContexto/>
    </GeneralWrapper>
  )
}

export default App