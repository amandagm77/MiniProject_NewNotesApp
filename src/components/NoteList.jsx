import NoteCard from "./NoteCard";

function NoteList({ notes, deleteNote, startEdit }) {
  if (notes.length === 0) {
    return <p>No notes found.</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          startEdit={startEdit}
        />
      ))}
    </div>
  );
}

export default NoteList;