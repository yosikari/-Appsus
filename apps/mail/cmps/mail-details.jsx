const { useEffect, useState } = React
const { useParams, useNavigate, Link, Outlet } = ReactRouterDOM

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
                // showErrorMsg('Could not remove book, try again please!')
            })
    }



    if (!mail) return <div>Loading...</div>
    return <section className="mail-details">
        <button onClick={onGoBack}>Go Back</button>

        <h1>{mail.title}</h1>
        <h5>at: {mail.date} | from: {mail.from}</h5>
        <p>{mail.txtBody}</p>

        <button onClick={() => onRemoveMail(mailId)}>Remove Mail</button>
        <button onClick={() => onNextMail()}>Next Mail</button>

        {/* <div className="nested-route">
            <Outlet />
        </div> */}

    </section>
}