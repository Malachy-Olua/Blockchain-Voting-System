import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import photo from "../images/photo.jpg";
import { VotingContext } from "../context/VotersContext";


//import Bar from "./Bar";

//import scrollreveal from "scrollreveal";


export default function Dashboard() {

  const election = localStorage.getItem('election');
  const splittedElection = election.split(" ").join('').toLowerCase();

  const { transactions,castVote,searchField,electionNames,isCastVote } = useContext(VotingContext);

  const handleClick = (event,param1,param2) =>{
    
    event.preventDefault();

    castVote(param1,param2);  

  }


  const filteredTransactions = transactions.filter(transaction=>{
    return transaction.candidateName.toLowerCase().includes(searchField.toLowerCase())
  });
  //AiOutlineDelete
  
  return (
    <Section>
      <div className="top">
        <div className="grid">
          {filteredTransactions.map((transaction)=>{
            if(transaction.electionName.split(" ").join('').toLowerCase() == splittedElection)
            return(
              <div className="card">
              <div className="cont1">
                  <div className="details">
                    <h3>{ transaction.candidateName }</h3>
                    <p>{ transaction.candidateAddress.slice(0, 20) }</p>
                    <p>{ transaction.electionName }</p>
                  </div>
                  <div className="image">
                    <img src={transaction.imageHash} alt="candidate"></img>
                  </div>
              </div>
              <div className="cont2">
                  {isCastVote?(<h4 className="blink">Loading...</h4>):(<button onClick={event =>handleClick(event,transaction.candidateAddress,transaction.electionName)}>Vote</button>)}
                  <div>
                      <h3>{transaction.totalVote}</h3>
                  </div>
              </div>
          </div>
            )
          })}

        </div>
      </div>
      <div className="top2">

      </div>
    </Section>

  );
}

const Section = styled.section`
  //margin-left: 18vw;
  padding: 2rem;
  background:#262626;
  height:500px;
  display:flex;
  flex-direction:column;
  
  .grid {
    display:flex;
    flex-wrap:wrap;
    height:500px;
    gap: 1rem;
    margin-top: 2rem;
  }

  .delete{
    svg{
      height:20px;
      width:20px;
    }
    cursor:pointer;

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

  .top{
    display:flex;
    background:#262626;
  }
  top2{
    height:500px;
    background:#262626;
    align-content:flex-end;
  }
  .card{
    //padding: 1rem 2rem 3rem 2rem;
    border-radius: 1rem;
    background: rgb(77,81,85);
    background: linear-gradient(90deg, rgba(77,81,85,1) 6%, rgba(77,81,85,1) 100%);
    color: white;
    padding: 1rem;
    display: flex;
    flex-direction:column;
    //justify-content: space-evenly;
    //align-items: center;
    //gap: 1rem;
    transition: 0.5s ease-in-out;
    height:220px;
    width:270px;
    
  }

  .details{
    display:flex;
    flex-direction:column;
    h3{
        // color:red;
        letter-spacing:2px;
    }
    p{
        margin-top:-10px;
       
    }
  }
  .image{
    border-radius:50%;
    width:50px;
    height:50px;
    img{
      border-radius:50%;
      width:100%;
      height:100%;
    }
  }
  .cont1{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .cont2{
    display:flex;
    justify-content:space-between;
    align-items:center;
    button{
      border-radius:5px;
      padding:10px 20px;
      border:none;
      outline:none;
      background:#45f3ff;
      cursor:pointer;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    // margin-left: 0;
    height:500px;
    background:#262626;
    
  }
`;
