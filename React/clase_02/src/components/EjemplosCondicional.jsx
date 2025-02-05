
export const EjemplosCondicional = () => {

    const usuario = {
        nombre: 'Gabriel',
        rol: 'user',
        id: 256
    }


    return (
        <>
            <h3>Perfil del usuario</h3>
            {
                usuario.id ? (
                    <>
                        <p>Nombre: {usuario.nombre}</p>
                        <p>Rol: {usuario.rol}</p>
                    </>
                ) : (
                    <p>Inicie sesión para ver su perfil</p>
                )
            }
        </>
    )
}
