const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

//Assegnando person1 a person2 non viene istanziato o copiato un nuovo oggetto
//bensì person2 accede alla stessa locazione di memoria di person1 e quindi è lo stesso oggetto

console.log(person1);
console.log(person2);