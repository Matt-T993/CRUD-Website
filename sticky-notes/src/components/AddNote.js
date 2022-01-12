import { useState } from "react";
import "../index.css";

const AddNote = ({ handleAddNote, notes, handleEditID, handleIsEditing }) => {
  const [noteText, setNoteText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const characterLimit = 200;

  const handleChange = (event) => {
    event.preventDefault();
    setCharacterCount({ ...characterCount, text: event.target.value.length });
    console.log(characterCount);

    const date = new Date();
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText({
        ...noteText,
        text: event.target.value,
        date: date.toLocaleDateString(),
      });
    }
  };

  const handleSaveClick = () => {
    if (handleIsEditing && noteText) {
      notes.map((note) => {
        if (note.id === handleEditID) {
          return { ...note, text: noteText };
        }
        return note;
      });
      setNoteText({ text: "" });
      handleEditID(null);
      handleIsEditing(false);
      setCharacterCount(0);
    } else {
      if (noteText.text.trim().length > 0) {
        handleAddNote(noteText);
        setNoteText({ text: "" });
        setCharacterCount(0);
      }
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText.text}
        onChange={handleChange}
        maxLength={200}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - characterCount.text} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          {handleIsEditing ? "Edit" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default AddNote;
