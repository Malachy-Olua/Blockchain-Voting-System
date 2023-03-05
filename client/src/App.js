import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/Pages/Layout";
import Home from "./Pages/Home";
import './App.css';

import styled from "styled-components";
import Allowed from "./Pages/RegisterCandidate";
import Elections from "./Pages/Elections";
import Login from "./Pages/Login";

import Voting from "./Pages/Voting";
import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />} />
        
          <Route path="/" element={<Layout/>}>
            <Route path="/RegisterCandidate" element={<Allowed />} />
            <Route path="/Elections" element={<Elections />} />
            <Route path="/Voting" element={<Voting />} />
          </Route>  
        
      </Routes>
    </BrowserRouter>
  );
}

const Div = styled.div`


`