import React from 'react'
import { MdRestartAlt } from 'react-icons/md'
import { useCountContext } from '../../context/CountContext'
import { TYPES } from '../../actionsTypes/counterTypes'

export const Restart = () => {
    const { dispatch } = useCountContext()
    const handleRestart = () => dispatch({ type: TYPES.RESTART })
    return (
        <MdRestartAlt size={'32px'} color='red' onClick={handleRestart} />
    )
}
