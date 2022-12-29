const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM
import { noteService } from "../services/note.service.js"
// import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js';


export function NoteDetails() {
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
    <h2>note id: {note.id}</h2>
    <h2>note type: {note.type}</h2>

    <h3> {note.info.title}</h3>
    <img src={note.info.url} />
    <button onClick={onGoBack}>Go Back</button>
    {note.type === 'note-txt'}&&<button><Link to={`/note/edit/txt/${note.id}`}>Edit</Link></button>

  </section>
}