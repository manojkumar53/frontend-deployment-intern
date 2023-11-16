import React from 'react'
import CreateQuiz from './CreateQuiz';
import {Link} from "react-router-dom";
function Quizzes(){
    return(
        <div>
            <CreateQuiz />
        <Link to="/quizzes">quiz</Link>
        </div>
    )
}
export default Quizzes;