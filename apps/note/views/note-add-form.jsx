import { noteService } from "../services/note.service.js"
import { NoteTodo } from "../views/note-todo.jsx"
import { NoteImg } from "../views/note-img.jsx"
import { NoteTxt } from "../views/note-txt.jsx"


const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM
export function NoteAddForm({ loadNotes }) {
  const [cmpType, setCmpType] = useState(null)
  const [isCard, setIsCard] = useState(false)

  function onAddBtn(type) {
    setCmpType(type)

  }
  function handleCard(term) {
    setIsCard(term)
    console.log(isCard)

  }

  return <div>
    <div className="add-note-btn-container">
      <p onClick={() => onAddBtn("note-txt")}>Take a note....</p>
      <div className="add-note-btns" >
        <button title="Add text" onClick={() => {
          onAddBtn("note-txt")
          handleCard(true)
        }}>
          <i className="fa-sharp fa-solid fa-pen"></i></button>
        <button title="Add image" onClick={() => {
          handleCard(true)
          onAddBtn("note-img")
        }}><i className="fa-regular fa-image"></i></button>
        <button title="Add todos" onClick={() => {
          handleCard(true)
          onAddBtn("note-todo")
        }} ><i className="fa-regular fa-square-check"></i></button>
      </div>
    </div>
    {cmpType && <DynamicCmp loadNotes={loadNotes} cmpType={cmpType} handleCard={handleCard} isCard={isCard} />}
  </div>
}
function DynamicCmp(props) {//props is the note.type
  // console.log('DynamicCmp', props)
  switch (props.cmpType) {
    case 'note-txt':
      return props.isCard && <NoteTxt {...props} />
    case 'note-img':
      return props.isCard && <NoteImg {...props} />
    case 'note-todo':
      return props.isCard && <NoteTodo {...props} />
  }
}
