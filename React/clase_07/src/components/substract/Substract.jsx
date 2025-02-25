import React from 'react'
import { CounterButtonContainerStyled, CounterButtonStyled } from '../CounterStyles'
import { PiNumberCircleFive } from 'react-icons/pi'
import { CiCircleMinus } from 'react-icons/ci'
import { TYPES } from '../../actionsTypes/counterTypes'
import { LuDivide } from 'react-icons/lu'
import { useCountContext } from '../../context/CountContext'

const Substract = () => {

        const {dispatch} = useCountContext() 
        const handleDecrement = () => dispatch({ type: TYPES.DECREMENT})
        const handleDivide = () => dispatch({type: TYPES.DIVIDE})
        const handleDecrement_5 = () => dispatch({type: TYPES.DECREMENT_5})
        
    return (
        <CounterButtonContainerStyled>
            <CounterButtonStyled left onClick={handleDivide}>
                <LuDivide size={'32px'} color='white' />
            </CounterButtonStyled>
            <CounterButtonStyled left onClick={handleDecrement_5}>
                <p>
                    -<PiNumberCircleFive size={'32px'} color='white' />
                </p>
            </CounterButtonStyled>
            <CounterButtonStyled left onClick={handleDecrement}>
                <CiCircleMinus size={'32px'} color='white' />
            </CounterButtonStyled>
        </CounterButtonContainerStyled>
    )
}

export default Substract