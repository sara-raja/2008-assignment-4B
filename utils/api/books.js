import { BASE_URL } from './base.js'

const getBookDetails = (bookId) => {
    return fetch(`${BASE_URL}/works/${bookId}.json`)
    .then((response)=> {
        return response.json()
    }).then((data)=> {
        return data
    })
}

export {getBookDetails}