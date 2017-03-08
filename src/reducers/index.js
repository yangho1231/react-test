import { combineReducers } from 'redux';
import BookList from './reducer_books';
import ActiveBook from './reducer_active';
const rootReducer = combineReducers({
    books: BookList,
    active: ActiveBook
});

export default rootReducer;
