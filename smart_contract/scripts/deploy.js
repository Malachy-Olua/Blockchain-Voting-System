
const main = async () => {

  const votingOrganizer = await hre.ethers.getContractFactory('VotingOrganizer'); //this is like a function factory or a class that is going to generate instances of that specific contract;
  const votingOrganizerTransactions = await votingOrganizer.deploy();

  await votingOrganizerTransactions.deployed();



  console.log("votingOrganizer deployed to:", votingOrganizerTransactions.address);
  //votingOrganizer deployed to: 0x65d732E55E0EF08c02a28945E7e074236aAaB431

}

// this pattern is recommended to be able to use async/await everywhere
// and properly handle errors.
const runMain = async () =>{
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();