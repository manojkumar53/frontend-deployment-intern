import { useState } from "react";
function QuizForm(props)
{
const [question,setQuestion] = useState("");
const [option1,setoption1] = useState("");
const [option2,setoption2] = useState("");
const [option3,setoption3] = useState("");
const [option4,setoption4] = useState("");
const arr = [question,option1,option2,option3,option4]; //[Raj,raj@gmail.com,1]
const handleClick = () =>{
props.getState(arr);
}
return(
<div style={{maxWidth:"40%",margin:"0px auto"}}>
<input onChange={(event)=>setQuestion(event.target.value)}
class="form-control my-3" placeholder="Enter your question" />
<input onChange={(event)=>setoption1(event.target.value)}
class="form-control my-3" placeholder="Enter your option1" />
<input onChange={(event)=>setoption2(event.target.value)}
class="form-control my-3" placeholder="Enter your option2" />
<input onChange={(event)=>setoption3(event.target.value)}
class="form-control my-3" placeholder="Enter your option3" />
<input onChange={(event)=>setoption4(event.target.value)}
class="form-control my-3" placeholder="Enter your option4" />
<button onClick={handleClick} class="btn btn-success my-3
d-block mx-auto" type="submit">Submit</button>
</div>
)
}
export default QuizForm;