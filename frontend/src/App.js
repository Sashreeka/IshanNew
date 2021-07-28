import React,{useState} from 'react';
//import "./component/Style/style.css";
import axios from 'axios';
import regImage from "./assets/a.png";
import Register from './component/Farmer/Register/Register';

export default function App() {

  const [telephone,setTelephone]=useState('')
  const [password,setPassword]=useState('')

  const [loginStatus,setLoginStatus]=useState('');


  const loginView =() =>{
    axios.post('http://localhost:3001/api/login',{
      telephone : telephone,
      password: password
    }).then(
      (response)=>{

        console.log(response.data.token);

        localStorage.setItem('login',JSON.stringify({
          login:true,
          token: response.data.token
        }))
     
       
      }
    ).catch(error=>{
      console.log(error);
    })
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

      {/* <h1>{loginStatus}</h1> */}
      
    </div>
  )
}
