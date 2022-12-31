import { NotePreview } from "./note-preview.jsx";
const { Link } = ReactRouterDOM

// style={{ backgroundColor: props.note.style.backgroundColor }}
export function NoteList({ notes, onRemoveNote }) {
    return <ul className="note-list">
        {
            notes.map(note => <li style={{ backgroundColor: note.style.backgroundColor }} className={(note.type === 'note-img') ? "note-card-item note-card-item-img" : (note.type === 'note-txt') ? "note-card-item note-card-item-txt" : "note-card-item note-card-item-todo"} key={note.id}>
                <NotePreview note={note} />
                <div className="note-preview-btns button">
                    <button onClick={() => onRemoveNote(note.id)}><i className="fa-regular fa-trash-can"></i></button>
                    <button> <Link to={`/note/${note.id}`}><i className="fa-solid fa-list"></i></Link> </button>
                    {note.type === 'note-txt' && <button><Link to={`/note/edit/txt/${note.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></button>}
                    {note.type === 'note-img' && <button><Link to={`/note/edit/img/${note.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></button>}
                    {note.type === 'note-todo' && <button><Link to={`/note/edit/todo/${note.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></button>}
                </div>
            </li>)
        }
    </ul>
}