

import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function QuizListRow(props) {
  const {_id, question, option1, option2, option3, option4,answer } = props.obj;

 //https://crud-deployment-backend-3-hv18.onrender.com
  const handleDelete = (e) => {
    e.preventDefault();
    Axios.delete("https://backend-deploy-1.onrender.com/quizRoute/delete-quiz/"+_id)
      .then((res) => {
        if (res.status === 200) {
          alert("Record deleted successfully");
          // Handle deletion success if needed
        } else {
          return Promise.reject("Failed to delete");
        }
      })
      .catch((err) => alert(err));
  };

 
  

  return (
    
    <div >
      <div className="quiz-form">
        <h3>qustion:{question}</h3>
        <form>
     <div>
       
    <label>
     <p> option1   :  {option1}</p>
           {/* <input
             type="radio"
              value={option1} 
            />
            {option1} */}
           </label>
      </div>
      <div>
      <label>
       <p> option2   :  {option2}</p>
            {/* <input
              type="radio"
              value={option2}
             
            />
            {option2} */}
           </label>
      </div>
      <div>
    <label>
      <p>option3   :  {option3}</p>
            {/* <input
              type="radio"
              value={option3}
             
            />
            {option3} */}
           </label>
           
      </div>
      <div>
      <label>
       <p> option4   :  {option4}</p>
            {/* <input
              type="radio"
              value={option4}
              
            />
            {option4} */}
          </label>
      </div>
      <div>
      <label>
       <p> answer     :  {answer} </p>
            {/* <input
              type="radio"
              value={answer}
             
            /> */}
            {/* {answer} */}
          </label>
      </div>
      </form>
    </div>
      <div>
        {/* <p>Score: {score}</p> */}
        <Link class="text-decoration-none text-light me-4" to={`/edit-quiz/${_id}`} >
          <button className="btn btn-success"  style={{margin:"5px"}}>
            Edit
          </button>
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        
      </div>
    
    </div>
  );
}

export default QuizListRow;

