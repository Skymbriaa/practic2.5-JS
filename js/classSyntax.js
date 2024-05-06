'user strict';

class User{
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age   = age;
    }
    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}

const userClasses = new User('Brad', 'Pitt', 60);