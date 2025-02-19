import React, { act, useReducer } from 'react'
import styled from 'styled-components'

export const ReducerBtn = styled.button`
    padding: 1.5rem 4rem;
    background-color: #4747ff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`

const EjemploUseReducer = () => {

  const initialValue = 'white'

  const reducer = (state, action) => {
    switch (action.type) {
      case 'rojo':
        return '#e63946'
      case 'verde':
          return '#09ec2faa'
      case 'azul':
        return '#4747ff'
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
      <h2 style={{ color: state }}>Soy un título</h2>
      <ReducerBtn onClick={() => dispatch({type: 'rojo'})}>Rojo</ReducerBtn>
      <ReducerBtn onClick={() => dispatch({type: 'verde'})}>Verde</ReducerBtn>
      <ReducerBtn onClick={() => dispatch({type: 'azul'})}>Azul</ReducerBtn>
    </div>
  )
}

export default EjemploUseReducer