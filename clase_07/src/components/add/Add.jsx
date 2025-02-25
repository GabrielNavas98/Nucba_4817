import React from 'react'
import { CounterButtonContainerStyled, CounterButtonStyled } from '../CounterStyles'
import { CiCirclePlus } from 'react-icons/ci'
import { PiNumberCircleFive } from 'react-icons/pi'
import { TbMultiplier2X } from 'react-icons/tb'
import { TYPES } from '../../actionsTypes/counterTypes'
import { useCountContext } from '../../context/CountContext'

const Add = () => {

    const {dispatch} = useCountContext()
    
    const handleIncrement = () => dispatch({ type: TYPES.INCREMENT })
    const handleMultiply = () => dispatch({ type: TYPES.MULTIPLY })
    const handleIncrement_5 = () => dispatch({ type: TYPES.INCREMENT_5 })
   
    return (
        <CounterButtonContainerStyled>
            <CounterButtonStyled onClick={handleIncrement}>
                <CiCirclePlus size='32px' color='white' />
            </CounterButtonStyled>
            <CounterButtonStyled onClick={handleIncrement_5}>
                <p>
                    +<PiNumberCircleFive size={'32px'} color='white' />
                </p>
            </CounterButtonStyled>
            <CounterButtonStyled onClick={handleMultiply}>
                <TbMultiplier2X size={'32px'} color='white' />
            </CounterButtonStyled>
        </CounterButtonContainerStyled>
    )
}

export default Add