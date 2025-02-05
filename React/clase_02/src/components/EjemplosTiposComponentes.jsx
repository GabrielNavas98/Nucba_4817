import React from 'react'


export class EjemploClase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            saludo: 'Hola!! soy un componente de clase'
        }
    }
    render() {
        return <h1>{this.state.saludo}</h1>
    }
}




export const EjemploFuncional = () => {
    const saludo = 'Hola! soy un componete funcional'
    return (
        <h1>{saludo}</h1>
    )
}
