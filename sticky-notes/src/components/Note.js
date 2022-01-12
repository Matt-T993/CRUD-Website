import React from "react";
import { TiDelete } from "react-icons/ti";
import { MdOutlineAddCircle } from "react-icons/md";

const Note = ({ note, handleDeleteNote, handleUpdateNote }) => {
  return (
    <div className="note">
      <span className="text">{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <MdOutlineAddCircle
          className="update"
          onClick={() => handleUpdateNote(note.id)}
        />
        <TiDelete
          onClick={() => handleDeleteNote(note.id)}
          className="delete"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
