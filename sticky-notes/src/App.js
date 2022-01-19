import { useState } from "react";
import "./index.css";
import StickyNotes from "./pages/StickyNotes";
import Navbar from "./components/NavBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [editText, setEditText] = useState("");

  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/note"
            element={<StickyNotes notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
