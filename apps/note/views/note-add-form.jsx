import { noteService } from "../services/note.service.js"
import { NoteTodo } from "../views/note-todo.jsx"
import { NoteImg } from "../views/note-img.jsx"
import { NoteTxt } from "../views/note-txt.jsx"


const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

export function NoteAddForm({ loadNotes }) {
  const [cmpType, setCmpType] = useState(null)
  function onAddBtn(type) {
    setCmpType(type)
  }

  return <div>
    <div className="add-note-btn-container">
      <p onClick={() => onAddBtn("note-txt")}>Take a note....</p>
      <div className="add-note-btns" >
        <button title="Add text" onClick={() => onAddBtn("note-txt")}><i class="fa-sharp fa-solid fa-pen"></i></button>
        <button title="Add image" onClick={() => onAddBtn("note-img")}><i class="fa-regular fa-image"></i></button>
        <button title="Add todos" onClick={() => onAddBtn("note-todo")} ><i class="fa-regular fa-square-check"></i></button>
      </div>
    </div>
    {cmpType && <DynamicCmp loadNotes={loadNotes} cmpType={cmpType} />}
  </div>
}
function DynamicCmp(props) {//props is the note.type
  // console.log('DynamicCmp', props)
  switch (props.cmpType) {
    case 'note-txt':
      return <NoteTxt {...props} />
    case 'note-img':
      return <NoteImg {...props} />
    case 'note-todo':
      return <NoteTodo {...props} />
  }
}
