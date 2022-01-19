import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NoteList from "../components/NoteList";
//import Search from "./components/Search";
import notesService from "../services/notes";

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);

  //get all sticky notes
  useEffect(() => {
    notesService.getAll().then((objects) => {
      setNotes(objects);
    });
  }, []);
  //adds a sticky note
  const addNewNotes = (newNotes) => {
    notesService.create(newNotes).then((object) => {
      setNotes([...notes, object]);
    });
  };
  //delete a sticky notes
  const deleteNote = (id) => {
    notesService.del(id).then((object) => {
      const newNotes = notes.filter((u) => u.id !== id);
      setNotes(newNotes);
    });
  };

  const updateNote = (id) => {
    console.log("update", id);
    axios.put(`http://localhost:3001/api/notes/${id}`).then((response) => {
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
