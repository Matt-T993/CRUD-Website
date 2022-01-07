import React from "react";
import Note from "./Note";
import "../index.css";
import AddNote from "./AddNote";

const NoteList = ({
  notes,
  handleDeleteNote,
  handleAddNote,
  handleUpdateNote,
}) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleDeleteNote={handleDeleteNote}
          handleAddNote={handleAddNote}
          handleUpdateNote={handleUpdateNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
