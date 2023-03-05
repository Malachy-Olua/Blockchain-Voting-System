import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";

import Bar from "../components/Bar";
import { FiLogOut } from "react-icons/fi";
import { VotingContext } from "../context/VotersContext";
import { Outlet, Navigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

  const Input = ({placeholder, type, value,  adminAddress}) =>(
    <input placeholder={placeholder} type={type} step='0.0001' value={value} 
    onChange={ adminAddress} 
    className="payment"
    />
  );

const Voting = () => {
  const { handleChange,isLoggedIn,transactions} = useContext(VotingContext);
  

  return (
      <Div>
        <Bar/>
        <Dashboard />
      </Div>
        

    
  );

}

export default Voting;

const Div = styled.div`
  background:#262626;
  header .header{
    background-color: #fff;
    height: 45px;
  }
  header a img{
    width: 134px;
  margin-top: 4px;
  }
  ._p{
    margin-top:10px;
  }
  .payment{

    text-align:center;
  }
  .login-page {

    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }

  .bg{
    background: url(https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center
  }
  .login-page .form .login{
    margin-top: -31px;
    margin-bottom: 26px;
  }
  .form {

    position: relative;
    z-index: 1;
    background: #737373;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    border-radius:8px;
  }
  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
  
    background-image: linear-gradient(#999999);
    
    width: 100%;
    border: 0;
    padding: 15px;
    color: black;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: #4CAF50;
    text-decoration: none;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }

  body {
    // background-color: #328f8a;
    background-image: linear-gradient(45deg,#328f8a,#08ac4b);
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100%;
  }  

    justify-content:center;
    align-items:center;
    position: relative;
    .log{
      width:300px;
    }
    .logout {
      padding: 0.3rem 1rem;

      height:400px;
      border-radius: 0.6rem;
      &:hover {
        background-color: #da0037;
      }  
    }
    .logout2{

    }
  @media screen and (max-width: 400px) { 
    .form {

      position: relative;
      z-index: 1;
      background: #737373;
      max-width: 300px;
      margin: 0 auto 100px;
      padding: 45px;
      text-align: center;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
      border-radius:8px;
    }
  } 
`;
