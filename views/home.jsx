const { Link, NavLink } = ReactRouterDOM

export function Home() {

    return <section className="home">

        <Link to="/note"> <img className="homepage-imgs" src="img/notes-btn.png" alt="" />        </Link>
        <Link to="/mail">    <img className="homepage-imgs" src="img/mails-btn.png" alt="" />        </Link>
        <a href="https://oritleshem.github.io/Meme-Generator/"><img className="homepage-imgs" src="img/meme-gen-btn.png" alt="" /></a>




    </section>
}






