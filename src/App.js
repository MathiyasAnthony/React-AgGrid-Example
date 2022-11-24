//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './login'
import axios from 'axios';
import JLogin from './components/JLogin/JLogin';
import {BrowserRouter, Routes, Route, Link, Router} from "react-router-dom"
import TableData from './components/TableData/TableData';
import EntryPage from './components/CustomLogin';
import PrivateRoute from './components/Auth/PrivateRoute';
import Dashboard from './components/Dashboard/Dashbord';
import Unauthorized from './components/Unauthorized/Unauthorized';
import GridData from './components/GridData/GridData';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/users">User Details</Link>
          </li>
          <li>
            <Link to="/grid">Ag Grid Example</Link>
          </li>
        </ul>
      </div>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<EntryPage />}></Route>
          <Route path="/unauthorized" element={<Unauthorized />}></Route>
          <Route path="/users" element={<TableData></TableData>}></Route>
          <Route path="/grid" element={<GridData></GridData>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
