import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { VotingContext } from "../context/VotersContext";
import { useNavigate } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";

const Login = () => {

    const { handleChange,loginformData,votertransactions,login2,loginAlert,login_Alert,isLoggedIn,transactions, currentAccount} = useContext(VotingContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

 
    
    const forAdmin = async()=>{
        const { userName, userAddress} = loginformData;
        
        if(userName==="Malachy"&&userAddress==="0x514D86d065b0478cE65e1944223328a549b3fbDD") {
            //console.log("im in");
            localStorage.setItem("account", 'true');
            setIsLoading(true);
            if(currentAccount==0x514D86d065b0478cE65e1944223328a549b3fbDD){
                window.localStorage.setItem("metamask", '0x514D86d065b0478cE65e1944223328a549b3fbDD');
            }
            //navigate('/Voting');
            return true;
           
        }
        //return true;
    }
    
    const candidates = async()=>{
        const { userName, userAddress} = loginformData;
        
        for(let i=0; i<transactions.length; i++){
            if(transactions[i].candidateName===userName && transactions[i].candidateAddress===userAddress){
                //console.log("im in");
                localStorage.setItem("account", 'true');
                setIsLoading(true);
                //navigate('/Voting');
                var _truthy = true;
                break;
            }
           
        }
        if(_truthy){
            return true;
        }else{
            return false;
        } 
       // return true;
    }
    const voters = async()=>{
        const { userName, userAddress} = loginformData;
        
        for(let i=0; i<votertransactions.length; i++){
            if(votertransactions[i].voterName==userName && votertransactions[i].voterAddress==userAddress){
                //console.log("im in");
                localStorage.setItem("account", 'true');
                setIsLoading(true);
                //navigate('/Voting');
                var _truthy = true;
                break;
            }
           
        }
        if(_truthy){
            return true;
        }else{
            return login_Alert();
        }    
        //return true;
    }

   
    const login = async(e)=>{

        const { userName, userAddress} = loginformData;
        e.preventDefault();

        const auth1 = forAdmin();
        const auth2 = candidates();
        const auth3 = voters();

        // voters();

        if(auth1){
            navigate('/Voting');
        }else if(auth2){
            navigate('/Voting'); 
        }else if(auth3){
            navigate('/Voting'); 
        } 
    }
    
  return (
    <Section>
        {isLoading?
        (
            <div className="loader">
                <RingLoader
                color={"#36d7b7"}
                loading={isLoading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
            </div>
        ):
        (
        <div className="box">
            <div className="form">
                <h2>Sign In</h2>
                <h4>{loginAlert}</h4>
                <div className='inputBox'> 
                    <input type="text" required="required" name="userName" onChange={handleChange}/>
                    <span>UserName</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="text" required="required" name="userAddress" onChange={handleChange}/>
                    <span>UserAddress</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <button onClick={login}>
                        login
                    </button>
                </div>
            </div>
        </div>
        )}
    </Section>
  );
}

export default Login;

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

    .loader{
        display:flex;
        justify-content:center;
        align-items:center;
        background:#23242a;
        height:100vh;
        width:100;
        position:fixed;
        z-index:100;

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
        h4{
            color:red;
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
            width:100px;
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
    .payment{
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
    .payment:valid ~ i,
     payment:focus ~ i{
        height:44px;
    }



`