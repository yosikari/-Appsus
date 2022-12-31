const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3 className="horse-logo"><i class="fa-solid fa-horse"></i></h3>
        </Link>
        <nav className="homepage-icons">
            <NavLink to="/"><i class="fa-sharp fa-solid fa-house"></i></NavLink>
            <NavLink to="/about"><i className="fa-regular fa-address-card"></i></NavLink>
            <NavLink to="/mail"><i className="fa-regular fa-envelope"></i></NavLink>
            <NavLink to="/note"><i className="fa-solid fa-list"></i></NavLink>
        </nav>
    </header>
}
