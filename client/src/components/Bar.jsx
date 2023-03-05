import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { VotingContext } from "../context/VotersContext";

const Inpute = ({placeholder, name, type, value, onSearchChange}) =>(
  <input placeholder={placeholder} type={type} step='0.0001' value={value} 
  onChange={onSearchChange} 
  />
);



export default function Navbar() {

  const { onSearchChange, transactions, start_Vote, start_Vote2 } = useContext(VotingContext);
  const[winnerName, setWinnerName] = useState('');

  var electionTransactions = [];
  var winner_check = [];
  var winNum = 0;
  var winnerObj;

  const firstLoop = async()=>{
    const election = localStorage.getItem('election');
    const splittedElection = election.split(" ").join('').toLowerCase();
    for(let i=0;i<transactions.length;i++){
      if(transactions[i].electionName.split(" ").join('').toLowerCase() == splittedElection){
        if(transactions[i].totalVote>winNum){
          winnerObj = transactions[i];
          winNum = transactions[i].totalVote;
        }
        electionTransactions.push(transactions[i]);
      }
    }
  }

  
  const secondLoop = async()=>{
    
    const count = electionTransactions.filter((obj)=>obj.totalVote === winnerObj.totalVote).length;
    if(count>1){
      setWinnerName("No winner yet.")
    }else if(winnerObj==undefined){
      setWinnerName("No winner yet.");
    }else{
      setWinnerName(winnerObj.candidateName);
    }

    //console.log(count);
  }

  


  const winner = async (e)=>{

    e.preventDefault();

    // console.log(winnerObj)
    //console.log(winnerObj.candidateName)
    await firstLoop();
    await secondLoop();

    // console.log(electionTransactions);
    // console.log(winnerObj);
    // console.log(winNum);
    
  }

  return (
    <Nav>
      <div className="title">
        <h4></h4>
        <h1>
         <span> Voting Section</span>
        </h1>
        <button className="btn" onClick={winner}>GetWinner</button>
        <h4 className="blink">{winnerName}</h4>
      </div>
      <div className="cont">
        <div className="search">
          <BiSearch />
          <Inpute placeholder="Search" name="search" type="search" onSearchChange={onSearchChange}/>
        </div>
      </div>

    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  position:sticky;
  padding-left:20px;
  padding-right:20px;
  .payment3{
    display:flex;
    align-items:center;
    border-radius: 0.3rem;
    height: 30px;
    border-style:none;
    text-align: center;
    margin-top: 9px;
    
    padding: 0.3rem 1rem;
    color:#45f3ff;
    font-weight: 900;
    cursor:pointer;
    background:#4d5155;
    font-family: "Permanent Marker", cursive; 
  }

  .btn{
    padding: 5px 20px;
    border-radius:5px;
    background:#45f3ff; 
    outline:none;
    border:none;
    cursor:pointer;
  }

  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: white;
        // font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }

  .blink{
    animation: blink 4s  infinite;
    color:#45f3ff;
    letter-spacing:5px;
    font-weight: bold;
  }
  
  @keyframes blink{
    0%{
      opacity:1;
    }
    50%{
      opacity:0;
    }
    100%{
      
      opacity:1;
    }
  }


  .cont{
    display: flex;
    align-items: center;
  }

  .cont2{
    margin-right:10px
  }

  .search {
    background-color: #4d5155;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #45f3ff;
    }
    input {
      background-color: transparent;
      border: none;
      color: #45f3ff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #45f3ff;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
    .search{
      width:230.031px;
      padding-right:10px;
     
    }
  }
`;
