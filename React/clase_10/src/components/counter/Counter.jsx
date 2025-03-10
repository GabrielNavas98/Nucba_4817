import { 
    CounterButtonContainerStyled, 
    CounterContainerStyled,
    CounterSpanStyled } from './CounterStyles'

import Substract from '../substract/Substract';
import Add from '../add/Add';
import Restart from '../restart/Restart';
import { useSelector } from 'react-redux';


const Counter = () => {

    const count = useSelector((state) => state.count)

    return (
        <CounterContainerStyled>
            <CounterButtonContainerStyled>
                <Substract />
                <CounterSpanStyled>{count}</CounterSpanStyled>
                <Add />
            </CounterButtonContainerStyled>
            <Restart />
        </CounterContainerStyled>
    )
}

export default Counter