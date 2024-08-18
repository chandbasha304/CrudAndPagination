import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Sidebar = ({ onOptionClick }) => {
  return (
    <div className="sidebar">
      <button
        className="sidebar__option"
        onClick={() => onOptionClick("users")}
      >
        User Management
      </button>
      {/* Add more sidebar options as needed */}
      <button
        className="sidebar__option"
        onClick={() => onOptionClick("settings")}
      >
        Settings
      </button>
      <button className="sidebar__option sidebar__logout">Logout</button>
    </div>
  );
};

export default Sidebar;
