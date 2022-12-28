export function MailList({ mails, onRemoveMail}) {

    return <ul className="mail-list">
        {
            mails.map(mail => <li key={mail.id}>
                <MailPreview mail={mail} />
                <div>
                    <button onClick={() => onRemoveMail(mail.id)}>Remove mail!</button>
                    <Link to={`/mail/${mail.id}`}>Select mail!</Link>
                </div>
            </li>)
        }
    </ul>
}
