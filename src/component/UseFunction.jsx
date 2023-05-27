import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersFunction = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-list">
      {users.map((user, index) => (
        <div className="user-carrd" key={index}>
          <p className="user-name">Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersFunction;
