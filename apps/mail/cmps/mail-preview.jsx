const { useEffect, useState } = React


export function MailPreview({ mail }) {

    const [isActive, setIsActive] = useState(false)


    return <article onClick={()=>setIsActive(!isActive)} className={`mail-preview ${isActive ? ' active': ''}`} >
        <h2 className="mail-title">{mail.title}</h2>
        <h3 className="mail-from">{mail.from}</h3>
        <p className="mail-txt">{mail.txtBody}</p>
        <h3 className="mail-date">{mail.date}</h3>

    </article>
}