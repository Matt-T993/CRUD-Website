import { useState } from "react";
import "../index.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState({ text: "" });
  const [characterCount, setCharacterCount] = useState(0);
  const characterLimit = 200;
  const newNoteHandler = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      const date = new Date();

      setNoteText({
        ...noteText,
        text: event.target.value,
        date: date.toLocaleDateString(),
      });
    }
  };

  const clickHandler = (event) => {
    event.preventDefault();
    handleAddNote(noteText);
    setNoteText("");

    console.log("type in some characters");
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Take a note..."
        onChange={newNoteHandler}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - characterCount} Remaining</small>
        <button onClick={clickHandler} className="save">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNote;
