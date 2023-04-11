import React from 'react'

const DayAchivement = ({ colorA, colorB, colorC }) => {
  return (
    <div style={{ 
        width: "50px", 
        height: "50px", 
        borderRadius: "50%",
        background: `conic-gradient(${colorA} 0, ${colorA} 120deg, ${colorB} 120deg, ${colorB} 240deg, ${colorC} 240deg)` 
      }}>
      </div>
  )
}

DayAchivement.defaultProps = {
    colorA:"#808080",
    colorB:"#808080",
    colorC:"#808080", 
}

export default DayAchivement