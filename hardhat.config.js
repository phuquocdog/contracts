// convince dilemma wheat danger essay order always acquire awake prevent drum audit
// 0x8f53CF7F61c4d01ec2Aa7AD41cdeB3c7289029fB
// 0x4fAaB6c600Dfc8eCCc5088bd8e4D115EE7C52ebe


require("@nomiclabs/hardhat-waffle");
const mnemonic = 'convince dilemma wheat danger essay order always acquire awake prevent drum audit';
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	networks: {
	  hardhat: {
	    chainId: 31337
	  },
	  
	  ropsten: {
	  	url: "https://ropsten.infura.io/v3/4f86217de9474d9abfedc204503f52c2",
	  	accounts: {mnemonic : mnemonic }
	  },
  },
  solidity: "0.8.0",
};
