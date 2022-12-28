const { useRef, useState, useEffect } = React
const { Outlet, Link, NavLink } = ReactRouterDOM
export function NotePreview({ note }) {
  const [cmpType, setCmpType] = useState('Hello')
  console.log(note)
  return <article className="note-preview">
    <h2>note id: {note.id}</h2>
    <h2>note type: {note.type}</h2>

    <h3> {note.info.title}</h3>
    <img src={note.info.url} />
    {/* <DynamicCmp cmpType={cmpType} /> */}
  </article>
}
// function DynamicCmp(props) {//props is the note.type
//   switch (props.cmpType) {
//     case 'note-txt':
//       return <NoteTxt {...props} />
//     case 'note-img':
//       return <NoteImg {...props} />
//     case 'note-todo':
//       return <NoteTodo {...props} />
//   }
// }