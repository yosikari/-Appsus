const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM
import { noteService } from "../services/note.service.js"

export function NoteImg(props) {

  const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNoteImg())
  const navigate = useNavigate()

  function handleChange({ target }) {
    let { value, type, name: field, files } = target

    setNoteToEdit((prevNoteToEdit) => {
      if (field === 'text') {
        return {
          ...prevNoteToEdit,
          info: { ...prevNoteToEdit.info, title: value },
        }
      }
      if (field === 'url') {
        return {
          ...prevNoteToEdit,
          info: { ...prevNoteToEdit.info, url: value },
        }
      }
      if (field === 'checkbox') {
        return {
          ...prevNoteToEdit,
          isPinned: true
        }
      }
      if (field === 'colors') {
        return {
          ...prevNoteToEdit,
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
      <label htmlFor="text">Title : </label>
      <input type="text"
        name="text"
        id="text"
        placeholder="Enter text..."
        value={noteToEdit.info.title}
        onChange={handleChange}
      />
      <label htmlFor="url">URL : </label>
      <input type="text"
        name="url"
        id="url"
        placeholder="Enter your url..."
        value={noteToEdit.info.url}
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