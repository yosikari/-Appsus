import { MailPreview } from "./mail-preview.jsx";


export function MailList({ mails, onRemoveMail, onMarkMail, loadMails}) {

    return <ul className="mail-list">
        {
            mails.map(mail => <li key={mail.id} className = "mail-li">
                
                    <MailPreview mail={mail} loadMails={loadMails} onRemoveMail = {onRemoveMail} onMarkMail = {onMarkMail}/>
                    <hr className="compose-hr" />
                
            </li>)
        }

    </ul>
}
