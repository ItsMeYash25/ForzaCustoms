import React from "react";
import BackToHome from "../components/BackToHome";
import axios from "axios";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState();
  async function getUsers() {
    const response = await axios.get("/users/");
    setUsers(response.data);
  }
  getUsers();
  return (
    <main>
      <div className="parts-page-style navbar">
        <BackToHome />
      </div>
      <div className="m-4 table-responsive">
        <table className="table table-bordered">
          <thead className="part-table-head">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody className="part-table-font">
            {users?.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin === true ? "Admin" : "User"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Users;
