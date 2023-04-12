import React from 'react'
import Nutri from '../components-Nutri/Nutri'

const mensaje = "Soy una buena persona"

const Usuario = () => {

  return (
    <div>
        <Nutri descripcion = {mensaje}/>
    </div>
  )
}
export default Usuario;