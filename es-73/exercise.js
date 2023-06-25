const printAsyncName = (callback, name) => {
  if (typeof name !== "string") {
    console.error("Name is not a string");
  } else {
    setTimeout(callback, 1000);
    setTimeout(() => {
      console.log(name);
    }, 2000);
  }
};

printAsyncName(() => {
  console.log("hello");
}, "Mario");
