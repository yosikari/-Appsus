const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

export function NoteTxt(props) {
  console.log(props)
  const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNoteTxt())
  const [isPinned, setIsPinned] = useState(false)
  const navigate = useNavigate()
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

  function handlePinned() {
    setIsPinned(prevIsPinned => !prevIsPinned)
    setNoteToEdit(prevNoteToEdit => ({
      ...prevNoteToEdit,
      isPinned: !isPinned
    }
    ))
  }

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
    !noteToEdit.id && props.handleCard(false)
    noteService.save(noteToEdit).then(() => props.loadNotes())
    // showSuccessMsg('note saved!')
    navigate('/note')
  }

  return <div className="note-input-txt-card">
    <form className="note-add-card" onSubmit={onSaveNote}>
      {/* <label htmlFor="text">Your Text : </label> */}
      <input type="text"
        className="add-note-text-input"
        name="text"
        id="text"
        title="Your note"
        placeholder="Text..."
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


      < div className="add-note-btn-bottom">
        <div >
          <button type="submit"> {noteToEdit.id ? <i className="fa-regular fa-pen-to-square"></i> : <i className="fa-regular fa-plus"></i>}</button>
          <button type="button" onClick={() => props.handleCard(false)}> <Link to="/note"><i className="fa-sharp fa-solid fa-xmark"></i></Link> </button>
          <button onClick={handlePinned} type="button"><i style={(isPinned) ? { color: "black" } : { color: " #8a8a8a" }} className="fa-sharp fa-solid fa-map-pin"></i></button>
        </div>
      </div>
    </form >
  </div >
}