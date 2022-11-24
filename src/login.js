import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import LoginDetails from './LoginDetails';
function Login(props) {
  const [userName, setUserName]= useState('');
  const [password, setPassword] = useState('')
  const [details, setDetails] = useState();

  useEffect(() => {
  console.log(userName)

  },[userName])

  const hiddenValue = 99

  let data = [
    {
      userName: "Mathiyas",
      password: "1234"

    },
    {
      userName: "Shai",
      password: "123"
    }

  ]

  const onUserNameChange = (event) =>
  {
    setUserName(event.target.value);
    
  }

  const onPasswordChange = (event) =>
  {
    setPassword(event.target.value);
  }

  const getDataFromChild = (d) =>
  {
    debugger;
    setDetails(d)
  }

  return (
    <>
    <div>
      User Name : <input type="text" onChange={onUserNameChange}></input><br/>
      password : <input type="text" onChange={onPasswordChange}></input>
      <p className='bgBlue' style={{marginLeft: '50px'}}>You are logged in as : {props.name}</p>
      <p>Your password is : {details} </p>
    </div>
    <LoginDetails sendData={getDataFromChild}></LoginDetails>
    </>
        
  );
}

export default Login;
