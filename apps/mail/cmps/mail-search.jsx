const { useState, useEffect, useRef } = React

import { mailService } from "../services/mail.service.js"

export function MailSearch({ onSetFilter, onSetSearchType }) {
    const [filterByToEdit, setFilterByToEdit] = useState(mailService.getDefaultFilter())
    const elInputRef = useRef(null)

    useEffect(() => {
        if (!filterByToEdit.title && !filterByToEdit.txt) {
            onSetFilter(filterByToEdit)
        }
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field } = target
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
        onSetSearchType(searchBy)
    }

    const [searchBy, setSearchBy] = useState('title')
    useEffect(() => {
        onSetSearchType(searchBy)
    }, [searchBy])

    return <section className="mail-filter">


        <section className="filter-btns" onChange={(ev) => { setSearchBy(ev.target.value) }}>
            <label htmlFor="title">By title</label><br />
            <input className="filter-title-btn" name="search-by" type="radio" id="title" value="title" />

            <label htmlFor="from">By sender</label><br />
            <input className="filter-from-btn" name="search-by" type="radio" id="from" value="from" />

            <label htmlFor="date">By date</label><br />
            <input className="filter-date-btn" name="search-by" type="radio" id="date" value="date" />
        </section>


        <form onSubmit={onSubmitFilter}>

            <input
                className="mail-search-input"
                type="text"
                id="title"
                name="txt"
                placeholder={searchBy}
                value={filterByToEdit.txt}
                onChange={handleChange}
                ref={elInputRef}
            />

            <button className="search-btnn"><i className="fa-solid fa-magnifying-glass mail-search-btn"></i></button>
            <img className='img-mail-hero' src="img/mail-hero.png" alt="" />
        </form>

    </section>

}