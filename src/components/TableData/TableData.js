import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/style.css"
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/reducer/userReducer';
function TableData(props) {
  const [data, setData]= useState([]);    
  const apiUrl = "https://reqres.in/api/users?page=2"
  
  debugger;
  const  user = useSelector((state) => state.users)
  const [forecastSuccess, setForecastSuccesss] = useState(true)
  const dispatch = useDispatch()
  
  const getUserDetails = () => {
    debugger;
   //let apiUrl = "http://localhost:5238/WeatherForecast"
   let  apiUrl = "https://reqres.in/api/users?page=2"
   axios.get(apiUrl,
    {
        headers: {'Authorization': localStorage.getItem("userToken")}
    }).then((response) => {
       setData(response.data.data)
       console.log(response.data) 
    })
  }
  
  useEffect(() => {
    getUserDetails()

  },[])

    return (
      (forecastSuccess) &&
        <div>
          <button onClick={()=> {dispatch(setCurrentUser("Mathiyas"))}}> Login</button>
          <p>user logged in as : {user?.userName}</p>
          <table>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                    </tr>
                ))}
            </table>
        </div> 
                  
  );
                
}

export default TableData;
