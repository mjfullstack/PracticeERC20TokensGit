const SampleToken = artifacts.require("SampleToken");

module.exports = function(deployer) {
  // [, arg1, arg2, ... ] To add Constructor Arguments if desired. 
  // Our's were vars in SampleToken file/contract... DIDN'T COMPILE
  deployer.deploy(SampleToken, "UdacitySampleToken", "UST", 18, (1000 * (10 ^ 18) ) );
};
