import { NotePreview } from "./note-preview.jsx";
const { Link } = ReactRouterDOM


export function NoteList({ notes, onRemoveNote }) {
    return <ul className="note-list">
        {
            notes.map(note => <li key={note.id}>
                <NotePreview note={note} />
                <div>
                    <button onClick={() => onRemoveNote(note.id)}>X</button>
                    <button> <Link to={`/note/${note.id}`}>Details</Link> </button>
                    <button> <Link to={`/note/edit/${note.id}`}> Edit</Link> </button>
                </div>
            </li>)
        }
    </ul>
}