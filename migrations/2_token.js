var MyContract = artifacts.require("MyToken");


const ethers  = require("ethers");
const name = 'Phu Quoc Doge';
const symbol = 'PQD';
module.exports = async function(deployer, network, accounts) {


var owner = accounts[0];
var wallet = accounts[1];

console.log('owner is: ' + owner);
console.log('wallet is: ' + wallet);

  // deployment steps
  // We get the contract to deploy 
  var exp = ethers.BigNumber.from("10").pow(18).mul(ethers.BigNumber.from("10").pow(6));
  const initialSupply = ethers.BigNumber.from("900000").mul(exp);

  await deployer.deploy(
    MyContract,
    name,
    symbol,
    '18',
    initialSupply, {
    from : owner
  });
  const token = await MyContract.deployed();

};

// 359857463748076481676503266760.008
// 359857463748076481676503266760.008
// 1265897883018598063317813534430.284 SIM available to swap
