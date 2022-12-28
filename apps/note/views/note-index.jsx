const { Outlet, Link } = ReactRouterDOM

export function NoteIndex() {

    return <div>note app
        <nav>
            <Link to="/note">Index</Link> |
            <Link to="/note/remainder">remainder</Link> |
            <Link to="/note/archive">archive</Link>
            <Link to="/note/trash">trash</Link>
        </nav>
        <div className="nested-route">
            <Outlet />
        </div>
    </div>
}
