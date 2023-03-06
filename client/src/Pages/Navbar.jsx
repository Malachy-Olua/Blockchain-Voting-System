import React,{ useState, useEffect, useCallback, useContext } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { VotingContext } from '../context/VotersContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import { GiTwirlCenter } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import electionLogo from "../images/electionLogo.jpg"

// const{currentAccount}=useContext (VotingContext);

function Navbar() {
 
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  const [navbarState, setNavbarState] = useState(false);
  const [currentList, setCurrentList] = useState(1);
  const navigate = useNavigate();
 
  const {connectWallet,signAppOut,days,mins,hours,secs, onSearchChange1,currentAccount,time_schedule,start_Vote,end_time_schedule} = useContext (VotingContext);

  const signOut = () =>{
    signAppOut();
    window.localStorage.removeItem('account');
    navigate('/');
  }

  const hide = window.localStorage.getItem("metamask");

  return (
    <>
      <Section>
        <nav className="top1">
          <div className='image'>
            <img src={electionLogo} alt="logo" ></img>
          </div>
          <ul className="top2">
             <li className="list1">
              <Link to="/"><span style={{color:"white"}}>Home</span></Link>
            </li>
            <li className="list2">
                <Link to="/Voting"><span style={{color:"white"}}>Voting</span></Link>
            </li>
    
            <li className="list3">
                <Link to="/RegisterCandidate"><span style={{color:"white"}}>Create Contestants/Election</span></Link>
            </li>
            <li className="list4">
                <Link to="/Elections"><span style={{color:"white"}}>Elections</span></Link>
            </li>
          </ul>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
              ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </nav>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive_lists">
          <ul>
            <li className={currentList === 1 ? "active" : "none"}>
              <MdSpaceDashboard />
              <Link to="/"><span style={{color:"white"}}>Home</span></Link>
            </li>
        
            <li className={currentList === 2 ? "active" : "none"}>
              <GiTwirlCenter />
              <Link to="/Voting"><span style={{color:"white"}}>Voting</span></Link>
            </li>

            <li className={currentList === 3 ? "active" : "none"}>
              <GiTwirlCenter />
              <Link to="/RegisterCandidate"><span style={{color:"white"}}>Create Contestants/Election</span></Link>
            </li>
            <li>
              <GiTwirlCenter />
              <Link to="/Elections"><span style={{color:"white"}}>Elections</span></Link>    
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}

export default Navbar;

const Section = styled.section`
  .top1{
    display: flex;
    justify-content:space-between;
    //flex-direction:row-reverse;
    background: #1c1c1c;
    //position:sticky; 
    text-decoration:none;
    .toggle {
      display: none;
    }
    
  }
  .top2{
    display:flex;
    list-style-type: none;
    gap: 2rem;
    padding-right:100px;
  }

  .image{
    margin-left:20px;
    display:flex;
    list-style-type: none;
    gap: 2rem;
    padding-right:100px;
    border-radius:50%;
    width:50px;
    height:50px;
    img{
      border-radius:50%;
      width:100%;
      height:100%;
    }
  }

  .btn{
    padding: 5px 20px;
    border-radius:5px;
    background:#45f3ff; 
    outline:none;
    border:none;
    cursor:pointer;
  }

  .btn:active{
    opacity:0.8;
  }

  .timer{
    display:flex;
    justify-content:space-evenly;
    gap:10px;
    padding-left:10px;
  }
  .countdown{
    p{
      color:#45f3ff;
    }
  }

  .start_btn{
    display: flex;
    align-items: center;
  }

  .search {
    background-color: #4d5155;
    display: flex;
    align-items: center;
    margin-top:10px;
    margin-bottom:10px;
    margin-left:10px;
    
    border-radius: 1rem;
    svg {
      color: #45f3ff;
    }
    input {
      background-color: transparent;
      border: none;
      padding:6px 6px 6px;
      color: #45f3ff;
      letter-spacing:;

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #33001a;
        text-align:center;
        letter-spacing:;
      }
    }
  }
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {

    .top1{
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      padding-right:20px;
      padding-top:10px;
      padding-bottom:10px;
      .toggle {
        display: block;
        color: white;
        z-index: ;
        svg {
          font-size: 1.5rem;
        }
      }
      .top2{
        display:none;
      }
      .timer{
        padding-left:10px;
      }

    }

    .responsive_lists{
      ul{
        text-decoration:none;
        li{
          font-size:10px;
          span{
            text-decoration:none;
          }
        }
      }
    }

    .search {
      background-color: #4d5155;
      display: flex;
      align-items: center;
      margin-top:10px;
      margin-bottom:10px;
      margin-left:10px;
      
      border-radius: 1rem;
      svg {
        color: #45f3ff;
      }
      input {
        background-color: transparent;
        border: none;
        width:100px;
        padding:6px 6px 6px;
        color: #45f3ff;
        letter-spacing:;
  
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: #33001a;
          text-align:center;
          letter-spacing:;
        }
      }
    }

  }

`

const ResponsiveNav = styled.div`
position: fixed;
right: -10vw;
top: 0;
z-index: 15;
background: rgb(58,59,60);
background: linear-gradient(90deg, rgba(58,59,60,1) 11%, rgba(58,59,60,1) 100%);
height: 100vh;
width: ${({ state }) => (state ? "60%" : "0%")};
transition: 0.4s ease-in-out;
display: flex;
flex-direction:column;
color:white;
opacity: 10;
//visibility:hidden;
padding: 1rem;
text-decoration:none;

.show{
  display:flex;
  flex-direction:column;
  color:white;
  z-index:99;
  text-decoration:none;
}  
.responsive_lists {
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
    padding-left:10px;
    padding-right:10px;
    text-decoration:none;
    li {
      display:flex;
      gap:1rem;
      padding: 0.6rem 0.6rem;
      border-radius: 0.6rem;
      text-decoration:none;
      &:hover {
        background: #45f3ff;
        
        span{
          color:black;
          text-decoration:none;
        }
      }
      span{
        font-size:0.938rem;
        text-decoration:none;
      }
      svg{
        font-size:25px;
      }
      .btn{
        padding: 5px 20px;
        border-radius:5px;
        background:#45f3ff; 
        outline:none;
        border:none;
        cursor:pointer;
      }
    }
    .active {
      background:#45f3ff;
      color: black;
    }
  }
}

`;
