import React from "react";

const Header = ({ ToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Sticky Notes</h1>
      <ul>
        <li>Register</li>
        <li>Login</li>
      </ul>

      <button
        onClick={() => ToggleDarkMode((previousDarkMode) => !previousDarkMode)}
        className="toggle"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
