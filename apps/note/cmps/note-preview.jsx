const { useRef, useState, useEffect } = React
const { Outlet, Link, NavLink } = ReactRouterDOM

export function NotePreview({ note }) {
  const [cmpType, setCmpType] = useState(note.type)

  return <article className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
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
    <h6> {props.note.info.txt}</h6>
    {props.note.isPinned && <h6><i className="fa-sharp fa-solid fa-map-pin"></i> </h6>}
  </div>
}
function NoteImg(props) {
  return <div className="prev-note-txt-card" style={{ backgroundColor: props.note.style.backgroundColor }} >
    <img className="note-preview-img" src={props.note.info.url} />
    <h6> {props.note.info.title}</h6>
    {props.note.isPinned && <h6><i className="fa-sharp fa-solid fa-map-pin"></i></h6>}
  </div>
}
function NoteTodo(props) {
  // console.log(props)
  return <div className="prev-note-txt-card" style={{ backgroundColor: props.note.style.backgroundColor }} >
    <h6> {props.note.info.label}</h6>
    <p>{props.note.info.todos.map(todo => <li key={todo.id}>{todo.txt}</li>)}</p>
    {props.note.isPinned && <h6><i className="fa-sharp fa-solid fa-map-pin"></i></h6>}
  </div>
}