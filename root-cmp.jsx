const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { MailCompose } from "./apps/mail/cmps/mail-compose.jsx"
import { MailDetails } from "./apps/mail/cmps/mail-details.jsx"
import { NoteDetails } from "./apps/note/views/note-details.jsx"
import { NoteEdit } from "./apps/note/views/note-edit.jsx"
import { NoteAddForm } from "./apps/note/views/note-add-form.jsx"
import { NoteTxt } from "./apps/note/views/note-txt.jsx"
import { NoteImg } from "./apps/note/views/note-img.jsx"





export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route element={<MailIndex />} path="/mail" >
                </Route>
                <Route element={<MailDetails />} path="/mail/:mailId" />
                <Route element={<NoteIndex />} path="/note" >
                    <Route element={<NoteAddForm />} path="/note/add" />
                </Route>
                <Route element={<NoteAddForm />} path="/note/edit/" />
                <Route element={<NoteTxt />} path="/note/edit/txt/:noteId" />
                <Route element={<NoteImg />} path="/note/edit/img/:noteId" />
                <Route element={<NoteDetails />} path="/note/:noteId" />
            </Routes>
        </section>
    </Router>
}
