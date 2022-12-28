import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getDefaultFilter,
    getNextMailId
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regex.test(mail.title))
            }
            if (filterBy.isMarked) {
                mails = mails.filter(mail => mail.isMarked <= filterBy.isMarked)
            }
            return mails
        })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function getNextMailId(mailId) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            var idx = mails.findIndex(mail => mail.id === mailId)
            if (idx === mails.length - 1) idx = -1
            console.log(mails[idx + 1].id)
            return mails[idx + 1].id
        })
}


function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail(from = '', title = '', txtBody = '', isMarked = false, isRead = false) {
    return {
        from: from,
        title: title,
        txtBody: txtBody,
        isMarked: isMarked,
        isRead: isRead
    }
}

function getDefaultFilter() {
    return { title: '' }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = []
        mails.push(_createMail('AliExpress', 'Don\'t miss this SALE', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`))
        mails.push(_createMail('Ebay.com', 'SALE SALE SALE!!!', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`))
        mails.push(_createMail('Puki Puk', 'Hello Muki', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`))
        mails.push(_createMail('AliExpress', 'Your order has being shipped', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`))
        mails.push(_createMail('Puki Puk', 'Hi Muki lets play!', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`))
        mails.push(_createMail('AliExpress', 'Your order has being shipped', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`))
        mails.push(_createMail('AliExpress', 'Your order has being shipped', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`))
        mails.push(_createMail('Luki Lak', 'new job for you Muki', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`))

        utilService.saveToStorage(MAIL_KEY, mails)
    }
}

function _createMail(from, title, txtBody) {
    const mail = getEmptyMail(from, title, txtBody)
    mail.id = utilService.makeId()
    mail.date = getDateNow()
    return mail
}


//todo move to utils! 
function getDateNow(){
    let today  = new Date()
    return(today.toLocaleDateString("en-US"))

}