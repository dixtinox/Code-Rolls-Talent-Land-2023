import React from 'react'

const DayAchivement = ({ arregloColor }) => {
  return (
    <div style={{ 
        width: "50px", 
        height: "50px", 
        borderRadius: "50%",
        background: `conic-gradient(${arregloColor[0]} 0, ${arregloColor[0]} 120deg, ${arregloColor[1]} 120deg, ${arregloColor[1]} 240deg, ${arregloColor[2]} 240deg)` 
      }}>
      </div>
  )
}

DayAchivement.defaultProps = {
  arregloColor: ["#808080","#808080","#808080"]
}

export default DayAchivement