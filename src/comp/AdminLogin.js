import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
import SignUp from "./signup";
import DashbOard from "./dashboard";
 import {Link} from 'react-router-dom'
const AdminLogin=()=>{
    const navigate=useNavigate()
    const [fname,setUsername]=useState('')
    const [email,setEmail]= useState('')
    const [pass,setPass]=useState('')
    const handleChange=(e,key)=>{
        if(key==='fname')
        setUsername(e.target.value)
        if(key==='pass')
        setPass(e.target.value)
        if(key==='email')
        setEmail(e.target.value)
    }
   const  handleLogin=(e)=>{
        e.preventDefault()
        if(fname==='admin' && pass==='admin') 
         return navigate('/AdminDash')
        if(!fname||!pass)
        return alert("Please enter all the fields")
        
       else alert('Invalid Username and Password')

    }
    return(
        <div>
            <div className="nav">
                <Link to='/SignUp' className="nav-link" element={<SignUp></SignUp>} style={{textDecoration:"none",color:"wheat"}}><h5>SignUp</h5></Link>
               
            </div>
        <div className="overlay2">
    <div className="form ">
        <h1>Please Login Here!!</h1>
        <form>
            <div className="ud">
            <label>UserName</label>
            <input type='text' placeholder='Enter the UserName' onChange={(e)=>handleChange(e,'fname')}></input>
            </div>
            <div className="pass"><label>Password</label><input type='password' placeholder='Enter the Password' onChange={(e)=>handleChange(e,'pass')}></input></div>
            <div className="btn"><button onClick={(e)=>handleLogin(e)}>Login</button></div>
        </form>
    </div>
    </div>
    </div>
    )
}


export default AdminLogin