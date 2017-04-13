import axios from 'axios';

export const BOOK_SELECTED = 'BOOK_SELECTED';
export const GET_BOOKS = 'GET_BOOKS';
export const SIGN_UP_USER = 'SIGN_UP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const ADD_MYPAGE = 'ADD_MYPAGE';
export const GET_MYPAGE = 'GET_MYPAGE';
export const DELETE_BOOK = 'DELETE_BOOK';
export const LOGOUT_USER = 'LOGOUT_USER';


const ROOT_URL = 'http://localhost:3000/';

export function selectBook(id) {
    const request = axios.get(`${ROOT_URL}books/${id}`)
    return {
        type: BOOK_SELECTED,
        payload: request
    }
}
export function deleteBook(id) {
    const request = axios.delete(`${ROOT_URL}mypage/list/${id}`)
    return {
        type: DELETE_BOOK,
        payload: request
    }
}
export function selectUser(id) {
    const request = axios.get(`${ROOT_URL}mypage/${id}`);
    return {
        type: GET_MYPAGE,
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
    const request = axios.post(`${ROOT_URL}api/login`, props);

    return {
        type: LOGIN_USER,
        payload: request
    }
}
export function logout(id) {
    return {
        type: LOGOUT_USER
    }
}
export function addToMyPage(user, post) {
    const request = axios.post(`${ROOT_URL}api/mypage`, user, post);
    
    return {
        type: ADD_MYPAGE,
        payload: request
    };
}