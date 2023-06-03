const prom = new Promise((resolve, reject) => {
  const number = 15;
  if (number > 10) {
    resolve(number);
  } else {
    reject(number);
  }
});
console.log(prom);
prom.then((val) => console.log(val)).catch((err) => console.error(err));
