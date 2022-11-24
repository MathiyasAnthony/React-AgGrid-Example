import { Navigate, Route } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const hasJWT = () => {
    let flag = false;
    //check user has JWT token
    //localStorage.getItem("userToken") ? flag = true : flag = false
    return flag
  }
  return (

    hasJWT() ?
          children
          :
          <Navigate to="/unauthorized" />
  )
}

export default PrivateRoute