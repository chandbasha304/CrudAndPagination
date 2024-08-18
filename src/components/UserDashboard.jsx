import React, { useState } from "react";
import UpdateComponent from "./UpdateComponent";

const UserDashboard = () => {
  const [isUpdateVisible, setUpdateVisible] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  const handleUpdateClick = () => setUpdateVisible(true);
  const handleCloseUpdate = () => setUpdateVisible(false);

  return (
    <div className="user-dashboard">
      <h1 className="user-dashboard__title">User Dashboard</h1>
      <table className="user-dashboard__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="user-dashboard__row">
            <td>{userData.name}</td>
            <td>{userData.email}</td>
            <td>
              <button onClick={handleUpdateClick}>Update</button>
            </td>
          </tr>
        </tbody>
      </table>

      {isUpdateVisible && (
        <UpdateComponent onClose={handleCloseUpdate} data={userData} />
      )}
    </div>
  );
};

export default UserDashboard;
