import { mailService } from "../services/mail.service.js"

const { useState, useEffect, useRef } = React

export function MailCompose({ onSetSendMail, onSetMails }) {

  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [txt, setTxt] = useState('')

  const elInputRef = useRef(null)
  useEffect(() => {
    elInputRef.current.focus()
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault()
    let newMail = mailService.getEmptyMail(email, title, txt, false)
    mailService.save(newMail).then(onSetMails)
    onSetSendMail(false)
  }


  return <div className="mail-compose">
    <section>
      <section className="compose-header">
        <h2>New mail</h2>
        <button onClick={() => onSetSendMail(false)}>X</button>
      </section>
      <form className="compose-form" onSubmit={handleSubmit}>
        <input type="email"
          id="email"
          name="email"
          placeholder="To"
          value={email}
          onChange={() => setEmail(event.target.value)}
          ref={elInputRef}
        />
        <hr />

        <input type="title"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={() => setTitle(event.target.value)}
        />
        <hr />

        <textarea className="compose-txt" type="textarea"
          id="txt"
          name="txt"
          value={txt}
          onChange={() => setTxt(event.target.value)}
        />

        <button>Send</button>
      </form>
    </section>

  </div>
}

