class Person {
  #_firstName;
  #_lastName;
  #_age;
  constructor(firstName, lastName, age) {
    this.#_firstName = firstName;
    this.#_lastName = lastName;
    this.#_age = age;
  }

  set firstName(newVal) {
    this.#_firstName = newVal;
  }

  get firstName() {
    return this.#_firstName;
  }

  set lastName(newVal) {
    this.#_lastName = newVal;
  }

  get lastName() {
    return this.#_lastName;
  }

  set age(newVal) {
    this.#_age = newVal;
  }

  get age() {
    return this.#_age;
  }

  get fullName() {
    return `${this.#_firstName} ${this.#_lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
