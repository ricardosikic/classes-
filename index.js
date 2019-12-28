// las clases son funciones especiales, que permiten optimizar la escritura de codigo.
// las clases son usualmente utilizadas cuando debo crear, muchos objetos que comparten mismos atributos y metodos.


// las clases utilizan el metodo constructor que se encarga de crear las nuevas instancias de la clase

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
    this.num_rectangulos = 0;
  }

  calculaArea() {
    this.num_rectangulos++;
    console.log(`el area es ${this.alto * this.ancho}`);
  }
}

// mediante la palabra clave new
// creo un objeto
let rectangulo_1 = new Rectangulo(14, 20);
console.log(rectangulo_1.calculaArea());





































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