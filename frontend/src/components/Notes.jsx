import "../styles/Note.css"

const Notes = ({ note, onDelete }) => {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="note-container">
        <p className="note-title">
            {note.title}
        </p>
        <p className="note-content">
            {note.content}
        </p>
        <p className="note-date">
            {formattedDate}
        </p>
        <button className="delete-btn" onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  )
}

export default Notes