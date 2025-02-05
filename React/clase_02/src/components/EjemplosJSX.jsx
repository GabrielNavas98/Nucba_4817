import React from "react";

export const EjemploSinJSX = () => {
    return React.createElement(
        'button',
        {id: 'botonSinJSX'},
        'Clickeame'
    )
}

export const EjemploConJSX = () => {
    return <button id='btnConJSX'>Clickeame</button>
}

