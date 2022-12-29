const { useState, useEffect, useRef } = React

import { mailService } from "../services/mail.service.js"

export function MailFilter({ onSetFilter }) {
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

    return <section className="book-filter full main-layout">



        <form onSubmit={onSubmitFilter}>

            {/* <section className="filter-btns">
            <label for="title">by title</label><br />
            <input className="filter-title-btn" type="radio" id="title" value="title" />

            <label for="from">by sender</label><br />
            <input className="filter-from-btn" type="radio" id="from"  value="from" />

            <label for="date">by date</label><br />
            <input className="filter-date-btn" type="radio" id="date" value="date" />
            </section> */}

            <input type="text"
                id="title"
                name="txt"
                placeholder="By title"
                value={filterByToEdit.txt}
                onChange={handleChange}
                ref={elInputRef}
            />

            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>

    </section>

}