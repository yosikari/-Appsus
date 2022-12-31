const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"
import { NoteImg } from "../views/note-img.jsx"
import { utilService } from "../../../services/util.service.js"
import { TodoCreate } from "../cmps/todo-create.jsx"



export function NoteTodo(props) {
  const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNoteTodo())
  const navigate = useNavigate()
  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])
  const [todos, setTodos] = useState([])
  const [isPinned, setIsPinned] = useState(false)
  const { noteId } = useParams()

  useEffect(() => {
    if (!noteId) return
    loadNote()
  }, [])

  function loadNote() {
    noteService.get(noteId)
      .then((note) => setNoteToEdit(note))
      .catch((err) => {
        console.log('Had issues in note details', err)
        navigate('/note')
      })
  }

  function handleChange({ target }) {
    let { value, type, name: field } = target
    //     value = type === 'number' ? +value : value
    setNoteToEdit((prevNoteToEdit) => {
      if (field === 'todos-label') {
        return {
          ...prevNoteToEdit,
          info: { ...prevNoteToEdit.info, label: value },
          // style: { backgroundColor: colorPicker }
        }
      }
      if (field === 'todos1') {

      }
      if (field === 'checkbox') {
        return {
          ...prevNoteToEdit,
          // info: { ...prevNoteToEdit.info, txt: value },
          isPinned: true
        }
      }
      if (field === 'colors') {
        return {
          ...prevNoteToEdit,
          // info: { ...prevNoteToEdit.info, txt: value },
          style: { backgroundColor: value }
        }
      }

    })
  }

  function handlePinned() {
    console.log('pinned', isPinned)
    setIsPinned(prevIsPinned => !prevIsPinned)
    console.log('pinned', isPinned)
    setNoteToEdit(prevNoteToEdit => ({
      ...prevNoteToEdit,
      isPinned: !isPinned
    }
    ))
  }
  function addItems(items) {
    console.log(items)
    console.log(items)
    console.log(noteToEdit)
    setNoteToEdit(prevNote => ({
      ...prevNote, info: {
        ...prevNote.info,
        // todos: [...prevNote.info.todos, ...items]
        todos: [...prevNote.info.todos, items]

      }
    }))
    console.log(noteToEdit)
    //items
  }
  function onSaveNote(ev) {
    ev.preventDefault()
    !noteToEdit.id && props.handleCard(false)
    console.log(noteToEdit)
    noteService.save(noteToEdit).then(() => props.loadNotes())
    // showSuccessMsg('note saved!')
    navigate('/note')
  }
  return <div className="note-input-txt-card">
    <form className="note-add-card" onSubmit={onSaveNote}>
      {/* <label htmlFor="todos-label">Label your todos : </label> */}
      <input type="text"
        name="todos-label"
        id="todos-label"
        placeholder="Your list name..."
        value={noteToEdit.info.label}
        onChange={handleChange}
      />
      <TodoCreate todos={todos} addItems={addItems} />
      <select onChange={handleChange} name="colors" id="colors" multiple>
        <option style={{ backgroundColor: '#fbf8cc' }} value="#fbf8cc"></option>
        <option style={{ backgroundColor: '#fde4cf' }} value="#fde4cf"></option>
        <option style={{ backgroundColor: '#ffcfd2' }} value="#ffcfd2"></option>
        <option style={{ backgroundColor: '#f1c0e8' }} value="#f1c0e8"></option>
        <option style={{ backgroundColor: '#cfbaf0' }} value="#cfbaf0"></option>
        <option style={{ backgroundColor: '#a3c4f3' }} value="#a3c4f3"></option>
        <option style={{ backgroundColor: '#90dbf4' }} value="#90dbf4"></option>
        <option style={{ backgroundColor: '#8eecf5' }} value="#8eecf5"></option>
        <option style={{ backgroundColor: '#98f5e1' }} value="#98f5e1"></option>
        <option style={{ backgroundColor: '#b9fbc0' }} value="#b9fbc0"></option>
      </select>
      <div className="add-note-btn-bottom">
        <div >
          {/* ADD/SAVE button */}
          <button type="submit">
            {noteToEdit.id ? <i className="fa-regular fa-pen-to-square"></i> : <i className="fa-regular fa-plus"></i>}
          </button>
          {/* CLOSE BUTTON */}
          <button type="button" onClick={() => props.handleCard(false)}> <Link to="/note"><i className="fa-sharp fa-solid fa-xmark"></i></Link> </button>

          {/* PIN BUTTON */}
          <button onClick={handlePinned} type="button"><i style={(isPinned) ? { color: "black" } : { color: " #8a8a8a" }} className="fa-sharp fa-solid fa-map-pin"></i></button>
        </div>
      </div>
    </form >
  </div >
}