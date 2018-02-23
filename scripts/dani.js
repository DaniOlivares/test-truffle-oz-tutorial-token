var TutorialToken = artifacts.require("TutorialToken");

module.exports = function(done) {
  console.log("Getting deployed version of TutorialToken...")
  TutorialToken.deployed().then(function(instance) {
    console.log(instance.balances);
    return instance.balanceOf('0x627306090abaB3A6e1400e9345bC60c78a8BEf57')
  }).then(function(result) {
    console.log(result);
    TutorialToken.deployed().then(function(instance) {
      return instance.balanceOf('0xf17f52151EbEF6C7334FAD080c5704D77216b732')
    }).then(function(result) {
      console.log(result);
      done();
    }).catch(function(e) {
      console.log(e);
      done();
    });
  }).catch(function(e) {
    console.log(e);
    done();
  });
};


