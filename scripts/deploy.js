async function main() {
  const Firstapp = await ethers.getContractFactory("New");

  // Start deployment, returning a promise that resolves to a contract object
  const First_app = await Firstapp.deploy();
  console.log("Contract deployed to address:", First_app.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });