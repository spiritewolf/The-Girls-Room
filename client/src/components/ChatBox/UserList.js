import React from 'react';

export const UserList = ({users}) => {

  const numUsers = users.length;

  return(
    <div>
      {users.map(({username}) => <h2 key={username}>{username}</h2>)}
      <h2> There {(numUsers === 1) ? "is" : "are" } {numUsers} {(numUsers === 1) ? "user" : "users" } in this room </h2>
    </div>
  );
}
