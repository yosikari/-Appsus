const { useState, useEffect, useRef } = React

import { mailService } from "../services/mail.service.js"

export function MailFilter({ onSetFilter, onSetSearchType }) {
    const [filterByToEdit, setFilterByToEdit] = useState(mailService.getDefaultFilter())
    const elInputRef = useRef(null)

    useEffect(() => {
        onSetFilter(filterByToEdit)
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
    }

    const [searchBy, setSearchBy] = useState('title')
    useEffect(() => {
        onSetSearchType(searchBy)
    }, [searchBy])

    return <section className="book-filter full main-layout">


        <section className="filter-btns" onChange={(ev)=>{setSearchBy(ev.target.value)}}>
            <label htmlFor="title">by title</label><br />
            <input className="filter-title-btn" name="search-by" type="radio" id="title" value="title" />

            <label htmlFor="from">by sender</label><br />
            <input className="filter-from-btn" name="search-by" type="radio" id="from" value="from"  />

            <label htmlFor="date">by date</label><br />
            <input className="filter-date-btn" name="search-by" type="radio" id="date" value="date"  />
        </section>


        <form onSubmit={onSubmitFilter}>

            <input type="text"
                id="title"
                name="txt"
                placeholder={searchBy}
                value={filterByToEdit.txt}
                onChange={handleChange}
                ref={elInputRef}
            />

            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>

    </section>

}