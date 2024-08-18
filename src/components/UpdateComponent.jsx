import React from "react";

const UpdateComponent = ({ onClose, data }) => {
  return (
    <div className="update-component">
      <button className="update-component__close" onClick={onClose}>
        X
      </button>
      <h2 className="update-component__header">Update User</h2>
      <form className="update-component__form">
        <input type="text" placeholder="Name" defaultValue={data.name} />
        <input type="email" placeholder="Email" defaultValue={data.email} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateComponent;
