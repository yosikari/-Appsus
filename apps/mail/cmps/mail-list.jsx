import { MailPreview } from "./mail-preview.jsx";

const { Link } = ReactRouterDOM

export function MailList({ mails, onRemoveMail }) {

    return <ul className="mail-list">
        {
            mails.map(mail => <li key={mail.id}>
                <div>
                    <MailPreview mail={mail} />
                    <button onClick={() => onRemoveMail(mail.id)}>Remove mail!</button>
                    <Link to={`/mail/${mail.id}`}><button>Select mail!</button></Link>
                    <hr />
                </div>
            </li>)
        }

    </ul>
}
