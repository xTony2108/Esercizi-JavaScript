// function nicknameMap(persons) {
//   let arr = [];
//   for (let key of persons) {
//     let obj = {nickname: key.name + "-" + key.age};
//     // senza .push
//     // arr[arr.length] = obj;
//     arr.push(obj);
//   }
//   return arr;
// }

// Ne ho fatti due perchè non ho capito bene la traccia

function nicknameMap(persons) {
  let arr = [];
  for (let key of persons) {
    // senza .push
    // arr[arr.length] = key.name + "-" + key.age; 
    arr.push(key.name + "-" + key.age);
  }
  return arr;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);
