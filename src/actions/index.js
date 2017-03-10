import axios from 'axios';

export const BOOK_SELECTED = 'BOOK_SELECTED';
export const GET_BOOKS = 'GET_BOOKS';

const ROOT_URL = 'http://localhost:3000/';

export function selectBook(id) {
    const request = axios.get(`${ROOT_URL}books/${id}`)
    return {
        type: BOOK_SELECTED,
        payload: request
    }
}

export function getBooks() {
    
    const request = axios.get(`${ROOT_URL}books`);
    
    return {
        type: GET_BOOKS,
        payload: request
    }
}