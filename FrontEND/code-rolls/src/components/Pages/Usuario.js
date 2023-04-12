import React from 'react'
import Nutri from '../components-Nutri/Nutri'

const mensaje = "Soy una buena persona"

const Usuario = () => {

  return (
    <div>
        <Nutri descripcion = {mensaje} imagen = {0} variant="flat" class="nutri--containerCircular"/>
    </div>
  )
}
export default Usuario;