var TutorialToken = artifacts.require("TutorialToken");

module.exports = function(done) {
  console.log("Getting deployed version of TutorialToken...")
  TutorialToken.deployed().then(function(instance) {
    return instance.transfer('0xf17f52151EbEF6C7334FAD080c5704D77216b732', 100)
  }).then(function(result) {
    console.log(result);
    console.log("Finished!");
    done();
  }).catch(function(e) {
    console.log(e);
    done();
  });
};
