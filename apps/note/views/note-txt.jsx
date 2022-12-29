import { noteService } from "../services/note.service.js"
import { NoteTodo } from "../views/note-todo.jsx"
import { NoteImg } from "../views/note-img.jsx"


const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM



export function NoteTxt(props) {
  const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNoteTxt())
  const navigate = useNavigate()

  function handleChange({ target }) {
    let { value, type, name: field } = target
    //     value = type === 'number' ? +value : value

    setNoteToEdit((prevNoteToEdit) => {
      if (field === 'text') {
        return {
          ...prevNoteToEdit,
          info: { ...prevNoteToEdit.info, txt: value },
          // style: { backgroundColor: colorPicker }
        }
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

  function onSaveNote(ev) {
    ev.preventDefault()
    noteService.save(noteToEdit).then(() => props.loadNotes())
    // showSuccessMsg('note saved!')
    navigate('/note')
  }
  return <div className="note-input-txt-card">
    <form onSubmit={onSaveNote}>
      <label htmlFor="text">text : </label>
      <input type="text"
        name="text"
        id="text"
        placeholder="Enter text..."
        value={noteToEdit.info.txt}
        onChange={handleChange}
      />

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

      <label>
        <input
          type="checkbox"
          name="checkbox"
          value={noteToEdit.isPinned}
          onChange={handleChange}
        />
        pinned?
      </label>

      < div >
        <button>{noteToEdit.id ? 'Save' : 'Add'}</button>
        <button> <Link to="/note">Cancel</Link> </button>
      </div>
    </form >

  </div >
}