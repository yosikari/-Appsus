// import { noteService } from "../services/note.service.js"
// import { NoteTodo } from "../views/note-todo.jsx"


// const { useState, useEffect } = React
// const { useNavigate, useParams, Link } = ReactRouterDOM



// export function NoteImg(props) {
//       const [selectedImage, setSelectedImage] = useState(null);

//   const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNoteImg())
//   const navigate = useNavigate()

//   function handleChange({ target }) {
//     let { value, type, name: field,files } = target
//     //     value = type === 'number' ? +value : value

//     setNoteToEdit((prevNoteToEdit) => {
//       if (field === 'text') {
//         return {
//           ...prevNoteToEdit,
//           info: { ...prevNoteToEdit.info, title: value },
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
//       if (field === 'file') {
//         return {
//           ...prevNoteToEdit,
//           info: { ...prevNoteToEdit.info, file: files[0] },
//           // style: { backgroundColor: colorPicker }
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
//       <label htmlFor="text">title : </label>
//       <input type="text"
//         name="text"
//         id="text"
//         placeholder="Enter text..."
//         value={noteToEdit.info.title}
//         onChange={handleChange}
//       />
//       <input
//           type="file"
//           name="file"
//           value={noteToEdit.info.url}
//           // onChange={handleChange}
//           onChange={(event) => {
//             console.log(event.target.files[0]);
//             setSelectedImage(event.target.files[0]);
//           }}
      
//         />
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

 export function NoteImg(props) {
   return <div>
     <h4> {props.note.info.title}</h4>
     <img src={props.note.info.url} />
  </div>
 }

// // }

// // const UploadAndDisplayImage = () => {
//   //   const [selectedImage, setSelectedImage] = useState(null);
  
//   //   return (
//   //     <div>
//   //       {selectedImage && (
//   //         <div className="note-add-img">
//   //           <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
//   //           <br />
//   //           {/* <button onClick={() => setSelectedImage(null)}>Remove</button> */}
//   //         </div>
//   //       )}
//   //       <br />
  
//   //       <br />
//   //       <input
//   //         type="file"
//   //         name="myImage"
//   //         onChange={(event) => {
//   //           console.log(event.target.files[0]);
//   //           setSelectedImage(event.target.files[0]);
//   //         }}
//   //       />
//   //     </div>
//   //   );
//   // };
  
//   // export default UploadAndDisplayImage;