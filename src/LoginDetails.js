import './App.css';
import React from 'react';
function LoginDetails(props) {
  props.sendData('Data from Child')
  return (
    <div></div>
  );
}

export default LoginDetails;
