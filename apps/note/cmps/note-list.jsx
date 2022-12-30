import { NotePreview } from "./note-preview.jsx";
const { Link } = ReactRouterDOM


export function NoteList({ notes, onRemoveNote }) {
    return <ul className="note-list">
        {
            notes.map(note => <li key={note.id}>
                <NotePreview note={note} />
                <div>
                    <button onClick={() => onRemoveNote(note.id)}><i className="fa-regular fa-trash-can"></i></button>
                    <button> <Link to={`/note/${note.id}`}>Details</Link> </button>
                    {note.type === 'note-txt' && <button><Link to={`/note/edit/txt/${note.id}`}>Edit</Link></button>}
                    {note.type === 'note-img' && <button><Link to={`/note/edit/img/${note.id}`}>Edit</Link></button>}
                    {note.type === 'note-todo' && <button><Link to={`/note/edit/todo/${note.id}`}>Edit</Link></button>}


                </div>
            </li>)
        }
    </ul>
}