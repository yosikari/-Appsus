const { useRef, useState, useEffect } = React
const { Outlet, Link, NavLink } = ReactRouterDOM
export function NotePreview({ note }) {
  // console.log("hello from note preview")
  const [cmpType, setCmpType] = useState(note.type)
  // console.log(note)
  useEffect(() => { }, [

  ])
  return <article className="note-preview">
    {/* <h2>note id: {note.id}</h2>
    <h2>note type: {note.type}</h2>

    <h3> {note.info.title}</h3>
    <img src={note.info.url} /> */}
    <DynamicCmp note={note} cmpType={cmpType} />
  </article>
}
function DynamicCmp(props) {//props is the note.type
  // console.log('DynamicCmp', props.cmpType)
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
    {/* <h2>style={{ color: props.note.style.backgroundColor }}</h2> */}
    {/* <h2>{props.note.style.backgroundColor}</h2> */}

    <h4> {props.note.info.txt}</h4>
    {props.note.isPinned && <h6>📌 </h6>}
  </div>
}
function NoteImg(props) {
  return <div className="prev-note-txt-card" style={{ backgroundColor: props.note.style.backgroundColor }} >
    <h4> {props.note.info.title}</h4>
    <img src={props.note.info.file} />
    {/* <img alt="not fount" width={"250px"} src={URL.createObjectURL(props.note.info.file)} /> */}
    {props.note.info.file && <img src={props.note.info.file.name} />}
  </div>


}
function NoteTodo(props) {
  return <div className="prev-note-txt-card" style={{ backgroundColor: props.note.style.backgroundColor }} >
    <h4> {props.note.info.label}</h4>
    {/* <p> {props.note.info.todos[0]}</p> */}

  </div>
}