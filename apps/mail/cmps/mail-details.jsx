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

    function onRemoveMail(mail) {
        if (mail.isRemoved) {
            mailService.remove(mail.id).then(() => {
                if (nextMailId) onNextMail()
                showSuccessMsg('Mail removed permanently ')
            })
                .catch((err) => {
                    console.log('Had issues removing', err)
                    onGoBack()
                    showErrorMsg('Could not remove book, try again please!')
                })
        } else {
            mail.isRemoved = true
            mailService.save(mail).then(() => {
                onNextMail()
                showSuccessMsg('Mail removed')
            }).catch((err) => {
                onGoBack()
            })
        }
    }

    function onRestoreMail(ev, mail) {
        ev.stopPropagation()
        mail.isRemoved = false
        mailService.save(mail).then(() => {
            onGoBack()
            showSuccessMsg('Mail restored')
        }).catch((err) => {
            onGoBack()
        })

    }



    if (!mail) return <div>Loading...</div>
    return <section className="mail-details">
        <button onClick={onGoBack} className="mail-details-back-btn" ><span className="tooltiptext-details-back">Back</span><i className="fa-solid fa-arrow-left"></i></button>

        <h1 className="mail-details-title">{mail.title}</h1>
        <h5 className="mail-details-from" ><i className="fa-solid fa-circle-user icon-big"></i>{mail.from}  <span className="mail-details-date"> received at: {mail.date} </span> </h5>
        <pre className="mail-details-txt">{mail.txtBody}</pre>
        <div>{mail.imgSrc && <img className="mail-details-img" src={mail.imgSrc} alt="" />}</div>

        <button className="mail-details-remove-btn" onClick={() => onRemoveMail(mail)}><span className="tooltiptext-details-remove">Delete</span><i className="fa-regular fa-trash-can"></i></button>
        <button className="mail-details-next-btn" onClick={() => onNextMail()}><span className="tooltiptext-details-next">Next</span><i className="fa-solid fa-angles-right"></i></button>
        {mail.isRemoved && <button className="mail-restore-btn" onClick={(ev) => onRestoreMail(ev, mail)}><span className="tooltiptext-restore">Restore</span><i className="fa-light fa-trash-can-undo"></i></button>}

        <UserMsg />

    </section>
}