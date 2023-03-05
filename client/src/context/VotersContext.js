
import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers';
import { create } from "ipfs-http-client";
import { Buffer } from 'buffer';
import { useNavigate } from 'react-router-dom';
import { Outlet, Navigate } from 'react-router-dom';
import { votingAddress, votingAddressABI } from "../utils/Constants";


const { ethereum } = window;

export const VotingContext = React.createContext();

const getVotingContract = () =>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const VotingContract = new ethers.Contract(votingAddress, votingAddressABI, signer);

    return VotingContract;

    // console.log({
    //     provider,
    //     signer,
    //     VotingContract
    // });
}


export const VotingProvider = ({children}) => {

    const projcetID=process.env.REACT_APP_INFURA_ID;
    const projectKEY=process.env.REACT_APP_INFURA_KEY;
    const auth = 'Basic ' + Buffer.from(projcetID + ":" + projectKEY).toString('base64');

    const client = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth,
        },
    })
   
    const [error, setError] = useState('');
    const [currentAccount, setCurrentAccount] = useState('');
    const [ transactions, setTransactions ] = useState([]);
    const [ transactions2, setTransactions2 ] = useState([]);
    const [ electionNames,  setElectionNames ] = useState([]);
    const [ namesCreator,  setNames_creator1 ] = useState([]);
    const [ namesCreator2,  setNames_creator2 ] = useState([]);
    const [ votertransactions, setVoterTransactions ] = useState([]);
    const [loginformData, setLoginFormData] = useState({userName:'', userAddress:''});
    const [candidateformData, setCandidateformData] = useState({electionName:'',candidateName:'', candidateAddress:''});
    const [voterformData, setVoterformData] = useState({  voterName:'', voterAddress:''});
    const [fileUrl, setFileUrl] = useState(null);
    const [ loginAlert, setLoginAlert] = useState('');
    const [searchField, setSearchField] = useState('');
    var LoggedIn; 
    const [ isLoggedIn, setIsLoggedIn] = useState(LoggedIn);
    const [scheduleTime, setScheduleTime] = useState('');
    const [start_Vote, setStartVote] = useState([]);
    const [start_Vote2, setStartVote2] = useState(false);

    const [isCastVote, setIsCastVote] = useState(false);

  


    const [days,setDays] = useState(0);
    const [hours,setHours] = useState(0);
    const [mins,setMins] = useState(0);
    const [secs,setSecs] = useState(0);
    const [time,setTime] = useState(0);

    const handleChange = (e) => {
        setLoginFormData({...loginformData,[e.target.name]: e.target.value}); 
        //console.log(loginformData);
    }
    const handleChange2 = (e) => {
        setVoterformData({...voterformData,[e.target.name]: e.target.value});
        //console.log(voterformData);
    }
    const handleChange3 = (e) => {
        setCandidateformData({...candidateformData,[e.target.name]: e.target.value});
        //console.log(candidateformData);
    }

    const onSearchChange = event => {
        //console.log(event.target.value);
        setSearchField(event.target.value);
    }
    const onSearchChange1 = event => {
       // console.log(event.target.value);
        setScheduleTime(event.target.value);
    }


      //----UPLOAD TO IPFS VOTER IMAGE
    const onSubmitHandler = async (event) => {

        event.preventDefault();

        const form = event.target;
        const files = form[0].files;
        
    
        if (!files || files.length === 0) {
          return alert("No files selected");
        }
    
        const file = files[0];

        const added = await client.add(file);
        
        const url = `https://infura-ipfs.io/ipfs/${added.path}`
        setIsCastVote(true)
        setTimeout(()=>{
            setIsCastVote(false)
            setFileUrl(url);
        },9000);
        
        
       
        //console.log(url);
        form.reset();
    };

    const login_Alert = async()=>{
        setLoginAlert("Unauthorized permission");
    }

    const signAppOut = async () =>{
        window.localStorage.removeItem('account');
        window.localStorage.removeItem("metamask");
        setLoginAlert("");
    }


    //---CONNECTING METAMASK
    const checkIfWalletIsConnected = async() =>{
        if(!window.ethereum) return alert('Please install Metamask');

        const account = await window.ethereum.request({method: "eth_accounts"});

        if(account.length){
            setCurrentAccount(account[0]);
            //console.log(account[0])
            getAllCandidates();
           
        }else{
            setError('Please Install MetaMask & Connect, Reload');
        }
    }

    //----CONNECT WALLET
    const connectWallet = async () => {
        //try and catch is used when you need to be sure if a set of code succeeds;
        try{
            if(!ethereum) return alert('Please install metamask');

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);
            if(accounts[0]==0x514D86d065b0478cE65e1944223328a549b3fbDD){
                window.localStorage.setItem("metamask", '0x514D86d065b0478cE65e1944223328a549b3fbDD');
            }
            window.location.reload();
           
        } catch (error){ 
            console.log(error); 

            throw new Error('No ethereum object.');
        }
    }

    const authorizeCandidate = async()=>{
        
        try {
            const{electionName, candidateName,candidateAddress} = candidateformData;

            if( !candidateName || !candidateAddress || !electionName) return alert("input data is missing");

            const votingContract = getVotingContract();
            const candidate  = await votingContract.createContestant( electionName, candidateName, candidateAddress, fileUrl);
            setIsCastVote(true);
            votingContract.on("Created_Contestant", async  function (evt) {
                getAllCandidates()
            })
            
            await candidate.wait();
            setIsCastVote(false);
            //console.log(candidate);
            window.location.reload()
        } catch (error) {
            alert("contract call failure");
            
        }

    }

    const castVote = async(_address_contestant,_election_name) => {
        try {

            if(!ethereum) return alert('Please install metamask');
           
            const votingContract = getVotingContract();
            const voting  = await votingContract.place_vote(_address_contestant,_election_name);
            setIsCastVote(true);
            votingContract.on("Voted", async  function (evt) {
                getAllCandidates()
            })
           
            await voting.wait();
            //console.log(voting);
            setIsCastVote(false);
        } catch (error) {
            alert("contract call failure");
        }
    }



    const getAllCandidates = async() =>{
        
        try {
            if(!ethereum) return alert('Please install metamask');
            const votingContract = getVotingContract();

            const votingContractTransactions = await votingContract.getContestants();
            //console.log(votingContractTransactions)

            const organisedTransactions = votingContractTransactions.map((candidate)=>({
                electionCreator:candidate.creator,
                electionName:candidate.election_name,
                candidateName: candidate.contestant_name,
                totalVote: parseInt(candidate.number_of_votes._hex),
                imageHash: candidate.contestant_image,
                candidateAddress: candidate.address_contestant,
                creator: candidate.creator
 
            }));

            const names = []
            for(let i=0; i< organisedTransactions.length; i++){
                if(names.includes(organisedTransactions[i].electionName)){
                    continue;
                }
                setElectionNames(names.push(organisedTransactions[i].electionName))
            }
            const names_creator = []
            const names_creator2 = []
            for(let i=0; i< organisedTransactions.length; i++){
                if(names_creator.includes(organisedTransactions[i].electionName)){
                    continue;
                }
                setNames_creator1(names_creator.push(organisedTransactions[i].electionName));
                setNames_creator2(names_creator2.push({
                    nameElection:organisedTransactions[i].electionName,
                    creator: organisedTransactions[i].creator,       
                }));
            }


            setTransactions(organisedTransactions);
            setElectionNames(names);
            setNames_creator2( names_creator2);
            
        //    console.log(organisedTransactions);
        //    console.log(names);
        //    console.log(names_creator);
        //    console.log(names_creator2);
    
        } catch (error) {
            console.log(error);
        }
    
    }


    useEffect(()=>{

        checkIfWalletIsConnected();
       
    },[])

    return(
        <VotingContext.Provider value={{
            checkIfWalletIsConnected, 
            connectWallet,
            handleChange, 
            loginformData,
            handleChange2,
            handleChange3,
            onSubmitHandler,
            castVote,
            fileUrl,
            authorizeCandidate,
            transactions,
            votertransactions,
            isLoggedIn,
            login_Alert,
            loginAlert,
            searchField,
            onSearchChange,
            signAppOut,
            currentAccount,
            days,
            hours,
            mins,
            secs,
            onSearchChange1,
            start_Vote2,
            transactions2,
            electionNames,
            candidateformData,
            isCastVote,
            namesCreator2,
            

            
            }}>
            {children}
        </VotingContext.Provider>
    )
}


