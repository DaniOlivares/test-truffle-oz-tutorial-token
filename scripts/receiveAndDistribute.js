var TutorialToken = artifacts.require("TutorialToken");

module.exports = function(done) {
  console.log("Getting deployed version of TutorialToken...")
  TutorialToken.deployed().then(function(instance) {
    return instance.receiveAndDistribute()
  }).then(function(result) {
      console.log(111111);
    console.log(result);
    console.log("Finished!");
    done();
  }).catch(function(e) {
    console.log(222222);
    console.log(e);
    done();
  });
};
