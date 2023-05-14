class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromObject(object) {
    this.personObj = new Person(object.firstName, object.lastName);
    return this.personObj;
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
