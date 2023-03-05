import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { VotingContext } from "../context/VotersContext";
import { useNavigate } from 'react-router-dom';


const Elections = () => {

    const navigate = useNavigate();

    const handleClick = (event,param) =>{
    
        event.preventDefault();
    
        localStorage.setItem("election", param);

        navigate('/Voting');
    
    }
    

    const { transactions, handleChange2,loginformData,authorizeVoter} = useContext(VotingContext);
    const names = [];
    for(let i=0; i< transactions.length; i++){
        if(names.includes(transactions[i].electionName)){
            continue;
        }
        names.push(transactions[i].electionName)
    }

  return (
    <Section>
        <div className="box">
           <div className="form">
            {names.map((transaction)=>{
                return(
                    <p className="btn" onClick={event =>handleClick(event,transaction)} style={{color:"red"}}>{transaction}</p>
                )  
            })}
           </div>
        </div>
    </Section>
  )
}

export default Elections;

const Section = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background:#23242a;
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    .box{
        position:relative;
        width:380px;
        height:420px;
        background:#1c1c1c;
        border-radius:8px;
        overflow:hidden;
    }
    .box::before{
        content:"";
        position:absolute;
        top:-50%;
        left:-50%;
        width: 380px;
        height: 420px;
        background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
        transform-origin:bottom right;
        animation: animate 6s linear infinite;
    }
    .box::after{
        content:"";
        position:absolute;
        top:-50%;
        left:-50%;
        width: 380px;
        height: 420px;
        background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
        transform-origin:bottom right;
        animation: animate 6s linear infinite;
        animation-delay: -3s;
    }
    
    @keyframes animate{
        0%{
            transform:rotate(0deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }

    .form{
        position:absolute;
        z-index:10;
        inset:2px;
        background:#28292d;
        border-radius:8px;
        padding: 50px 40px;
        display:flex;
        flex-direction: column;
        h2{
            color:#45f3ff;
            font-weight:500;
            text-align:center;
            letter-spacing:0.1em; 
        }
        p{
            cursor:pointer;
        }
        p:active{
            color:#45f3ff;
            font-size:20px;
        }
    }

    .inputBox{
        position:relative;
        width:300px;
        margin-top:35px;

        input{
            position:relative;
            width:100%;
            padding:20px 10px 10px;
            background:transparent;
            border:none;
            outline:none;
            color:#23242a;
            font-size: 1em;
            letter-spacing: 0.05em;
            z-index:10;
        }
        span{
            position:absolute;
            left:0;
            padding:20px 0px 10px;
            font-size: 1em;
            color: #8f8f8f;
            pointer-events:none;
            letter-spacing:0.05em;
            transition:0.5s;
        }
        input:valid ~ span,
        input:focus ~ span{
            color:#45f3ff;
            transform:translateY(-34px);
            font-size:0.75em;
        }
        i{
            position: absolute;
            left:0;
            bottom:0;
            width:100%;
            height:2px;
            background:#45f3ff;
            border-radius:4px;
            transition:0.5s;
            pointer-events:none;
            z-index:9;
        }
        input:valid ~ i,
        input:focus ~ i{
            height:44px;
        }

        button{
            width:150px;
            border:none;
            outline:none;
            background:#45f3ff;
            padding:11px 25px;
            border-radius:4px;
            font-weight:600;
            cursor:pointer;
        }
        button:active{
            opacity:0.8;
        }
    }

    .btn{
        width:auto;
        text-align:center;
        border:none;
        outline:none;
        //background:white;
        background:#45f3ff;
        padding:5px 5px;
        border-radius:4px;
        font-weight:600;
        cursor:pointer;
        margin-top:10px;
        color:red;
        &:hover{
          background:#45f3ff; 
        }
        p:active{
            color:#45f3ff;
            font-size:20px;
        }
    }



`