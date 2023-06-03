const isLogged = true;

const firstPromise = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      let num = Math.random();
      console.log(num);
      resolve(num);
    } else {
      reject(new Error("User not logged in"));
    }
  });
};

const secondPromise = (num) => {
  if (typeof num !== "number") {
    console.error("Not a number");
  } else {
    return new Promise((resolve, reject) => {
      if (num > 0.5) {
        let obj = { name: "John", age: 24 };
        resolve(obj);
      } else {
        reject(new Error("Number too low"));
      }
    });
  }
};

const returnObj = (obj) => {
  console.log(obj);
  return obj;
};

firstPromise(isLogged)
  .then(secondPromise)
  .then(returnObj)
  .catch((error) => console.error(error))
  .finally(() =>
    console.log(
      "Step che voglio eseguire indipendentemente dallo stato della promise"
    )
  );
