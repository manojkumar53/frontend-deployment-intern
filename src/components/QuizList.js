import Axios from "axios";
import {useEffect,useState} from "react";
import QuizListRow from "./QuizListRow";
import {Link} from "react-router-dom";

function QuizList(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("https://backend-deploy-1.onrender.com/quizRoute/")
        .then((res)=>{
            if(res.status===200)
              setArr(res.data);
            else
             Promise.reject();
        })
        .catch((err)=>console.log(err));
    })
    const ListItems=()=>{
        return arr.map((val,ind)=>{
            return <QuizListRow obj={val} />
        })
    }
    
    return(
       
        <div>
            <nav className="navbar bg-info">
        <Link to="/" className="navbar-brand mx-3">Quiz List</Link>
        <div className="nav">
         
          <Link to="/quizzes" className="nav-link">Logout</Link>
        </div>
      </nav>
            <div class="quiz">
            <form style={{width:"400px",height:"100%",margin:"0 auto",padding:"20px"}}>
               {ListItems()}
               {/* <button>submit</button> */}
            </form>
           
        </div>
        </div>
    
    )
}
export default QuizList;