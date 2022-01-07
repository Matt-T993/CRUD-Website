import React from "react";

const Header = ({ ToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Sticky Notes</h1>
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
