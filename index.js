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


// Ahora veremos Expresiones de clases, que solo es otra forma de definir
// una clases las cuales pueden ser anonimas o nomradas

// expresion de clase anonima
let Auto = class {
  constructor(marca, motor) {
    this.marca = marca;
    this.motor = motor;
  }

  info() {
    console.log(`la marca es ${this.marca}, tiene motor ${this.motor}`);
  }
}

// nueva instancia
let auto_1 = new Auto('hyundai', 1.7);
console.log(auto_1.info());


// expresion de clase nombrada
let Car = class Car {
   constructor(marca, motor) {
    this.marca = marca;
    this.motor = motor;
  }

  info() {
    console.log(`la marca es ${this.marca}, tiene motor ${this.motor}`);
  }
}

let auto_2 = new Car('subaru', 2.5);
console.log(auto_2.info());


// Como pueden ver existen 3 tipos de maneras de poder crear clases en javascript
// la primera es creando una clase por medio de la palabra reservada class
// y las otras 2 maneras es por medio de la creacion de expresiones de clases


// las cuales pueden ser anonimas:
// let A = class {}

// como tambien pueden ser nombradas
// let B = class B {}


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