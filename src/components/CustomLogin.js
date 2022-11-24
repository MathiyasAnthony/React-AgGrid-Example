import { useState } from "react"
import { Navigate } from "react-router-dom"
import "./CustomLogin.scss"
import axios from "axios"

const EntryPage = (props) => {
   const [currentView, setCurrentView] = useState("logIn")
   const [token, setToken] = useState();
   const [loginSuccess, SetLoginSuccess] = useState(false);
   const [userName, setUserName] = useState('')
  
  const getToken = () => {
    const apiUrl = "http://localhost:5238/api/User/getToken?userName=Mathiyas"
    axios.get(apiUrl,
     {
 
     }).then((response) => {
         setToken(response.data)
         localStorage.setItem("userToken", response.data); 
         console.log(response.data)
     })
   }

  const handleLogin = () => {
    getToken()
    setCurrentView("Users")
  }
  
  const LoadCurrentView = () => {
    switch(currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
        break
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button onClick={() =>handleLogin()}>Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
        )
        break
      case "PWReset":
        return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
       
       )
       case "Users":
        return(
          <Navigate to="/users"></Navigate>
        )
      default:
        break
    }
  }
    return (
      <section id="entry-page">
        
        {loginSuccess == false ?
        LoadCurrentView() : <Navigate to="/users"></Navigate>}
      </section>
    )
}
export default EntryPage;