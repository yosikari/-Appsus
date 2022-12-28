const { useState, useEffect } = React

const { Outlet, Link } = ReactRouterDOM
import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"

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
    function onRemoveNote() {
        console.log('remove')
    }
    return <div>note app
        <nav>
            <Link to="/note">Index</Link> |
            <Link to="/note/add">add</Link> |
        </nav>
        <div className="nested-route">
            <Outlet />
        </div>
        {!isLoading && <NoteList notes={notes} onRemoveNote={onRemoveNote} />}
        {isLoading && <div>Loading..</div>}
        {!notes.length && <div>No notes to show..</div>}
    </div>
}
