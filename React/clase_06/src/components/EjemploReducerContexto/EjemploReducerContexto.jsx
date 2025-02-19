import React, { useContext, useState } from 'react'
import { Contexto } from '../../context/MiContexto'
import { ReducerBtn } from '../EjemploUseReducer/ejemploUseReducer'

const EjemploReducerContexto = () => {
  
    const { state, dispatch }= useContext(Contexto)
    const [name, setName] = useState('')

    const handleChange = (e) => {        
        setName(e.target.value)
    }
  
    return (
    <div>
        <h2>{state.data}</h2>
        {
            state.isError && <p>Hay un error</p>
        }
        {
            state.isLoading && <p>Cargando...</p>
        }
        <input type="text" onChange={handleChange}/>
        <ReducerBtn onClick={() => dispatch({type: 'isError'})}>Trigger Error</ReducerBtn>
        <ReducerBtn onClick={() => dispatch({type: 'isLoading'})}>Trigger Loading</ReducerBtn>
        <ReducerBtn onClick={() => dispatch({type: 'dataRecibida', payload: name})}>Trigger Data</ReducerBtn>
    </div>
  )
}

export default EjemploReducerContexto