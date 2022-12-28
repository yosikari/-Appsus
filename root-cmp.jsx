const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { MailCompose } from "./apps/mail/views/mail-compose.jsx"
import { NoteAdd } from "./apps/note/views/note-add.jsx"
import { MailDetails } from "./apps/mail/cmps/mail-details.jsx"





export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route element={<MailIndex />} path="/mail" >
                    <Route element={<MailCompose />} path="/mail/compose" />
                    
                </Route>
                <Route element={<MailDetails />} path="/mail/:mailId" />
                <Route element={<NoteIndex />} path="/note" >
                    <Route element={<NoteAdd />} path="/note/add" />

                </Route>
            </Routes>
        </section>
    </Router>
}
