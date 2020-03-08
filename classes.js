class User {

  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

//login function
login(){
  console.log(` ${this.email} has logged in!! `);
  return this;
}

//logout function
logout(){
  console.log(`${this.email} has logged out!! `);
  return this;
}

updateScore(){
  this.score++;
  console.log(`${this.email} score is now ${this.score}`);
  return this;
}

}

class Admin extends User {

  constructor(email, name){
    super(email, name);
  }

  deleteUser(user){
     users = users.filter(function(i){
      return i.email != user.email;
    })
  }

}

var userOne = new User('Kate@gmail.com', 'Kate');
var userTwo = new User('Isaac@hotmail.com', 'Isaac');
var admin = new Admin('Aa@yahoo.com', 'Abraham');

var users = [userOne, userTwo, admin];

// use Method chaining to run them at once
userOne.login().updateScore().logout();
userTwo.login().updateScore().logout();

admin.deleteUser(userTwo);

console.log(users);
