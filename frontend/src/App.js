import React from 'react';
import "./component/Style/style.css"

export default function App() {
  return (
    <div className="App">
    <h1>Registration Form</h1>
    <div className="form">
    <label>Enter Name</label>
    <input type="text" name="name" placeholder="ishan reshmika"/>

    <label>Enter Telephone</label>
    <input type="text" name="telephone" placeholder="0768610084"/>

    <label>Enter Email</label>
    <input type="text" name="email" placeholder="ishan@gmail.com"/>

    <button>Submit</button>


    </div>
      
    </div>
  )
}
