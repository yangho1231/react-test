import axios from 'axios';

export const BOOK_SELECTED = 'BOOK_SELECTED';
export const GET_BOOKS = 'GET_BOOKS';
export const SIGN_UP_USER = 'SIGN_UP_USER';
export const LOGIN_USER = 'LOGIN_USER';
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
export function signUpUser(props) {
    console.log("props", props);
    const request = axios({
        url: 'http://localhost:3000/api/users',
        method: 'post',
        data: props
    })
    return {
        type: SIGN_UP_USER,
        payload: request
    }
}
export function login(props) {    
    console.log("login", props)
    const request = axios.post(`${ROOT_URL}api/login`, props);

    return {
        type: LOGIN_USER,
        payload: request
    }
}
