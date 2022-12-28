export function NotePreview({ note }) {
  console.log(note)
  return <article className="note-preview">
    <h2>note id: {note.id}</h2>
    <h2>note id: {note.type}</h2>

    <h3> {note.info.title}</h3>
    <img src={note.info.url} />
  </article>
}
