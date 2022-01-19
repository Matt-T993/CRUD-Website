import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({
  notes,
  handleDeleteNote,
  handleAddNote,
  handleUpdateNote,
}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
export default NoteList;
