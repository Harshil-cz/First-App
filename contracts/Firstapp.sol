// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract New {
    uint age;
    string public name = "Ravi";

    function get_age() public view returns(uint){
        return age;
    }

    function set_age(uint age_) public{
        age=age_;
    } 
}