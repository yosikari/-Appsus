const { useEffect, useState } = React
import { mailService } from '../services/mail.service.js'
const { Link } = ReactRouterDOM

export function MailPreview({ mail, loadMails, onRemoveMail, onMarkMail }) {

    const [isActive, setIsActive] = useState(false)
    const [isRead, setIsRead] = useState(mail.isRead)

    function setMailReadied() {
        setIsRead(true)
        mail.isRead = true
        mailService.save(mail).then(() => {
            loadMails()
        })
    }


    return <article onClick={() => { setIsActive(!isActive), setMailReadied() }} className={`mail-preview ${isActive ? ' active' : ''}${isRead ? ' read' : ''}`} >
        <h2 className="mail-title">{mail.title}</h2>
        <h3 className="mail-from">{mail.from}</h3>
        <p className="mail-txt">{mail.txtBody}</p>
        <h3 className="mail-date">{mail.date}</h3>
        <button className="mail-mark-btn" onClick={(ev) => onMarkMail(ev ,mail.id)}>{mail.isMarked ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}</button>
        <button className="mail-remove-btn" onClick={(ev) => onRemoveMail(ev, mail.id)}><i className="fa-regular fa-trash-can"></i></button>
        <Link to={`/mail/${mail.id}`}><button className="mail-select-btn" ><i className="fa-regular fa-envelope-open"></i></button></Link>
    </article>
}