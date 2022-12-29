const { useState, useEffect } = React
const { Outlet, Link } = ReactRouterDOM
import { NoteList } from "../cmps/note-list.jsx"
import { TodoCreate } from "../cmps/todo-create.js"
import { noteService } from "../services/note.service.js"
import { NoteAddForm } from "./note-add-form.jsx"
// import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js';

export function NoteIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        loadNotes()
    }, [])
    function loadNotes() {
        setIsLoading(true)
        noteService.query().then(notes => {
            setNotes(notes)
            setIsLoading(false)
        })

    }
    function onRemoveNote(noteId) {
        noteService.remove(noteId)
            .then(() => {
                const updatedNotes = notes.filter(note => note.id !== noteId)
                setNotes(updatedNotes)
                // showSuccessMsg('note removed')
            })
        console.log('remove')
    }
    return <div>note app
        <TodoCreate />

        {/* <nav>
            <Link to="/note">Index</Link> |
            {/* <button> <Link to="/note/add">add</Link> </button> */}
        {/* </nav> * /} */}
        {/* < div className="nested-route" >
            <Outlet />
        </div > */}
        {/* <button> <Link to="/note/add">add</Link> </button> */}
        {/* <NoteAdd loadNotes={loadNotes} /> */}
        <NoteAddForm loadNotes={loadNotes} />

        {/* <button><Link to="/note/edit">Add note</Link></button> */}
        {!isLoading && <NoteList notes={notes} onRemoveNote={onRemoveNote} />}
        {isLoading && <div>Loading..</div>}
        {!notes.length && <div>No notes to show..</div>}
    </div >
}
