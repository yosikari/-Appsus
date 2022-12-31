const { useRef, useState, useEffect } = React
const { Outlet, Link, NavLink } = ReactRouterDOM

export function NotePreview({ note }) {
  const [cmpType, setCmpType] = useState(note.type)

  return <article>
    <DynamicCmp note={note} cmpType={cmpType} />

    {/* <div className={"note-preivew-btns"}>
      <button onClick={() => onRemoveNote(note.id)}><i className="fa-regular fa-trash-can"></i></button>
      <button> <Link to={`/note/${note.id}`}><i className="fa-solid fa-list"></i></Link> </button>
      {note.type === 'note-txt' && <button><Link to={`/note/edit/txt/${note.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></button>}
      {note.type === 'note-img' && <button><Link to={`/note/edit/img/${note.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></button>}
      {note.type === 'note-todo' && <button><Link to={`/note/edit/todo/${note.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></button>}
    </div> */}
  </article>
}

function DynamicCmp(props) {//props is the note.type
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
  return <div><h6> {props.note.info.txt}</h6>
    {props.note.isPinned && <h6><i className="fa-sharp fa-solid fa-map-pin"></i> </h6>}
  </div>
}
function NoteImg(props) {
  return <div>
    <img className="note-preview-img" src={props.note.info.url} />
    <h6> {props.note.info.title}</h6>
    {props.note.isPinned && <h6><i className="fa-sharp fa-solid fa-map-pin"></i></h6>}
  </div>
}
function NoteTodo(props) {
  return <div>
    <h6> {props.note.info.label}</h6>
    <p>{props.note.info.todos.map(todo => <li key={todo.id}>{todo.txt}</li>)}</p>
    {props.note.isPinned && <h6><i className="fa-sharp fa-solid fa-map-pin"></i></h6>}
  </div>
}