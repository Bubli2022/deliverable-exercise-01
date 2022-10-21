import React, { useState } from "react"
import quotes from "../quotes.json"

const QuoteBox = () => {
   console.log(quotes)

   const randomIndex = Math.floor(Math.random() * quotes.length)

   const [index, setIndex] = useState(randomIndex)

   const changeQuotes = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length)
      setIndex(randomIndex)
   }
   const colors = [
      "#00B62F",
      "#00A462",
      "#008F7D",
      "#007784",
      "#005F76",
      "#2F4858",
   ]
   const randomColor = Math.floor(Math.random() * colors.length)
   document.body.style = `background: ${colors[randomColor]}`
   return (
      <div className="card" style={{ color: colors[randomColor] }}>
         <i class="fa-solid fa-quote-left"></i>
         <p>
            {quotes[index].quote}
            <h4>{quotes[index].author}</h4>
         </p>

         <button onClick={changeQuotes} style={{ color: colors[randomColor] }}>
            <i class="fa-solid fa-circle-chevron-right"></i>
         </button>
      </div>
   )
}

export default QuoteBox
