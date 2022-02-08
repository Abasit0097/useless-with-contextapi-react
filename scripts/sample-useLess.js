// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const USELESS = await hre.ethers.getContractFactory("useLessToken");
  const useLessToken = await USELESS.deploy("useLess", "ULT", "abc.com", 5);
  //const useLessToken = await USELESS.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

   await useLessToken.deployed();

  console.log("UseLess deployed to:", useLessToken.address);
 
  /* let ghi = await useLessToken.cost();
  console.log("cost = ", ghi.toString());

  let pause = await useLessToken.paused();
  console.log("Paused = ", pause);

  let balance = await useLessToken.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
  console.log("balance", balance);

  let uri = await useLessToken.tokenURI(1);
  console.log("uri = ", uri);

 */
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
