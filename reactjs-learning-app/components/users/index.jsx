// export default Users;  We can do this directly as well, as done below

import { useEffect, useState } from "react";

// IMP : name of the functional components must start with an UpperCase!

export default function Users() {
  const [users, setUsers] = useState([]);

  /*
  useEffect(() => {
    fetchAllUsers();
  }, []);
  */
  // This will load all the users on the page load

  async function fetchAllUsers() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();

      if (result?.users) setUsers(result?.users);
    } catch (e) {
      console.log(e);
    }
  }

  console.log(users);
  return (
    <div>
      <h3>This is from the Users functional component! </h3>
      <button onClick={fetchAllUsers}> Click to get Users</button>

      <ul>
        {users ? (
          users.map((item) => (
            <li style={{ listStyle: "none" }}>
              {item.firstName} {item.lastName}
            </li>
          ))
        ) : (
          <h1>No users found</h1>
        )}
      </ul>
    </div>
  );
}
