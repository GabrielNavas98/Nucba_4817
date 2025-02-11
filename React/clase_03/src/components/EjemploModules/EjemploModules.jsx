import estilos from './EjemploModules.module.css'

const EjemploModules = () => {
  return (
    <div className={estilos.contendorModule}>
        <p className={estilos.parrafoModule}>
            Ejemplo con estilos module
        </p>
    </div>
  )
}

export default EjemploModules