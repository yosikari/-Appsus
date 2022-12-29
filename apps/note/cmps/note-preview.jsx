const { useRef, useState, useEffect } = React
const { Outlet, Link, NavLink } = ReactRouterDOM

export function NotePreview({ note }) {
  const [cmpType, setCmpType] = useState(note.type)

  return <article className="note-preview">
    <DynamicCmp note={note} cmpType={cmpType} />
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
  // console.log(props.note.isPinned)
  return <div className="prev-note-txt-card" style={{ backgroundColor: props.note.style.backgroundColor }} >
    <h4> {props.note.info.txt}</h4>
    {props.note.isPinned && <h6>📌 </h6>}
  </div>
}
function NoteImg(props) {
  return <div className="prev-note-txt-card" style={{ backgroundColor: props.note.style.backgroundColor }} >
    <h4> {props.note.info.title}</h4>
    <img src={props.note.info.url} />
    {props.note.isPinned && <h6>📌 </h6>}
  </div>
}
function NoteTodo(props) {
  // console.log(props)
  return <div className="prev-note-txt-card" style={{ backgroundColor: props.note.style.backgroundColor }} >
    <h4> {props.note.info.label}</h4>
    <p>{props.note.info.todos.map(todo => <li key={todo.id}>{todo.txt}</li>)}</p>
    {props.note.isPinned && <h6>📌</h6>}
  </div>
}