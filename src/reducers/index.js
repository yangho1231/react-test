import { combineReducers } from 'redux';
import GetBook from './reducer_getbooks';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    books: GetBook
});

export default rootReducer;
