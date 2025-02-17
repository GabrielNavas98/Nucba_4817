import React, { useEffect, useState } from 'react'
import { ClickBtn } from '../EjemploUseState/EjemploUseState'

const EjemploUseEffect = () => {

    
    const [click, setClick] = useState(false)

    console.log('siempre estoy')
    
    useEffect(() => {
        console.log('solo en fase de montaje')
    }, [])

    useEffect(() => {
        console.log('El estado cambia')
    }, [click])


    return (
        <div>
            <span>
                {
                    click ? 'true' : 'false'
                }
            </span>
            <ClickBtn onClick={() => setClick(!click)}>
                Click
            </ClickBtn>
        </div>
    )
}

export default EjemploUseEffect