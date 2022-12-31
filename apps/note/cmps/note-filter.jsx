import { noteService } from "../services/note.service.js"
const { useState, useEffect } = React


export function NoteFilter({ onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(noteService.getDefaultFilter())

  function handleChange({ target }) {
    let { value, name: field, type } = target
    console.log(value)
    onSetFilter((prevFilter) => ({ ...prevFilter, txt: value }))

    value = (type === 'number') ? +value : value
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }
  function onSubmitFilter(ev) {
    // update father cmp that filters change on submit
    ev.preventDefault()
    onSetFilter(filterByToEdit)
    console.log('filter by ', filterByToEdit)
  }
  return <div className="search-container">
    <button><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
    <form onSubmit={onSubmitFilter}>
      <input type="text"
        name="txt"
        placeholder="search..."
        value={filterByToEdit.txt}
        onChange={handleChange}

      />




    </form>
  </div>
} 