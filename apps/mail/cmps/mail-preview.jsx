export function MailPreview({ mail }) {

    return <article className="mail-preview">
        <h2>{mail.title}</h2>
        <h3>from: {mail.from}</h3>
        <p>{mail.txtBody}</p>
        <h3>at: {mail.date}</h3>
        
        
    </article>
}