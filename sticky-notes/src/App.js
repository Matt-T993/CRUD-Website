import { useState, useEffect } from "react";
import axios from "axios";
import NoteList from "./components/NoteList";
//import Search from "./components/Search";
import Header from "./components/Header";

import "./index.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("response: ", response);
      setNotes(response.data);
    });
  }, []);

  //adds a sticky note
  const addNewNotes = (newNotes) => {
    axios.post("http://localhost:3001/notes", newNotes).then((response) => {
      console.log("POST response", response);

      setNotes([...notes, response.data]);
    });
  };
  //delete a sticky notes
  const deleteNote = (id) => {
    console.log("delete", id);
    axios.delete(`http://localhost:3001/notes/${id}`).then((response) => {
      console.log("delete succeeded");
      //delete local copy
      const newNotes = notes.filter((u) => u.id !== id);
      setNotes(newNotes);
    });
  };

  // const updateNote = (id) => {
  //   console.log("update", id);
  //   axios
  //     .put(`http://localhost:3001/notes/${id}`, { note: newNote, id: id })
  //     .then((response) => {
  //       console.log("update succeeded");
  //       set

  //     });
  // };

  ///const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header ToggleDarkMode={setDarkMode} />
        <NoteList
          notes={notes}
          handleDeleteNote={deleteNote}
          handleAddNote={addNewNotes}
          // handleUpdateNote={updateNote}
        />

        {/* // <Search searchText={setSearchText} /> */}
        {/* <NoteList
          notes={notes}
          // notes={notes.filter((note) =>
          //   note.text.toLowerCase().includes(searchText)
          // )}
          handleAddNote={addNewNotes}
          handleDeleteNote={deleteNote}
        /> */}
      </div>
    </div>
  );
};

export default App;
