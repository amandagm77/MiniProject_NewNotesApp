import { useEffect, useState } from "react";

function NoteForm({ addNote, editingNote, updateNote }) {
  const [text, setText] = useState("");

  // If editing, populate input
  useEffect(() => {
    if (editingNote) {
      setText(editingNote.text);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    if (editingNote) {
      updateNote(text);
    } else {
      addNote(text);
    }

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default NoteForm;