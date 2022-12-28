const { Outlet, Link } = ReactRouterDOM

export function NoteIndex() {

    return <div>note app
        <nav>
            <Link to="/note">Index</Link> |
            <Link to="/note/add">add</Link> |

        </nav>
        <div className="nested-route">
            <Outlet />
        </div>
    </div>
}
