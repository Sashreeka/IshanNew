import React,{useState} from 'react';
//import "./component/Style/style.css";
import axios from 'axios';
import regImage from "./assets/reg.png";
import Register from './component/Farmer/Register/Register';

export default function App() {

  const [name,setName]=useState("");
  const [telephone,setTelephone]=useState("");
  const [email,setEmail]=useState("");

  const submitRegister= () =>{
    alert(name+" "+telephone)
    axios.post("http://localhost:3001/api/register",{
      name:name,
      telephone:telephone,
      email:email}).then(()=>{
        alert('successfully insert');
      })
  }

  return (
    <div className="container mt-3">
       <div className="row">
       <div className="col-md-5">
        <Register/>

       </div>
       <div className="col-md-7">
        <img
        className="img-fluid w-100"
          src={regImage}
          alt=""
        />

       </div>
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
      
    </div>
  )
}
