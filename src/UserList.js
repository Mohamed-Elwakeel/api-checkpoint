import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const usersData = "https://jsonplaceholder.typicode.com/users";

export function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get(usersData).then((response) => {
      setListOfUser(response.data);
    });
  }, []);

  return (
    <ol>
      {listOfUser.map((user) => (
        <>
          <li key={user.id}>{user.name}</li>
          <li key={user.id}>{user.username}</li>
          <li key={user.id}>{user.email}</li>
          <li key={user.id} className="user-list">
            {user.phone}
          </li>
        </>
      ))}
    </ol>
  );
}
