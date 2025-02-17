import React, { useRef } from 'react'
import { ClickBtn } from '../EjemploUseState/EjemploUseState'

const EjemploUseRef = () => {

    const title = useRef()

    const handleClick = () => {
        console.log(title)
        console.log(title.current)

        title.current.style.color = 'crimson'
    }


  return (
    <>
        <h2 ref={title}>Hola como estan?</h2>
        <ClickBtn onClick={handleClick}>Boton</ClickBtn>
    </>
  )
}

export default EjemploUseRef