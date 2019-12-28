// las clases son funciones especiales

// declaro una clase
class User {
  constructor(name, email, status) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(`hello ${this.name} you have logged in`);
    this.experience_points();
    return this
  }

  experience_points() {
    this.score++;
    console.log(`You won ${this.score} point`);
    return this
  }

  logout() {
    console.log(`Bye ${this.name}`);
    return this
  }
}

// new keyword
// creo una instancia de clase
let user1 = new User('ricardo', 'ricardo@mail.com');
console.log(user1.login().logout());