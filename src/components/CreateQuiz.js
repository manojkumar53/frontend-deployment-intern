import { useState } from "react";
import QuizForm from "./QuizForm";
function CreateQuiz()
{
const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]
const getState = (childData) => {
//childData=[Raj,raj@gmail.com,1]
setArr(childData);
}
return (
<form>
<QuizForm getState={getState}/>
</form>
)
}
export default CreateQuiz;