import React from "react";
import "../App.css";

const UserCard = ({ user, onClose }) => {
  return (
    <div className="user-card">
      <button className="user-card__close" onClick={onClose}>
        Close
      </button>
      <div className="user-card__avatar">{user.avatar}</div>
      <h3 className="user-card__name">
        {user.first_name} {user.last_name}
      </h3>
      <p className="user-card__info">Address: {user.address}</p>
      <p className="user-card__info">Karma: {user.karma}</p>
      <p className="user-card__info">Followers: {user.followers}</p>
      <p className="user-card__info">Posts: {user.posts}</p>
      <p className="user-card__info">
        Following: {user.following ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default UserCard;
