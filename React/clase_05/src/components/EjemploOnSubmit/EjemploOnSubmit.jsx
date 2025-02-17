import React from 'react'
import { ClickBtn } from '../EjemploUseState/EjemploUseState'

const EjemploOnSubmit = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Formulario enviado')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingresa algo...'/>
        <ClickBtn>Enviar</ClickBtn>
    </form>
  )
}

export default EjemploOnSubmit