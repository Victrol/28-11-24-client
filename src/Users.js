import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
      <button onClick={fetchUsers}>Get users</button>
    </div>
  );
};

export default Users;
