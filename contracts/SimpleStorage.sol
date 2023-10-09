// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

contract SimpleStorage{

    address[] public simpleAdd;
    uint256 public number;

    function setAll(address _adr, uint256 _num) public {
        simpleAdd.push(_adr);
        number = _num;
    }

    function getNum() public view returns(uint256){
        return number;
    }

    function getAdr() public view returns(address[] memory){
        return simpleAdd;
    }
}