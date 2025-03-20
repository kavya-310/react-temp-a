import { useState } from "react"
export default function App3(){
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[msg,setMsg]=useState();
    const handleSubmit=()=>{
        if(email=="kavya@gmail.com" && password=="1234"){
            setMsg("Welcome kavs")
        }else{
            setMsg("Access denied")
        }
    }
    return(
        <div>
            <h3>This is App3</h3>
            {msg}
            <p><input type="text" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}></input></p>
            <p><input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input></p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}