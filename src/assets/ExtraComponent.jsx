import React from "react"

const ExtraComponent = ({ colors, randomColor, changeQuotes }) => {
   return (
      <div>
         <button onClick={changeQuotes} style={{ color: colors[randomColor] }}>
            <i className="fa-solid fa-circle-chevron-right"></i>
         </button>
      </div>
   )
}

export default ExtraComponent
