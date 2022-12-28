// console.log('Hi from note service')
import { storageService } from "../../../services/async-storage.service.js"
import { utilService } from "../../../services/util.service.js"
const NOTE_KEY = 'noteDB'
_createNotes()
export const noteService = {
  query,
  remove,
  onGoBack,
  get,
  getEmptyNoteTxt,
  getEmptyNoteImg,
  getEmptyNoteTodo,
  save,

}

function query() {
  return storageService.query(NOTE_KEY)
}
function remove(noteId) {
  return storageService.remove(NOTE_KEY, noteId)
}
function get(noteId) {
  return storageService.get(NOTE_KEY, noteId)

}
function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  if (!notes || !notes.length) {
    notes = [
      {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "Fullstack me Baby!"
        }
      },
      {
        id: "n102",
        type: "note-img",
        info: {
          url: "../../../img/cruise.jpg",
          title: "our cruise",
        },
        style: {
          backgroundColor: "#00d"
        }
      },
      {
        id: "n104",
        type: "note-img",
        info: {
          url: "../../../img/maldives.jpg",
          title: "our vacation",
        },
        style: {
          backgroundColor: "#00d"
        }
      },
      {
        id: "n103",
        type: "note-todo",

        info: {
          label: "go to a vacation:",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }
          ]
        },

      },
      {
        id: "n105",
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "Fullstack me Baby!"
        }
      },
      {
        id: "n106",
        type: "note-img",
        info: {
          url: "../../../img/cruise.jpg",
          title: "our cruise",
        },
        style: {
          backgroundColor: "#00d"
        }
      },
      {
        id: "n107",
        type: "note-img",
        info: {
          url: "../../../img/maldives.jpg",
          title: "our vacation",
        },
        style: {
          backgroundColor: "#00d"
        }
      },
      {
        id: "n108",
        type: "note-todo",

        info: {
          label: "go to a vacation:",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }
          ]
        },

      },
      {
        id: "n109",
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "Fullstack me Baby!"
        }
      },
      {
        id: "n110",
        type: "note-img",
        info: {
          url: "../../../img/cruise.jpg",
          title: "our cruise",
        },
        style: {
          backgroundColor: "#00d"
        }
      },
      {
        id: "n111",
        type: "note-img",
        info: {
          url: "../../../img/maldives.jpg",
          title: "our vacation",
        },
        style: {
          backgroundColor: "#00d"
        }
      },
      {
        id: "n112",
        type: "note-todo",

        info: {
          label: "go to a vacation:",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }
          ]
        },

      },
      {
        id: "n113",
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "Fullstack me Baby!"
        }
      },
      {
        id: "n114",
        type: "note-img",
        info: {
          url: "../../../img/cruise.jpg",
          title: "our cruise",
        },
        style: {
          backgroundColor: "#00d"
        }
      },
      {
        id: "n104",
        type: "note-img",
        info: {
          url: "../../../img/maldives.jpg",
          title: "our vacation",
        },
        style: {
          backgroundColor: "#00d"
        }
      },
      {
        id: "n115",
        type: "note-todo",

        info: {
          label: "go to a vacation:",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 }
          ]
        },

      }





    ]
    utilService.saveToStorage(NOTE_KEY, notes)
  }
}
function save(note) {
  if (note.id) {
    return storageService.put(NOTE_KEY, note)
  } else {
    return storageService.post(NOTE_KEY, note)
  }
}
function onGoBack() {
  navigate('/note')
}
function getEmptyNoteTxt() {
  let note = {
    type: "note-txt",
    info: {
      txt: ""
    },
    isPinned: false,
    style: {
      backgroundColor: "#5f9ea0"
    },

  }
  return note
}
function getEmptyNoteImg() {
  let note = {
    type: "note-img",
    info: {
      url: "../../../img/cruise.jpg",
      title: "",
    },
    isPinned: false,
    style: {
      backgroundColor: "#00d"
    },
  }
  console.log(note)
  return note
}
function getEmptyNoteTodo() {
  let note = {
    type: "note-todo",
    info: {
      label: "todos",
      todos: [
        { txt: "plan it", doneAt: null },
        { txt: "fo the first task", doneAt: 187111111 }]
    },
    isPinned: false,
    style: {
      backgroundColor: "#00d"
    },
  }
  return note
}