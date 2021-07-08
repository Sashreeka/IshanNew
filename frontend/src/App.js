import React,{useState} from 'react';
//import "./component/Style/style.css";
import axios from 'axios';
import regImage from "./assets/a.png";
import Register from './component/Farmer/Register/Register';

export default function App() {

  const [telephone,setTelephone]=useState('')
  const [password,setPassword]=useState('')

  const [loginStatus,setLoginStatus]=useState('');

  // const [name,setName]=useState("");
  // const [telephone,setTelephone]=useState("");
  // const [email,setEmail]=useState("");

  // const submitRegister= () =>{
  //   alert(name+" "+telephone)
  //   axios.post("http://localhost:3001/api/register",{
  //     name:name,
  //     telephone:telephone,
  //     email:email}).then(()=>{
  //       alert('successfully insert');
  //     })
  // }

  const loginView =() =>{
    axios.post('http://localhost:3001/api/login',{
      telephone : telephone,
      password: password
    }).then(
      (response)=>{
       if(response.data.message)
       {
         setLoginStatus(response.data.message);
       }
       else{
        setLoginStatus(response.data[0].telephone);
       // response.sendFile(__dirname,'./component/Farmer/Home')
       }
       
      }
    )
  }

  return (
    <div className="container mt-3">
       <div className="row">
       <div className="col-md-5">
        <Register/>

       </div>
       <div className="col-md-7 my-auto">
        <img
        className="img-fluid w-100"
          src={regImage}
          alt=""
        />

       </div>
        {/* <div className="form">
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
        /> */}

        


        {/* </div> */}
        {/* <button 
        onClick={submitRegister}
        >Submit</button> */}

        <h1>Login</h1>

        <input
          placeholder="Enter telephone"
          name="telephone"
          type='text'
          onChange={(e)=>{
            setTelephone(e.target.value)
          }}
        />
        <input
          placeholder="Enter password"
          name="password"
          type="password"
          style={{marginTop:30}}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
        <button
        onClick={loginView}
        style={{marginTop:30}}
        >Login</button>
      </div>  

      <h1>{loginStatus}</h1>
      
    </div>
  )
}
