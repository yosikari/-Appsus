import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import { txtDemoData } from '../mails-demo-data/mail-demo-data-txt.js'

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

function query(filterBy = getDefaultFilter(), searchType, filterEqual) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regex.test(mail[searchType]))
            }
            else if (searchType === 'all') {
                return mails
            }
            else {
                mails = mails.filter(mail => filterEqual ? mail[searchType] : !mail[searchType]
                )
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
            return mails[idx + 1].id
        })
}


function remove(mailId) {
    if (!mailId) return
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail(from = '', title = '', txtBody = '', isRecived = false,
    imgSrc = '', date = getDateNow(), isMarked = false, isRead = false) {
    return {
        from: from,
        title: title,
        txtBody: txtBody,
        isRecived: isRecived,
        imgSrc: imgSrc,
        isMarked: isMarked,
        isRead: isRead,
        date: date
    }
}

function getDefaultFilter() {
    return { txt: '' }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails.push(_createMail('AliExpress', 'Don\'t miss this SALE', txtDemoData[0], true, '11/12/2022'))
        mails.push(_createMail('Ebay.com', 'SALE SALE SALE!!!', txtDemoData[1], true, '13/08/2022'))
        mails.push(_createMail('Puki Puk', 'Hello Muki', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`, true, '17/05/2021'))
        mails.push(_createMail('AliExpress', 'Your order has being shipped', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`, true, '12/02/2019'))
        mails.push(_createMail('Puki Puk', 'Hi Muki lets play!', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`, true))
        mails.push(_createMail('AliExpress', 'Your order has being shipped', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`, true))
        mails.push(_createMail('AliExpress', 'Your order has being shipped', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`, true))
        mails.push(_createMail('Luki Lak', 'new job for you Muki', `asdadsasd asdsasddasasd sdsdasdasda asdsadsdasad sadsadasdasd sadasdsadsda asdsdasdasda sadsdasdasda sadsdasdasad sadsdasadsdasad asdasdsdasadasd asdasdsadsdasad sdasdasdasdasad THANK YOU :)`, true))
        utilService.saveToStorage(MAIL_KEY, mails)
    }
}

function _createMail(from, title, txtBody, isRecived, date) {
    const mail = getEmptyMail(from, title, txtBody, isRecived, '', date)
    mail.id = utilService.makeId()
    return mail
}


//todo move to utils! 
function getDateNow() {
    let today = new Date()
    return (today.toLocaleDateString("en-US"))

}