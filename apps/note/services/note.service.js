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
        },
        style: {
          backgroundColor: "#ffffff"
        },
      },
      {
        id: "n102",
        type: "note-img",
        info: {
          url: "../../../img/cruise.jpg",
          file: {
            lastModified: 1672231431170,
            lastModifiedDate: "",
            name: "cat-g3a6d68407_1920.jpg",
            size: 581153,
            type: "image/jpeg",
            webkitRelativePath: ""
          },
          title: "our cruise",
        },
        style: {
          backgroundColor: "#ffffff"
        },
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
        style: {
          backgroundColor: "#ffffff"
        },

      },
      {
        id: "n105",
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "Fullstack me Baby!"
        }, style: {
          backgroundColor: "#ffffff"
        },
      },
      {
        id: "n106",
        type: "note-img",
        info: {
          url: "../../../img/cruise.jpg",
          title: "our cruise",
        },
        style: {
          backgroundColor: "#ffffff"
        },
      },
      {
        id: "n107",
        type: "note-img",
        info: {
          url: "../../../img/maldives.jpg",
          title: "our vacation",
        },
        style: {
          backgroundColor: "#ffffff"
        },
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
        style: {
          backgroundColor: "#ffffff"
        },

      },
      {
        id: "n109",
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "Fullstack me Baby!"
        }, style: {
          backgroundColor: "#ffffff"
        },
      },
      {
        id: "n110",
        type: "note-img",
        info: {
          url: "../../../img/cruise.jpg",
          title: "our cruise",
        },
        style: {
          backgroundColor: "#ffffff"
        },
      },
      {
        id: "n111",
        type: "note-img",
        info: {
          url: "../../../img/maldives.jpg",
          title: "our vacation",
        },
        style: {
          backgroundColor: "#ffffff"
        },
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
        style: {
          backgroundColor: "#ffffff"
        },

      },
      {
        id: "n113",
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "Fullstack me Baby!"
        },
        style: {
          backgroundColor: "#A3F3FF"
        },
      },
      {
        id: "n114",
        type: "note-img",
        info: {
          url: "../../../img/cruise.jpg",
          title: "our cruise",
        },
        style: {
          backgroundColor: "#ffffff"
        },
      },
      {
        id: "n104",
        type: "note-img",
        info: {
          url: "../../../img/maldives.jpg",
          title: "our vacation",
        },
        style: {
          backgroundColor: "#ffffff"
        },
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
        style: {
          backgroundColor: "#ffffff"
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
      backgroundColor: "#ffffff"
    },

  }
  return note
}
function getEmptyNoteImg() {
  let note = {
    type: "note-img",
    info: {
      url: "",
      file: {},
      title: "",
    },
    isPinned: false,
    style: {
      backgroundColor: "ffffff"
    },
  }
  console.log(note)
  return note
}
function getEmptyNoteTodo() {
  let note = {
    type: "note-todo",
    info: {
      label: "",
      todos: [
        { id: '0', txt: "", doneAt: null },
        { id: '1', txt: "plan it", doneAt: null },
        { id: '2', txt: "fo the first task", doneAt: 187111111 }]
    },
    isPinned: false,
    style: {
      backgroundColor: ""
    },
  }
  return note
}
