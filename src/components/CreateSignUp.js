import Signup from "./Signup";
import {useState} from "react";
import Axios from "axios";
function CreateSignUp(){
    const [arr,setArr]=useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }
    const handleSubmit=()=>{
        const data={name:arr[0],email:arr[1],password:arr[2]};
        Axios.post("https://backend-deploy-1.onrender.com/registerRoute/register",data)
        .then((res)=>{
            if(res.status===200)
              alert("register succesfully");
            else
              Promise.reject();
        })
        .catch((err)=>alert(err));
    }
  return(
    <form onSubmit={handleSubmit}>
      <Signup getState={getState}/>
    </form>
   )
}
export default CreateSignUp;
