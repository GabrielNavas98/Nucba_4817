import React, { useState } from 'react'
import styled from 'styled-components'

const InputForm = styled.input`
    height:2rem;
    width: 100%;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 1px solid #4747ff;
    color: white;
    margin-top: 2rem;
`

const EjemploOnChange = () => {

    const [name, setName] = useState('Homero Simpson')

    const handleChange = (event) => {
        const inputValue = event.target.value
        console.log(inputValue)
        setName(inputValue)
    }
    return (
        <div>
            <p>Nombre: {name}</p>
            <InputForm
                placeholder='Ingresa tu nombre'
                onChange={handleChange}
            />
        </div>
    )
}

export default EjemploOnChange