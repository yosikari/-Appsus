const { useEffect, useState } = React
const { useParams, useNavigate, Link, Outlet } = ReactRouterDOM
import { UserMsg } from '../../../cmps/user-msg.jsx'
import { eventBusService, showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'


import { mailService } from "../services/mail.service.js"

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const [nextMailId, setNextMailId] = useState(null)
    const { mailId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, [mailId])

    function loadMail() {
        mailService.get(mailId)
            .then((mail) => setMail(mail))
            .catch((err) => {
                console.log('Had issues in mail details', err)
                navigate('/mail')
            })

        mailService.getNextMailId(mailId)
            .then(setNextMailId)
    }

    function onGoBack() {
        navigate('/mail')
    }

    function onNextMail() {
        navigate(`/mail/${nextMailId}`)
    }

    function onRemoveMail(mailId) {
        mailService.remove(mailId).then(() => {
            if (nextMailId) onNextMail()
            showSuccessMsg('Mail removed')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                onGoBack()
                showErrorMsg('Could not remove book, try again please!')
            })
    }



    if (!mail) return <div>Loading...</div>
    return <section className="mail-details">
        <button onClick={onGoBack}><i className="fa-solid fa-arrow-left"></i></button>

        <h1>{mail.title}</h1>
        <h5>at: {mail.date} | from: {mail.from}</h5>
        <p>{mail.txtBody}</p>
        <div>{mail.imgSrc&&<img className="mail-details-img" src={mail.imgSrc} alt="" />}</div>

        <button onClick={() => onRemoveMail(mailId)}><i className="fa-regular fa-trash-can"></i></button>
        <button onClick={() => onNextMail()}><i className="fa-solid fa-angles-right"></i></button>
        <UserMsg />
        {/* <div className="nested-route">
            <Outlet />
        </div> */}

    </section>
}