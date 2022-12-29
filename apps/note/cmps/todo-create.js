
const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM
import { utilService } from "../../../services/util.service.js"


export function TodoCreate({ addItems }) {
  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])

  function addItem() {
    if (!newItem) return
    console.log('new', newItem)
    let item = {
      id: utilService.makeId(),
      txt: newItem,
      doneAt: 187111111
    }
    setItems(prevItems => [...prevItems, item])

  }
  function onAddItems() {
    addItems(items)
  }

  return <div className="todo-create-container">
    <input
      type="text"
      placeholder="Add a todo..."
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
    />
    <button onClick={() => addItem()}>ADD</button>
    <button onClick={onAddItems}>done</button>
    <ul>
      {items.map(item => <li key={item.id}>{item.txt}
      </li>)}
    </ul>

  </div>
}