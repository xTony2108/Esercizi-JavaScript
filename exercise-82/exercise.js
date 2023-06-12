const user = {
  id: 1,
  name: "John",
  age: 25,
};

const saveLocalStorage = () => {
  localStorage.setItem("user", JSON.stringify(user));
};

saveLocalStorage();
