import { mailService } from "../services/mail.service.js"

const { useState, useEffect, useRef } = React

export function MailCompose({ onSetSendMail, onSetMails }) {

  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [txt, setTxt] = useState('')
  const [imgSrc, setImg] = useState('')

  const elInputRef = useRef(null)
  useEffect(() => {
    elInputRef.current.focus()
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault()
    let newMail = mailService.getEmptyMail(email, title, txt, false, imgSrc)
    mailService.save(newMail).then(onSetMails)
    onSetSendMail(false)
  }

  //---------------UPLOAD IMG TO BASE 64-----------------------
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  }

  const handleFileChange = event => {

    const file = event.target.files[0];
    getBase64(file).then(base64 => {
      setImg(base64)
      console.log(base64)
    })
  }

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    })
  }

  //-----------------------------------------------------------


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

        <button className="send-btn">Send</button>
      </form>

      {imgSrc && <img className="img-preview" src={imgSrc} />}

      <div>
        <input
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
      </div>

      <section className="compose-btns">
        <button className="delete-btn"><i className="fa-regular fa-trash-can"></i></button>
        <button className="img-btn" onClick={handleClick}><i className="fa-regular fa-image"></i></button>
        <button className="stiker-btn"><i className="fa-regular fa-face-smile"></i></button>
      </section>
    </section>

  </div>
}

