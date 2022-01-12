import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NoteList from "../components/NoteList";
//import Search from "./components/Search";

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/api/notes").then((response) => {
      console.log("response: ", response);
      setNotes(response.data);
    });
  }, []);

  //adds a sticky note
  const addNewNotes = (newNotes) => {
    axios.post("http://localhost:3001/api/notes", newNotes).then((response) => {
      console.log("POST response", response);

      setNotes([...notes, response.data]);
    });
  };
  //delete a sticky notes
  const deleteNote = (id) => {
    console.log("delete", id);
    axios.delete(`http://localhost:3001/api/notes/${id}`).then((response) => {
      console.log("delete succeeded");
      //delete local copy
      const newNotes = notes.filter((u) => u.id !== id);
      setNotes(newNotes);
    });
  };

  const updateNote = (id) => {
    console.log("update", id);
    axios.put(`http://localhost:3001/api/notes/${id}`).then((response) => {
      setIsEditing(true);
      setEditID(id);
      setNotes(notes);
      console.log("update succeeded");
    });
  };

  //const [searchText, setSearchText] = useState("");

  return (
    <div>
      <NoteList
        notes={notes}
        handleDeleteNote={deleteNote}
        handleAddNote={addNewNotes}
        handleEditing={isEditing}
        handleEditID={editID}
        handleUpdateNote={updateNote}
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
  );
};

export default StickyNotes;
