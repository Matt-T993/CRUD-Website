import React from "react";

import "../index.css";
import AddNote from "./AddNote";
import { TiDelete } from "react-icons/ti";
import { MdOutlineAddCircle } from "react-icons/md";

const NoteList = ({
  notes,
  handleDeleteNote,
  handleAddNote,
  handleUpdateNote,
  handleIsEditing,
  handleEditID,
}) => {
  return (
    <div className="note-list">
      {notes.map((note) => {
        const { id, text, date } = note;
        return (
          <div className="note" key={id}>
            <span className="text">{text}</span>
            <div className="note-footer">
              <small>{date}</small>
              <MdOutlineAddCircle
                className="update"
                onClick={() => handleUpdateNote(id)}
              />
              <TiDelete
                onClick={() => handleDeleteNote(id)}
                className="delete"
                size="1.3em"
              />
            </div>
          </div>
        );
      })}
      <AddNote
        handleAddNote={handleAddNote}
        handleIsEditing={handleIsEditing}
        notes={notes}
        handleEditID={handleEditID}
      />
    </div>
  );
};
export default NoteList;
