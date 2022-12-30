const { useState, useEffect } = React
const { Outlet, Link } = ReactRouterDOM
import { NoteFilter } from "../cmps/note-filter.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"
import { NoteAddForm } from "./note-add-form.jsx"
// import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js';

export function NoteIndex() {
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

    const [isLoading, setIsLoading] = useState(false)
    const [notes, setNotes] = useState([]) // all the cards

    useEffect(() => {
        loadNotes()
    }, [filterBy])
    function onSetFilter(filterBy) {
        console.log('onsetfilter', filterBy)
        setFilterBy(filterBy)
    }
    function loadNotes() {
        setIsLoading(true)
        noteService.query(filterBy).then(notes => {
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
    return <div>
        <NoteFilter onSetFilter={onSetFilter} />

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
