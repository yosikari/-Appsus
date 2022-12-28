import { noteService } from "../services/note.service.js"
const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

export function NoteAdd({ loadNotes }) {
  const [cmpType, setCmpType] = useState(null)
  function onAddBtn(type) {
    setCmpType(type)
  }

  return <div>note add

    <button onClick={() => onAddBtn("note-txt")}>txt</button>
    <button onClick={() => onAddBtn("note-img")}>img</button>
    <button onClick={() => onAddBtn("note-todos")} >todo</button>
    {cmpType && <DynamicCmp loadNotes={loadNotes} cmpType={cmpType} />}

  </div>

}
function DynamicCmp(props) {//props is the note.type
  console.log('DynamicCmp', props)
  switch (props.cmpType) {
    case 'note-txt':
      return <NoteTxt {...props} />
    case 'note-img':
      return <NoteImg {...props} />
    case 'note-todo':
      return <NoteTodo {...props} />
  }
}
function NoteTxt(props) {
  console.log('txt', props)
  const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNoteTxt())
  const navigate = useNavigate()

  function handleChange({ target }) {
    let { value, type, name: field } = target
    value = type === 'number' ? +value : value

    setNoteToEdit((prevNoteToEdit) => {
      if (field === 'text') {
        return {
          ...prevNoteToEdit,
          info: { ...prevNoteToEdit.info, txt: value }
        }
      }
      if (field === 'color') {
        return {
          ...prevNoteToEdit,
          info: { ...prevNoteToEdit.style, backgroundColor: value }
        }
      }
      return ({ ...prevBookToEdit, [field]: value })
    })
    console.log(noteToEdit)
  }


  function onSaveNote(ev) {
    ev.preventDefault()
    noteService.save(noteToEdit).then(() => loadNotes())
    // console.log('note saved', note);
    props.loadNotes()
    // showSuccessMsg('note saved!')
    navigate('/note')
  }
  return <div>
    <form onSubmit={onSaveNote}>
      <label htmlFor="text">text : </label>
      <input type="text"
        name="text"
        id="text"
        placeholder="Enter text..."
        value={noteToEdit.info.txt}
        onChange={handleChange}
      />
      <input type="color"
        name="color"
        id="color"

        value={noteToEdit.style.backgroundColor.hex}
        onChange={handleChange}
      />


      <div>
        <button>{noteToEdit.id ? 'Save' : 'Add'}</button>
        <button> <Link to="/note">Cancel</Link> </button>
      </div>
    </form>

  </div>
}
function NoteImg(props) {
  return <div>
    <h4> {props.note.info.title}</h4>
    <img src={props.note.info.url} />
  </div>


}
function NoteTodo(props) {
  return <div>
    <h4> {props.note.info.label}</h4>
    <p> {props.note.info.todos[0].txt}</p>

  </div>
}