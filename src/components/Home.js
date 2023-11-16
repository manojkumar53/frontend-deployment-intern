import '../App.css';
import React from 'react'
import {Link} from "react-router-dom";
function Home(){

    return(
        //lessons,quizzes,practice
        <div  >
          <nav class="navbar bg-info">
        <Link to="/" class="navbar-brand mx-3">Language Learning</Link>
        <div class="nav ">
          <Link to="/lessons" class="nav-link">Lessons</Link>
          <Link to="/quizzes" class="nav-link">quizzes</Link>
          <Link to="/practice" class="nav-link">Practice</Link>
          <Link to="/register" class="nav-link">Logout</Link>

        </div>
        </nav>
        </div>



    )
}
export default Home;