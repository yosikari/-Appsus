const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM
import { noteService } from "../services/note.service.js"
// import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js';


export function NoteDetails(props) {
  console.log(props)
  const [note, setNote] = useState(null)
  const { noteId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadNote()
  }, [noteId])

  function loadNote() {
    noteService.get(noteId)
      .then((note) => setNote(note))
      .catch((err) => {
        console.log('Had issues in note details', err)
        // showErrorMsg('Cannot load note')
        navigate('/note')
      })
  }
  function onGoBack() {
    navigate('/note')
  }

  if (!note) return <div>Loading...</div>
  return <section className="note-details">


    {note.type === 'note-txt' && <h1 className="note-details-title"> {note.info.txt}</h1>}
    {note.type === 'note-img' && <h1 className="note-details-title"> {note.info.title}</h1>}
    {note.type === 'note-img' && <img className="note-details-img" src={note.info.url} />}
    {note.type === 'note-todo' && <h1 className="note-details-title"> {note.info.label}</h1>}
    {note.type === 'note-todo' && <p> {note.info.todos.map(todo => <li key={todo.id}>{todo.txt}</li>)}</p>}


    <div className="note-details-btns">
      <button onClick={onGoBack}><i className="fa-solid fa-rotate-left"></i></button>
      {note.type === 'note-txt' && <button><Link to={`/note/edit/txt/${note.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></button>}
      {note.type === 'note-img' && <button><Link to={`/note/edit/img/${note.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></button>}
      {note.type === 'note-todo' && <button><Link to={`/note/edit/todo/${note.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></button>}
    </div>
  </section>
}