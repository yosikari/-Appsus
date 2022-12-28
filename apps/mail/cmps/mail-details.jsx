const { useEffect, useState } = React
const { useParams, useNavigate, Link, Outlet } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"

export function MailDetails() {

return <div>hello mail detials</div>


    // const [mail, setMail] = useState(null)
    // const [nextMailId, setNextMailId] = useState(null)
    // const { MailId } = useParams()
    // const navigate = useNavigate()

    // useEffect(() => {
    //     loadMail()
    // }, [mailId])

    // function loadMail() {
    //     mailService.get(mailId)
    //         .then((mail) => setMail(mail))
    //         .catch((err) => {
    //             console.log('Had issues in mail details', err)
    //             navigate('/mail')
    //         })

    //     mailService.getNextMailId(mailId)
    //         .then(setNextMailId)
    // }

    // function onGoBack() {
    //     navigate('/mail')
    // }



    // if (!mail) return <div>Loading...</div>
    // return <section className="mail-details">
    //     <h1>{mail.title}</h1>
    //     <p>{mail.txt}</p>

    //     <button onClick={onGoBack}>Go Back</button>
    //     <Link to={`/mail/${nextMailId}`}><button>Next Mail</button></Link>

    //     {/* <div className="nested-route">
    //         <Outlet />
    //     </div> */}

    // </section>



}