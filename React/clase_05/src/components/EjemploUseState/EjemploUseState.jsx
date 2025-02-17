import React, { useState } from 'react'
import styled from 'styled-components'

export const ClickBtn = styled.button`
    width: 200px;
    height: 50px;
    background-color: #4747ff;
    color: white;
    border-radius: 10px;
`

const EjemploUseState = () => {

    const [isToggle, setIsToggle] = useState(true)
    
    const handleClick = () => {
        setIsToggle( !isToggle )
    }

    return (
        <>
            <span>
                {
                    isToggle ? 'Es true' : 'Es false'
                }
            </span>
            <ClickBtn onClick={handleClick}>Click</ClickBtn>
        </>
    )
}

export default EjemploUseState