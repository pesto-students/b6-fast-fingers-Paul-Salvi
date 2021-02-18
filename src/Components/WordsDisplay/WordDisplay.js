import React from 'react';
import './WordDisplay.css'

function WordsDisplay({ word, typedText }) {
   const formattedWord = word.split('').map((letter, index) => <div className={typedText && typedText[index] ? letter === typedText[index] ? "correct" : "incorrect" : ""}> {letter}</div>)
   return (
      <div>
         <div className="wordDisplay">
            {formattedWord}
         </div>
      </div>
   );
}


export default WordsDisplay;