import React, { useEffect, useState, useRef } from 'react'
import { ClickBtn } from '../EjemploUseState/EjemploUseState'

const Desafio = () => {
    const [counter, setCounter] = useState(0)
    let id = useRef(null)

    useEffect(() => {
        console.log('monto componente')
        id.current = setInterval(() => {
            setCounter((prevState) => prevState + 1) 
        }, 1000)
        // console.log(id.current)
        return () => clearInterval(id.current)
    }, [])

    const handleStopIncrement = () => {
        clearInterval(id.current)
        console.log(id.current)
    }
    
    return (
        <>
            <span>{counter}</span>
            <ClickBtn onClick={handleStopIncrement}>Stop</ClickBtn>
        </>
    )
}

export default Desafio