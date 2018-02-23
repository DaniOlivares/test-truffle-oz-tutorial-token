pragma solidity ^0.4.17;

import '../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract TutorialToken is StandardToken {

    string public name = "TutorialToken";
    string public symbol = "TT";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 12000;
    address public owner;

    function TutorialToken() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
        owner = msg.sender;
    }

    /**
    * @dev receiveAndDistribute token for a specified address
    */
    function receiveAndDistribute() public pure returns (uint balance) {
        //require(_to != address(0));
        //require(_value <= balances[msg.sender]);

        // SafeMath.sub will throw if there is not enough balance.
        //balances[msg.sender] = balances[msg.sender].sub(_value);
        //balances[_to] = balances[_to].add(_value);
        //Transfer(msg.sender, _to, _value);

        //require(owner == msg.sender);
        //address _address = 0xf17f52151EbEF6C7334FAD080c5704D77216b732;
        //bool response = transfer(_address, _value);
        // _value = _value * 2;
        return 200;
    }

    /**
  * @dev Gets the balance of the specified address.
  * @param _owner The address to query the the balance of.
  * @return An uint256 representing the amount owned by the passed address.
  */
  function balanceOfs(address _owner) public view returns (uint256 balance) {
    return balances[_owner];
  }

}
