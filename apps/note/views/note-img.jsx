const { useState, useEffect, useRef } = React
const { useNavigate, useParams, Link } = ReactRouterDOM
import { noteService } from "../services/note.service.js"

export function NoteImg(props) {

  const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNoteImg())
  const [imgSrc, setImg] = useState('')

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
      if (field === 'file') {
        return {
          ...prevNoteToEdit,
          info: { ...prevNoteToEdit.info, url: base64 },
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


  //---------------UPLOAD IMG TO BASE 64-----------------------
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  }

  const handleFileChange = event => {

    const file = event.target.files[0];
    getBase64(file).then(base64 => {
      setImg(base64)
      console.log(base64)
      setNoteToEdit(prevNoteToEdit => ({
        ...prevNoteToEdit,
        info: { ...prevNoteToEdit.info, url: base64 },
      }))
    })

  }

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    })
  }

  //-----------------------------------------------------------



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
      <div>
        <input
          name='file'
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <button className="img-btn" onClick={handleClick}><i className="fa-regular fa-image"></i></button>
      {imgSrc && <img className="note-add-img" src={imgSrc} />}
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