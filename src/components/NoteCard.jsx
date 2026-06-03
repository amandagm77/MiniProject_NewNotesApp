function NoteCard({ note, deleteNote, startEdit }) {
  return (
    <div className="note-card">
      <p>{note.text}</p>

      <div className="buttons">
        <button onClick={() => startEdit(note)}>Edit</button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default NoteCard;