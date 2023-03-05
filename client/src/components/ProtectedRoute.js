import React, { useState, useEffect, useContext } from "react";
import { Outlet, Navigate } from 'react-router-dom';
import { VotingContext } from "../context/VotersContext";

const useAuth=()=>{
  const user = localStorage.getItem('true')
  if(user){
    return true
  }else{
    return false
  }
}

const ProtectedRoute = () => {


  const auth = useAuth()
    
  return(
    
    auth? <Outlet/>: <Navigate to="/Login"/>

  );
}

export default ProtectedRoute;