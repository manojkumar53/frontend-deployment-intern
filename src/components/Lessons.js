import '../App.css';
import React from 'react';
import {Link} from "react-router-dom";
function Lessons(){
  const backgroundImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oyfxoXJ9JYcTPsljC3490qI-Jr9TGEHPQA&usqp=CAU";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
   
  };

    return(
     <div  style={containerStyle}>
      <div class="d-flex flex-column vh-100">
      {/* <nav class="navbar bg-info">
      <Link to="/" class="navbar-brand mx-3">Language Learning</Link>
     <div class="nav ">
           <Link to="/lessons" class="nav-link">Lessons</Link>
           <Link to="/quizzes" class="nav-link">quizzes</Link>
           <Link to="/practice" class="nav-link">Practice</Link>
           <Link to="/home" class="nav-link">Logout</Link>
      </div>
      </nav> */}
      <div class="d-flex justify-content-center align-items-center ">
        <div>
        <h1>Hii Learners..</h1>
        <div class="mb-4">
        <Link to="/french" className="form-control text-decoration-none">
          French
         </Link>
        </div>
         <div class="mb-4">
         <Link to="/spanish" className="form-control text-decoration-none">
          Spanish
         </Link>
        </div>
        <div class="mb-4">
        <Link to="/german" className="form-control text-decoration-none">
          German
         </Link>
        </div>
       </div>
       </div>
    </div>
     </div>
    )
}
export default Lessons;

