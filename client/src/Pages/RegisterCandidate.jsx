
import React,{ useState, useEffect, useCallback, useContext } from 'react';
//import { useDropzone } from "react-dropzone";
import { VotingContext } from '../context/VotersContext';
import styled from "styled-components";


const Allowed = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

 

  const {
  createVoter,
  currentAccount,
  authorizeCandidate,
  handleChange3,
  onSubmitHandler,
  candidateformData,
  fileUrl,
  pushCandidateUrl,
  formData,
  connectWallet,
  castVote,
  transactions,
  isCastVote,
  namesCreator2
} = useContext (VotingContext);


const firstLoop = async ()=>{

  const{electionName, candidateName,candidateAddress} = candidateformData;

  var result = namesCreator2.findIndex(item => item.nameElection==electionName);
  if(result != -1){
    var result2 = namesCreator2[result];
    // console.log(result);

    // console.log(result2.creator);
    // console.log(result2);

    if(result2.creator.split(" ").join('').toLowerCase() === currentAccount.split(" ").join('').toLowerCase()){
      return authorizeCandidate();
    }else{
      return alert("Election Name Already In Use By Another User Address");
    }
  }else{
    return authorizeCandidate();
  }

  
}





const createCandidate = (e)=>{
  e.preventDefault();

  firstLoop();
  // console.log(currentAccount);
  // console.log(namesCreator2);
  
 
}

  return (
    <Section>
        <div className="box">
            <div className="form">
              <div className='round1'>
                <div className='round'>
                  <img src={fileUrl} ></img>
                </div>
              </div>
              <div className='inputBox'>
                  <input type="text" required="required" name="electionName" onChange={handleChange3}/>
                  <span>Election Name</span>
                  <i></i>
              </div>
              <div className='inputBox'>
                  <input type="text" required="required" name="candidateName" onChange={handleChange3}/>
                  <span>CandidateName</span>
                  <i></i>
              </div>
              <div className='inputBox'>
                  <input type="text" required="required" name="candidateAddress" onChange={handleChange3}/>
                  <span>CandidateAddress</span>
                  <i></i>
              </div>
              
                <form onSubmit={onSubmitHandler} className="form2">
                  <div className='inputBox'>
                    <input id="file-upload" type="file" name="file" className='file'/>
                    <i></i>
                  </div>
                    {isCastVote?(<h4 className="blink">Loading...</h4>):(<button className='btn' type="submit">
                      Upload file
                    </button>)}
                </form> 
              
              <div className='inputBox'>
                  {isCastVote?(<h4 className="blink">Loading...</h4>):(<button onClick={createCandidate}>
                    Authorize Candidate
                  </button>)}
              </div>
            </div>
        </div>
    </Section>
  )
}

export default Allowed;

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

  .file{
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

  .btn{
    width:150px;
    border:none;
    outline:none;
    background:white;
    // background:#45f3ff;
    padding:10px 20px;
    border-radius:4px;
    font-weight:600;
    cursor:pointer;
    margin-top:10px;
    color:red;
    &:hover{
      background:#45f3ff; 
    }
  }
  .box{
      position:relative;
      width:380px;
      height:650px;
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
  }

  .round1{
    display:flex;
    justify-content:center;
  }

  .round{
    padding:10px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    background:#45f3ff;
    border-radius:50%;
    width:100px;
    height:100px;
    margin-right:;
    img{
      border-radius:50%;
      width:100%;
      height:100%;
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
      width:200px;
      border:none;
      outline:none;
      background:#45f3ff;
      padding:14px 25px;
      border-radius:4px;
      font-weight:600;
      cursor:pointer;
      color:red;
    }
    button:active{
        opacity:0.8;
    }
  }



`