import React from "react";
import { TiDelete } from "react-icons/ti";
import { MdOutlineAddCircle } from "react-icons/md";
import "../index.css";

const Note = ({ id, text, date, handleDeleteNote, handleUpdateNote }) => {
  return (
    <div className="note">
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
};

export default Note;
