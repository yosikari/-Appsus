// import { noteService } from "../services/note.service.js"
// import { NoteTodo } from "../views/note-todo.jsx"

// const { useState, useEffect } = React
// const { useNavigate, useParams, Link } = ReactRouterDOM

// export function NoteAddForm({ loadNotes }) {
//   const [cmpType, setCmpType] = useState(null)
//   function onAddBtn(type) {
//     setCmpType(type)
//   }

//   return <div>note add

//     <button onClick={() => onAddBtn("note-txt")}>txt</button>
//     <button onClick={() => onAddBtn("note-img")}>img</button>
//     <button onClick={() => onAddBtn("note-todos")} >todo</button>
//     {cmpType && <DynamicCmp loadNotes={loadNotes} cmpType={cmpType} />}

//   </div>

// }
// function DynamicCmp(props) {//props is the note.type
//   // console.log('DynamicCmp', props)
//   switch (props.cmpType) {
//     case 'note-txt':
//       return <NoteTxt {...props} />
//     case 'note-img':
//       return <NoteImg {...props} />
//     case 'note-todo':
//       return <NoteTodo {...props} />
//   }
// }
// function NoteTxt(props) {
//   const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNoteTxt())
//   const navigate = useNavigate()

//   function handleChange({ target }) {
//     let { value, type, name: field } = target
//     //     value = type === 'number' ? +value : value

//     setNoteToEdit((prevNoteToEdit) => {
//       if (field === 'text') {
//         return {
//           ...prevNoteToEdit,
//           info: { ...prevNoteToEdit.info, txt: value },
//           // style: { backgroundColor: colorPicker }
//         }
//       }
//       if (field === 'checkbox') {
//         return {
//           ...prevNoteToEdit,
//           // info: { ...prevNoteToEdit.info, txt: value },
//           isPinned: true
//         }
//       }
//       if (field === 'colors') {
//         return {
//           ...prevNoteToEdit,
//           // info: { ...prevNoteToEdit.info, txt: value },
//           style: { backgroundColor: value }
//         }
//       }
//     })
//   }

//   function onSaveNote(ev) {
//     ev.preventDefault()
//     noteService.save(noteToEdit).then(() => props.loadNotes())
//     // showSuccessMsg('note saved!')
//     navigate('/note')
//   }
//   return <div className="note-input-txt-card">
//     <form onSubmit={onSaveNote}>
//       <label htmlFor="text">text : </label>
//       <input type="text"
//         name="text"
//         id="text"
//         placeholder="Enter text..."
//         value={noteToEdit.info.txt}
//         onChange={handleChange}
//       />

//       <select onChange={handleChange} name="colors" id="colors" multiple>
//         <option style={{ backgroundColor: '#fbf8cc' }} value="#fbf8cc"></option>
//         <option style={{ backgroundColor: '#fde4cf' }} value="#fde4cf"></option>
//         <option style={{ backgroundColor: '#ffcfd2' }} value="#ffcfd2"></option>
//         <option style={{ backgroundColor: '#f1c0e8' }} value="#f1c0e8"></option>
//         <option style={{ backgroundColor: '#cfbaf0' }} value="#cfbaf0"></option>
//         <option style={{ backgroundColor: '#a3c4f3' }} value="#a3c4f3"></option>
//         <option style={{ backgroundColor: '#90dbf4' }} value="#90dbf4"></option>
//         <option style={{ backgroundColor: '#8eecf5' }} value="#8eecf5"></option>
//         <option style={{ backgroundColor: '#98f5e1' }} value="#98f5e1"></option>
//         <option style={{ backgroundColor: '#b9fbc0' }} value="#b9fbc0"></option>
//       </select>

//       <label>
//         <input
//           type="checkbox"
//           name="checkbox"
//           value={noteToEdit.isPinned}
//           onChange={handleChange}
//         />
//         pinned?
//       </label>

//       < div >
//         <button>{noteToEdit.id ? 'Save' : 'Add'}</button>
//         <button> <Link to="/note">Cancel</Link> </button>
//       </div>
//     </form >

//   </div >
// }



// {/* <div className="note-add-color-picker-container">
//         <button style={{ backgroundColor: '#fbf8cc' }} className="note-add-color-picker-btn" onClick={() => setColorPicker('#fbf8cc')}></button>
//         <button style={{ backgroundColor: '#fde4cf' }} className="note-add-color-picker-btn" onClick={(e) => handleColorPicker('#fde4cf')}></button>
//         <button style={{ backgroundColor: '#ffcfd2' }} className="note-add-color-picker-btn" onClick={(e) => handleColorPicker('#ffcfd2')}></button>
//         <button style={{ backgroundColor: '#f1c0e8' }} className="note-add-color-picker-btn" onClick={(e) => handleColorPicker('#f1c0e8')}></button>
//         <button style={{ backgroundColor: '#cfbaf0' }} className="note-add-color-picker-btn" onClick={(e) => handleColorPicker('#cfbaf0')}></button>
//         <button style={{ backgroundColor: '#a3c4f3' }} className="note-add-color-picker-btn" onClick={(e) => handleColorPicker('#a3c4f3')}></button>
//         <button style={{ backgroundColor: '#90dbf4' }} className="note-add-color-picker-btn" onClick={(e) => handleColorPicker('#90dbf4')}></button>
//         <button style={{ backgroundColor: '#8eecf5' }} className="note-add-color-picker-btn" onClick={(e) => handleColorPicker('#8eecf5')}></button>
//         <button style={{ backgroundColor: '#98f5e1' }} className="note-add-color-picker-btn" onClick={(e) => handleColorPicker('#98f5e1')}></button>
//         <button style={{ backgroundColor: '#b9fbc0' }} className="note-add-color-picker-btn" onClick={(e) => handleColorPicker('#b9fbc0')}></button>
//       </div> */}

// function NoteImg(props) {
//   return <div>
//     <h4> {props.note.info.title}</h4>
//     <img src={props.note.info.url} />
//   </div>


// }
// function NoteTodo(props) {
//   return <div>
//     <h4> {props.note.info.label}</h4>
//     <p> {props.note.info.todos[0].txt}</p>

//   </div>
// }