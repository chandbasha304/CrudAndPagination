import React, { useState } from "react";
import UserDashboard from "./components/UserDashboard";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("users");

  const handleOptionClick = (option) => {
    setActiveComponent(option);
  };

  return (
    <div className="app-container">
      <Sidebar onOptionClick={handleOptionClick} />
      <div className="content">
        {activeComponent === "users" && <UserDashboard />}
        {/* Add more conditions for other components */}
      </div>
    </div>
  );
};

export default App;
