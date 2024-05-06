
'use strict'

function User(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age   = age;
}

/*
/
*/

function UserProto(){
    this.getFullName = function () {
        return `${this.fname} ${this.lname}`;
    }
}

User.prototype = new UserProto();

const user1 = new User('Tom', 'Rot', 59)

