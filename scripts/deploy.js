async function main() {
  // We get the contract to deploy 
  var exp = ethers.BigNumber.from("10").pow(18).mul(ethers.BigNumber.from("10").pow(6));
  const initialSupply = ethers.BigNumber.from("300").mul(exp);

  
  const Token = await ethers.getContractFactory("GLDToken");
  const greeter = await Token.deploy(initialSupply);

  console.log("Token deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
