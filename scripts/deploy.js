async function main() {
  console.log("Deploying contract...");
  // Grab the contract factory
  const ForeverFren = await ethers.getContractFactory("ForeverFren");
  // Start deployment, returning a promise that resolves to a contract object
  const foreverFren = await ForeverFren.deploy(); // Instance of the contract
  console.log("Contract deployed to address:", foreverFren.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
