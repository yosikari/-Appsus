const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { mailService } from '../services/mail.service.js'
import { eventBusService, showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

import { UserMsg } from "../../../cmps/user-msg.jsx";
import { MailSearch } from "../cmps/mail-search.jsx";
import { MailCompose } from "../cmps/mail-compose.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { MailSidebar } from '../cmps/mail-sidebar-filter.jsx';



export function MailIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [mails, setMails] = useState([])
    const [isSendMail, setSendMail] = useState(false)
    const [searchType, setSearchType] = useState(false)
    const [isFilterEqual, setFilterEqual] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        loadMails()
    }, [filterBy, searchType, isFilterEqual])

    useEffect(() => {
        loadMails()
    }, [])

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }
    function onSetSearchType(searchType, filterEqual = true) {
        setSearchType(searchType)
        setFilterEqual(filterEqual)
    }

    function loadMails() {
        mailService.query(filterBy, searchType, isFilterEqual).then(mailsToUpdate => {
            setMails(mailsToUpdate)
            setIsLoading(false)
        })
    }

    function onRemoveMail(ev, mail) {
        ev.stopPropagation()
        if(mail.isRemoved){
        mailService.remove(mail.id).then(() => {
            const updatedMails = mails.filter(currMail => currMail.id !== mail.id)
            setMails(updatedMails)
            showSuccessMsg('Removed permanently')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove book, try again please!')
            })
        }else{
            mail.isRemoved = true
            mailService.save(mail).then(()=>{
                loadMails()
            })

            showSuccessMsg('Mail removed')

        }
    }

    function onRestoreMail(ev, mail) {
        ev.stopPropagation()
        mail.isRemoved = false
        mailService.save(mail).then(()=>{
            loadMails()
        })
        showSuccessMsg('Mail restored')

    }

    function onMarkMail(ev, mailId) {
        ev.stopPropagation()
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
            <MailSearch onSetFilter={onSetFilter} onSetSearchType={onSetSearchType} />
            {/* <Link to="/mail/compose"><button>Send Mail</button></Link> */}
            <MailSidebar onSetFilter={onSetFilter} onSetSearchType={onSetSearchType} />
            {!isLoading && <MailList mails={mails} onRemoveMail={onRemoveMail} onMarkMail={onMarkMail} loadMails={loadMails} onRestoreMail= {onRestoreMail}/>}
            {isLoading && <div>Loading...</div>}
            {!mails.length && <div>No mails to show...</div>}
            {!isSendMail && <button className="send-btn" onClick={() => { setSendMail(!isSendMail) }}>SendMail</button>}
            {isSendMail && <MailCompose onSetSendMail={setSendMail} onSetMails={loadMails} />}
            <UserMsg />
        </div>
    </section>



}

