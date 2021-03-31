const users = [];

//addUser
const addUser = ({ id, username, room }) => {
  //clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //validate the data
  if (!username || !room) {
    return {
      error: "username and room are required!",
    };
  }

  //check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username 
  })
  
  // Validate username
  if(existingUser) {
    return {
      error: 'Username is in use!'
    }
  }

  // Store user
  const user = {
    id,
    username,
    room
  }
  users.push(user)
  return{ user }
};

//removeUser
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id)

  if (index !== -1){
    return users.splice(index, 1)[0]
  }
}

//getUser
const getUser = (id) => {
  return users.find((user) => user.id === id)
} 

//getUsersInRoom
const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room.trim().toLowerCase())
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}