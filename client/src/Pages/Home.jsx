import React,{ useState, useEffect, useCallback, useContext } from 'react';
import styled from "styled-components";
import votingimage from "../images/votingimage.jpg";
import logo from "../images/logo.png";
import Project from "../images/Project.png";
import blockchain from "../images/blockchain.jpg";
import { useNavigate } from 'react-router-dom';
import { VotingContext } from '../context/VotersContext';
import { BrowserRouter, Route, Link } from "react-router-dom";


const useAuth=()=>{
  const user = localStorage.getItem('account');
  if(user){
    return true
  }else{
    return false
  }
}

const Home = () => {

  const {connectWallet,currentAccount} = useContext (VotingContext);
  const [wallet, setWallet] = useState(false)
  const navigate = useNavigate();
  const auth = useAuth();


  return (
    <Section>
      <nav className= "navbar">
        <img src={logo} alt="Logo" className = "logo" />
        {auth?
        (
          <ul>      
            <button onClick={()=>{navigate("/Voting")}}>Go to Voting</button>
          </ul>
        ):currentAccount?
        (""):
        (
          <ul>
            <button onClick={connectWallet}>Connect Wallet</button>
          </ul>
        )}
      </nav>
      <div className="text">
        <h1>A Blockchain Electronic <br/> Voting Application</h1>
        <p>Secure, transparent voting for a fair and democratic <br/>
        prcess. The future of voting is here!</p>
        {auth?(""):
          currentAccount?<button onClick={()=>{navigate("/Elections")}}>
            Elections
          </button>:("")}
        <h4>Powered by Blockchain & CHAINDEVs</h4>
      </div>
    </Section>
  )
}

export default Home;

const Section = styled.section`

  background-image: url(${Project});
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-position: center;
  transition: 0.4 ease;


  .navbar{
    padding-left:1.875rem;
    padding-right:1.875rem;
    padding-top:3rem;
    padding-bottom:4rem;
    display:flex;
    justify-content:space-between;
  }

  .navbar ul {
    list-style: none;
    margin: 0;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    color: white;
  }

  .navbar li {
    margin:  0 10px;
  }

  .navbar button {
    background: linear-gradient(to right, #014d01, #04f704);
    border: none;
    font-size: 1.2em;
    padding: 10px 20px;
    border-radius: 25px;
    color: white;
    height: 7vh;
    font-weight: bold;
    margin-top: 0;
    cursor: pointer;
  }

  .navbar button:hover {
    background: none;
    border: 1px solid #04f704;
  }

  .navbar a {
    text-decoration: none;
    color:rgb(248, 242, 242);
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-top: 20px;
  }

  .navbar a:hover {
    text-decoration: underline;
    text-decoration-color: #04f704;
    text-decoration-skip: 2px;
  }

  .text {
    margin: 2em; 
  }

  .text h1 {
    font-size: 50px;
    margin: 0;
    font-size: 3rem;
    color: rgb(27, 27, 27);
    font-family: impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
    letter-spacing: 3px;
  }

  p {
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .text button {
    background: linear-gradient(to right, #014d01, #04f704);
    color: white;
    border: none;
    font-size: 20px;
    padding: 10px 20px;
    margin-top: 2rem;
    border-radius: 15px;
    width: 9rem;
    font-weight: bold;
    display: inline-block;
    cursor: pointer;
    transition: 0.4 ease;
    box-shadow: 0 5px 8px 0 rgba(26, 25, 25, 0.2);
  }

  button:hover {
    background: #fff;
    border: 1px solid #04f704;
    color: #025202;
    /* border:#04f704 */
  }

  h4 {
    margin-top: 7.3rem;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  

  .logo {
    object-fit: cover;
    width: 5rem;
    height: 5rem;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    background-size: cover;
    background-position: center;
    height: 100vh;
    width:100vw;
    .navbar{
      padding-left:1.875rem;
      padding-right:1.875rem;
      padding-top:3rem;
      padding-bottom:4rem;
      display:flex;
      justify-content:space-between;
    }
    .text h1 {
      font-size: 40px;
    } 
    .text p{
      color:orange;
      font-size:20px;
      font-weight: bold;
    }
    .text h4{
      color:orange;
      font-size:20px;
      font-weight: bold;
    }
    .text button {
      background: linear-gradient(to right, #014d01, #04f704);
      color: white;
      border: none;
      font-size: 20px;
      padding: 10px 20px;
      margin-top: 2rem;
      border-radius: 15px;
      width: 9rem;
      font-weight: bold;
      display: inline-block;
      cursor: pointer;
      transition: 0.4 ease;
      box-shadow: 0 5px 8px 0 rgba(26, 25, 25, 0.2);
    }
  }
 
`
