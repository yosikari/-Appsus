// const { useState, useEffect } = React
// const { useNavigate, useParams, Link } = ReactRouterDOM
// // import { eventBusService, showSuccessMsg } from "../services/event-bus.service.js"

// import { noteService } from "../services/note.service.js"
// import { NoteTodo } from "../views/note-todo.jsx"
// import { NoteImg } from "../views/note-img.jsx"
// import { NoteTxt } from "../views/note-txt.jsx"




// export function NoteEdit({ loadNotes, handleCard, isCard }) {
//   const [cmpType, setCmpType] = useState(null)
//   function onAddBtn(type) {
//     setCmpType(type)
//   }

//   return <div>
//     {cmpType && <DynamicCmp loadNotes={loadNotes} cmpType={cmpType} handleCard={handleCard} isCard={isCard} />}

//   </div>

// }
// function DynamicCmp(props) {//props is the note.type
//   // console.log('DynamicCmp', props)
//   switch (props.cmpType) {
//     case 'note-txt':
//       return <NoteTxt {...props} />
//     case 'note-img':
//       return <NoteImg {...props} />
//     case 'note-todo':
//       return <NoteTodo {...props} />
//   }
// }
