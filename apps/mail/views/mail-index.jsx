const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { mailService } from '../services/mail.service.js'
import { eventBusService, showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

import { UserMsg } from "../../../cmps/user-msg.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailCompose } from "../cmps/mail-compose.jsx";
import { MailList } from "../cmps/mail-list.jsx";



export function MailIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [mails, setMails] = useState([])
    const [isSendMail, setSendMail] = useState(false)
    const [searchType, setSearchType] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        loadMails()
    }, [filterBy, searchType])

    useEffect(() => {
        loadMails()
    }, [])

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }
    function onSetSearchType(searchType) {
        setSearchType(searchType)
    }

    function loadMails() {
        mailService.query(filterBy, searchType).then(mailsToUpdate => {
            setMails(mailsToUpdate)
            setIsLoading(false)
        })
    }

    function onRemoveMail(mailId) {
        mailService.remove(mailId).then(() => {
            const updatedMails = mails.filter(mail => mail.id !== mailId)
            setMails(updatedMails)
            showSuccessMsg('Mail removed')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove book, try again please!')
            })
    }

    function onMarkMail(mailId) {
        mailService.get(mailId).then((mail) => {
            mail.isMarked = !mail.isMarked
            mailService.save(mail).then(() => {
                loadMails()
            })
        })

    }


    // return <div>mail app main page</div>

    return <section className="mail-index">
        <div>
            <MailFilter onSetFilter={onSetFilter} onSetSearchType={onSetSearchType} />
            {/* <Link to="/mail/compose"><button>Send Mail</button></Link> */}

            {!isLoading && <MailList mails={mails} onRemoveMail={onRemoveMail} onMarkMail={onMarkMail} />}
            {isLoading && <div>Loading...</div>}
            {!mails.length && <div>No mails to show...</div>}
            {!isSendMail && <button className="send-btn" onClick={() => { setSendMail(!isSendMail) }}>SendMail</button>}
            {isSendMail && <MailCompose onSetSendMail={setSendMail} onSetMails={loadMails} />}
            <UserMsg />
        </div>
    </section>



}

