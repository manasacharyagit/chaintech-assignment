const KEY = 'users';

export const registerUser = (user) => {
  const existingUsers = JSON.parse(localStorage.getItem(KEY)) || [];
  const updatedUsers = [...existingUsers, user];
  localStorage.setItem(KEY, JSON.stringify(updatedUsers));
};

export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem(KEY)) || [];
  return users.find((user) => user.email === email && user.password === password);
};

export const getUserByEmail = (email) => {
  const users = JSON.parse(localStorage.getItem(KEY)) || [];
  return users.find((user) => user.email === email);
};
export const emailExists = (email) => {
    const users = JSON.parse(localStorage.getItem(KEY)) || [];
    return users.some((user) => user.email === email);
};


