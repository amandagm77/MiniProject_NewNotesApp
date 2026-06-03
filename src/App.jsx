import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add note
  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
    };
    setNotes([newNote, ...notes]);
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Start editing
  const startEdit = (note) => {
    setEditingNote(note);
  };

  // Update note
  const updateNote = (updatedText) => {
    setNotes(
      notes.map((note) =>
        note.id === editingNote.id
          ? { ...note, text: updatedText }
          : note
      )
    );
    setEditingNote(null);
  };

  // Clear all notes
  const clearAll = () => {
    setNotes([]);
  };

  // Filter notes
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>📝 Notes App</h1>

      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <NoteForm
        addNote={addNote}
        editingNote={editingNote}
        updateNote={updateNote}
      />

      <div className="controls">
        <p>Total Notes: {notes.length}</p>
        <button onClick={clearAll}>Clear All</button>
      </div>

      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;