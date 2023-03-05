# Blockchain-Voting-System

## Project Descripiton 
Blockchain voting System is an online voting system that applies blockchain technology to prove `immutability` which is one of the benefits of blockchain technology.
It allows users to create elections and `add` contestants to the election. Contestants are created with their pictures, names and Public addresses.
A Voter(wallet address) cant vote twice in an election and also a contestant(an address) cant be registered twice in an election.
And also, the `Create Contestants/Election` page is where the candidates are authorized.
The Voting page/dashboard is where the voting takes place.
 The `getWinner` button when clicked displays the winner of the election.
The `search field` box is used to search for candidates with their name.

## Technologies used
- React
- CSS
- IPFS
- Hardhat
- Metamask
- Goerli Testnet
- Solidity
- Alchemy


### Home Page
![Screenshot (26)](https://user-images.githubusercontent.com/105208823/222961839-bd1ddf1f-477b-441a-a452-8407e9e80787.png)

After connecting a metamask wallet, click on Elections to take you list of elections going on.
![Screenshot (28)](https://user-images.githubusercontent.com/105208823/222962267-18728725-3a2c-4e28-83a6-1f39d78b5730.png)


### RegisterCandidate
![Screenshot (12)](https://user-images.githubusercontent.com/105208823/213944606-e3d0a40e-6806-42b8-a1f5-c73aec41ee67.png)
The `Authorize Candidate` button function can only be called by the voting organizer.

### RegisterVoter
![Screenshot (14)](https://user-images.githubusercontent.com/105208823/213944919-b66acc8e-ac10-48ab-9d93-939f29372f4c.png)
The `Authorize Voter` button function can only be called by the voting organizer.

### Voting page
![Screenshot (18)](https://user-images.githubusercontent.com/105208823/213945667-46333c9b-3742-40c7-98aa-a122893c364a.png)
when voting is on and active.

![Screenshot (17)](https://user-images.githubusercontent.com/105208823/213945682-8727cc52-8600-4de0-bcf6-b481b920a07e.png)
When voting is over.

## Website Link
<https://chaindevsvotingapp.netlify.app/>

After connecting metamsask, use the details below to login
- `userName`:Malachy
- `userAddress`:0x514D86d065b0478cE65e1944223328a549b3fbDD

## Authors/team members
- Malachy Olua Chiagozie
- Echela Christopher Moses
- Daniel Ojo
- Ekene Marvellous Onubuike

## How to Install and Run the Project
- First install Node JS from https://nodejs.org
- Install metamask and add it as an extension in your browser
- Run `npm install` to install all the modules listed in the dependencies
- Run `npm start` to start the project locally
- Open http://localhost:3000 with your browser to see the result.
