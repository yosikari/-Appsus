
const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM
import { utilService } from "../../../services/util.service.js"


export function TodoCreate({ addItems }) {
  const [newItem, setNewItem] = useState("") // state of single todo
  const [items, setItems] = useState([]) // todos arrays

  /* Add item to the todos array */
  function addItem() {
    if (!newItem) return
    console.log('new', newItem)
    let item = {
      id: utilService.makeId(),
      txt: newItem,
      doneAt: 187111111
    }
    addItems(item)
    setItems(prevItems => [...prevItems, item])
    setNewItem("")

  }


  /* When user press on "done" */
  function onAddItems() {
    addItems(items)
  }

  return <div className="">
    <div className="add-to-do-container">
      <input
        type="text"
        placeholder="Add a todo..."
        id="create-todo"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="button" onClick={() => addItem()}> <i className="fa-regular fa-plus fa-xs"></i></button>
    </div>


    <ul>
      {items.map(item => <li key={item.id}>{item.txt}

      </li>)}
    </ul>
    {/* <button type="button" onClick={onAddItems}>Save todos</button> */}
  </div>
}