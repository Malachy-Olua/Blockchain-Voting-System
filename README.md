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

After connecting a metamask wallet, click on Elections to take you list of elections(elections created by you and other users) going on.
![Screenshot (28)](https://user-images.githubusercontent.com/105208823/222962267-18728725-3a2c-4e28-83a6-1f39d78b5730.png)


### RegisterCandidate
Click on `Create Contestants/Election` to create your own election and its contestants. 

`Make sure to upload the picture of the contestant and fill the input fields before clicking on Authorize candidate`.

`To have your contestants in thesame election, make sure to register them with same election name.`


## Website Link
<https://devs-chain.netlify.app//>


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
