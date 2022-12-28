export function MailPreview({ mail }) {

    return <article className="mail-preview">
        <h2>{mail.title}</h2>
        <h3>{mail.date}</h3>
        <p>{mail.txt}</p>
    </article>
}