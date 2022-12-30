const { useState, useEffect, useRef } = React


export function MailSidebar({onSetFilter , onSetSearchType }) {
    const [searchBy, setSearchBy] = useState({type: 'all', filterEqual: true})
    useEffect(() => {
        onSetFilter({txt : ''})
        onSetSearchType(searchBy.type, searchBy.filterEqual)
    }, [searchBy])

    function handleOnClick(chosenProp) {
        setSearchBy(chosenProp)
     }


    return <nav className="mail-sidebar">
        <button className="mail-sidebar-all" onClick={()=>handleOnClick({type: 'all', filterEqual: true})}>All</button>
        <button className="mail-sidebar-sent" onClick={()=>handleOnClick({type: 'isRecived', filterEqual: false})}>Sent</button>
        <button className="mail-sidebar-income" onClick={()=>handleOnClick({type: 'isRecived', filterEqual: true})}>Income</button>
        <button className="mail-sidebar-marked" onClick={()=>handleOnClick({type: 'isMarked', filterEqual: true})}>Marked as star</button>
        <button className="mail-sidebar-unread" onClick={()=>handleOnClick({type: 'isRead', filterEqual: false})}>Unread</button>
        <button className="mail-sidebar-read" onClick={()=>handleOnClick({type: 'isRead', filterEqual: true})}>Read</button>
    </nav>



}