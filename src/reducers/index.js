import { combineReducers } from 'redux';
import GetBook from './reducer_getbooks';

const rootReducer = combineReducers({
    books: GetBook
});

export default rootReducer;
