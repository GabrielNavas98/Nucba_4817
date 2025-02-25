import React, { useReducer, useState } from 'react'
import { CounterButtonContainerStyled, CounterButtonStyled, CounterContainerStyled, CounterspanStyled } from './CounterStyles'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { PiNumberCircleFive } from "react-icons/pi";
import { LuDivide } from "react-icons/lu";
import { TbMultiplier2X } from "react-icons/tb";
import { MdRestartAlt } from "react-icons/md";

import { counterInitialstate, countReducer } from '../reducer/countReducer';
import { TYPES } from '../actionsTypes/counterTypes';
import Substract from './substract/Substract';
import Add from './add/Add';
import { useCountContext } from '../context/CountContext';
import { Restart } from './restart/Restart';


const Counter = () => {
    //USE STATE
    // const [count, setCount] = useState(0)

    // const [state, dispatch] = useReducer(countReducer, counterInitialstate)
   const {state} = useCountContext()

    return (
        <CounterContainerStyled>
            <Substract/>
            <CounterspanStyled>{state.count}</CounterspanStyled>        
            <Add/>    
            <Restart/>
        </CounterContainerStyled>
    )
}

export default Counter