const users = [];

// Join user to chat
const userJoin = ({id, username, room}) => {
  const existingUser = users.find((user) => user.room === room && user.username === username);
  if(existingUser) return { error: 'Username is taken.' };

  const user = { id, username, room };

  users.push(user);

  return { user };
}

const getCurrentUser = (id) => {
  return users.find(user => user.id === id);
}
const getRoom = (room) => {
  return users.filter(user => user.room === room);
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  return users.splice(index, 1)[0];
}


module.exports = {
  userJoin,
  getCurrentUser,
  getRoom,
  removeUser
};
