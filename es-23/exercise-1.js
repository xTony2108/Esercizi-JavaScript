const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

function printName(obj) {
    objKey = Object.keys(obj);
    objValue = Object.values(obj);
    for (const i in objKey) {
      let pair = `${objKey[i]}: ${objValue[i]}`;
      console.log(pair);
    }
}

printName(person);