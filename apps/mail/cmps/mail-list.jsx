import { MailPreview } from "./mail-preview.jsx";

const { Link } = ReactRouterDOM

export function MailList({ mails, onRemoveMail, onMarkMail}) {

    return <ul className="mail-list">
        {
            mails.map(mail => <li key={mail.id} className = "mail-li">
                
                    <MailPreview mail={mail} />
                    <button className = "mail-mark-btn" onClick={() => onMarkMail(mail.id)}>{mail.isMarked ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}</button>
                    <button className = "mail-remove-btn" onClick={() => onRemoveMail(mail.id)}><i className="fa-regular fa-trash-can"></i></button>
                    <Link to={`/mail/${mail.id}`}><button className = "mail-select-btn" ><i className="fa-regular fa-envelope-open"></i></button></Link>
                    <hr />
                
            </li>)
        }

    </ul>
}
