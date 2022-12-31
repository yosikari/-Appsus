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
  getDefaultFilter

}

function query(filterBy = getDefaultFilter()) {
  return storageService.query(NOTE_KEY)
    .then(notes => {
      if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        notes = notes.filter(note => note.type === "note-txt" && regex.test(note.info.txt) || note.type === "note-img" && regex.test(note.info.title) || note.type === "note-todo" && regex.test(note.info.label))
      }
      return notes
    })



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
        id: "n103",
        type: "note-todo",

        info: {
          label: "Plan our next vacation:",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Buy new dress 👗", doneAt: 187111111 }
          ]
        },
        style: {
          backgroundColor: "#98f5e1"
        },

      }, {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "React time 🔥 "
        },
        style: {
          backgroundColor: "#fbf8cc"
        },
      },
      {
        id: "n102",
        type: "note-img",
        info: {
          url: "https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416135_960_720.jpg",
          file: {
            lastModified: 1672231431170,
            lastModifiedDate: "",
            name: "cat-g3a6d68407_1920.jpg",
            size: 581153,
            type: "image/jpeg",
            webkitRelativePath: ""
          },
          title: "our Greece vacation ❤️",
        },
        style: {
          backgroundColor: "#90dbf4"
        },
      },
      {
        id: "n105",
        type: "note-txt",
        isPinned: false,
        info: {
          txt: "vanilla or chocolate?? 🍦 🍦 🍦"
        }, style: {
          backgroundColor: "#ffcfd2"
        },
      },
      {
        id: "n108",
        type: "note-todo",

        info: {
          label: "Our groceries list:",
          todos: [
            { txt: "fruits", doneAt: null },
            { txt: "bread", doneAt: 187111111 },
            { txt: "rice", doneAt: 187111111 },
            { txt: "cake", doneAt: 187111111 }
          ]
        },
        style: {
          backgroundColor: "#cfbaf0"
        },

      },
      {
        id: "n106",
        type: "note-img",
        info: {
          url: "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_960_720.jpg",
          title: "my favorite salad!",
        },
        style: {
          backgroundColor: "#fde4cf"
        },
      },
      {
        id: "n109",
        type: "note-txt",
        isPinned: true,
        info: {
          txt: "Dont forget to SMILE!"
        }, style: {
          backgroundColor: "#b9fbc0"
        },
      },
      {
        id: "n110",
        type: "note-img",
        info: {
          url: "https://cdn.pixabay.com/photo/2017/06/20/17/42/starfish-2423999_960_720.jpg",
          title: "Next to the sea 🐙",
        },
        style: {
          backgroundColor: "#ffffff"
        },
      },

      {
        id: "n112",
        type: "note-todo",

        info: {
          label: "How to make the best pasta:",
          todos: [
            { txt: "Boil some water", doneAt: null },
            { txt: "Add the pasta for 10 min", doneAt: 187111111 },
            { txt: "Heat oil in large nonstick skillet", doneAt: 187111111 },
            { txt: "Add diced tomatoes, garlic and cream ", doneAt: 187111111 },
            { txt: "Stir it for a few minuts and add the pasta", doneAt: 187111111 },
            { txt: "Bon appetit 🍝 ", doneAt: 187111111 },

          ]
        },
        style: {
          backgroundColor: "#fde4cf"
        },
      },
      {
        id: "n111",
        type: "note-img",
        info: {
          url: "https://cdn.pixabay.com/photo/2013/11/19/09/35/glasses-213156_960_720.jpg",
          title: "Happy new year!!",
        },
        style: {
          backgroundColor: "#ffffff"
        },
      },
      {
        id: "n107",
        type: "note-img",
        info: {
          url: "https://cdn.pixabay.com/photo/2016/10/13/11/58/chocolates-1737580_960_720.jpg",
          title: "DESSERT TO DIE FOR",
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
          url: "https://cdn.pixabay.com/photo/2018/05/02/17/22/beach-3369140_960_720.jpg",
          title: "My favorite spot 🐬",
        },
        style: {
          backgroundColor: "#8eecf5"
        },
      },
      {
        id: "n104",
        type: "note-img",
        info: {
          url: "https://cdn.pixabay.com/photo/2022/12/10/11/05/snow-7646952_960_720.jpg",
          title: "Start snowing here ❄️",
        },
        style: {
          backgroundColor: "#ffffff"
        },
      },
      {
        id: "n115",
        type: "note-todo",

        info: {
          label: "how to make a tea 🫖 :",
          todos: [
            { txt: "Treat your water kindly", doneAt: null },
            { txt: "Run the tap a little so the water's nicely aerated", doneAt: 187111111 },
            { txt: "only boil it once to keep the oxygen level up", doneAt: 187111111 },
            { txt: "Pop a tea bag into your mug", doneAt: 187111111 },
            { txt: "our over the hot water and stir briefly", doneAt: 187111111 },
            { txt: "Wait patiently", doneAt: 187111111 },
            { txt: "Give it a squeeze", doneAt: 187111111 },
            { txt: "Customise your brew", doneAt: 187111111 },
          ]
        },
        style: {
          backgroundColor: "#b9fbc0"
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
  return note
}
function getEmptyNoteTodo() {
  let note = {
    type: "note-todo",
    info: {
      label: "",
      todos: [
        // { id: '0', txt: "plan it", doneAt: null },
        // { id: '1', txt: "fo the first task", doneAt: 187111111 }
      ]
    },
    isPinned: false,
    style: {
      backgroundColor: ""
    },
  }
  return note
}
function getDefaultFilter() {
  return { txt: '', title: '', label: '', isPinned: '' }
}
