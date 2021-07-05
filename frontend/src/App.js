import React,{useState} from 'react';
import "./component/Style/style.css";
import axios from 'axios';

export default function App() {

  const [name,setName]=useState("");
  const [telephone,setTelephone]=useState("");
  const [email,setEmail]=useState("");

  const submitRegister= () =>{
    alert(name+" "+telephone)
    axios.post("http://localhost:3001/api/regiter",{
      name:name,
      telephone:telephone,
      email:email}).then(()=>{
        alert('successfully insert');
      })
  }

  return (
    <div className="App">
    <h1>Registration Form</h1>
    <div className="form">
    <label>Enter Name</label>
    <input 
    type="text" 
    name="name" 
    placeholder="ishan reshmika"
    onChange={(e)=>{
      setName(e.target.value);
    }}  
    />

    <label>Enter Telephone</label>
    <input 
    type="text" 
    name="telephone" 
    placeholder="0768610084" 
    onChange={(e)=>{
      setTelephone(e.target.value);  
    }}
    />

    <label>Enter Email</label>
    <input 
    type="text" 
    name="email" 
    placeholder="ishan@gmail.com"
    onChange={(e)=>{
      setEmail(e.target.value);
    }}  
    />

    <button 
    onClick={submitRegister}
    >Submit</button>


    </div>
      
    </div>
  )
}
