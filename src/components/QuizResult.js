// import React from 'react'

// function QuizResult(props) {
//   return (
//     <>
//     <div className='show-score'>
//         Your Score:{props.score}<br/>
//         Total Score:{props.totalScore}
//     </div>
//     <button id="next-button" onClick={props.tryAgain}>Try Again</button>
//     </>
//   )
// }

// export default QuizResult
import React from 'react'
import {Link} from "react-router-dom";
 function QuizResult(props){
  return(
    <>
    <div className="show-score">
      Your Score:{props.score}<br />
      Total Score:{props.totalScore}
    </div>

   <button id="next-button" onClick={props.tryAgain}>Try Again</button>
        
   <div>
   
   </div>
   </>
  
   
    
  )
}
export default QuizResult;