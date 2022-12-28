const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { MailList } from "../cmps/mail-list.jsx";

import { mailService } from '../services/mail.service.js'

// import { eventBusService, showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'


export function MailIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [mails, setMails] = useState([])

    useEffect(() => {
        setIsLoading(true)
        loadMails()
    }, [filterBy])

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function loadMails() {
        mailService.query(filterBy).then(mailsToUpdate => {
            setMails(mailsToUpdate)
            setIsLoading(false)
        })
    }
    
    function onRemoveMail(mailId) {
        mailService.remove(mailId).then(() => {
            const updatedMails = mails.filter(mail => mail.id !== mailId)
            setMails(updatedMails)
            // showSuccessMsg('Mail removed')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                // showErrorMsg('Could not remove book, try again please!')
            })
    }


    // return <div>mail app main page</div>

    return <section className="mail-index">
        <div>
            {/* <MailFilter onSetFilter={onSetFilter} /> */}
            {/* <Link to="/mail/compose"><button>Send Mail</button></Link> */}

            {!isLoading && <MailList mails={mails} onRemoveMail={onRemoveMail} />}
            {isLoading && <div>Loading...</div>}
            {!mails.length && <div>No mails to show...</div>}
        </div>
    </section>



}

