import { useState } from "react";
import "./index.css";
import StickyNotes from "./pages/StickyNotes";
import Login from "./pages/login/Login";
import Header from "./components/Header";
import Register from "./pages/login/Register";

const App = () => {
  const [user, setUser] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header ToggleDarkMode={setDarkMode} />
        {/* <Register /> */}
        {/* <Login user={user} setUser={setUser} /> */}
        <StickyNotes />
      </div>
    </div>
  );
};

export default App;
