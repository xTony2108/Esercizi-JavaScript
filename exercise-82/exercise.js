const user = {
  id: 1,
  name: "John",
  age: 25,
};

const saveLocalStorage = () => {
  const { name } = user;
  localStorage.setItem("name", JSON.stringify(name));
};

saveLocalStorage();
